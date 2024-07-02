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
      firebase_id: "fafdfe",
    },
    {
      id: 2,
      name: "長嶋 茂雄",
      nickname: "ミスター",
      gender: "男性",
      department: "人事部",
      division: "人事課",
      address: "岡崎方面",
      firebase_id: "fawe",
    },
    {
      id: 3,
      name: "松井 秀喜",
      nickname: "ゴジラ",
      gender: "男性",
      department: "レクサス製造部",
      division: "シャシー試験課",
      address: "岡崎方面",
      firebase_id: "fa",
    },
    {
      id: 4,
      name: "王 貞治",
      nickname: "ワンちゃん",
      gender: "男性",
      department: "機会部製造支援課",
      division: "コンポーネント試験課",
      address: "岡崎方面",
      firebase_id: "aaa",
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
    {
      id: 6,
      name: "佐々木 優太",
      nickname: "ささっち",
      gender: "男性",
      department: "デジタル変革推進室",
      division: "DIG企画G",
      address: "岡崎方面",
      firebase_id: "JaWi2e6loSQWa6EyXR5p5CJZoeD2",
    },
    {
      id: 7,
      name: "ちゆみ",
      nickname: "ちーくん",
      gender: "女性",
      department: "元町工場",
      division: "機会部製造支援課",
      address: "岡崎方面",
      firebase_id: "8MOuClbHFpWmBf43J4T8fXP8naw1",
    },
    {
      id: 8,
      name: "山田",
      nickname: "だーやま",
      gender: "男性",
      department: "エンジン製造技術部",
      division: "第５エンジン製造課",
      address: "岡崎方面",
      firebase_id: "1f55k85DOPewOP3pYqlBsjWROl22",
    },
  ]);
};
