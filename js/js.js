$(document).ready(function(){

	$(".zoom").imagezoomsl({
		zoomrange: [2.12, 12],
		magnifiersize: [530, 340],
		scrollspeedanimate: 10,
		loopspeedanimate: 5,
		cursorshadeborder: "10px solid black",
		magnifiereffectanimate: "fadeIn"
	});

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
	$('.slider-nav')
	.on('init', function(event, slick) {
		$('.slider-nav .slick-slide.slick-current').addClass('is-active');
	})
	.slick({
		slidesToShow: 3,
		slidesToScroll: false,
		asNavFor: '.slider',
		centerPadding: 0,
		centerMode: true,
		focusOnSelect: true,
		vertical: true,
		arrows: false
	});

	$('.slider-two').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav-two',
		nextArrow: '<div class="arrow arrow_right"><i class="fas fa-chevron-right"></i></div>',
		prevArrow: '<div class="arrow arrow_left"><i class="fas fa-chevron-left"></i></div>'
	});

	$('.slider-nav-two').slick({
			slidesToShow: 3,
			slidesToScroll: false,
			asNavFor: '.slider-two',
			centerPadding: 0,
			centerMode: true,
			focusOnSelect: true,
			arrows: false
		});

	$('.slider').on('afterChange', function(event, slick, currentSlide) {
		$('.slider-nav').slick('slickGoTo', currentSlide);
		
		var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]'; // активный элемент слайдера

		$('.slider-nav .slick-slide.is-active').removeClass('is-active');
		$(currrentNavSlideElem).addClass('is-active');
	});

	$('.slider-nav').on('mouseenter', '.slick-slide', function(event) {
		event.preventDefault();
		var goToSingleSlide = $(this).data('slick-index');
 
		$('.slider').slick('slickGoTo', goToSingleSlide);
	});

	// измененение слайдов по ховеру
	
	
	// modals
	$(document).on('click', '.tracker', function(){
			$('.modal-slider').addClass('modal-slider_show');
		});
		$('.modal-slider__close').on('click', function(){
			$('.modal-slider').removeClass('modal-slider_show');
		});

//прилипающеее меню
	var sticky = new Sticky('.sticky');

//всплывающее описание, через 1 минуту
	$(".warning-close").hide();

	$('.warning').fadeOut().delay(60000).fadeIn();

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

	// вызов бургера

	$('#humburger-btn').on('click', function () {
		$('#header-menu__mob').toggleClass('mobile-menu__visible');
	});
	$('.header-navbar__mobile_window-close').on('click', function () {
		$('#header-menu__mob').toggleClass('mobile-menu__visible');
	});

// показать скрыть отзывы
	$('.people-link__more').click(function () {
			var feedbackAdd = $('people').find('.row.hidden');
			//console.log(i);
			for (i= 0; i <= 2; i++) {
			feedbackAdd.eq(i).removeClass('hidden');
			return true;
			}
	});

}); // end jquery

