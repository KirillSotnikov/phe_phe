// const pageId = $('main').attr('id');


// switch (pageId) {
//     case 'aboutUsID': {
//         // initMainPage();
//         break;
//     }
// }

if(localStorage.getItem('cookieKey')){
    $('.modal_container').removeClass('active');
}

$('.header_menu').click(function(){
    $('.header_menu').toggleClass('active');
    $('.menu_container').toggleClass('active');
});

$('.memories_slider').slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,  
    // arrows: false,  
    // asNavFor: '.big_slider .slider',
    prevArrow: '<div class="arrow left"><img src="/dmaparat-new/img/arrow.png"></div>',
    nextArrow: '<div class="arrow right"><img src="/dmaparat-new/img/arrow.png"></div>',
});

function closeModal(){
    $('.modal_container').removeClass('active');
    localStorage.setItem('cookieKey', 'cookieItem');
};
// function openModal(){
//     $('.modal_container').addClass('active');
// }
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
$(window).on('load', function(){
    scroolHeader();
});
$(window).scroll(scroolHeader);