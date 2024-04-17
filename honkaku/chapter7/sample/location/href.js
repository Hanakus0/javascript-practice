'use strict';

/*
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('isbn').addEventListener('change', function(){
    // location.href = 'http://www.wings.msn.to/index.php/-/A-03/' + this.value;
    location.replace('http://www.wings.msn.to/index.php/-/A-03/' + this.value); // `replace`だとブラウザにページ履歴が残らないため「戻る」ボタンが効かなくなる
  } ,false)
}, false);

*/

// こっちの場合でも構文としてはOK。問題は<header>でスクリプトをHTMLを読み切るよりも先にロードさせているため、取得したいDOMが無いことでエラーを招いている。それを解消するのが上記の`document.addEventListener('DOMContentLoaded', function(){});`であり、ロード完了しきってからイベントをDOMと紐づけている。
/*
  document.getElementById('isbn').addEventListener('change', function(){
    // location.href = 'http://www.wings.msn.to/index.php/-/A-03/' + this.value;
    location.replace('http://www.wings.msn.to/index.php/-/A-03/' + this.value); // `replace`だとブラウザにページ履歴が残らないため「戻る」ボタンが効かなくなる
  } ,false);
*/