$(function () {
    $('nav.box__nav').on('click', 'a:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('section.box').find('div.container').removeClass('active')
            .eq($(this).index()).addClass('active');
    });
});
