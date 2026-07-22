document.addEventListener("DOMContentLoaded", () => {
    // Initialize Fancybox Lightbox
    if (typeof Fancybox !== "undefined") {
        Fancybox.bind("[data-fancybox='gallery']", {
            Infinite: true,
            TransitionEffect: "slide",
        });
    }

    // Initialize Swiper for Video or Special Moments Slider
    if (typeof Swiper !== "undefined") {
        new Swiper('.video-swiper', {
            slicePerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        });
    }
});
