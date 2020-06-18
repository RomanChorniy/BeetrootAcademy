$(document).ready(function () {
    // $('.room__slider').slick({
    //     slidesToShow: 1,
    //     arrows: true,
    //     dots: true,
    //     infinite: false,
    // });
    $('.dot1').click(() => {
        $('.slider__item1').css('display', 'block');
        $('.slider__item2').css('display', 'none');
        $('.slider__item3').css('display', 'none');
        $('.dot1').addClass('active');
        $('.dot2').removeClass('active');
        $('.dot3').removeClass('active');
    });
    $('.dot2').click(() => {
        $('.slider__item2').css('display', 'block');
        $('.slider__item1').css('display', 'none');
        $('.slider__item3').css('display', 'none');
        $('.dot2').addClass('active');
        $('.dot1').removeClass('active');
        $('.dot3').removeClass('active');
    });
    $('.dot3').click(() => {
        $('.slider__item3').css('display', 'block');
        $('.slider__item2').css('display', 'none');
        $('.slider__item1').css('display', 'none');
        $('.dot3').addClass('active');
        $('.dot1').removeClass('active');
        $('.dot2').removeClass('active');
    });
});