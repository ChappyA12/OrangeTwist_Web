
$(window).load(function() {
	for (let i = 0; i < IMAGES.length; i++) {
		let item = document.createElement("li");
		item.style.backgroundImage = "url('" + IMAGE_PATH + IMAGES[i] + "')";
 		document.getElementById("slides").appendChild(item);
	}
	$('.flexslider').flexslider({
		animation: 'slide',
		slideshowSpeed: 5000,
		animationSpeed: 1000,
		pauseOnAction: true,
		touch: true,
		directionNav: true,
	});
});