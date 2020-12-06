const hamburguerBtn = window.document.querySelector('.hamburguer-btn');
const navMenu = window.document.querySelector('.header-nav')

hamburguerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
})

const menuLinks = window.document.querySelectorAll('.menu-link');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.add('hidden');
  })
})