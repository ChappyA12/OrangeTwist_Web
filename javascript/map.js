
window.onload = function() {
	var locations = [
						['Orange Twist HQ', 38.881845, -77.164451, 1],
						['Charles W. Bowers Museum Corp', 33.763356, -117.868205, 2],
						['Ronald Reagan Presidential Museum Gift Store', 34.259867, -118.819808, 3],
						['Astrid', 41.403622, -72.546015, 4],
						['Country Shop of Madison', 41.279078, -72.596521, 5],
						['La Moda', 41.141425, -73.257119, 6],
						['Odeon', 41.327547, -72.960591, 7],
						['Sound Beach Sportswear', 41.030923, -73.567770, 8],
						['Swank on Bank', 41.577597, -73.411599, 9],
						['Tracy Brent', 41.284340, -72.683676, 10],
						['Hillwood Estate Museum & Gardens', 38.943490, -77.052457, 11],
						['The Kennedy Center Gift Shops', 38.896151, -77.055447, 12],
						['National Building Museum', 38.897752, -77.017619, 13],
						['National Gallery of Art', 38.892072, -77.017486, 14],
						['National Museum of Women in the Arts', 38.905246, -77.014897, 15],
						['Carmine\'s Gift Shop', 26.846188, -80.070818, 16],
						['Lemon Twist Shop Florida', 30.205777, -81.380801, 17],
						['Morse Museum of Art', 28.600867, -81.351504, 18],
						['Alikat', 42.360206, -71.054766, 19],
						['Bryn Walker - Edgartown', 41.389734, -70.511665, 20],
						['Bryn Walker - Vineyard Haven', 41.453894, -70.603490, 21],
						['Collections on Court', 41.957055, -70.665096, 22],
						['Herlihy\'s Jewelry', 42.335173, -72.672510, 23],
						['Lola Tortola', 42.281325, -71.236992, 24],
						['Museum of Fine Arts Boston', 42.339457, -71.094143, 25],
						['Sportworks', 42.037569, -70.671124, 26],
						['Sundance', 41.679893, -69.957114, 27],
						['Tre Jolie', 42.161904, -71.216379, 28],
						['Lemon Twist - Chevy Chase', 38.995795, -77.077083, 29],
						['The Walters Art Museum', 39.296574, -76.616365, 30],
						['House of Logan', 43.851276, -69.628950, 31],
						['Alice Blues', 42.876602, -71.949935, 32],
						['Miranda', 42.877500, -71.949503, 33],
						['Prim Fashion Boutique', 42.916015, -70.863702, 34],
						['Princeton Art Museum', 40.346717, -74.656877, 35],
						['Winter Sun & Summer Moon', 41.926747, -73.912115, 36],
						['Preservation Society of Newport, Mansions of Newport Gift Shops', 41.474988, -71.307316, 37],
						['Cotton Mill Exchange, South Carolina State Museum', 33.998294, -81.048006, 38],
						['Country Music Hall of Fame', 36.158334, -86.776266, 39],
						['Pink Palace', 35.124883, -89.959533, 40],
						['Briscoe Western Art Museum', 29.422921, -98.489009, 41],
						['The Sixth Floor Museum Gift Shop', 32.780037, -96.807723, 42],
						['Covet', 38.877334, -77.123987, 43],
						['Lemon Twist', 38.898354, -77.118651, 45],
						['Virginia Museum of Fine Arts', 37.555796, -77.474930, 46],
						['Everywear for Everybody', 44.167358, -73.252769, 47],
						['In Company', 44.470032, -72.687134, 48],
					];
					var map = new google.maps.Map(document.getElementById('map'), {
						zoom: 4,
						center: new google.maps.LatLng(38.0, -97.52),
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						streetViewControl:false,
						panControl:false,
						overviewMapControl:true,
						scrollwheel: false,
					});
					var infowindow = new google.maps.InfoWindow();
					var marker, i;
					for (i = 0; i < locations.length; i++) {  
						marker = new google.maps.Marker({
							position: new google.maps.LatLng(locations[i][1],locations[i][2]),
							map: map,
						});
						google.maps.event.addListener(marker, 'click', (function(marker, i) { 
							return function() {
								infowindow.setContent(locations[i][0]);
								infowindow.open(map, marker);
								map.setZoom(15);
								map.setCenter(marker.getPosition());
							}
						})(marker, i));
					}
};
