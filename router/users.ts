import express from "express";
const knex = require("../db/index");
const router = express.Router();

//一覧取得
router.get("/", async (req: express.Request, res: express.Response) => {
  const data = await knex("users").select();
  res.send(data);
});

module.exports = router;
