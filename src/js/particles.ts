declare const particlesJS: any;

export function initParticles() {
    particlesJS("particles-js", {
        // ... (votre configuration particlesJS)
    });
}

export function updateStats() {
    const stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    const count_particles = document.querySelector('.js-count-particles');
    const update = function() {
        stats.begin();
        stats.end();
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
            (count_particles as HTMLElement).innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
}
