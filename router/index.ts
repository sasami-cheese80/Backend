import express from "express";
const router = express.Router();

// import firebaseRouter from "./firebase";
import plansRouter from "./plans";
import plansUsersRouter from "./plans_users";
import usersRouter from "./users";

router.use("/plans", plansRouter);
router.use("/users", usersRouter);
router.use("/plans_users", plansUsersRouter);

// router.use("/firebase", firebaseRouter);
export default router;
