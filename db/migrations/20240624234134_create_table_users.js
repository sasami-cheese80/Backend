/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("nickname").notNullable();
    table.string("gender").notNullable();
    table.string("department").notNullable();
    table.string("division").notNullable();
    table.string("address").notNullable();
    table.string("firebase_id").notNullable();
    table.string("hobby");
    table.text("message");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
