const sections = document.querySelectorAll('.section');

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

const options = {
  root: null,
  threshold: 0,
  rootMargin: '-300px 0px'
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
});
