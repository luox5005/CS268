const menuButton = document.getElementById('menu-button');
const navigation = document.getElementById('menu');

menuButton.addEventListener('click', e => {
  menuButton.classList.toggle('active');
  navigation.classList.toggle('open');
});

document.addEventListener('click', () => {
    menuButton.classList.remove('active');
    navigation.classList.remove('open');
  });

  menuButton.addEventListener('click', e => {
    /* ... */
    e.stopPropagation();
  });