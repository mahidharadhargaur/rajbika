$(document).ready(function(){
	$(window).on('scroll',function(){
		sc = $(window).scrollTop();
		footer = $('footer').offset().top;
		ul = $('.product-nav').position().top + $('.product-nav').outerHeight(true);
		if(sc>(footer-ul)){
			$('.product-nav').css({'position':'absolute', 'bottom':'0px','top':'auto'});
		}else{
			$('.product-nav').css({'position':'fixed', 'top':'8rem','bottom':'auto'});
		}
	})
})