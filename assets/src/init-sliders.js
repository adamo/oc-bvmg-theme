import { tns } from "tiny-slider/src/tiny-slider";

export function initSliders() {
    let heroSlider = document.querySelector(".hero .text-slider");
    let portfolioSlider = document.querySelector(".portfolio-carousel");
    let testimonialsSlider = document.querySelector(
        ".depcore__testimonials-container"
    );

    const globalControls = {
        nav: false,
        autoplay: true,
        autoplayButtonOutput: false,
        controls: false,
        items: 1,
        navPosition: "bottom",
    };

    if (heroSlider) {
        tns({
            container: heroSlider,
            ...globalControls,
        });
    }

    if (testimonialsSlider) {
        tns({
            container: testimonialsSlider,
            ...globalControls,
            nav: true,
        });
    }

    if (portfolioSlider) {
        tns({
            container: portfolioSlider,
            ...globalControls,
            nav: true,
        });
    }
}
