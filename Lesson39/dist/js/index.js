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
$(document).ready(function () {
    $('a.scrollto').click(function () {
        elementClick = $(this).attr('href')
        destination = $(elementClick).offset().top;
        $('html:not(:animated),body:not(:animated)').animate({ scrollTop: destination }, 1100);
        return false;
    });
});
function initMap() {
    // The location of firm
    const firmLocation = { lat: 40.682860, lng: -73.895481 };
    const mapCenter = { lat: 40.644879, lng: -73.882688 }
    const mapOption = {
        zoom: 12,
        center: mapCenter,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "weight": "2.00"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#9c9c9c"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#7b7b7b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#46bcec"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#c8d7d4"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#070707"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            }
        ]
    }
    // The map, centered at firm
    var map = new google.maps.Map(
        // document.getElementById('map'), { zoom: 12, center: mapCenter });
        document.getElementById('map'), mapOption);
    map.setMapTypeId('terrain');
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: firmLocation,
        map: map,
        icon: 'img/map/marker.png'
    });
}
$(document).ready(function () {
    $('.social__logo').click(function () {
        if ($('.footer__nav').css('display') === 'none') $('.footer__nav').css('display', 'block')
        else $('.footer__nav').css('display', 'none')
    });
});


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
