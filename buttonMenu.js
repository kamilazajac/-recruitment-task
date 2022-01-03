const toggleMenu = document.getElementById('toggle-menu');
const navigationList = document.getElementById('navigation__list--js');

toggleMenu.addEventListener('click', () => {
  navigationList.classList.toggle('active');
});
