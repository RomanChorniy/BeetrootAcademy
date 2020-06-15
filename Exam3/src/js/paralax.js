import * as $ from 'jquery';
$(document).ready(() => {
    $(window).scroll(function (e) {
        let skroll = $(this).scrollTop();    //!!!
        let w = $(this).outerWidth();   //!!!
        let itemHeight = $('.parallax').outerHeight();
        let p = skroll / itemHeight * 100;
        let hr = w / 6000 * p;
        //Parallax image.
        $('.box1__image_p').css('transition', '1s cubic-bezier(0.19, 1, 0.22, 1)');
        $('.box1__image_p').css('transform', 'translateY(' + hr + 'px)');
        //Parallax text.
        $('.box2__text').css('transition', '1s cubic-bezier(0.19, 1, 0.22, 1)');
        $('.box2__text').css('transform', 'translateY(-' + hr + 'px)');

        //Section "What we do". Paralax on image.
        let section4Speed = w / 1500 * p;
        $('.analitic__image').css('transition', '1s cubic-bezier(0.19, 1, 0.22, 1)');
        $('.analitic__image').css('transform', 'translateY(-' + section4Speed + 'px)');

        //Section "contact us". Paralax on image.
        let section6Speed = w / 1500 * p;
        $('.contactUs__box2').css('top', '52%');
        $('.contactUs__box2').css('transition', '1s cubic-bezier(0.19, 1, 0.22, 1)');
        $('.contactUs__box2').css('transform', 'translateY(-' + section6Speed + 'px)');
    });
});