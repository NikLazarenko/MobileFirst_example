$('.content__portfolio-wrap').slick({
    infinite: true,
    speed: 700,
    fade: true,
    cssEase: 'linear'
});

$(document).ready(function(){
    $('.header__menu a').click(function(){
        $(this).mPageScroll2id({offset: 50});
    });
    $('.content__to-top').click(function(){
        $(this).mPageScroll2id();
    });


    //hamburger handler
    $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
        $('.mobile-menu-list').toggleClass('animated fadeInDown mobile-menu--is-active');
    });
});