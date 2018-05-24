
$(document).ready( function() {
	$('.fade').hover (
		function() {
			$(this).find('.caption').fadeIn(150);
		},
		function() {
			$(this).find('.caption').fadeOut(50);
		}
	);
});