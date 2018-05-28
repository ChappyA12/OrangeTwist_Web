
const TEMPLATES_BASE_URL = "http://myorangetwist.com/src/templates/";

const TEMPLATES = {"footer.txt": "footer"};

$(window).load(function() {
	Object.keys(TEMPLATES).forEach( function(key) {
		fetchTemplate(key);
	});
});
															 
function fetchTemplate(template) {
	let url = TEMPLATES_BASE_URL + template;
	fetch(url, {mode: 'cors'})
		.then(checkStatus)
		.then( function(response) {
			processTemplate(response, template)
		})
		.catch(console.log);
}
	
function processTemplate(response, template) {
	$(TEMPLATES[template]).append(response);
}
	
function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response.text();
	} else {
		return Promise.reject(new Error(response.status + ": " + response.statusText));
	}
}