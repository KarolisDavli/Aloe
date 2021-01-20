const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
    });
};


navSlide();



// Scroll Reveal
ScrollReveal().reveal('h2', {
    delay: 200,
    distance: '-75px'
});

ScrollReveal().reveal('nav', {
    delay: 150
});
ScrollReveal().reveal('.header-text');
ScrollReveal().reveal('.heading-p', {
    delay: 250
});

ScrollReveal().reveal('.product-item', {
    interval: 150,
    distance: '75px'
});

ScrollReveal().reveal('.btn-secondary', {
    origin: 'right'
});

ScrollReveal().reveal('.blog-flex-item', {
    interval: 150,
    distance: '75px'
});

ScrollReveal().reveal('.company-item', {
    distance: '75px'
})