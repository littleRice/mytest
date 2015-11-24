$(function () {
  var $ul = $('ul');
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
        $(v).css('bottom', (position - index + 2) * 20);
      } else if (index == position) {
        $(v).find('img').width(300);
        $(v).css('left', index * 100);
        $(v).css('bottom', '20px');
        $(v).css('z-index', length - position + index);
      } else {
        $(v).find('img').width(200);
        $(v).css('left', 100 + index * 100);
        $(v).css('bottom', (index - position + 2) * 20);
        $(v).css('z-index', length - index - 1);
      }
    });
  });
  $li.eq(showPosition).trigger('click');
  /*  ----拖拽功能----
   $ul.on('mousedown', function () {
     var thatLeft = $(this).offset().left,
       isTrue = true;
     $(this).on('mousemove', function (e) {
       if (isTrue) {
         $('ul').css('left', e.pageX - thatLeft);
       }
     }).on('mouseup', function () {
       isTrue = false;
     });
   });*/
  $('.test').on('mousedown', function (event) {
    var _ClientX = event.pageX,
      _ClientY = event.pageY,
      _left = $(this).offset().left,
      _top = $(this).offset().top;
    $(this).on('mousemove', function (e) {
      $(this).css('left', e.pageX - _ClientX + _left);
      $(this).css('top', e.pageY - _ClientY + _top);
    });
    $(document).on('mousemove', function (e) {
      $('.test').css('left', e.pageX - _ClientX + _left);
      $(this).css('top', e.pageY - _ClientY + _top);
    });
  });
  $('.test').on('mouseup', function () {
    $(document).off('mousemove');
    $(this).off('mousemove');
  });
  $(document).on('mouseup', function () {
    $(document).off('mousemove');
    $('.test').off('mousemove');
  });
});