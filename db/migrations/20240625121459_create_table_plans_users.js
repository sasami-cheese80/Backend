/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("plans_users", function (table) {
    table.increments("id").primary();
    table.integer("plan_id");
    table.integer("user_id");
    table.foreign("plan_id", "user_id").references("plans.id", "users.id");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("plans_users");
};
