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
      "users.address"
    );
  res.send(data);
})
router.get("/", async (req: express.Request, res: express.Response) => {
  const userId = Number(req.query.user_id);
  const planId = Number(req.query.plan_id);
  let data;
  if(userId){
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
        "users.address"
      )
      .where("plans_users.user_id", userId);
  }else{
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
      "users.address"
    )
    .where("plans_users.plan_id", planId
    );
  }
  res.send(data);
});

export default router;
