'use strict';

let friend1 = new Friend("あれす", 180, 66, 13, 2, 45);
console.log(friend1);
friend1.command = "recoveryCommand";
friend1.action();
