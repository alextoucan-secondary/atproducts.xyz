$(function () {
    $('.carousel-main').carousel({
        interval:2000,
        pause: "false"
    });
    
    $('.playButton').click(function () {
        $('.carousel-main').carousel('cycle');
    });
    $('.pauseButton').click(function () {
        $('.carousel-main').carousel('pause');
    });
});
