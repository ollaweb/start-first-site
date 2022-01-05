"use strict";
//================== Меню бургер =========================

/*
Настройка меню бургер (открытие/закрытие при нажатии на бургер;
закрытие при переходе по ссылке меню)
*/

const body = document.querySelector("body")
const burger = document.querySelector(".burger");
const burgerItems = document.querySelector(".burger__items");
const menuBurger = document.querySelector(".menu-burger");

function burgerSwitch() {
    menuBurger.classList.toggle("_opened");
    burgerItems.classList.toggle("_opened");
    body.classList.toggle("_lock");
}

burger.addEventListener("click", () => {
    burgerSwitch();
});


const menuItemsLink = document.querySelectorAll(".menu-burger__item");

menuItemsLink.forEach(item => {
    const link = item.querySelector("a");
    link.addEventListener("click", (e) => {
        e.stopPropagation();
        burgerSwitch();

    });
});

const layout = document.querySelector(".menu__layout");
document.addEventListener("click", (e) => {
    if (e.target === layout && menuBurger.classList.contains("_opened")) {
        burgerSwitch();
    }
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

// ================= Слайдер центральный ===============================

const ribbon = document.querySelector(".slider__ribbon");
const view = document.querySelector(".slider__view");
const imgArray = document.querySelectorAll(".slider__img");
const imgCount = imgArray.length;
const prevButton = document.querySelector(".slider__prev");
const nextButton = document.querySelector(".slider__next");
// const dotsBlock = document.querySelector(".slider__dots");
let index = 0;

//Начальная настройка слайдера

//индекс центрального элемента
// let index = (imgCount - 1) / 2;

//Вставляем количество точек на страницу в зависимости от количества картинок в слайдере
// for (let i = 0; i < imgCount; i++) {
//     dotsBlock.insertAdjacentHTML('beforeend', '<div class="slider__dot"></div>');
// }

//Получаем массив отрисованных точек
// const dots = document.querySelectorAll(".slider__dot");

//Добавляем классы активности к центральной картинке и точке
// imgArray[index].classList.add("_focus");


//Ширина и отступы картинок
const imgWidth = 300;
const imgGap = 30;

//Настройка всех картинок слайдера
imgArray.forEach(img => {
    img.style.width = String(imgWidth) + "px";
    img.style.marginLeft = String(imgGap / 2) + "px";
    img.style.marginRight = String(imgGap / 2) + "px";
});

//Настройка ленты слайдера
ribbon.style.paddingLeft = String(imgGap / 2) + "px";
ribbon.style.paddingRight = String(imgGap / 2) + "px";

//Настройка области видимости слайдера (через какое окошко видна лента)
view.style.width = String(imgWidth * 3 + imgGap * 4) + "px";

//Функция по перелистыванию картинок
function slide() {
    ribbon.style.transform = `translateX(-${(index) * (imgWidth + imgGap)}px)`;
}
//Настроить центральную картинку по центру
slide();

//Обработчик книпки назад
prevButton.addEventListener("click", () => {
    if (index == 0) {
        index = imgCount - 3;
    } else {
        index--;
    }
    slide();
});

//Обработчик книпки вперед
nextButton.addEventListener("click", () => {
    if (index == imgCount - 3) {
        index = 0;
    } else {
        index++;
    }
    slide();
});