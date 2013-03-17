(function () {
  function replace_like_to_explosion () {
    var elms = document.getElementsByTagName('a');
    if(elms.length != 0) {
      for(i = 0; i < elms.length; i++ ) {
        var elm = elms[i];
        if(elm.innerHTML === 'いいね！') {
          elm.innerHTML = '爆発しろ！';
        }
      }
    }
  }
  setInterval(replace_like_to_explosion, 300);
})();
