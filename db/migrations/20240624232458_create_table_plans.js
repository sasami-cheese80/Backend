/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("plans", function (table) {
    table.increments("id").primary();
    table.timestamp("date").notNullable();
    table.string("state").notNullable();
    table.integer("users_count").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("plans");
};
