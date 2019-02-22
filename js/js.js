$(document).ready(function(){
   
	$(".zoom").imagezoomsl({
		zoomrange: [2.12, 12],
		magnifiersize: [530, 340],
		scrollspeedanimate: 10,
		loopspeedanimate: 5,
		cursorshadeborder: "10px solid black",
		magnifiereffectanimate: "slideIn"
	});
});
$(document).ready(function(){
	// slider
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.slider-nav',
		nextArrow: '<div class="arrow arrow_right"><i class="fas fa-chevron-right"></i></div>',
		prevArrow: '<div class="arrow arrow_left"><i class="fas fa-chevron-left"></i></div>'
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: false,
		asNavFor: '.slider',
		centerMode: true,
		centerPadding: '0px',
		focusOnSelect: true,
		vertical: true,
		arrows: false
		/*
		nextArrow: '<div class="arrow-nav arrow-nav_right"><i class="fas fa-chevron-down"></i></div>',
		prevArrow: '<div class="arrow-nav arrow-nav_left"><i class="fas fa-chevron-top"></i></div>'
		*/
	});


	$('.slider-nav .slick-slide').mouseover(function(){
		var index = $(this).attr('data-slick-index');
		console.log(index);
		//$(this).addClass('slick-current slick-center');
		//$(this).attr('data-slick-index', '1');
	});
	$('.slider-nav .slick-slide').mouseout(function(){
		//$(this).removeClass('slick-current slick-center');
		//$(this).attr('data-slick-index', '0');
	});
	

}); // end jquery

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

$(document).ready(function () {
	$('#humburger-btn').on('click', function () {
		$('#header-menu__mob').toggleClass('mobile-menu__visible');
	});
	$('.header-menu__close').on('click', function () {
		$('#header-menu__mob').toggleClass('mobile-menu__visible');
	});
});