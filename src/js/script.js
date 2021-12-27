import slider from "./modules/slider";

window.addEventListener("DOMContentLoaded", () => {
    slider({
        prev_arrow: ".slider__prev",
        next_arrow: ".slider__next",
        dots: ".slider__dot"
    })
});
