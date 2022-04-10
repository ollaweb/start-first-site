"use strict"
import $ from 'jquery';

export default function scroll() {
    //Плавный скролл наверх
    $('a[href^="#"').on('click', function () {

        let href = $(this).attr('href');

        if (href == "#up") {
            $('html, body').animate({
                scrollTop: $(href).offset().top
            }, {
                duration: 400,
            });
        } else {
            $('html, body').animate({
                scrollTop: $(href).offset().top
            }, {
                duration: 700,
            });
        }
        return false;
    });
}
