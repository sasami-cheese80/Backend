import { log } from "console";
import express from "express";
import { ParsedQs } from "qs";
import { resourceLimits } from "worker_threads";
const knex = require("../db/index");
const router = express.Router();
const cron = require("node-cron");

type ResDataObj = {
  id: number;
  date: string;
  state: string;
  users_count: number;
};

type plansUsersObj = {
  id: number;
  plan_id: number;
  user_id: number;
};

router.get("/", async (req: express.Request, res: express.Response) => {
  const date = req.query.date as string | undefined;
  const userId = req.query.userId as string | undefined;
  if (date) {
    const beforeDate = new Date(date);
    const afterDate = new Date(date);
    beforeDate.setHours(beforeDate.getHours() - 1);
    afterDate.setHours(afterDate.getHours() + 1);
    try {
      const data = await knex("plans")
        .select()
        .where("date", "<=", afterDate)
        .andWhere("date", ">=", beforeDate)
        .andWhere("state", "募集中");
      data.sort((a: ResDataObj, b: ResDataObj) => (a.date < b.date ? -1 : 1));
      console.log("候補日が見つかりました", data);

      const myPlans: plansUsersObj[] = await knex("plans_users")
        .select()
        .where("user_id", userId);
      const myPlansId = myPlans.map((obj: plansUsersObj) => obj.plan_id);
      const newData = data.filter(
        (obj: ResDataObj) => !myPlansId.includes(obj.id)
      );
      console.log("newData: ", newData);

      res.status(200).json(newData);
    } catch (e) {
      console.log(e);
      res.status(406).json([]);
    }
  } else {
    const data = await knex("plans").select();
    console.log("data", data);
    res.json(data);
  }
});

router.post("/", async (req: express.Request, res: express.Response) => {
  const userId = req.body.user_id;
  const date = req.body.date;
  console.log(req.body);

  const resPlansData: ResDataObj = await knex("plans")
    .select()
    .where("date", date)
    .andWhere("state", "募集中")
    .first();

  if (resPlansData) {
    console.log(`plan_id${resPlansData.id} の部屋に参加します`);
    try {
      await knex("plans_users").insert({
        plan_id: resPlansData.id,
        user_id: userId,
      });
      resPlansData.users_count += 1;
      if (resPlansData.users_count === 4) {
        resPlansData.state = "確定";
      }
      await knex("plans").update(resPlansData).where("id", resPlansData.id);
      res.status(200).json(resPlansData);
    } catch (e) {
      res.status(406).json(e);
    }
  } else {
    console.log("部屋を新規作成します");
    const lastData = await knex("plans").select().max("id").first();
    const newPlanId = lastData.max + 1;
    console.log("newPlanId: ", newPlanId);
    try {
      const newPlans: ResDataObj = {
        id: newPlanId,
        date: date,
        state: "募集中",
        users_count: 1,
      };
      console.log(newPlans);
      await knex("plans").insert(newPlans);
      await knex("plans_users").insert({ plan_id: newPlanId, user_id: userId });
      res.status(200).json(newPlans);
    } catch (e) {
      res.status(406).json(e);
    }
  }
});

router.delete("/", async (req: express.Request, res: express.Response) => {
  console.log(req.query);

  const userId = Number(req.query.userId);
  const planId = Number(req.query.planId);

  const isData = await knex("plans_users")
    .select()
    .where({
      user_id: userId,
      plan_id: planId,
    })
    .first();
  if (isData) {
    try {
      await knex("plans_users")
        .where({
          user_id: userId,
          plan_id: planId,
        })
        .del();

      const resPlansData = await knex("plans")
        .select()
        .where("id", planId)
        .first();
      console.log("resPlansData: ", resPlansData);
      resPlansData.users_count -= 1;
      resPlansData.state = "募集中";
      console.log("resPlansData: ", resPlansData);

      if (resPlansData.users_count < 1) {
        await knex("plans").where("id", resPlansData.id).del();
      } else {
        await knex("plans").update(resPlansData).where("id", resPlansData.id);
      }
      res.status(200).json(resPlansData);
    } catch (e) {
      console.log(e);
      res.status(406).json(e);
    }
  } else {
    res.status(406).json({ error: "そのプランは存在しません" });
  }
});

//--------------------------------
// state状態の監視 時間が過ぎたら”終了”に
cron.schedule("* * * * *", async () => {
  try {
    const now = new Date();
    await knex("plans")
      .where("date", "<=", now)
      .andWhere("state", "!=", "終了")
      .update({ state: "終了" });
  } catch (error) {
    console.error("一括処理エラー");
  }
});
//----------------------------------

export default router;
