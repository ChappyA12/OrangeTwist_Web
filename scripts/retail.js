
const BASE_URL = "http://myorangetwist.com";

window.onload = function() {
	loadMap();
	loadRetailers();
};

function loadRetailers() {
	let url = BASE_URL + "/src/retailers.json";
	fetch(url, {mode: 'cors'})
		.then(checkStatus)
		.then(JSON.parse)
		.then(processRetailers)
		.catch(console.log);
}

function processRetailers(response) {
	let count = 0;
	for (let i = 0; i < response.retailers.length; i++) {
		let state = response.retailers[i];
		$("#retailers").append("<span>" + state.state + "</span><br />");
		for (let x = 0; x < state.stores.length; x++) {
			let store = state.stores[x];
			$("#retailers").append("<b>" + store.name + "</b><br />");
			for (let z = 0; z < store.adress.length; z++) {
				$("#retailers").append(store.adress[z] + "<br />");
			}
			if (store.phone) {
				$("#retailers").append(store.phone + "<br />");
			}
			$("#retailers").append("<br />");
			count ++;
		}
	}
	$("#retailers").append("<br /><h6>ALL " + count + " STORES</h6>");
}

function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response.text();
	} else {
		return Promise.reject(new Error(response.status + ": " + response.statusText));
	}
}
