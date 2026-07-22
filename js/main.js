/* ==========================================================================
   MAIN JAVASCRIPT - ROYAL WEDDING INVITATION
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initLenisSmoothScroll();
    initPreloader();
    initCustomCursor();
    initParticleCanvas();
});

/* 1. LENIS SMOOTH SCROLL */
function initLenisSmoothScroll() {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        smoothWheel: true
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}

/* 2. PRELOADER & CINEMATIC REVEAL */
function initPreloader() {
    const progressBar = document.getElementById('loading-progress');
    const loadingScreen = document.getElementById('loading-screen');
    const curtainLeft = document.getElementById('curtain-left');
    const curtainRight = document.getElementById('curtain-right');
    const gunungan = document.getElementById('gunungan-reveal');

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15) + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Execute Cinematic Reveal Animation via GSAP
            setTimeout(() => {
                const tl = gsap.timeline();
                
                tl.to(gunungan, { y: -200, opacity: 0, duration: 1, ease: "power2.inOut" })
                  .to(curtainLeft, { x: '-100%', duration: 1.5, ease: "power3.inOut" }, "-=0.5")
                  .to(curtainRight, { x: '100%', duration: 1.5, ease: "power3.inOut" }, "-=1.5")
                  .to(loadingScreen, { opacity: 0, display: 'none', duration: 0.5 });
            }, 500);
        }
        progressBar.style.width = `${progress}%`;
    }, 120);
}

/* 3. CANVAS GOLDEN DUST & FIREFLIES */
function initParticleCanvas() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.5,
        color: 'rgba(212, 175, 55, ' + (Math.random() * 0.5 + 0.2) + ')',
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * -0.5 - 0.2
    }));

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.y < 0) p.y = height;
            if (p.x < 0 || p.x > width) p.vx *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}
