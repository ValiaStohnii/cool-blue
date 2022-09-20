/**
 * @author      Valia <valiastohnii@gmail.com>
 * @copyright   Copyright (c) 2022 GmbH 
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
*/

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