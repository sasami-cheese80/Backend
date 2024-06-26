import express from "express";
const knex = require("../db/index");
const router = express.Router();

router.post("/", async (req: express.Request, res: express.Response) => {
  const userId = req.body.user_id;
  const planId = await knex("plans").insert(
    {
      date: req.body.date,
      state: "募集中",
      users_count: 1,
    },
    "id"
  );

  await knex("plans_users").insert({
    plan_id: planId[0].id,
    user_id: userId,
  });

  res.send("ok");
});
//あと新規作成か、部屋にJOINするか判定が必要
export default router;
