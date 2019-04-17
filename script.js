$(function(){
	$('.slick').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  nextArrow: '.arrow_right',
	  prevArrow: '.arrow_left',
	  dots: true,
	  responsive: [
    	{
	      breakpoint: 992,
	      settings: {
	      	slidesToShow: 2,
	        slidesToScroll: 1,
	      }},
	    {
	      breakpoint: 768,
	      settings: {
	      	slidesToShow: 1,
	        slidesToScroll: 1,
	      }

	    }]

	});
	
	$('.body').on('click', '.header-menu-icon_c', function(){
		if ($('.header-nav-menu-auto').css('display') == 'none') {
			$('.header-nav-menu-auto').slideDown(300);
			return false;
		} else {
			$('.header-nav-menu-auto').slideUp(300);
			return false;
		}
	});

	$('.body').on('click', '.feedback__delete', function(){
		$('.global-dialog-container').fadeOut(300);
		$('.full-global-dialog-container').fadeOut(300);
	});

	$('.body').on('click', '.header__request_link_item', function(){
		$('.global-dialog-container').fadeIn(300);
		return false;
	});

	$('.body').on('click', '.block-social-icons-connection__link', function(){
		$('.global-dialog-container').fadeIn(300);
		return false;
	});

	$('.body').on('click', '.header__request_button', function(){
		$('.global-dialog-container').fadeIn(300);
	});

	$('.body').on('click', '.dialog-wind-container', function(event){
		if (event.target == this) {
			$(this).parent().fadeOut(300);
		}
	});

	$('.body').on('click', '.form-cost-service__button', function(){
		$('.full-global-dialog-container').fadeIn(300);
		return false;
	});

	$('.body').on('click', '.block-order__button', function(){
		$('.full-global-dialog-container').fadeIn(300);
		return false;
	});
})