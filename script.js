$(document).ready(function() {
  // $('#one').localScroll({duration:800});

  $("#owl-example").owlCarousel({
    navigation: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true
    });
});


$('a[href^="#"]').click(function(){

var discover = $(this).attr("href");

    $('html, body').animate({
        scrollTop:$(discover).offset().top
    }, 'slow');

return false;
});
