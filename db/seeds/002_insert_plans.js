/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("plans").del();
  await knex("plans").insert([
    { id: 1, date: "2024-07-01 22:00:00", state: "募集中", users_count: 3 },
    { id: 2, date: "2024-06-02 22:00:00", state: "確定", users_count: 4 },
    { id: 3, date: "2024-04-03 22:00:00", state: "終了", users_count: 2 },
    { id: 4, date: "2024-07-10 22:00:00", state: "募集中", users_count: 3 },
  ]);
};
