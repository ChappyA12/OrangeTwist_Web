// JavaScript Document
/*$(document).ready(function(){
    $(".menuBar").mouseover(function(){
        $(this).fadeTo('fast',1);
});});
$(document).ready(function(){
    $(".menuBar").mouseleave(function(){
        $(this).fadeTo('fast',0.6);
});});*/

function theRotator() {
	//Set the opacity of all images to 0
	$('div.rotator ul li').css({opacity: 0.0});
	//Get the first image and display it (gets set to full opacity)
	$('div.rotator ul li:first').css({opacity: 1.0});	
	//Call the rotator function to run the slideshow, 6000 = change to next image after 6 seconds
	setInterval('rotate()',4000);
}
function rotate() {	
	//Get the first image
	var current = ($('div.rotator ul li.show')?  $('div.rotator ul li.show') : $('div.rotator ul li:first'));
    if ( current.length == 0 ) current = $('div.rotator ul li:first');
	//Get next image, when it reaches the end, rotate it back to the first image
	var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('div.rotator ul li:first') :current.next()) : $('div.rotator ul li:first'));
	//Un-comment the 3 lines below to get the images in random order
	//var sibs = current.siblings();
        //var rndNum = Math.floor(Math.random() * sibs.length );
        //var next = $( sibs[ rndNum ] );
	//Set the fade in effect for the next image, the show class has higher z-index
	next.css({opacity: 0.0})
	.addClass('show')
	.animate({opacity: 1.0}, 1000);
	//Hide the current image
	current.animate({opacity: 0.0}, 1000)
	.removeClass('show');
};
$(document).ready(function() {		
	//Load the slideshow
	theRotator();
	$('div.rotator').fadeIn(1000);
    $('div.rotator ul li').fadeIn(1000); // tweek for IE
});


$(document).ready(function() {
	$('.standard').hover(
		function(){
			$(this).find('.caption').show();
		},
		function(){
			$(this).find('.caption').hide();
		}
	);
	$('.fade').hover(
		function(){
			$(this).find('.caption').fadeIn(150);
		},
		function(){
			$(this).find('.caption').fadeOut(020);
		}
	);
	$('.slide').hover(
		function(){
			$(this).find('.caption').slideDown(250);
		},
		function(){
			$(this).find('.caption').slideUp(250);
		}
	);
});

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

//menubar

$(document).ready(function(){
		$('#Menubar_Slidedown').slideUp(0);
});
$(document).ready(function(){
	$('#Menubar_Button').click(function(){
		$('#Menubar_Slidedown').slideToggle('swing');
	});
});

