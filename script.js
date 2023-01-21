/* VARIABLES */
const header = document.querySelector('header');

/* EVENT LISTENERS */
window.addEventListener('scroll', function () {
  let scroll = window.scrollY;
  if (scroll > 60) {
    header.style.backgroundColor = 'white';
    header.style.boxShadow = 'var(--box-shadow-100)'
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.boxShadow = 'none'
  }
});