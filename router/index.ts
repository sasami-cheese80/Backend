import express from "express";
const router = express.Router();

import plansRouter from "./plans";
import usersRouter from "./users";
import firebaseRouter from "./firebase";

router.use("/plans", plansRouter);
router.use("/users", usersRouter);
router.use("/firebase", firebaseRouter);
export default router;
