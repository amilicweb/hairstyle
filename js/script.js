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
});
