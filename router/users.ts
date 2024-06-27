import express from "express";
const knex = require("../db/index");
const router = express.Router();

//一覧取得
router.get("/", async (req: express.Request, res: express.Response) => {
  console.log("users GETを受け付けました");
  const reqData = await knex("users").select();
  res.send(reqData);
});

router.get("/:id", async (req: express.Request, res: express.Response) => {
  console.log("users GET(firebase_id)を受け付けました");
  const firebaseId = req.params.id;
  const reqData = await knex("users")
    .select()
    .where("firebase_id", firebaseId)
    .first();

  if (reqData) {
    res.status(200).json(reqData);
  } else {
    res.status(406).json({ error: "アカウントが見つかりませんでした" });
  }
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

router.patch("/", async (req: express.Request, res: express.Response) => {
  console.log("users PATCHを受け付けました");
  const reqData = req.body;
  const resData = await knex("users")
    .select()
    .where("firebase_id", reqData.firebase_id)
    .first();

  console.log("reqData: ", reqData);
  for (const key in reqData) {
    if (key !== "firebase_id") {
      resData[key] = reqData[key];
    }
  }
  await knex("users").update(resData).where("firebase_id", reqData.firebase_id);
  console.log("resData: ", resData);
  res.status(200).json(resData);
});

export default router;
