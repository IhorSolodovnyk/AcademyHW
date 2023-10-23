$(document).ready(function() {
    $('.hero_slider').slick({
      vertical: true, 
      verticalSwiping: true, 
      slidesToShow: 1, 
      slidesToScroll: 1, 
      arrows: false,
      dots: true, 
      //autoplay: true,
      //autoplaySpeed: 5000
    });
  });

$(document).ready(function () {
    $('.article_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '.prev_arrow',
        nextArrow: '.next_arrow',
        responsive: [
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
});
