window.addEventListener("DOMContentLoaded", () => {

});

function burgerSwitch() {
    const burger = document.querySelector(".burger");
    const burgerItems = document.querySelector(".burger__items");
    const menuBurger = document.querySelector(".menu__burger");
    const menuItemsSmall = document.querySelector(".menu__items_small");

    burger.addEventListener("click", () => {
        menuBurger.classList.toggle("menu__burger_show");
        burgerItems.classList.toggle("burger__items_opened");
    });

    menuItemsSmall.addEventListener("click", (event) => {
        // if (event.target == menuItems) {
        menuBurger.classList.remove("menu__burger_show");
        burgerItems.classList.remove("burger__items_opened");
        // }
        console.log(event.target);
    });
}

burgerSwitch();

