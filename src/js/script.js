window.addEventListener("DOMContentLoaded", () => {

});

function burgerSwitch() {
    const body = document.querySelector("body")
    const burger = document.querySelector(".burger");
    const burgerItems = document.querySelector(".burger__items");
    const menuBurger = document.querySelector(".menu__burger");
    const menuItemsSmall = document.querySelector(".menu__items_small");

    burger.addEventListener("click", () => {
        menuBurger.classList.toggle("menu__burger_show");
        burgerItems.classList.toggle("burger__items_opened");
        body.classList.toggle("body-fixed");
    });

    menuItemsSmall.addEventListener("click", (event) => {
        // if (event.target == menuItems) {
        menuBurger.classList.remove("menu__burger_show");
        burgerItems.classList.remove("burger__items_opened");
        // }
        console.log(event.target);
    });
}

function showArrowUp() {
    const arrowBlock = document.querySelector(".arrow-up");
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 800 && window.innerWidth > 768) {
            arrowBlock.classList.add("arrow-up_active");
        } else if (window.scrollY >= 600 && window.innerWidth <= 768) {
            arrowBlock.classList.add("arrow-up_active");
        } else {
            arrowBlock.classList.remove("arrow-up_active");
        }

    });
}

burgerSwitch();
showArrowUp();

