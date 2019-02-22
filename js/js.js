jQuery(document).ready(function($){
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


	

}); // end jquery

jQuery_1_6(document).ready(function($){
	// zoom
	jQuery_1_6('.slider .slider-item.zoom').addimagezoom({ 
		zoomrange: [3, 10],
		magnifiersize: [300,300],
		magnifierpos: 'right',
		cursorshade: true,
		largeimage: '../img/slider/photo-slider.png' 
	})

}); // end jquery_1_6


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