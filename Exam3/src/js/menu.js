import * as $ from 'jquery';
$(document).ready(() => {
    //Menu Button.
    let lastScrollPos = 0;
    let windowHeight = $(window).height();
    $(document).scroll(() => {
        let currentScrollPos = $(document).scrollTop()
        if (currentScrollPos > lastScrollPos) {
            $('.logo').css('display', 'none');
            lastScrollPos = currentScrollPos;
        }
        else {
            $('.logo').css('display', 'flex');
            lastScrollPos = currentScrollPos;

            $('#vacationChecklist').each(function () {
                var self = $(this),
                    height = self.offset().top + self.height();
                if (($(document).scrollTop() + windowHeight >= height) && ($(document).scrollTop() + windowHeight < height + 2451)) {
                    $('.btn__line').addClass('line_black');
                    $('.logo__image').addClass('black_logo');
                }
                else {
                    $('.btn__line').removeClass('line_black');
                    $('.logo__image').removeClass('black_logo');
                }
            });

        }
    });
    $('.menu__btn').click(() => {
        if (!($('.logo').hasClass('menu__open'))) {
            $('.logo').addClass('menu__open');
            $('.menu__page').css('transform', 'translateY(100%)');
        }
        else {
            $('.logo').removeClass('menu__open');
            $('.menu__page').css('transform', 'translateY(-100%)');
        }
    });
    $('.menuExit').click(() => {
        $('.logo').removeClass('menu__open');
        $('.menu__page').css('transform', 'translateY(-100%)');
    });
});