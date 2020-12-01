const introButton = window.document.querySelector('.intro-button');
const header = window.document.querySelector('#header');

introButton.addEventListener('click', () => {
  header.scrollIntoView({behavior: "smooth"});
});

