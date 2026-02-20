import{a as q,S as P,i as s}from"./assets/vendor-B5nsgUv9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const T="54644986-605fde0d6b0637c4334fe436a";async function g(r,t){try{return(await q("https://pixabay.com/api/",{params:{key:T,q:r,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(i){console.log("Error",i)}}const p=document.querySelector(".gallery"),d=document.querySelector("#loader"),f=document.querySelector(".showMoreBtn"),v=new P(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function h(r){const t=r.map(({webformatURL:i,tags:a,largeImageURL:e,likes:o,views:n,comments:b,downloads:x})=>`
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
                    <p class="imageText-item">${n}</p>
                </li>
                <li class="image-item">
                    <p class="imageText">Comments</p>
                    <p class="imageText-item">${b}</p>
                </li>
                <li class="image-item">
                    <p class="imageText">Downloads</p>
                    <p class="imageText-item">${x}</p>
                </li>
            </ul>
        </li>
    `).join("");p.insertAdjacentHTML("beforeend",t),v.refresh()}function M(){p.innerHTML=""}function y(){d.hidden=!1}function w(){d.hidden=!0}function L(){f.classList.remove("hidden")}function m(){f.classList.add("hidden")}const B=document.querySelector(".form"),u=document.querySelector(".formInput"),R=document.querySelector(".showMoreBtn");B.addEventListener("submit",$);let l=1,S=15,c="";async function $(r){if(r.preventDefault(),c=u.value.trim(),!c){s.warning({message:"Input cannot be empty!",position:"topRight"});return}l=1,u.value="",M(),m(),y();try{const t=await g(c,l);if(t.hits.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits),t.totalHits>S?L():s.error({message:"Something went wrong. Please try again later.",position:"topRight"})}catch(t){console.log("Error",t),s.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w()}}R.addEventListener("click",async()=>{try{m(),y(),l+=1;const r=await g(c,l);h(r.hits);const t=document.querySelector(".gallery-item");if(t){const{height:a}=t.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}const i=Math.ceil(r.totalHits/S);l>=i?(m(),s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):L()}catch{s.error({message:"Something went wrong. Please try again.",position:"topRight"})}finally{w()}});
//# sourceMappingURL=index.js.map
