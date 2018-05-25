
const IMAGE_PATH = "img/jewelry/cover/";

const IMAGES = ["1.jpg", "2.jpg"];

window.onload = function() {
	for (let i = 1; i < 18; i++) {
		let item = document.createElement("div");
		item.innerHTML = "<img src='img/jewelry/catalog/" + i + ".jpg'/>";
		$("#pages").append(item);
	}
}