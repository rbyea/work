$(document).ready(function(){

	// slider
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
	
	$('a.zoom').easyZoom();

}); // end jquery

	//rating js
	(function(){
		var container = document.querySelector('.rating');
		var items = container.querySelectorAll('.rating-item')
		container.onclick = function(e) {
			if( ! e.target.classList.contains('active') ){
				items.forEach(function(item){
					item.classList.remove('active');
				});
				e.target.classList.add('active');
			}
		}
	})();