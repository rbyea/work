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


	//zoom-photo
	$("img.jqzoom").jqueryzoom({
		xzoom: 200, //ширина окна просмотра зума (200 по умолчанию)
		yzoom: 200, //высота окна просмотра зума (200 по умолчанию)
		offset: 10 //отступ от картинки (10 по умолчанию)
		//position: "right" //позиция окна зума ("right" - по умолчанию)
	});
	
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