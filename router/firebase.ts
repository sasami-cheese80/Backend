import express from "express";
import admin from "firebase-admin";
const router = express.Router();

const serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// ユーザー登録エンドポイント
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userRecord = await admin.auth().createUser({
      email: email,
      password: password,
    });

    // ユーザー登録成功時の処理
    res.status(200).send(userRecord);
  } catch (error: unknown) {
    // エラー処理
    console.error("エラー:", (error as Error).message);
  }
});

// ログインエンドポイント
router.post("/login", async (req, res) => {
  console.log("aa");
  const { email, password } = req.body;
  try {
    const userRecord = await admin.auth().getUserByEmail(email);
    // ログイン成功時の処理（ここではサンプルとしてユーザー情報を返す）
    res.status(200).send("成功");
  } catch (error: unknown) {
    // エラー処理
    console.error("エラー:", (error as Error).message);
  }
});

export default router;
