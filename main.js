$(document).ready(function(){
	$(window).on('scroll', function(){
		sc = $(window).scrollTop();
		if(sc>50){
			$('nav').addClass('nav-scrolled');
		}else{
			$('nav').removeClass('nav-scrolled')
		}
	})
})

