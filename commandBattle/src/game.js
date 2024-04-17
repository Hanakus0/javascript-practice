'use strict';

// キャラクターをインスタンス化
let friend1 = new Friend("あれす", 180, 66, 13, 2, 45);
let friend2 = new Friend("なーしゃ", 110, 16, 12, 3, 45);
let friend3 = new Friend("だすてん", 140, 43, 11, 1, 45);
let enemy1 = new Enemy("トロル", 270, 38, 20, "./..image/troll.png");
let enemy2 = new Enemy("ドラゴン", 180, 66, 13, 2, 45, "./../image/dragon.png");

// キャラクターの配列を生成
let characters = [];
characters.push(friend1);
characters.push(friend2);
characters.push(friend3);
characters.push(enemy1);
characters.push(enemy2);

characters[0].command = "enemyCommand"; // 敵コマンド
characters[0].target = characters[searchCharacterByName("トロル")[0]]; // トロルの配列番号が返される
characters[0].action(); // トロルの攻撃 
