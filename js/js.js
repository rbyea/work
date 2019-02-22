jQuery(document).ready(function ($) {
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

jQuery_1_6(document).ready(function ($) {
	// zoom
	jQuery_1_6('.slider .slider-item.zoom').addimagezoom({
		zoomrange: [3, 10],
		magnifiersize: [300, 300],
		magnifierpos: 'right',
		cursorshade: true,
		largeimage: '../img/slider/photo-slider.png'
	})

}); // end jquery_1_6


//rating js
(function () {
	var container = document.querySelector('.rating');
	var items = container.querySelectorAll('.rating-item')
	container.onclick = function (e) {
		if (!e.target.classList.contains('active')) {
			items.forEach(function (item) {
				item.classList.remove('active');
			});
			e.target.classList.add('active');
		}
	}
})();

// прокрутка до якоря
const anchors = [].slice.call(document.querySelectorAll('a[href*="#menu-one"], a[href*="#menu-two"], a[href*="#menu-three"], a[href*="#menu-four"], a[href*="#menu-five"], a[href*="#menu-six"]')),
	animationTime = 300,
	framesCount = 20;

anchors.forEach(function (item) {
	item.addEventListener('click', function (e) {
		e.preventDefault();

		let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;

		let scroller = setInterval(function () {

			let scrollBy = coordY / framesCount;

			if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
				window.scrollBy(0, scrollBy);
			} else {
				window.scrollTo(0, coordY);
				clearInterval(scroller);
			}
		}, animationTime / framesCount);
	});
});