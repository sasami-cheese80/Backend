import express from "express";
const knex = require("../db/index");
const router = express.Router();

router.get("/all", async (req: express.Request, res: express.Response) => {
  const data = await knex("plans_users")
    .join("plans", "plans.id", "=", "plans_users.plan_id")
    .join("users", "users.id", "=", "plans_users.user_id")
    .select(
      "plans_users.id",
      "plans_users.plan_id",
      "plans_users.user_id",
      "plans.date",
      "plans.state",
      "plans.users_count",
      "users.name",
      "users.nickname",
      "users.gender",
      "users.department",
      "users.address",
      "users.addressOfHouse",
      "users.hobby",
      "users.message",
      "users.tags"
    );
  res.send(data);
});
router.get("/", async (req: express.Request, res: express.Response) => {
  console.log("plans_usersを受け付けました");

  const userId = Number(req.query.user_id);
  const planId = Number(req.query.plan_id);
  let data;
  if (userId) {
    console.log("homeに予定を表示します");
    console.log("userId:", userId);
    data = await knex("plans_users")
      .join("plans", "plans.id", "=", "plans_users.plan_id")
      .join("users", "users.id", "=", "plans_users.user_id")
      .select(
        "plans_users.id",
        "plans_users.plan_id",
        "plans_users.user_id",
        "plans.date",
        "plans.state",
        "plans.users_count",
        "users.name",
        "users.nickname",
        "users.gender",
        "users.department",
        "users.division",
        "users.address",
        "users.addressOfHouse",
        "users.hobby",
        "users.message",
        "users.tags"
      )
      .where("plans_users.user_id", userId);
  } else {
    console.log(`plan_id:${planId}で相乗りメンバーを探します`);
    data = await knex("plans_users")
      .join("plans", "plans.id", "=", "plans_users.plan_id")
      .join("users", "users.id", "=", "plans_users.user_id")
      .select(
        "plans_users.id",
        "plans_users.plan_id",
        "plans_users.user_id",
        "plans.date",
        "plans.state",
        "plans.users_count",
        "users.name",
        "users.nickname",
        "users.gender",
        "users.department",
        "users.division",
        "users.address",
        "users.addressOfHouse",
        "users.hobby",
        "users.message",
        "users.tags"
      )
      .where("plans_users.plan_id", planId);
  }
  res.send(data);
});

export default router;
