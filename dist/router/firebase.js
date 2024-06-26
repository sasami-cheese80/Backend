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
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const router = express_1.default.Router();
const serviceAccount = require("../serviceAccountKey.json");
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
});
// ユーザー登録エンドポイント
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const userRecord = yield firebase_admin_1.default.auth().createUser({
            email: email,
            password: password,
        });
        // ユーザー登録成功時の処理
        res.status(200).send(userRecord);
    }
    catch (error) {
        // エラー処理
        console.error("エラー:", error.message);
    }
}));
// ログインエンドポイント
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("aa");
    const { email, password } = req.body;
    try {
        const userRecord = yield firebase_admin_1.default.auth().getUserByEmail(email);
        // ログイン成功時の処理（ここではサンプルとしてユーザー情報を返す）
        res.status(200).send("成功");
    }
    catch (error) {
        // エラー処理
        console.error("エラー:", error.message);
    }
}));
exports.default = router;
//# sourceMappingURL=firebase.js.map