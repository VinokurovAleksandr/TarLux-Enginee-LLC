window.addEventListener('scroll', function () {
  scrollY > 0 ? document.querySelector('.header')
    .classList.add('scroll') :
    document.querySelector('header')
      .classList.remove('scroll')
});

const swiper = new Swiper('.clients-image__slider', {
  loop: true,
  
  slidesPerView: 4,
  loopedSlides: 4,
  watchOverflow: true,
  freeMode: true,
  initialSlide: 0,
  spaceBetween: 30,
  
     
    breakpoints: {
        320: {
          slidesPerView: 2,
        },
        480: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView:4,
        }
  },
  navigation: {
    nextEl: '.slider-block__arrow.swiper-button-next',
    prevEl: '.slider-block__arrow.swiper-button-prev',
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },
  speed: 800,

});

