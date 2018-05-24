
$(document).ready(function() {
	$('.standard').hover(
		function(){
			$(this).find('.caption').show();
		},
		function(){
			$(this).find('.caption').hide();
		}
	);
	$('.fade').hover(
		function(){
			$(this).find('.caption').fadeIn(150);
		},
		function(){
			$(this).find('.caption').fadeOut(020);
		}
	);
	$('.slide').hover(
		function(){
			$(this).find('.caption').slideDown(250);
		},
		function(){
			$(this).find('.caption').slideUp(250);
		}
	);
});