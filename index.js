import{a as h,s as y,i as n}from"./assets/vendor-CHHihKwO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="51378434-708cb4473fdf89ff203a412e8";function L(s){return h("https://pixabay.com/api/",{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{throw r})}const u=document.querySelector(".gallery"),p=document.querySelector(".loader"),b=new y(".gallery a",{captionsData:"alt",captionDelay:250});function v(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:d,downloads:m})=>`<li class="gallery-item">
        <a class="gallery-link" href="${a}">
        <img
        class="gallery-image"
        src="${o}"
        alt="${e}"
        width="360"/>
        <div class="info-wrap">
        <p><span>Likes</span>${t}</p>
        <p><span>Views</span>${i}</p>
        <p><span>Comments</span>${d}</p>
        <p><span>Downloads</span>${m}</p>
        </div>
        </a>
    </li>`).join("");u.insertAdjacentHTML("beforeend",r),b.refresh()}function q(){u.innerHTML=""}function w(){p.classList.add("is-visible")}function c(){p.classList.remove("is-visible")}const f=document.querySelector(".form"),l=f.querySelector("input");f.addEventListener("submit",P);function P(s){s.preventDefault();const r=l.value.trim();if(l.value="",!r){n.warning({message:"Please enter a search query.",position:"topRight"});return}w(),q(),L(r).then(o=>{if(c(),o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(o.hits)}).catch(o=>{c(),n.error({message:"Failed to fetch images. Please try again later.",position:"topRight"})})}
//# sourceMappingURL=index.js.map
