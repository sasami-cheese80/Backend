"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./router/index"));
const app = (0, express_1.default)();
// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = [
    "http://localhost:3000",
    "https://megry-app-88b135b9cdab.herokuapp.com/",
];
const options = {
    origin: allowedOrigins,
};
// Then pass these options to cors:
app.use((0, cors_1.default)(options));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/", index_1.default);
exports.default = app;
//# sourceMappingURL=server.js.map