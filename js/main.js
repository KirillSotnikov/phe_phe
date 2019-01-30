$('.header_menu').click(function(){
    $('.menu_container').toggleClass('active');
});
$('.memories_slider').slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,  
    // arrows: false,  
    // asNavFor: '.big_slider .slider',
    prevArrow: '<div class="arrow left"><img src="/img/arrow.png"></div>',
    nextArrow: '<div class="arrow right"><img src="/img/arrow.png"></div>',

});

var windowWidth = $(document).width();
// console.log(windowWidth);

if( windowWidth <= 850 ){
    $('.header').removeClass('transparent_head');
}

var scroolHeader = function(){
    // var scroollEventer = $('html').scrollTop();
    let scroollEventer = () => { 
        const el = document.scrollingElement || document.documentElement; 
        return el.scrollTop; 
    }
    // console.log(scroollEventer());
    if(scroollEventer() >= 100){
        $('.header').removeClass('transparent_head');
    } else if (scroollEventer() <= 100 && windowWidth >= 850){
        $('.header').addClass('transparent_head');
    }
}
$(window).on('load', scroolHeader);
$(window).scroll(scroolHeader);

$('.header_logo').click(function(){
    document.open('index.html');
})

// $(window).on('mousewheel',scroolHeader); 