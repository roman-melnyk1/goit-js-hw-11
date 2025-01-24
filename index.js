import{i,S as c}from"./assets/vendor-BPdYXKAK.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const f=r=>{const o=new URLSearchParams({key:"48414882-2ceb04708685b14a14771b53a",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${o}`).then(a=>{if(!a.ok)throw new Error(`HTTP error! Status: ${a.status}`);return a.json()})},u=r=>`<li class="gallery-item">
    <a href="${r.largeImageURL}" class="gallery-link">
      <img src="${r.webformatURL}" alt="${r.tags}" width="360" class="gallery-img" loading="lazy" />
    </a>
    <ul class="gallery-list">
      <li>
        <h3>Likes</h3>
        <p>${r.likes}</p>
      </li>
      <li>
        <h3>Views</h3>
        <p>${r.views}</p>
      </li>
      <li>
        <h3>Comments</h3>
        <p>${r.comments}</p>
      </li>
      <li>
        <h3>Downloads</h3>
        <p>${r.downloads}</p>
      </li>
    </ul>
  </li>`,m=document.querySelector(".search-form"),n=document.querySelector(".gallery"),d=async r=>{r.preventDefault();const o=document.querySelector(".loader-container"),a=r.currentTarget.elements.query.value.trim();if(n.innerHTML="",o.style.display="block",!a){o.style.display="none",i.error({title:"",message:"Please complete the form",messageColor:"#fafafb",icon:"fas fa-keyboard",iconColor:"#fafafb",position:"topRight",backgroundColor:"#ef4040",color:"#fafafb"});return}try{const l=await f(a);if(l.total===0){i.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",icon:"far fa-file-image",iconColor:"#fafafb",position:"topRight",backgroundColor:"#ef4040",color:"#fafafb"});return}const e=l.hits.map(s=>u(s)).join("");n.innerHTML=e,new c(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250}).refresh()}catch(l){i.error({message:"Something went wrong. Please try again later.",messageColor:"#fafafb",icon:"fas fa-exclamation-triangle",iconColor:"#fafafb",position:"topRight",backgroundColor:"#ef4040",color:"#fafafb"}),console.error(l)}finally{o.style.display="none",r.target.reset()}};m.addEventListener("submit",d);
//# sourceMappingURL=index.js.map
