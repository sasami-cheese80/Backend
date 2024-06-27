INSERT INTO users(name,nickname,gender,department,address) VALUES 
('安野 秀秋','ゲンドウ','男性','車両技術開発部 シャシーコンポーネント試験課','岡崎方面'),
('長嶋 茂雄','ミスター','男性','人事部 人事課','岡崎方面'),
('松井 秀喜','ゴジラ','男性','三好工場 レクサス製造部','岡崎方面');

INSERT INTO plans(date,state,users_count) VALUES 
('2024-07-01 22:00:00','募集中',3),
('2024-06-02 22:00:00','確定',4),
('2024-04-03 22:00:00','終了',2);

INSERT INTO plans_users(plan_id,user_id) VALUES
(1,1),
(1,2),
(1,3),
(2,1),
(2,2),
(2,3),
(2,4),
(3,1),
(3,2);