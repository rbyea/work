$(function(){
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    vertical: true
  });

});

$(document).ready(function(){
  $('.slider').zoom({url: 'photo-slider.png'});
});