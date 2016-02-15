/*Hide show text function*/
$(function () {
  $('#hideShow').click(function () {

    $('#panel').slideToggle('slow');
    if ($(this).text() == 'Show') {
      $(this).text('Hide');
    } else {
      $(this).text('Show');
    }
  });
});



/*Hide show text function*/
$(function () {
  $('.displayHideArrow').click(function () {
    var t = $(this);
    var imgSrc = t.attr('src');
    var divId = t.attr('id');

    $('.panel').slideToggle('slow', function () {
      if (imgSrc === '/images/site_images/up_arrow.png') {
        t.attr({
          'src': '/images/site_images/down_arrow.png'
        });
      } else {
        t.attr({
          'src': '/images/site_images/up_arrow.png'
        });
      }
    });
  });
});



$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 200) {
    $('#hiddenNav').fadeIn();
  } else {
    $('#hiddenNav').fadeOut();
  }
});
