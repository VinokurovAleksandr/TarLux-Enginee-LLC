window.addEventListener('scroll', function () {
    scrollY > 0 ? document.querySelector('.header')
      .classList.add('scroll') :
      document.querySelector('header')
        .classList.remove('scroll')
  });