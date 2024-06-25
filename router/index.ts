import express from "express";
const router = express.Router();

router.use("/plans", require("./plans"));
router.use("/users", require("./users"));
module.exports = router;
