import{S as f,i as u}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const i={form:document.querySelector(".form"),galleryContainer:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader")};function d(r){return r.map(e=>`
	  <li class="gallery-item">
	    <a class="gallery-link" href="${e.largeImageURL}">
		<img 
		  class="gallery-image" 
		  src="${e.webformatURL}" 
		  alt="${e.tags}" 
		/>
	    </a>
	    <ul class="info__list"> 
	      <li class="info__item"> 
		 <p class="info__textHead">Likes</p>
		 <p class="info__textValue">${e.likes}</p>
		</li>
		<li class="info__item"> 
		 <p class="info__textHead">Views</p>
		 <p class="info__textValue">${e.views}</p>
		</li>
		<li class="info__item"> 
		 <p class="info__textHead">Comments</p>
		 <p class="info__textValue">${e.comments}</p>
		</li>
		<li class="info__item"> 
		 <p class="info__textHead">Downloads</p>
		 <p class="info__textValue">${e.downloads}</p>
		</li>
	    </ul>
	  </li>`).join("")}function l(r){return r.classList.toggle("visually-hidden")}const m="45475608-942d333351883cc9805f20e6b",p="https://pixabay.com/api",g="&image_type=photo&orientation=horizontal&safesearch=true";class h{constructor(){this._findValue=""}fetchImade(){return fetch(`${p}/?key=${m}&q=${this.findValue}${g}`).then(e=>e.json()).then(e=>e.hits).catch(e=>{console.log(e)})}get findValue(){return this._findValue}set findValue(e){this._findValue=e}}function y(){u.show({backgroundColor:"red",messageColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}let _=new f(".gallery a",{navText:["<",">"],captionsData:"alt",captionDelay:250,enableKeyboard:!0});const a=new h;i.form.addEventListener("submit",b);function b(r){r.preventDefault(),i.galleryContainer.innerHTML="",l(i.loaderEl),a.findValue=r.currentTarget.elements.find.value,a.fetchImade().then(e=>{if(l(i.loaderEl),i.galleryContainer.insertAdjacentHTML("beforeend",d(e)),_.refresh(),i.form.reset(),e.length===0){y();return}})}
//# sourceMappingURL=commonHelpers.js.map
