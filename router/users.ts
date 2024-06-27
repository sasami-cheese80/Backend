import express from "express";
const knex = require("../db/index");
const router = express.Router();

//一覧取得
router.get("/", async (req: express.Request, res: express.Response) => {
  const data = await knex("users").select();
  res.send(data);
});

router.post("/", async (req: express.Request, res: express.Response) => {
  console.log("users POSTを受け付けました");
  console.log("こんにちは");
  const data = await knex("users").select();
  res.json(data);
});

export default router;
