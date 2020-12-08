const sections = document.querySelectorAll('.section');

const observerRootMargin = window.innerHeight / 2;

const options = {
  root: null,
  threshold: 0,
  rootMargin: '-100px'
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

  menuItens.forEach((item) => {
    if (item.getAttribute('data-link') === elementId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  })
}