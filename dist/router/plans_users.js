"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const knex = require("../db/index");
const router = express_1.default.Router();
router.get("/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield knex("plans_users")
        .join("plans", "plans.id", "=", "plans_users.plan_id")
        .join("users", "users.id", "=", "plans_users.user_id")
        .select("plans_users.id", "plans_users.plan_id", "plans_users.user_id", "plans.date", "plans.state", "plans.users_count", "users.name", "users.nickname", "users.gender", "users.department", "users.address");
    res.send(data);
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.query.user_id);
    const planId = Number(req.query.plan_id);
    let data;
    if (userId) {
        data = yield knex("plans_users")
            .join("plans", "plans.id", "=", "plans_users.plan_id")
            .join("users", "users.id", "=", "plans_users.user_id")
            .select("plans_users.id", "plans_users.plan_id", "plans_users.user_id", "plans.date", "plans.state", "plans.users_count", "users.name", "users.nickname", "users.gender", "users.department", "users.address")
            .where("plans_users.user_id", userId);
    }
    else {
        data = yield knex("plans_users")
            .join("plans", "plans.id", "=", "plans_users.plan_id")
            .join("users", "users.id", "=", "plans_users.user_id")
            .select("plans_users.id", "plans_users.plan_id", "plans_users.user_id", "plans.date", "plans.state", "plans.users_count", "users.name", "users.nickname", "users.gender", "users.department", "users.address")
            .where("plans_users.plan_id", planId);
    }
    res.send(data);
}));
exports.default = router;
//# sourceMappingURL=plans_users.js.map