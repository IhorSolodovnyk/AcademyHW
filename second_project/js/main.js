$(document).ready(function () {
    $('.hero_slider').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
});

$(document).ready(function () {
    $('.article_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '.prev_arrow',
        nextArrow: '.next_arrow',
        infinite: true,
        responsive: [{

            breakpoint: 968,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 620,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }},
        ]
    });
});

lightGallery(document.querySelector('.grid_gallery'), {
    mode: 'lg-fade',
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
    licenseKey: 'your_license_key',
});
const customIcon = L.icon({
    iconUrl: './img/yellow_bus_icon.png',

    iconSize: [100, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});

const map = L.map('map_section').setView([51.49239989800588, 31.29094757451364], 20);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: ''
}).addTo(map);

L.marker([51.492239084172006, 31.291088045773783], {
        icon: customIcon
    }).addTo(map)
    .bindPopup('Bus Station')
    .openPopup();
//Header BCG
window.onscroll = function () {
    headerBackground()
};

let _100vh = Math.round(window.innerHeight);

function headerBackground() {
    if (document.documentElement.scrollTop > _100vh) {
        document.querySelector('.header_wrapper').classList.add('active');
    } else {
        document.querySelector('.header_wrapper').classList.remove('active');
    }
}

function toggleMenu(e) {
    e.preventDefault();

    document.querySelector('.hamburger').classList.toggle('is-active');
    document.querySelector('.main_nav').classList.toggle('menu-open');
    
}