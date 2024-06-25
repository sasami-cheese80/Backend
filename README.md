# Backend

## Ver01

サーバー起動ができる最小限実装

## 使用方法

1.自身の PC にデータベースを作成する
`createdb megrydb`  
2.env ファイルを作成する  
`touch .env`  
3.env ファイルに環境変数を設定する　　
`DB_NAME={db name}`  
`DB_USER={user name}`  
`DB_PASSWORD={password }`  
4.パッケージをインストール  
`npm install`  
5.サーバーを起動する  
`npm run dev`  
6.(任意)テストデータを挿入したい場合は seed を実行
`npm run seed`

## エンドポイントの説明

| エンドポイント | メソッド |               TH 右寄せ                |
| :------------: | :------: | :------------------------------------: |
|     /users     |   GET    | [{id,name,nickname,gender,department}] |
|     /plans     |   GET    |      [{id,date,address,user_id}]       |
