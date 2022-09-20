define([
    'jquery',
    'slick'
], function ($) {

    let categoriesSlider = $('.categories > .pagebuilder-column-line');
    if (categoriesSlider.length) {

        categoriesSlider.slick({
            slidesToScroll: 1,
            swipeToSlide: true,
            slidesToShow: 6,
            dots: false,
            infinite: true,
            arrows: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerPadding: '60px',
                        centerMode: true,
                        arrows: false,
                        slidesToShow: 2,
                    }
                }
            ],
        });

    }

});