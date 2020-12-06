const sections = document.querySelectorAll('.section');

const observerRootMargin = window.innerHeight / 2;

const options = {
  root: null,
  threshold: 0,
  rootMargin: `-${observerRootMargin}px`
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateHeader(entry.target.getAttribute('id'));
    };
  })
}, options);

sections.forEach(section => {
  observer.observe(section);
})

function animateHeader (elementId) {
  const menuItens = document.querySelectorAll('.menu-link');

  switch (elementId) {
    case 'intro':
      menuItens.forEach((item) => {
        if (item.classList.contains('menu-intro')) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
      break;

    case 'portfolio':
      menuItens.forEach((item) => {
        if (item.classList.contains('menu-portfolio')) {
          console.log('portfolio');
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
      break;

    case 'about':
      menuItens.forEach((item) => {
        if (item.classList.contains('menu-about')) {
          console.log('about');
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
      break;

    case 'contact':
      menuItens.forEach((item) => {
        if (item.classList.contains('menu-contact')) {
          console.log('contact');
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
      break;

    default:
      return;
  }
}