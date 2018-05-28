
const BASE_URL = "http://myorangetwist.com";

// stores slider values
let sliders = {};

window.onload = function() {
	loadContacts();
};

function loadContacts() {
	let url = BASE_URL + "/src/contact.json";
	fetch(url, {mode: 'cors'})
		.then(checkStatus)
		.then(JSON.parse)
		.then(processContacts)
		.catch(console.log);
}

function processContacts(response) {
	for (let i = 0; i < response.regions.length; i++) {
		let region = response.regions[i];
		sliders[region.abbrev] = 0;
		$("#contacts").append("<div class='top " + region.abbrev + "'>" +
												 	"<h2>" + region.region + "</h2>" +
												 	"<img class='triangle " + region.abbrev + 
												 	"' src='img/contact/show.png'/>" +
												"</div>");
		$("#contacts").append("<div class='bottom " + region.abbrev + "'> <p> </p> </div>");
		if (region.intro) {
			for (let x = 0; x < region.intro.length; x++) {
				$("#contacts div.bottom." + region.abbrev + " p").append(region.intro[x] + "<br />");
			}
		}
		for (let x = 0; x < region.contacts.length; x++) {
			let contact = region.contacts[x];
			$("#contacts div.bottom." + region.abbrev + " p").append(contact.name + "<br />" +
													 "Email: " + contact.email + "<br />" +
													 "Cell: " + contact.phone + "<br />");
		}
	}
	loadSliders();
}

function loadSliders() {
	Object.keys(sliders).forEach( function(key) {
    $('.bottom.' + key).slideUp(0);
		$('.top.' + key).click( function() { slide(key); });
	});
}

// slides a view
function slide(value) {
	$('.bottom.' + value).slideToggle('swing');

	$('.triangle.' + value).animate (
		{ borderSpacing: 180 + sliders[value] % 2 * 180 }, 
		{ step: function(now,fx) { $(this).rotate(now); }, duration:'medium' },
	'swing');

	sliders[value] += 1;
}

// jquery slide shortcut
jQuery.fn.rotate = function(degrees) {
	$(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
							 '-moz-transform' 	 : 'rotate('+ degrees +'deg)',
							 '-ms-transform' 		 : 'rotate('+ degrees +'deg)',
							 '-o-transform' 		 : 'rotate('+ degrees +'deg)',
							 'transform' 				 : 'rotate('+ degrees +'deg)'});
	return $(this);
};

function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response.text();
	} else {
		return Promise.reject(new Error(response.status + ": " + response.statusText));
	}
}
