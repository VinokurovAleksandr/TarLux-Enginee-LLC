document.addEventListener("DOMContentLoaded",function(){let n=document.getElementById("modal"),t=document.getElementById("modal-image");var e=document.querySelector(".close"),i=document.getElementById("modal-prev"),d=document.getElementById("modal-next");let c=0,s=new Swiper(".swiper-container",{slidesPerView:2,spaceBetween:50,autoHeight:!0,initialSlide:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:2}});function o(){n.style.display="none",document.body.classList.remove("no-scroll")}function l(){c=(c+1)%s.slides.length,t.src=s.slides[c].querySelector("img").src}function r(){c=(c-1+s.slides.length)%s.slides.length,t.src=s.slides[c].querySelector("img").src}s.on("click",function(){var e=s.clickedSlide;e&&(e=Array.from(s.slides).indexOf(e),e=e,n.style.display="flex",c=e,t.src=s.slides[c].querySelector("img").src,document.body.classList.add("no-scroll"))}),e.addEventListener("click",o),i.addEventListener("click",r),d.addEventListener("click",l),document.addEventListener("keydown",function(e){"Escape"===e.key&&o()}),n.addEventListener("click",function(e){e.target===n&&o()});let a=0,u;n.addEventListener("touchstart",function(e){a=e.changedTouches[0].screenX}),n.addEventListener("touchend",function(e){(u=e.changedTouches[0].screenX)<a&&l(),u>a&&r()})});