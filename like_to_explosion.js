(function () {
  function replace_like_to_explosion () {
    var elms = document.getElementsByTagName('a');
    if(elms.length != 0) {
      for(i = 0; i < elms.length; i++ ) {
        var elm = elms[i];
        if(elm.innerHTML === 'いいね！') {
          elm.innerHTML = '爆発しろ！';
        } else if(elm.innerHTML === 'いいね！を取り消す') {
          elm.innerHTML = '爆発しろ！を取り消す';
        }
      }
    }
    elms = document.getElementsByTagName('span');
    if(elms.length != 0) {
      for(i = 0; i < elms.length; i++ ) {
        var elm = elms[i];
        if(elm.innerHTML === 'が「いいね！」と言っています。') {
          elm.innerHTML = 'が「爆発しろ！」と言っています。';
        } else if (elm.innerHTML === 'がいいね！と言っています。') {
          elm.innerHTML = 'が「爆発しろ！」と言っています。';
        } else if (elm.innerHTML === 'さんが「いいね！」と言っています。') {
          elm.innerHTML = 'さんが「爆発しろ！」と言っています。';
        }
      }
    }
    
  }
  setInterval(replace_like_to_explosion, 300);
})();
