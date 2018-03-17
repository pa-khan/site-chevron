$(document).ready(function($) {

	$('.text_phone').mask('+7 (999) 999-99-99');
	

	$('.slider').slick({
		arrows: false,
		dots: true,
		autoplay: true
	})

	$('select').styler({
		selectSmartPositioning: false
	});

	var productImg = $('.product__img'),
			productImgs = $('.product__imgs');

	productImg.slick({
		arrows: false,
		fase: true,
		asNavFor: productImgs
	});

	productImgs.slick({
		arrows: false,
		focusOnSelect: true,
		asNavFor: productImg,
		slidesToShow: 3
	})

	$('.product__amount li').click(function(event) {
		$('.product__amount li').removeClass('selected');
		$(this).addClass('selected');
	});

	var navList = $('.nav__list'),
			nav = $('.nav'),
			navBtn = $('.header__btn');

	navBtn.click(function(event) {
		$(this).toggleClass('header__btn_toggle');
		nav.toggleClass('nav_toggle');
	});

	$(window).on('load resize', function() {
		var windowHeight = $(window).height(),
				windowWidth = $(window).width();

		if (windowWidth > 795 ) {
			subnav.removeAttr('style');
		}
		
	});


	$('.nav__link_big').click(function(event) {
		var windowWidth = $(window).width();
		if (windowWidth <= 767) {
			var subnav = $(this).siblings('.nav__subnav');
			event.preventDefault();
			subnav.slideToggle(300);

			navList.height($(window).height());
		} 
		
		
	});

	$('.search__btn_show').click(function(event) {
		$('.search__input').css('transform', 'translateX(0%)');
		$(this).hide();
	});
});
