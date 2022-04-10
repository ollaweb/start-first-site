"use strict";

export default function burger() {
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
}
