'use strict';

// #1 > #3 > #2 の順で処理されることの確認（非同期処理）
function hoge(){
  console.log('あいうえお'); // #1
  setTimeout(function() {
    console.log('かきくけこ'); // #2
  }, 0); // interval time = 0
  console.log('さしすせそ'); // #3
}

hoge();