import express from "express";
const knex = require("../db/index");
const router = express.Router();

router.get("/", async (req: express.Request, res: express.Response) => {
  const data = await knex("plans").select();
  res.send(data);
});

module.exports = router;
