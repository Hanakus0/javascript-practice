'use strict';

/**
 * Friend class
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
  //　`command`プロパティに応じて処理を振り分ける
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
 * Message class  
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
