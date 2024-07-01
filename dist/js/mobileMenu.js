(()=>{let l=document.querySelector(".js-menu-container"),a=document.querySelector(".menu-toggle");a.addEventListener("click",()=>{var e="true"===a.getAttribute("aria-expanded")||!1,t=(a.setAttribute("aria-expanded",!e),l.classList.toggle("is-open"),e?"enableBodyScroll":"disableBodyScroll");bodyScrollLock[t](document.body),e?(a.innerHTML=`
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
        </svg>
      `,a.classList.remove("js-close-menu"),a.classList.add("js-open-menu")):(a.innerHTML=`
        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      `,a.classList.remove("js-open-menu"),a.classList.add("js-close-menu"))}),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(l.classList.remove("is-open"),a.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();