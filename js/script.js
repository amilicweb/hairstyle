$(document).on('click', 'a[href^="#"]', function(event) {
  event.preventDefault();

  $('html, body').animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top
    },
    800
  );

  if ($(window).width() < 758) $('.navbar-toggler').click();
});

$(function() {
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: true
  });

  var toggler = $('#toggler');

  var counter = 1;
  toggler.click(function() {
    var bars = $('.bar');

    if (counter % 2 == 0) {
      bars.removeClass('full-width');
      $('#barTwo').addClass('second');
      $('#barThree').addClass('third');
      counter = 1;
    } else {
      $('#barTwo').removeClass('second');
      $('#barThree').removeClass('third');
      bars.addClass('full-width');
      counter = 2;
    }
  });
});
