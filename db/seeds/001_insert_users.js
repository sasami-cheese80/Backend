/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
    await knex("users").insert([
  {
    id: 5,
    name: "安野 秀秋",
    nickname: "ゲンドウ",
    gender: "男性",
    department: "車両技術開発部",
    division: "シャシーコンポーネント試験課",
    address: "岡崎方面",
    firebase_id: "fafdfe"
  },
  {
    id: 2,
    name: "長嶋 茂雄",
    nickname: "ミスター",
    gender: "男性",
    department: "人事部",
    division: "人事課",
    address: "岡崎方面",
    firebase_id: "fawe"
  },
  {
    id: 3,
    name: "松井 秀喜",
    nickname: "ゴジラ",
    gender: "男性",
    department: "レクサス製造部",
    division: "シャシー試験課",
    address: "岡崎方面",
    firebase_id: "fa"
  },
  {
    id: 4,
    name: "王 貞治",
    nickname: "ワンちゃん",
    gender: "男性",
    department: "機会部製造支援課",
    division: "コンポーネント試験課",
    address: "岡崎方面",
    firebase_id: "aaa"
  },
  {
    id: 1,
    name: "岡田 一馬",
    nickname: "おかちゃん",
    gender: "男性",
    department: "車両技術開発部",
    division: "エンジン試験課",
    address: "岡崎方面",
    firebase_id: "g9mhh8YXz3dyzxBRtqgClYHb79A3",
  },
    ]);

};
