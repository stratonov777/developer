const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuLink = document.querySelector('.menu__list'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay');
      
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLink.addEventListener('click', () => {
    // menu.classList.remove('active');
});

