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

	//прилипающеее меню
	var sticky = new Sticky('.sticky');

	//прилипающее меню на планшетах и телефонах
	var sticky = new Sticky('.header-mobile');
});

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

// вызов бургера

$('#humburger-btn').on('click', function () {
	$('#header-menu__mob').toggleClass('mobile-menu__visible');
});
$('.header-navbar__mobile_window-close').on('click', function () {
	$('#header-menu__mob').toggleClass('mobile-menu__visible');
});


var much;
var result;

$(".minus").click(function () {
	much = +$(this).closest(".basket-content__box_configuration-much").find("input").val();
	result = much - 1;
	if (result < 1) {
		result = 1;
	}
	$(this).closest(".basket-content__box_configuration-much").find("input").val(result)
	return true;
});
$(".plus").click(function () {
	much = +$(this).closest(".basket-content__box_configuration-much").find("input").val();
	result = much + 1;
	$(this).closest(".basket-content__box_configuration-much").find("input").val(result)
	return true;
});
var sum = 0;
$('.basket-content__box_configuration-much').each(function () {
	$(this).find('input').each(function () {
		sum += parseInt($(this).val());
	});
	$('.result').append(sum);
});
