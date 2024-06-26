"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const firebase_1 = __importDefault(require("./firebase"));
const plans_1 = __importDefault(require("./plans"));
const plans_users_1 = __importDefault(require("./plans_users"));
const users_1 = __importDefault(require("./users"));
//--↓↓追加↓↓----------------------------------
const plans_post_1 = __importDefault(require("./plans_post"));
//-------------------------------------------
router.use("/plans", plans_1.default);
router.use("/users", users_1.default);
router.use("/plans_users", plans_users_1.default);
//--↓↓追加↓↓----------------------------------
router.use("/plans_post", plans_post_1.default);
//-------------------------------------------
router.use("/firebase", firebase_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map