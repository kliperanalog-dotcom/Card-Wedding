/* ==========================================================================
   MAIN JAVASCRIPT - ROYAL WEDDING INVITATION
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initPreloader();
    initCustomCursor();
    initParticleCanvas();
});

/* 1. PRELOADER AUTOMATIC REVEAL (PAKSA BUKA) */
function initPreloader() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hilangkan layar hitam/loading otomatis dalam 1 detik
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.visibility = 'hidden';
            loadingScreen.style.pointerEvents = 'none';
            loadingScreen.style.transition = 'all 0.8s ease';
        }
    }, 1000);
}

/* 2. CUSTOM CURSOR */
function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    if (!cursor || !follower) return;

    window.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        follower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    });
}

/* 3. GOLDEN DUST PARTICLES */
function initParticleCanvas() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles = Array.from({ length: 40 }, () => ({
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
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}
