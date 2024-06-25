/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("plans").del();
  await knex("plans").insert([
    { id: 1, date: "2024-05-01 22:00:00", address: "岡崎方面", user_id: 1 },
    { id: 2, date: "2024-06-01 20:00:00", address: "岡崎方面", user_id: 1 },
    { id: 3, date: "2024-07-01 23:00:00", address: "岡崎方面", user_id: 1 },
  ]);
};
