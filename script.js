$(document).scroll(function() {

    if ($(this).scrollTop() < $('section[data-anchor="home"]').offset().top) {
       $('nav a').removeClass('active');
    }

    if ($(this).scrollTop() >= $('section[data-anchor="home"]').offset().top) {
      $('nav a').removeClass('active');
      $('nav a:eq(0)').addClass('active');
    }
    if ($(this).scrollTop() >= $('section[data-anchor="omne"]').offset().top) {
      $('nav a').removeClass('active');
      $('nav a:eq(1)').addClass('active');
    }
    if ($(this).scrollTop() >= $('section[data-anchor="projekty"]').offset().top) {
      $('nav a').removeClass('active');
      $('nav a:eq(2)').addClass('active');
    }
    if ($(this).scrollTop() >= $('section[data-anchor="kontakt"]').offset().top) {
      $('nav a').removeClass('active');
      $('nav a:eq(3)').addClass('active');
    }

});

// script for scrolling

// $('#menu li').on('click', function() {

//     var scrollAnchor = $(this).attr('data-scroll'),
//         scrollPoint  = $('section[data-anchor="'+scrollAnchor+'"]').offset().top - 28;

//    $('body,html').animate({
//        scrollTop: scrollPoint
//    }, 500);

//    return false;

// })

// $(window).scroll(function() {

// });

// $(window).scroll(function() {

//     if ($(window).scrollTop() >= 100) {

//         $('nav').addClass('fixed');

//     } else {

//         $('nav').removeClass('fixed');

//     }

// });