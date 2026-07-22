/* ==========================================================================
   GSAP & SCROLLTRIGGER ANIMATIONS
   ========================================================================== */

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    initAOS();
    initHeroParallax();
    initTextReveals();
});

/* 1. INITIALIZE AOS */
function initAOS() {
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-cubic'
    });
}

/* 2. HERO PARALLAX EFFECT */
function initHeroParallax() {
    gsap.to(".layer-mountains", {
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
        y: 100
    });

    gsap.to(".layer-pendopo", {
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
        y: -50
    });

    gsap.to(".layer-fog", {
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
        x: 150
    });
}

/* 3. CINEMATIC TEXT REVEAL */
function initTextReveals() {
    const splitTitles = document.querySelectorAll(".title-jawa");
    splitTitles.forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
            },
            opacity: 0,
            y: 30,
            duration: 1.2,
            ease: "power3.out"
        });
    });
}
