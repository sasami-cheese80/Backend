"use strict";
const knex = require("knex");
const knexConfig = require("../knexfile");
const environment = process.env.DATABASE_URL ? "production" : "development";
console.log("environment: ", environment);
console.log("process.env.DATABASE_URL: ", process.env.DATABASE_URL);
module.exports = knex(knexConfig[environment]);
//# sourceMappingURL=index.js.map