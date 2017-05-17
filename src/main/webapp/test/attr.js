/**
 * 
 */
$(function() {
  var ps = document.getElementsByTagName('p');
  for (var i = 0; i < ps.length; i++) {
    var title = ps[i].getAttribute('title');
    if (title) {
      ps[i].setAttribute('title', '我是标题');
    }
  }
});