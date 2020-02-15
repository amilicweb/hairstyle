$(document).on('click', 'a[href^="#"]', function(event) {
  event.preventDefault();

  $('html, body').animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top
    },
    800
  );
});

$(function() {
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: true
  });
});
