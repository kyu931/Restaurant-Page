(()=>{"use strict";const e=()=>{const e=document.querySelector(".container");if(e){if(e.childElementCount>0){let t=e.firstElementChild;for(;t;)t.remove(),t=e.firstElementChild}e.remove()}},t=()=>{const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("container"),t.id="contact",e.appendChild(t);const n=document.createElement("h1");n.classList.add("contact-titles"),n.textContent="Contact Page",t.appendChild(n);const d=document.createElement("h2");d.textContent="Email",t.appendChild(d);const a=document.createElement("adress");a.textContent="oran@pepiniere.co.dz",t.appendChild(a);const c=document.createElement("h3");c.textContent="Telephone",t.appendChild(c);const s=document.createElement("adress");s.textContent="0453219852",t.appendChild(s)},n=document.getElementById("content"),d=document.createElement("div");d.classList.add("header"),n.appendChild(d);const a=document.createElement("button");a.classList.add("homeBtn"),a.textContent="Home",a.addEventListener("click",(()=>{e(),(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("container"),e.appendChild(t),t.id="home-content";const n=document.createElement("h1");n.classList.add("welcomeMessage"),n.textContent=" THE PEPINIERE RESTAURANT",t.appendChild(n);const d=document.createElement("p");d.classList.add("message"),d.textContent="Nostalgia and Delish",t.appendChild(d)})()}));const c=document.createElement("button");c.classList.add("menuBtn"),c.textContent="Menu",c.addEventListener("click",(()=>{e(),(()=>{let e=document.getElementById("content");const t=document.createElement("div");t.classList.add("container"),e.appendChild(t),t.id="menu";let n=document.createElement("h1");n.classList.add("menu-title"),n.textContent="The PEPINIERE Menu",t.appendChild(n);let d=document.createElement("div");d.classList.add("menu-content"),t.appendChild(d);let a=document.createElement("h3");a.classList.add("appetizers-title"),a.textContent="Appetizers";let c=document.createElement("p");c.classList.add("appetizers-menu"),c.textContent="Green Salad a blend of fresh green cucumbers, red onions, courgette, green beans, almonds, pistachios and a preserved lemon dressing ",d.appendChild(a),d.appendChild(c);let s=document.createElement("div");s.classList.add("menu-content"),t.appendChild(s);let l=document.createElement("h3");l.classList.add("main-menu-title"),l.textContent="Main";let o=document.createElement("p");o.classList.add("main-menu"),o.textContent="Steak togliata with zingy carrot and cabbage slaw BBQ tamarind salmon with lemongrass, chili and ginger",s.appendChild(l),s.appendChild(o)})()}));const s=document.createElement("button");s.classList.add("contactBtn"),s.textContent="Contact",s.addEventListener("click",(()=>{e(),t()})),d.appendChild(a),d.appendChild(c),d.appendChild(s),t()})();