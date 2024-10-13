document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });


    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    gsap.to('.sitar', {duration: 1, opacity: 1, delay: 0.5});
    gsap.to('.tabla', {duration: 1, opacity: 1, delay: 1});
    gsap.to('.flute', {duration: 1, opacity: 1, delay: 1.5});


    const animateOnScroll = (elements) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {threshold: 0.1});

        elements.forEach(el => observer.observe(el));
    };

    animateOnScroll(document.querySelectorAll('.course-card'));
    animateOnScroll(document.querySelectorAll('.gallery-item'));

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        document.querySelector('.hero').style.backgroundPositionY = scrollPosition * 0.7 + 'px';
    });

    
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });
});