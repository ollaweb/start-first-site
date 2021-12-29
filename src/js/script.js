window.addEventListener("DOMContentLoaded", () => {

});

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
    console.log(e.target);
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

// ================= Слайдер ===============================
