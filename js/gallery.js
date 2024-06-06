document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const items = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.close');
    const modalPrev = document.getElementById('modal-prev');
    const modalNext = document.getElementById('modal-next');
    let currentIndex = 0;
    let modalIndex = 0;
  
    function showGalleryItems(index) {
        items.forEach((item, i) => {
            item.style.display = (i >= index && i < index + 3) ? 'block' : 'none';
        });
    }
  
    function openModal(index) {
        modal.style.display = 'flex';
        modalIndex = index;
        modalImg.src = items[modalIndex].src;
    }
  
    function closeModal() {
        modal.style.display = 'none';
    }
  
    function showNextImage() {
        if (modalIndex < items.length - 1) {
            modalIndex++;
            modalImg.src = items[modalIndex].src;
        }
    }
  
    function showPrevImage() {
        if (modalIndex > 0) {
            modalIndex--;
            modalImg.src = items[modalIndex].src;
        }
    }
  
    document.getElementById('prev').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            showGalleryItems(currentIndex);
        }
    });
  
    document.getElementById('next').addEventListener('click', function() {
        if (currentIndex < items.length - 3) {
            currentIndex++;
            showGalleryItems(currentIndex);
        }
    });
  
    items.forEach((item, index) => {
        item.addEventListener('click', function() {
            openModal(index);
        });
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
  
    // Initialize gallery view
    showGalleryItems(currentIndex);
  });