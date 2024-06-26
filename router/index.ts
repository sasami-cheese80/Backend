import express from "express";
const router = express.Router();

import firebaseRouter from "./firebase";
import plansRouter from "./plans";
import plansUsersRouter from "./plans_users";
import usersRouter from "./users";

//--↓↓追加↓↓----------------------------------
import plansPostRouter from "./plans_post";
//-------------------------------------------

router.use("/plans", plansRouter);
router.use("/users", usersRouter);
router.use("/plans_users", plansUsersRouter);

//--↓↓追加↓↓----------------------------------
router.use("/plans_post", plansPostRouter);
//-------------------------------------------

router.use("/firebase", firebaseRouter);
export default router;
