$(document).ready(function () {
    function burger(item) {
        let menu = $(item);
        let btn = menu.find('.burger__btn');
        let links = menu.find('.burger__nav__link');

        btn.on('click', function (e) {
            e.preventDefault();
            toggleMenu();
        });
        links.on('click', function () { toggleMenu() });

        function toggleMenu() {
            menu.toggleClass('header__burger_active');
        }


    }
    burger('.header__burger')
});