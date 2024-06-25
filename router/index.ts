import express from "express";
const router = express.Router();

import plansRouter from "./plans";
import firebaseRouter from "./firebase";
import plansUsersRouter from "./plans_users";
import usersRouter from "./users";

router.use("/plans", plansRouter);
router.use("/users", usersRouter);
router.use("/plans_users", plansUsersRouter);
router.use("/firebase", firebaseRouter);
export default router;
