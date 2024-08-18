AOS.init({
    duration: 1000,
    once: true
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    });
});