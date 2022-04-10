"use strict"

import $ from 'jquery';
import 'slick-carousel';


export default function slickSlider() {
    // ================= slick-slider ===============================
    $(document).ready(function () {
        $('.slider').slick({
            dots: true,
            slidesToShow: 3,
            speed: 400,
            draggable: false,
            touchThreshold: 25,
            cssEase: "ease-out",
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        touchThreshold: 45,

                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                },
            ]
        });
    });
}
