"use strict";
//================== Меню бургер =========================

/*
Настройка меню бургер (открытие/закрытие при нажатии на бургер;
закрытие при переходе по ссылке меню)
*/

const body = document.querySelector("body")
const burger = document.querySelector(".burger");
const burgerItems = document.querySelector(".burger__items");
const menuAside = document.querySelector(".menu__items");
const menu = document.querySelector(".menu");


function burgerSwitch() {
    if (window.innerWidth <= 768) {
        menuAside.classList.toggle("_opened");
        burgerItems.classList.toggle("_opened");
        body.classList.toggle("_lock");
    }

}

burger.addEventListener("click", () => {
    burgerSwitch();
});


const menuItemsLink = document.querySelectorAll(".menu__item");

menuItemsLink.forEach(item => {
    const link = item.querySelector("a");
    link.addEventListener("click", (e) => {
        e.stopPropagation();
        burgerSwitch();

    });
});

// ================= Стрелка наверх ========================

/*
Появление стрелки вверх для прокрутки при скролле вниз на 800 на desktop;
при скроле вниз на 600 на планшете и мобильном телфоне
*/

const arrowBlock = document.querySelector(".arrow-up");
window.addEventListener("scroll", () => {
    if (window.scrollY >= 800 && window.innerWidth > 768) {
        arrowBlock.classList.add("_active");
    } else if (window.scrollY >= 600 && window.innerWidth <= 768) {
        arrowBlock.classList.add("_active");
    } else {
        arrowBlock.classList.remove("_active");
    }

});

// ================= slick-slider ===============================
$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        slidesToShow: 3,
        speed: 700,
        draggable: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    // dots: false,
                    arrows: false,
                }
            },
        ]
    });
});