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
  const reqData = req.body;
  const isData = await knex("users").select().where(reqData).first();
  if (isData) {
    res.status(406).json({ error: "すでにアカウントが存在しています" });
  } else {
    const newUserId = await knex("users").insert(reqData).returning("id");
    res.json(
      `${reqData.name}さんの情報は id:${newUserId[0].id} でusersに登録しました`
    );
  }
});

router.delete("/", async (req: express.Request, res: express.Response) => {
  console.log("users DELETEを受け付けました");
  const userId = req.query.user_id;
  const isData = await knex("users").select().where("id", userId).first();
  if (isData) {
    await knex("users").where("id", userId).del();
    res.json(`id:${userId}を削除しました`);
  } else {
    res.status(406).json({ error: "IDが存在しません" });
  }
});

export default router;
