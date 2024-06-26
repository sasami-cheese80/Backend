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
const mocha_1 = require("mocha");
const chai_1 = require("chai");
const axios_1 = __importDefault(require("axios"));
(0, mocha_1.describe)("テストのテスト", () => {
    (0, mocha_1.it)("本当にtaroって返す？", () => {
        chai_1.assert.equal("taro", "taro");
    });
});
(0, mocha_1.describe)("/users", () => {
    (0, mocha_1.it)("GETを送るとデータが返ってくる", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield axios_1.default.get("http://localhost:3000/users");
        (0, chai_1.expect)(res).to.be.a("object");
    }));
});
//# sourceMappingURL=test.js.map