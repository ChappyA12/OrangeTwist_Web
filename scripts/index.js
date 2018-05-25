
const IMAGE_PATH = "images/cover/";

const IMAGES = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

$(document).ready( function() {
	$('.fade').hover (
		function() {
			$(this).find('h4').fadeIn(150);
		},
		function() {
			$(this).find('h4').fadeOut(50);
		}
	);
});