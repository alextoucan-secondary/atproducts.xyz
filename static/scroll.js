(function ($) {
    "use strict";
    
    // Check if the user prefers reduced motion
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    $(window).scroll(function () {
        // If user prefers reduced motion, instantly show or hide the button
        if (prefersReducedMotion) {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').show();
            } else {
                $('.back-to-top').hide();
            }
        } else {
            // Otherwise, fade in/out the button as before
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        }
    });
