document.addEventListener('DOMContentLoaded', function() {
    let modal = document.getElementById('modal');
    let modalImg = document.getElementById('modal-image');
    let closeBtn = document.querySelector('.close');
    let modalPrev = document.getElementById('modal-prev');
    let modalNext = document.getElementById('modal-next');
    let modalIndex = 0;

    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
        slidesPerView:2,
        spaceBetween: 50,
        autoHeight: true,
        initialSlide: 1,
        
        // grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
        mousewheel: {
            sensitivity: 2,
        },
     

    });

    

    // Open modal with image
    function openModal(index) {
        modal.style.display = 'flex';
        modalIndex = index;
        modalImg.src = swiper.slides[modalIndex].querySelector('img').src;
        document.body.classList.add('no-scroll');
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }

    function showNextImage() {
        modalIndex = (modalIndex + 1) % swiper.slides.length;
        modalImg.src = swiper.slides[modalIndex].querySelector('img').src;
    }

    function showPrevImage() {
        modalIndex = (modalIndex - 1 + swiper.slides.length) % swiper.slides.length;
        modalImg.src = swiper.slides[modalIndex].querySelector('img').src;
    }

    swiper.on('click', function () {
        const clickedSlide = swiper.clickedSlide;
        if (clickedSlide) {
            const index = Array.from(swiper.slides).indexOf(clickedSlide);
            openModal(index);
        }
    });

    closeBtn.addEventListener('click', closeModal);
    modalPrev.addEventListener('click', showPrevImage);
    modalNext.addEventListener('click', showNextImage);

    // Close modal on ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // edit hear

    let touchStartX = 0;
    let touchEndX = 0;

    function handleGesture() {
        if (touchEndX < touchStartX) {
            showNextImage();
        }
        if (touchEndX > touchStartX) {
            showPrevImage();
        }
    }

    modal.addEventListener('touchstart', function(event) {
        touchStartX = event.changedTouches[0].screenX;
    });

    modal.addEventListener('touchend', function(event) {
        touchEndX = event.changedTouches[0].screenX;
        handleGesture();
    });

});
