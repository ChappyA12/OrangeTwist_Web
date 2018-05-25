
const IMAGE_PATH = "images/jewelry/";

const IMAGES = ["1.jpg", "2.jpg"];

window.onload = function() {
	for (let i = 1; i < 18; i++) {
		let item = document.createElement("div");
		item.innerHTML = "<img src='images/catalog/" + i + ".jpg'/>";
		$("#pages").append(item);
	}
}