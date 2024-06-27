/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  //   await knex("users").insert([
  // {
  //   id: 1,
  //   name: "安野 秀秋",
  //   nickname: "ゲンドウ",
  //   gender: "男性",
  //   department: "車両技術開発部 シャシーコンポーネント試験課",
  //   address: "岡崎方面",
  // },
  // {
  //   id: 2,
  //   name: "長嶋 茂雄",
  //   nickname: "ミスター",
  //   gender: "男性",
  //   department: "人事部 人事課",
  //   address: "岡崎方面",
  // },
  // {
  //   id: 3,
  //   name: "松井 秀喜",
  //   nickname: "ゴジラ",
  //   gender: "男性",
  //   department: "三好工場 レクサス製造部",
  //   address: "岡崎方面",
  // },
  // {
  //   id: 4,
  //   name: "王 貞治",
  //   nickname: "ワンちゃん",
  //   gender: "男性",
  //   department: "元町工場 機会部製造支援課",
  //   address: "岡崎方面",
  // },
  //   ]);
};
