'use strict';

/**
 * Friend Class
 */
class Friend {
  // コンストラクタ
  constructor(name, maxHp, offense, speed, herb, herbPower) {
    this.name = name;       
    this.type = "friend";   // 敵味方種別
    this.maxHp = maxHp;     //　最大体力
    this.hp = maxHp;        //　体力
    this.liveFlag = true;   // 生存フラグ
    this.offense = offense; // 攻撃力
    this.speed = speed; // 素早さ
    this.herb = herb; // 薬草
    this.herbPower = herbPower; // 薬草の回復量
    this.command = ""; // 選択されたコマンド
    this.target = "";  // ターゲット
  }

  // Method:行動する
  // `command`プロパティに応じて処理を振り分ける
  action() {
    if(this.hp > 0) {
      // コマンドに応じた処理を行う
      switch(this.command) {
        // 攻撃
        case "enemyCommand":
          this.attack();
          break;
          
          // 回復
          case "recoveryCommand":
            this.recovery();
            break;
            
            default:
              Message.printMessage(this.name + "はボーッとした<br>");
            }
          }
  }

  //　Method:攻撃する
  attack() {
    // 攻撃相手が生存していれば攻撃する
    if(this.target.liveFlag) {
      //　敵の体力から自分の攻撃力を引く
      this.target.hp -= this.offense;

      // 攻撃相手の体力がマイナスになる場合は 0 にする
      if(this.target.hp < 0) {
        this.target.hp = 0;
      }
      // 攻撃結果を表示
      Message.printMessage(this.name + "の攻撃<br>" + this.target.name + "に" + this.offense + "のダメージを与えた！<br>");
    } else {
      // 生存していない場合
      Message.printMessage(this.name + "の攻撃・・・<br>" + this.target.name + "は倒されている<br>");
    }
  }

  //　Method:回避する
  recovery() {
    // 薬草がない場合、処理を抜けるようにする
    if(this.herb <= 0) {
      Message.printMessage(this.name + "は薬草を・・・<br>薬草がない！<br>");
      return;
    }

    // 今の体力が最大体力の場合、処理を抜けるようにする
    if(this.hp == this.maxHp) {
      Message.printMessage(this.name + "は薬草を・・・<br>これ以上回復できない！<br>");
      return;
    }

    // 回復する値
    let heal = this.herbPower;

    // 最大体力を超えて回復してしまいそうな場合、最大値まで回復するよう
    if(this.maxHp - this.hp < this.herbPower) {
      heal = this.maxHp - this.hp;
    }

    // 体力を回復する
    this.hp += heal;

    // 薬草を消費
    --this.herb;

    // 回復結果を表示
    Message.printMessage(this.name + "は薬草を飲んだ<br>体力が" + heal +"回復した！<br>");
  }
}

/**
 * Enemy Class
 * トロル・ドラゴン
 */
class Enemy {
  // コンストラクタ
  constructor(name, hp, offense, speed, path) {
    this.name = name;
    this.type = "enemy";    // 敵味方種別
    this.hp = hp;
    this.liveFlag = true;
    this.offense = offense;
    this.speed = speed;
    this.path = path;       // 画像の場所
  }

  // 行動する
  action() {
    if(this.hp > 0) {
      this.attack();
    }
  }
}

/**
 * Troll Class
 * 攻撃メソッド：素手
 */
class Troll extends Enemy {
  constructor(name, hp, offense, speed, path){
    super(name, hp, offense, speed, path);
  }

  // 攻撃メソッド
  attack(){
    // 生存している味方をランダムに選択する
    let f = characters[searchLivedcharacterRandom("friend")];

    // 攻撃対象の体力から自分の攻撃力分を引く
    f.hp -= this.offense;

    // 攻撃相手の体力がマイナスになる場合 ０ にする。
    if(f.liveFlag) {
      Message.printMessage(this.name + "が襲いかかってきた<br>" + f.name + "は" + this.offense + "のダメージを受けた！<br>");
    } else {
      Message.printMessage(this.name + "の攻撃・・・<br>" + f.name + "は倒れている<br>");
    }
  }
}

/**
 * Dragon Class
 * 攻撃メソッド：炎攻撃
 */
class Dragon extends Enemy {
  constructor(name, hp, offense, speed, path) {
    super(name, hp, offense, speed, path);
  }

  // 攻撃メソッド
  attack() {
    // 一定確率で攻撃を失敗する
    if(getRandomIntInclusive(0, 4) === 4) {
      Message.printMessage("ドラゴンは<br>グフッグフッと咳き込んんでいる・・・<br>");
      return;
    }

    // 生存している味方をランダムに選択する
    let f = characters[searchLivedcharacterRandom("friend")];

    // 攻撃対象の体力から自分の攻撃力を引く
    f.hp -= this.offense;

    // 攻撃相手の体力がマイナスになる場合は 0 にする
    if(f.hp < 0) {
      f.hp =  0;
    }

    // 攻撃相手が生存していれば攻撃
    if(f.liveFlag) {
      Message.printMessage(this.name + "は炎を吹いた<br>" + f.name + "は" + this.offense + "のダメージを受けた！<br>");
    } else {
      Message.printMessage(this.name + "の攻撃・・・<br>" + f.name + "は倒れている<br>");
    }
  }
}

/**
 * Message Class  
 */ 
class Message {
  // メッセージを表示
  // 上書きなので実質内容を消去してから表示していることになる。
  static printMessage(text) {
    messageView.innerHTML = text;
  }

  // メッセージを追加
  static addMessage(text) {
    messageView.innerHTML += text;
  }
}

/**
 * common methods
 */

// min から max までのランダムな整数を返す
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);   // .cali  切り上げ
  max = Math.floor(max);  // .floor 切り捨て
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
