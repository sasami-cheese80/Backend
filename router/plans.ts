import { log } from "console";
import express from "express";
const knex = require("../db/index");
const router = express.Router();

router.get("/", async (req: express.Request, res: express.Response) => {
  const data = await knex("plans").select();
  res.send(data);
});

router.post("/", async (req: express.Request, res: express.Response) => {
  const userId = req.body.user_id;
  const date = req.body.date;

  type ResDataObj = {
    id: number;
    date: string;
    state: string;
    users_count: number;
  };
  const resData: ResDataObj = await knex("plans")
    .select()
    .where("date", date)
    .andWhere("state", "募集中")
    .first();

  if (resData) {
    console.log(`plan_id${resData.id} の部屋に参加します`);
    try {
      await knex("plans_users").insert({
        plan_id: resData.id,
        user_id: userId,
      });
      resData.users_count += 1;
      if (resData.users_count === 4) {
        resData.state = "終了";
      }
      await knex("plans").update(resData).where("id", resData.id);
      res.status(200).json(resData);
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

export default router;
