$(document).ready(function () {
    $('.header__slider').slick({
        arrows: false,
        dots: true,
        vertical: true,
        verticalSwiping: true,
    });

    let b;

    if ($(window).width() < 1266 && $(window).width() > 800) b = 2;
    if ($(window).width() < 800) b = 1;
    if ($(window).width() > 1266) b = 3;

    $('.news__slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        dots: true,
        slidesToShow: b,
        centerMode: true,
        centerPadding: '-30px'
    });

    $(window).resize(function () {
        let a = $(window).width();
        if (a < 1266 && a > 800) {
            b = 2
            $('.news__slider').slick("slickSetOption", "slidesToShow", b, true);
        };
        if (a < 800) {
            b = 1;
            $('.news__slider').slick("slickSetOption", "slidesToShow", b, true);
        };
        if (a > 1266) {
            b = 3;
            $('.news__slider').slick("slickSetOption", "slidesToShow", b, true);
        };
    });
});
