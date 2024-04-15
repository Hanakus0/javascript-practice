document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('fm').addEventListener('submit', function(e) {
    if(!window.confirm('ページを送信しても良いですか？')) {
      // e.preventDefault();
      alert("OK");
    }
  // }, false)
  }, alert('false'))
}, alert('submit_false'));