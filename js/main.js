$('.header_menu').click(function(){
    $('.menu_container').toggleClass('active');
});
$('.memories_slider').slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,  
    // arrows: false,  
    // asNavFor: '.big_slider .slider',
    prevArrow: '<div class="arrow left"><img src="img/arrow.png"></div>',
    nextArrow: '<div class="arrow right"><img src="img/arrow.png"></div>',

});

var windowWidth = $(document).width();
console.log(windowWidth);

if( windowWidth <= 800 ){
    $('.header').removeClass('transparent_head');
}