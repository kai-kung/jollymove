
/*-----------------------------------------------------------------------------------*/
/*  SCROLL NAVIGATION HIGHLIGHT
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
    headerWrapper       = parseInt($('.navbar').height());
    
    
    var shrinked_header_height = 53;
    var header_height = $('.navbar').height();
    
    $('.offset').css('padding-top', header_height + 'px');
    $('.anchor').css('padding-top', shrinked_header_height + 'px');  
    $('.anchor').css('margin-top', -(shrinked_header_height) + 'px'); 
    
    offsetTolerance = -(header_height);
    
    //Detecting user's scroll
    $(window).scroll(function() {
    
        //Check scroll position
        scrollPosition  = parseInt($(this).scrollTop());
        
        //Move trough each menu and check its position with scroll position then add current class
        $('.navbar ul a').each(function() {

            thisHref                = $(this).attr('href');
            thisTruePosition    = parseInt($(thisHref).offset().top);
            thisPosition        = thisTruePosition - headerWrapper - offsetTolerance;
            
            if(scrollPosition >= thisPosition) {
                
                $('.current').removeClass('current');
                $('.navbar ul a[href='+ thisHref +']').parent('li').addClass('current');
                
            }
        });
        
        
        //If we're at the bottom of the page, move pointer to the last section
        bottomPage  = parseInt($(document).height()) - parseInt($(window).height());
        
        if(scrollPosition == bottomPage || scrollPosition >= bottomPage) {
        
            $('.current').removeClass('current');
            $('.navbar ul a:last').parent('li').addClass('current');
        }
    });
    
});


/*-----------------------------------------------------------------------------------*/
/*	REVOLUTION
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
jQuery('.fullscreenbanner').revolution(
	{
		delay: 9000,
		startwidth: 1170,
		startheight: 550,
		hideThumbs: 200,
		fullWidth:"off",
		fullScreen:"on"
	});
});


(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 56)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 57
    });

})(jQuery);