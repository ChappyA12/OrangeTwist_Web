
const BASE_URL = "http://myorangetwist.com";

window.onload = function() {
	loadMap();
//	loadRetailers();
};

//function loadRetailers() {
//	let url = BASE_URL + "/src/retailers.txt";
//	fetch(url, {mode: 'cors', header: header})
//		.then(checkStatus)
//		.then( function(response) {
//			alert(response);
//		})
//		.catch(console.log);
//}
//
//function checkStatus(response) {
//	alert(response);
//	if (response.status >= 200 && response.status < 300) {
//		return response.text();
//	} else {
//		return Promise.reject(new Error(response.status + ": " + response.statusText));
//	}
//}
