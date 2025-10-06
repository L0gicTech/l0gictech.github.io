
const fadeElements = document.querySelectorAll('.fade-in');
const slideLeftElements = document.querySelectorAll('.slide-in-left');
const slideRightElements = document.querySelectorAll('.slide-in-right');

const animateOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
    
    slideLeftElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
    
    slideRightElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
};

const backToTopButton = document.createElement('button');
backToTopButton.className = 'back-to-top';
backToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
backToTopButton.setAttribute('aria-label', 'Наверх');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
    
    animateOnScroll();
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
});

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main') || document.body;
    mainContent.classList.add('content-fade-in');

    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        const cards = document.querySelectorAll('.project-card, .value-item, .team-member');
        cards.forEach(card => {
            card.classList.add('pulse-element');
        });
    }
});

window.addEventListener('load', () => {
    animateOnScroll();

});
