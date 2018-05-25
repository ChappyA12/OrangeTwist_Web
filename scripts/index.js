
const IMAGE_PATH = "images/cover/";

const IMAGES = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const SLIDERS = ["NX112w", "N731", "N853", "N610w", "B610w", "E202", "B513", "E140"];

window.onload = function() {
	for(let i = 0; i < 8; i++) {
		let link = document.createElement("a");
		link.href = "jewelry.html";
		let div = document.createElement("div");
		div.classList.add("fade");
		link.appendChild(div);
		div.innerHTML = "<h4>" + SLIDERS[i] + "</h4>" +
										"<img src='images/spin/" + SLIDERS[i] + ".jpg'>";
		
		if (i < 4) { $(".slider .1").append(link); }
		else {       $(".slider .2").append(link); }
	}
	
	$('.fade').hover (
		function() {
			$(this).find('h4').fadeIn(150);
		},
		function() {
			$(this).find('h4').fadeOut(50);
		}
	);
}