/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("plans_users").del();
  await knex("plans_users").insert([
    { plan_id: 1, user_id: 1 },
    { plan_id: 1, user_id: 2 },
    { plan_id: 1, user_id: 3 },
    { plan_id: 2, user_id: 1 },
    { plan_id: 2, user_id: 2 },
    { plan_id: 2, user_id: 3 },
    { plan_id: 2, user_id: 4 },
    { plan_id: 3, user_id: 1 },
    { plan_id: 3, user_id: 2 },
  ]);
};
