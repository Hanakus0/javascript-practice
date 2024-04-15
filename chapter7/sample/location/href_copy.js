'use strict';


document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('id').addEventListener('change', function(){
    alert(this.value);
  } ,false)
}, false);
