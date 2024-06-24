/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      name: "安野 秀秋",
      nickname: "ゲンドウ",
      gender: "男性",
      department: "車両技術開発部 シャシーコンポーネント試験課",
    },
  ]);
};
