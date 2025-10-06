const burgerMenu = document.querySelector('.burger-menu');
const mobileNav = document.querySelector('.mobile-nav');
const closeMenu = document.querySelector('.close-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.add('active');
    mobileNav.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    mobileNav.classList.remove('active');
    document.body.style.overflow = 'auto';
});

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

mobileNav.addEventListener('click', (e) => {
    if (e.target === mobileNav) {
        burgerMenu.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        burgerMenu.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

});
