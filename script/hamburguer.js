const hamburguerBtn = window.document.querySelector('.hamburguer-btn');
const navMenu = window.document.querySelector('.header-nav')

hamburguerBtn.addEventListener('click', () => {
  if (navMenu.classList.contains('hidden')) {
    navMenu.classList.remove('hidden');
  } else {
    navMenu.classList.add('hidden');
  }
});
