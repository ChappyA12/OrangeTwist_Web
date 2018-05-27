
let map, infowindow;

function loadMap(response) {
	initMap();
	for (let i = 0; i < response.retailers.length; i++) {
		let state = response.retailers[i];
		for (let x = 0; x < state.stores.length; x++) {
			let store = state.stores[x];
			addMarker(store);
		}
	}
	for (let i = 0; i < response.other.length; i++) {
		let other = response.other[i];
		addMarker(other);
	}
}

function addMarker(store) {
	let marker = new google.maps.Marker({
		position: new google.maps.LatLng(store.location[0],store.location[1]),
		map: map,
		title: store.name
	});

	google.maps.event.addListener(marker, 'click', (function(marker, store) { 
		return function() {
			let content = "<h4 class='map-title'>" + store.name + "</h4>" +
										"<p class='map-body'>";
			for (let x = 0; x < store.address.length; x++) {
				content += store.address[x] + "<br />";
			}
			if (store.phone) {
				content += "<br />Phone: " + store.phone + "<br />";
			}
			content += "</p>";
			infowindow.setContent(content);
			infowindow.open(map, marker);
			map.setZoom(15);
			map.setCenter(marker.getPosition());
		}
	})(marker, store));
}

function initMap() {
	infowindow = new google.maps.InfoWindow();
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: new google.maps.LatLng(38.0, -97.52),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		streetViewControl:false,
		panControl:false,
		overviewMapControl:true,
		scrollwheel: false,
	});
}