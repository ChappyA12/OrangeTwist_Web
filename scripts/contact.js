
// stores slider values
let sliders = { "national": 0, "northeast": 0, "other": 0, "sale": 0, "mid": 0};

// sets up slide triggers and hides slide view
$(document).ready( function() {
	Object.keys(sliders).forEach( function(key) {
    $('#contact_slidedown_' + key).slideUp(0);
		$('#contact_' + key).click( function() { slide(key); });
	});
});

// slides a view
function slide(value) {
		$('#contact_slidedown_' + value).slideToggle('swing');
	
		$('#contact_triangle_' + value).animate (
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