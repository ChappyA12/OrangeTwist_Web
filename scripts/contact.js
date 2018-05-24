
jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

var form = 0;

$(document).ready(function(){
		$('#contact_slidedown_form').slideUp(0);
});

$(document).ready(function(){
	$('#contact_form').click(function(){
		$('#contact_slidedown_form').slideToggle('swing');
		
		if (form%2==0) {
			$('#contact_triangle_form').animate({  borderSpacing: 180 }, {
    		step: function(now,fx) {
      		$(this).css('-webkit-transform','rotate('+now+'deg)');
      		$(this).css('-moz-transform','rotate('+now+'deg)'); 
      		$(this).css('-ms-transform','rotate('+now+'deg)');
      		$(this).css('-o-transform','rotate('+now+'deg)');
      		$(this).css('transform','rotate('+now+'deg)');  
    		}, duration:'medium' },'swing');
		}
		else {
			$('#contact_triangle_form').animate({  borderSpacing: 360 }, {
    		step: function(now,fx) {
      		$(this).css('-webkit-transform','rotate('+now+'deg)');
      		$(this).css('-moz-transform','rotate('+now+'deg)'); 
      		$(this).css('-ms-transform','rotate('+now+'deg)');
      		$(this).css('-o-transform','rotate('+now+'deg)');
      		$(this).css('transform','rotate('+now+'deg)');  
    		}, duration:'medium' },'swing');
		}
		form ++;
		
	});
});

var national = 0;

$(document).ready(function(){
		$('#contact_slidedown_national').slideUp(0);
});

$(document).ready(function(){
	$('#contact_national').click(function(){
		$('#contact_slidedown_national').slideToggle('swing');
		
		if (national%2==0) {
			$('#contact_triangle_national').animate({  borderSpacing: 180 }, {
    		step: function(now,fx) {
      		$(this).css('-webkit-transform','rotate('+now+'deg)');
      		$(this).css('-moz-transform','rotate('+now+'deg)'); 
      		$(this).css('-ms-transform','rotate('+now+'deg)');
      		$(this).css('-o-transform','rotate('+now+'deg)');
      		$(this).css('transform','rotate('+now+'deg)');  
    		}, duration:'medium' },'swing');
		}
		else {
			$('#contact_triangle_national').animate({  borderSpacing: 360 }, {
    		step: function(now,fx) {
      		$(this).css('-webkit-transform','rotate('+now+'deg)');
      		$(this).css('-moz-transform','rotate('+now+'deg)'); 
      		$(this).css('-ms-transform','rotate('+now+'deg)');
      		$(this).css('-o-transform','rotate('+now+'deg)');
      		$(this).css('transform','rotate('+now+'deg)');  
    		}, duration:'medium' },'swing');
		}
		national ++;
		
	});
});

var northeast = 0;
$(document).ready(function(){
		$('#contact_slidedown_northeast').slideUp(0);
});
$(document).ready(function(){
	$('#contact_northeast').click(function(){
		$('#contact_slidedown_northeast').slideToggle('swing');
		
		if (northeast%2==0) {
			$('#contact_triangle_northeast').animate({  borderSpacing: 180 }, {
    		step: function(now,fx) {
      		$(this).css('-webkit-transform','rotate('+now+'deg)');
      		$(this).css('-moz-transform','rotate('+now+'deg)'); 
      		$(this).css('-ms-transform','rotate('+now+'deg)');
      		$(this).css('-o-transform','rotate('+now+'deg)');
      		$(this).css('transform','rotate('+now+'deg)');  
    		}, duration:'medium' },'swing');
		}
		else {
			$('#contact_triangle_northeast').animate({  borderSpacing: 360 }, {
    		step: function(now,fx) {
      		$(this).css('-webkit-transform','rotate('+now+'deg)');
      		$(this).css('-moz-transform','rotate('+now+'deg)'); 
      		$(this).css('-ms-transform','rotate('+now+'deg)');
      		$(this).css('-o-transform','rotate('+now+'deg)');
      		$(this).css('transform','rotate('+now+'deg)');  
    		}, duration:'medium' },'swing');
		}
		northeast ++;
		
	});
});

var other = 0;
$(document).ready(function(){
		$('#contact_slidedown_other').slideUp(0);
});
$(document).ready(function(){
	$('#contact_other').click(function(){
		$('#contact_slidedown_other').slideToggle('swing');
		
		if (other%2==0) {
			$('#contact_triangle_other').animate({  borderSpacing: 180 }, {
    		step: function(now,fx) {
      		$(this).css('-webkit-transform','rotate('+now+'deg)');
      		$(this).css('-moz-transform','rotate('+now+'deg)'); 
      		$(this).css('-ms-transform','rotate('+now+'deg)');
      		$(this).css('-o-transform','rotate('+now+'deg)');
      		$(this).css('transform','rotate('+now+'deg)');  
    		}, duration:'medium' },'swing');
		}
		else {
			$('#contact_triangle_other').animate({  borderSpacing: 360 }, {
    		step: function(now,fx) {
      		$(this).css('-webkit-transform','rotate('+now+'deg)');
      		$(this).css('-moz-transform','rotate('+now+'deg)'); 
      		$(this).css('-ms-transform','rotate('+now+'deg)');
      		$(this).css('-o-transform','rotate('+now+'deg)');
      		$(this).css('transform','rotate('+now+'deg)');  
    		}, duration:'medium' },'swing');
		}
		other ++;
		
	});
});

var mid = 0;
$(document).ready(function(){
		$('#contact_slidedown_mid').slideUp(0);
});
$(document).ready(function(){
	$('#contact_mid').click(function(){
		$('#contact_slidedown_mid').slideToggle('swing');
		
		if (mid%2==0) {
			$('#contact_triangle_mid').animate({  borderSpacing: 180 }, {
    		step: function(now,fx) {
      		$(this).css('-webkit-transform','rotate('+now+'deg)');
      		$(this).css('-moz-transform','rotate('+now+'deg)'); 
      		$(this).css('-ms-transform','rotate('+now+'deg)');
      		$(this).css('-o-transform','rotate('+now+'deg)');
      		$(this).css('transform','rotate('+now+'deg)');  
    		}, duration:'medium' },'swing');
		}
		else {
			$('#contact_triangle_mid').animate({  borderSpacing: 360 }, {
    		step: function(now,fx) {
      		$(this).css('-webkit-transform','rotate('+now+'deg)');
      		$(this).css('-moz-transform','rotate('+now+'deg)'); 
      		$(this).css('-ms-transform','rotate('+now+'deg)');
      		$(this).css('-o-transform','rotate('+now+'deg)');
      		$(this).css('transform','rotate('+now+'deg)');  
    		}, duration:'medium' },'swing');
		}
		mid ++;
		
	});
});


var sale = 0;
$(document).ready(function(){
		$('#contact_slidedown_sale').slideUp(0);
});
$(document).ready(function(){
	$('#contact_sale').click(function(){
		$('#contact_slidedown_sale').slideToggle('swing');
		
		if (sale%2==0) {
			$('#contact_triangle_sale').animate({  borderSpacing: 180 }, {
    		step: function(now,fx) {
      		$(this).css('-webkit-transform','rotate('+now+'deg)');
      		$(this).css('-moz-transform','rotate('+now+'deg)'); 
      		$(this).css('-ms-transform','rotate('+now+'deg)');
      		$(this).css('-o-transform','rotate('+now+'deg)');
      		$(this).css('transform','rotate('+now+'deg)');  
    		}, duration:'medium' },'swing');
		}
		else {
			$('#contact_triangle_sale').animate({  borderSpacing: 360 }, {
    		step: function(now,fx) {
      		$(this).css('-webkit-transform','rotate('+now+'deg)');
      		$(this).css('-moz-transform','rotate('+now+'deg)'); 
      		$(this).css('-ms-transform','rotate('+now+'deg)');
      		$(this).css('-o-transform','rotate('+now+'deg)');
      		$(this).css('transform','rotate('+now+'deg)');  
    		}, duration:'medium' },'swing');
		}
		sale ++;
		
	});
});
