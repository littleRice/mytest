$(function () {
  var $li = $('ul li'),
    length = $li.length,
    showPosition = Math.floor(length / 2);
  $li.on('click', function () {
    var position = $(this).index();
    if (position < showPosition) {
      $('ul').animate({
        left: (showPosition - position) * 100
      }, 500);
    } else {
      $('ul').animate({
        left: (showPosition - position) * 100
      }, 500);
    }
    $li.each(function (index, v) {
      if (index < position) {
        $(v).find('img').width(150);
        $(v).css('left', index * 100);
        $(v).css('z-index', length - position + index);
      } else if (index == position) {
        $(v).find('img').width('200');
        $(v).css('left', index * 100);
        $(v).css('z-index', length - position + index);
      } else {
        $(v).find('img').width(150);
        $(v).css('left', 100 + index * 100);
        $(v).css('z-index', length - index - 1);
      }
    });
  });
  $li.eq(showPosition).trigger('click');
});