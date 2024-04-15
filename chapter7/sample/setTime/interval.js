'use strict';

document.addEventListener('DOMContentLoaded', function() {
  // Set timer
  var timer = window.setInterval(
    // Display current time
    function() {
      var dat = new Date();
      document.getElementById('result').textContent = dat.toLocaleTimeString();
    }, 5000);

  // Stop process of timer when clicked btn
  document.getElementById('btn').addEventListener('click', function() {
    window.clearInterval(timer);
  }, false);
}, false);