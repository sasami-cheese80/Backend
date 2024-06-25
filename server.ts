import express from "express";
import cors from "cors";
const app: express.Express = express();

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ["http://localhost:3000"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
// Then pass these options to cors:
app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./router/index"));
module.exports = app;