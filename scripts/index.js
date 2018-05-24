
const IMAGE_PATH = "images/cover/";

const IMAGES = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

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