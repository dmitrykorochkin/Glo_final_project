(()=>{"use strict";(()=>{const e=document.getElementById("callback"),t=document.querySelectorAll(".callback-btn"),o=document.querySelector(".modal-overlay"),n=t=>{const n=t.target;(n.matches(".modal-overlay")||n.closest(".modal-close"))&&(o.style.display="none",e.style.display="none"),document.addEventListener("keydown",(function(t){"Escape"===t.key&&(o.style.display="none",e.style.display="none")}))},l=t=>{t.preventDefault(),(({timing:e,draw:t,duration:o})=>{let n=performance.now();requestAnimationFrame((function l(s){let c=(s-n)/o;c>1&&(c=1);let r=e(c);t(r),c<1&&requestAnimationFrame(l)}))})({duration:700,timing:e=>e,draw(t){e.style.opacity=t,o.style.display="block",e.style.display="block"}}),o.style.display="block",e.style.display="block",document.body.addEventListener("click",n)};t.forEach((e=>{e.addEventListener("click",l)}))})(),(()=>{const e=document.querySelectorAll('a[href^="#"]'),t=document.querySelector(".up"),o=document.querySelector(".logo");for(const t of e)t.addEventListener("click",(e=>{e.preventDefault();const o=t.hasAttribute("href")?t.getAttribute("href"):"body";document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}));t.addEventListener("click",(()=>window.scroll(0,0))),window.addEventListener("scroll",(function(){const e=document.getElementById("services"),o=document.documentElement.scrollTop,n=e.getBoundingClientRect().top;Math.abs(n)<=o?t.style.display="block":t.style.display="none"})),o.addEventListener("click",(e=>{e.preventDefault(),window.scroll(0,0)}))})(),(()=>{const e=document.querySelectorAll(".accordeon .element"),t=document.querySelectorAll(".accordeon .element-content");e.forEach(((o,n)=>{o.querySelector(".title").addEventListener("click",(()=>{t[n].classList.contains("open")?t[n].style.display="none":t[n].style.display="block",t[n].classList.toggle("open"),o.classList.toggle("active"),e.forEach(((e,o)=>{n!=o&&(e.classList.remove("active"),t[o].style.display="none",t[o].classList.remove("open"))}))}))}))})(),(()=>{const e=document.querySelector("form"),t=e.querySelectorAll("input[type='text']"),o=e.querySelector("input[name='fio']"),n=e.querySelector("input[name='tel']"),l=/[^а-яА-я- ]/,s=/[^\d+]/,c="Что-то пошло не так...";let r,a;o.addEventListener("input",(e=>{e.target.value=e.target.value.replace(l,""),o.classList.remove("error"),r=o.value})),n.addEventListener("input",(e=>{e.target.value=e.target.value.replace(s,""),n.classList.remove("error"),a=n.value}));try{e.addEventListener("submit",(l=>{l.preventDefault(),/^([А-Яа-я]{1}[А-Яа-я ]{1,})$/.test(String(r))||o.classList.add("error"),/^([\+]{0,1}[\d]{6,16})$/.test(String(a))||n.classList.add("error");const s=document.createElement("div");s.classList.add("status"),e.append(s);const i=new FormData(e),d={};i.forEach(((e,t)=>{d[t]=e})),o.classList.contains("error")||n.classList.contains("error")?(s.textContent=c,setTimeout((()=>{s.remove()}),1500)):(async(e,t)=>{document.querySelector(".status").textContent="Зарузка...";let o=await fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});return await o.json()})(0,d).then((e=>{s.textContent="Спасибо! С вами свяжутся!"})).catch((e=>{s.textContent=c})).finally((()=>{t.forEach((e=>{e.value=""})),setTimeout((()=>{s.remove()}),1500)}))}))}catch(e){console.log(e.message)}})()})();