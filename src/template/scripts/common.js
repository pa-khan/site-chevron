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
});
