import{a as q,S as T,i as n}from"./assets/vendor-B5nsgUv9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const v="54644986-605fde0d6b0637c4334fe436a";async function p(r,t){return q("https://pixabay.com/api/",{params:{key:v,q:r,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(i=>i.data).catch(i=>{console.log("Error",i)})}const d=document.querySelector(".gallery"),g=document.querySelector("#loader"),f=document.querySelector(".showMoreBtn"),M=new T(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function h(r){const t=r.map(({webformatURL:i,tags:a,largeImageURL:e,likes:o,views:s,comments:S,downloads:x})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e}">
                <img
                    class="gallery-image"
                    src="${i}"
                    alt="${a}"
                />
            </a>
            <ul class="image-details">
                <li class="image-item">
                    <p class="imageText">Likes</p>
                    <p class="imageText-item">${o}</p>
                </li>
                <li class="image-item">
                    <p class="imageText">Views</p>
                    <p class="imageText-item">${s}</p>
                </li>
                <li class="image-item">
                    <p class="imageText">Comments</p>
                    <p class="imageText-item">${S}</p>
                </li>
                <li class="image-item">
                    <p class="imageText">Downloads</p>
                    <p class="imageText-item">${x}</p>
                </li>
            </ul>
        </li>
    `).join("");d.insertAdjacentHTML("beforeend",t),M.refresh()}function P(){d.innerHTML=""}function y(){g.hidden=!1}function w(){g.hidden=!0}function L(){f.classList.remove("hidden")}function m(){f.classList.add("hidden")}const B=document.querySelector(".form"),u=document.querySelector(".formInput"),$=document.querySelector(".showMoreBtn");B.addEventListener("submit",E);let l=1,b=15,c="";async function E(r){if(r.preventDefault(),c=u.value.trim(),!c){n.warning({message:"Input cannot be empty!",position:"topRight"});return}u.value="",P(),m(),y();try{const t=await p(c,l);if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits),t.totalHits>b&&L()}catch(t){console.log("Error",t),n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w()}}$.addEventListener("click",async()=>{try{m(),y(),l+=1;const r=await p(c,l);h(r.hits);const t=document.querySelector(".gallery-item");if(t){const{height:a}=t.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}const i=Math.ceil(r.totalHits/b);l>=i&&(m(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{n.error({message:"Something went wrong. Please try again.",position:"topRight"})}finally{w(),L()}});
//# sourceMappingURL=index.js.map
