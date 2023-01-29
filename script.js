/* VARIABLES */
const body = document.querySelector('html');
const header = document.querySelector('header');
const navButton = document.querySelector('header button');
const navigation = document.querySelector('header nav');

/* EVENT LISTENERS */
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  if (scroll > 60) {
    header.classList.add('scrolled-to-top');
    header.style.boxShadow = 'var(--box-shadow-100)'
  } else {
    header.classList.remove('scrolled-to-top');
    header.style.boxShadow = 'none'
  }
});

navButton.addEventListener('click', () => {

  const isOpened = navButton.getAttribute('aria-expanded') === "true";
  if (isOpened ? closeMenu() : openMenu());

  navButton.classList.toggle('open');
  navigation.classList.toggle('nav--open');
})

function openMenu() {
  navButton.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  navButton.setAttribute('aria-expanded', 'false');
}