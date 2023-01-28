/* VARIABLES */
const header = document.querySelector('header');
const navButton = document.querySelector('header button');
const navigation = document.querySelector('header nav');

/* EVENT LISTENERS */
window.addEventListener('scroll', function () {
  let scroll = window.scrollY;
  if (scroll > 60) {
    header.classList.add('scrolled-to-top');
    header.style.boxShadow = 'var(--box-shadow-100)'
  } else {
    header.classList.remove('scrolled-to-top');
    header.style.boxShadow = 'none'
  }
});

navButton.addEventListener('click', function () {
  if (header.classList.contains('navigation-opened')) {
    header.classList.remove('navigation-opened');
  } else {
    header.classList.add('navigation-opened');
  }
})