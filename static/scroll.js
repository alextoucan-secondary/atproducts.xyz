var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function ($) {
    "use strict";
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);



}

// Set all carousel items to the same height
    function carouselNormalization() {
        
        window.heights = [], //create empty array to store height values
        window.tallest; //create variable to make note of the tallest slide
        
        function normalizeHeights() {
            jQuery('.carousel-products .carousel-inner .carousel-item').each(function() { //add heights to array
                window.heights.push(jQuery(this).outerHeight());
            });
            window.tallest = Math.max.apply(null, window.heights); //cache largest value
            jQuery('.carousel-products .carousel-inner .carousel-item').each(function() {
                jQuery(this).css('min-height',tallest + 'px');
            });
        }
        normalizeHeights();

        jQuery(window).on('resize orientationchange', function () {
            
            window.tallest = 0, window.heights.length = 0; //reset vars
            jQuery('.carousel-products .carousel-inner .carousel-item').each(function() {
                jQuery(this).css('min-height','0'); //reset min-height
            }); 
            
            normalizeHeights(); //run it again 

        });
        
    }
    
    jQuery( document ).ready(function() {
        carouselNormalization();
    });
