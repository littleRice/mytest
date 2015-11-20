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
        $(v).find('img').width(200);
        $(v).css('left', index * 100);
        $(v).css('z-index', length - position + index);
        $(v).css('bottom', (position - index + 2) * 10);
      } else if (index == position) {
        $(v).find('img').width(300);
        $(v).css('left', index * 100);
        $(v).css('bottom', '20px');
        $(v).css('z-index', length - position + index);
      } else {
        $(v).find('img').width(200);
        $(v).css('left', 100 + index * 100);
        $(v).css('bottom', (index - position + 2) * 10);
        $(v).css('z-index', length - index - 1);
      }
    });
  });
  $li.eq(showPosition).trigger('click');
  $li.on('mousemove', function () {
    console.log(1)
  });
});