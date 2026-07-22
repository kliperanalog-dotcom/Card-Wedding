function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    if (!cursor || !follower) return;

    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    });

    function loop() {
        posX += (mouseX - posX) * 0.1;
        posY += (mouseY - posY) * 0.1;
        follower.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;
        requestAnimationFrame(loop);
    }
    loop();

    // Hover Scaling Effect
    document.querySelectorAll('a, button, .tilt-effect').forEach(el => {
        el.addEventListener('mouseenter', () => {
            follower.style.width = '60px';
            follower.style.height = '60px';
            follower.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
        });
        el.addEventListener('mouseleave', () => {
            follower.style.width = '36px';
            follower.style.height = '36px';
            follower.style.backgroundColor = 'transparent';
        });
    });
}
