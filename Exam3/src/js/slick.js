import * as $ from 'jquery';
import 'slick-carousel';

$(".menu__page__slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    arrows: false,
    speed: 20000,
});

//Slick slider from section "vacationCheacklist".
$(".box2__slideshow").slick({
    prevArrow: $('.btnBox__btnUp'),
    nextArrow: $('.btnBox__btnDown'),
});

// Section "gallery". Slider settings.
$(".gallery__slider").slick({
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1390,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
            }
        }]
});

//Section header. Slider settings.
$(".slider__start").slick({
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 2000,
    fade: true,
    cssEase: 'linear'
});