
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const menuToggleButton = document.querySelector('.menu-toggle');
  
  const toggleMenu = () => {
    const isMenuOpen = menuToggleButton.getAttribute('aria-expanded') === 'true' || false;
    menuToggleButton.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
  
    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);

    if (!isMenuOpen) {
      // Change to close button
      menuToggleButton.innerHTML = `
        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      `;
      menuToggleButton.classList.remove('js-open-menu');
      menuToggleButton.classList.add('js-close-menu');
    } else {
      // Change to open button
      menuToggleButton.innerHTML = `
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
        </svg>
      `;
      menuToggleButton.classList.remove('js-close-menu');
      menuToggleButton.classList.add('js-open-menu');
    }
  };

  menuToggleButton.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    menuToggleButton.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();


 