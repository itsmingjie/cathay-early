AOS.init({
    duration: 1000,
    once: true
});

particlesJS.load('particles-js', '/js/particles.config.json', function () {
    console.log('callback - particles.js config loaded');
});