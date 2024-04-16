// message class
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

Message.printMessage("あれすの攻撃<br>");
Message.addMessage("トロルに20のダメージを与えた！<br>");

