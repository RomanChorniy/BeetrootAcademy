$(document).ready(function () {
    $('.social__logo').click(function () {
        if ($('.footer__nav').css('display') === 'none') $('.footer__nav').css('display', 'block')
        else $('.footer__nav').css('display', 'none')
    });
});

