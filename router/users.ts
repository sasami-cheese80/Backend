import express from "express";
const knex = require("../db/index");
const router = express.Router();

//一覧取得
router.get("/", async (req: express.Request, res: express.Response) => {
  console.log("users GETを受け付けました");
  const resData = await knex("users").select();
  res.send(resData);
});

router.get("/firebase_id/:firebaseId", async (req: express.Request, res: express.Response) => {
  console.log("users GET(firebase_id)を受け付けました");
  const firebaseId = req.params.firebaseId;
  const resData = await knex("users").select("id").where("firebase_id", firebaseId).first();

  if (resData) {
    res.status(200).json(resData);
  } else {
    res.status(406).json({ error: "アカウントが見つかりませんでした" });
  }
});
router.get("/user_id/:userId", async (req: express.Request, res: express.Response) => {
  console.log("users GET(user_id)を受け付けました");
  console.log(req.params.userId);
  const userId = req.params.userId;
  const resData = await knex("users").select().where("id", userId).first();

  if (resData) {
    console.log(resData);
    res.status(200).json(resData);
  } else {
    res.status(406).json({ error: "アカウントが見つかりませんでした" });
  }
});

router.post("/", async (req: express.Request, res: express.Response) => {
  console.log("users POSTを受け付けました");
  const reqData = req.body;
  const isData = await knex("users").select().where("firebase_id", reqData.firebase_id);
  if (isData.length) {
    res.status(406).json({ error: "すでにアカウントが存在しています" });
  } else {
    const newUserId = await knex("users").insert(reqData).returning("id");
    res.json(newUserId[0]);
  }
});

router.delete("/:userId", async (req: express.Request, res: express.Response) => {
  console.log("users DELETEを受け付けました");
  const userId = req.params.userId;
  const isData = await knex("users").select().where("id", userId);
  if (isData.length) {
    await knex("users").where("id", userId).del();
    res.json(`id:${userId}を削除しました`);
  } else {
    res.status(406).json({ error: "IDが存在しません" });
  }
});

router.patch("/:userId", async (req: express.Request, res: express.Response) => {
  console.log("users PATCHを受け付けました");
  const userId = req.params.userId;
  const reqData = req.body;
  const resData = await knex("users").select().where("id", userId).first();

  console.log("reqData: ", reqData);
  for (const key in reqData) {
    resData[key] = reqData[key];
  }
  await knex("users").update(resData).where("id", userId);
  console.log("resData: ", resData);
  res.status(200).json(resData);
});

export default router;
