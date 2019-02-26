$(document).ready(function(){

	// модальное окно заказать звонок

	$('.call').click(function (){
		$('.modal-call').addClass('modal-call__visible');
	});
	$('.modal-call__close').click(function (){
		$('.modal-call').removeClass('modal-call__visible');
	});


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
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav',
		nextArrow: '<div class="arrow arrow_right"><i class="fas fa-chevron-right"></i></div>',
		prevArrow: '<div class="arrow arrow_left"><i class="fas fa-chevron-left"></i></div>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true
				}
			}
		]
	});
	$('.slider-nav')
	.on('init', function(event, slick) {
		$('.slider-nav .slick-slide.slick-current').addClass('is-active');
	})
	.slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider',
		infinity: true,
		centerPadding: 0,
		centerMode: true,
		focusOnSelect: true,
		vertical: true,
		arrows: false
	});

	// измененение слайдов по ховеру
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

	// переопределяем zoom на мобилках

	$( window ).resize(function(){
		var windowWidth = $( window ).width();
		if (windowWidth <= 992) {
			$('.magnifer').css('display' , 'none');
			$(".zoom").imagezoomsl({
				zoomrange: [1, 1],
				zoomstart: 1,
				innerzoom: true,
				magnifierborder: "none"
			});

		} else {
			$('.magnifer').css('display' , 'block');
		}

	});
	
	
	// modals
	$(document).on('click', '.tracker', function(){
		if ( $( window ).width() >= 992 ) {
			$('.modal-slider').addClass('modal-slider_show');
			$('.slider').slick('setPosition');
			$('.slider-nav').slick('setPosition');
			
			$('.slider-mobile').slick({
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
					centerPadding: 0,
					centerMode: true,
					focusOnSelect: true,
					arrows: false
			});
		}			
			

		});
		$('.modal-slider__close').on('click', function(){
			$('.modal-slider').removeClass('modal-slider_show');
		});

//прилипающеее меню
	var sticky = new Sticky('.sticky');

//прилипающее меню на планшетах и телефонах
	var sticky = new Sticky('.header-mobile');

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
$(document).ready(function () {

	// прокрутка до якоря

	$("body").on('click', '[href*="#"]', function(e){
		var fixed_offset = 100;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	});

	// вызов бургера

	$('#humburger-btn').on('click', function () {
		$('#header-menu__mob').toggleClass('mobile-menu__visible');
	});
	$('.header-navbar__mobile_window-close').on('click', function () {
		$('#header-menu__mob').toggleClass('mobile-menu__visible');
	});

	// клик по кнопке "добавить в корзину"
	$('.add-in-basket').on('click', function(){
		var url = 'basket.html';
		$(this).text('В корзине 1шт. Перейти');
		$('.add-in-basket:contains("В корзине 1шт. Перейти")').on('click', function(){
			$(location).attr('href',url);
		});
	});

	// клик по кнопке " купить сейчас "
	$('.buy-now').on('click', function(){
		var url = 'basket.html';
		$(location).attr('href',url);
	});

}); // end jquery

// показать скрыть отзывы
// Функция открытия комментов
function toggleFeedback(feedbackAdd){
	for(let i = 0; i <= 2; i++){ // по 3
		if(feedbackAdd[i].classList.contains('feedback-hidden')){ //Если есть класс невидимки
			feedbackAdd[i].classList.remove('feedback-hidden'); // То просто убираем его
		}
	}
}
//Функция закрытия
function closeFeedback(feedbackAdd){ 
		for(let i = 3; i < feedbackAdd.length; i++){ //Начинаем с 3-его элемента
			feedbackAdd[i].classList.add('feedback-hidden'); // Добавляем класс невидимку
		}
}
//Кнопка 'Показать еще отзывы'
let btnMain = document.querySelector('.people-link__more');
//Проверка текст контента
function checkFeedback(){
	let feedbackAdd = document.querySelectorAll('.feedback-hidden'); //Собираем массив из невидимок
	if(feedbackAdd.length == 0){ //Если их 0, то текст = скрыть
		btnMain.textContent = 'Скрыть';
	} else {
		btnMain.textContent = 'Показать еще отзывы';
	}
}
setInterval(checkFeedback, 10); // Поставим небольшую задержку

// При нажатии на кнопку
document.body.addEventListener('click' , function (e) {
	let target = e.target;
	if(target == btnMain){
		// Перезаписываем массив
		let feedbackAdd = document.querySelectorAll('.feedback-hidden');
		// Если еще остались скрытые элементы, то выполняем функцию открытия
		if(feedbackAdd.length != 0){ 
			toggleFeedback(feedbackAdd);
		}
	} //Но если при клике куда угодно мы обнаружим, что наша кнопка должна скрывать, то собираем массив из всех комментов 
	if(target == btnMain && btnMain.textContent == 'Скрыть'){
		let feedbackAdd = document.querySelectorAll('.feedback');
		closeFeedback(feedbackAdd);// И вызываем функцию скрытия
	}
});
//добавление класса на 991px
$(document).ready(function () {
	function checkWidth() {
		var windowWidth = $('body').innerWidth(),
			elem = $(".header");
		if (windowWidth < 991) {
			elem.removeClass('header-mob');
			elem.addClass('header-mobile');
		}
		else {
			elem.removeClass('header-mobile');
			elem.addClass('header-mob');
		}
	}

	checkWidth();

	$(window).resize(function () {
		checkWidth();
	});
});
