(()=>{"use strict";(()=>{const e=document.querySelectorAll(".fancyboxModal")[1],t=document.querySelector(".header-modal"),l=document.querySelector(".header-modal__close"),o=document.querySelector(".overlay"),n=()=>{t.style.display="",o.style.display=""};e.addEventListener("click",(e=>{e.preventDefault(),t.style.display="block",o.style.display="block",(({timing:e,draw:t,duration:l})=>{let o=performance.now();requestAnimationFrame((function n(c){let i=(c-o)/l;i>1&&(i=1);let r=e(i);t(r),i<1&&requestAnimationFrame(n)}))})({duration:500,timing:e=>e,draw(e){t.style.opacity=e,o.style.opacity=e}})})),l.addEventListener("click",n),o.addEventListener("click",n)})(),(()=>{const e=document.querySelector(".smooth-scroll"),t=()=>{window.scrollY>0&&(window.scrollBy(0,-30),setTimeout(t,0))},l=()=>{let t=document.querySelector("#benefits").getBoundingClientRect().top;(0==t||t<0)&&(e.style.opacity=1),t>0&&(e.style.opacity=0)};l(),window.addEventListener("scroll",l),e.addEventListener("click",t)})()})();