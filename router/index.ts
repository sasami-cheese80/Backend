import express from "express";
const router = express.Router();

router.use("/helohelo", require("./helohelo"));
router.use("/user", require("./user"));
module.exports = router;
