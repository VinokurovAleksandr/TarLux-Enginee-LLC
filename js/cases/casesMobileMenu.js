(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const menuToggleButton = document.querySelector('.menu-toggle');
  const menuIcon = menuToggleButton.querySelector('.icon-path');

  const openIconPath = "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z";
  const closeIconPath = "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z";

  const toggleMenu = () => {
    const isMenuOpen = menuToggleButton.getAttribute('aria-expanded') === 'true' || false;
    menuToggleButton.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    if (!isMenuOpen) {
      menuIcon.setAttribute('d', closeIconPath);
      menuToggleButton.classList.remove('js-open-menu');
      menuToggleButton.classList.add('js-close-menu');
      document.body.classList.add('modal-open'); // Додаємо клас для блокування скролінгу
    } else {
      menuIcon.setAttribute('d', openIconPath);
      menuToggleButton.classList.remove('js-close-menu');
      menuToggleButton.classList.add('js-open-menu');
      document.body.classList.remove('modal-open'); // Видаляємо клас для блокування скролінгу
    }
  };

  menuToggleButton.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    menuToggleButton.setAttribute('aria-expanded', false);
    menuIcon.setAttribute('d', openIconPath);
    menuToggleButton.classList.remove('js-close-menu');
    menuToggleButton.classList.add('js-open-menu');
    document.body.classList.remove('modal-open'); // Видаляємо клас для блокування скролінгу
  });
})();
