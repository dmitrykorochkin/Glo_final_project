(()=>{"use strict";(()=>{const e=document.getElementById("callback"),t=document.querySelectorAll(".callback-btn"),l=document.querySelector(".modal-overlay"),a=t=>{const a=t.target;(a.matches(".modal-overlay")||a.closest(".modal-close"))&&(l.style.display="none",e.style.display="none")},o=t=>{t.preventDefault(),(({timing:e,draw:t,duration:l})=>{let a=performance.now();requestAnimationFrame((function o(n){let c=(n-a)/l;c>1&&(c=1);let s=e(c);t(s),c<1&&requestAnimationFrame(o)}))})({duration:700,timing:e=>e,draw(t){e.style.opacity=t,l.style.display="block",e.style.display="block"}}),l.style.display="block",e.style.display="block",document.body.addEventListener("click",a)};t.forEach((e=>{e.addEventListener("click",o)}))})()})();