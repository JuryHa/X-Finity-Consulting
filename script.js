/* VARIABLES */
const body = document.querySelector('html');
const header = document.querySelector('header');
const navButton = document.querySelector('header button');
const navigation = document.querySelector('header nav');
const menuItems = document.querySelectorAll('header ul a');

const headingText = document.querySelector('h1');

/* EVENT LISTENERS */
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  if (scroll < 60) {
    header.classList.remove('scrolled-to-top');
    header.style.boxShadow = 'none'
  } else {
    header.classList.add('scrolled-to-top');
    header.style.boxShadow = 'var(--box-shadow-100)'
  }

  headingText.style.textShadow = `0 ${(scroll / 2) + 4}px ${(scroll / 64) + 1}px rgb(132, 66, 232, ${1 - scroll * 0.005})`;
});

navButton.addEventListener('click', () => {
  const isOpened = navButton.getAttribute('aria-expanded') === "true";
  if (isOpened ? closeMenu() : openMenu());
  header.classList.add('scrolled-to-top');
  header.style.boxShadow = 'var(--box-shadow-100)'
})

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', () => {
    closeMenu();
  })
});

function openMenu() {
  navButton.setAttribute('aria-expanded', 'true');
  navButton.classList.toggle('open');
  navigation.classList.toggle('nav--open');
}

function closeMenu() {
  navButton.setAttribute('aria-expanded', 'false');
  navButton.classList.toggle('open');
  navigation.classList.toggle('nav--open');
}