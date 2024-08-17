import{S as f,i as u}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const o={form:document.querySelector(".form"),galleryContainer:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader")};function d(i){return i.map(e=>`
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
	  </li>`).join("")}function a(i){return i.classList.toggle("visually-hidden")}const m="45475608-942d333351883cc9805f20e6b",p="https://pixabay.com/api",g="&image_type=photo&orientation=horizontal&safesearch=true";class h{constructor(){this._findValue=""}fetchImade(){return fetch(`${p}/?key=${m}&q=${this.findValue}${g}`).then(e=>e.json()).then(e=>e.hits)}get findValue(){return this._findValue}set findValue(e){this._findValue=e}}function y(){u.show({backgroundColor:"red",messageColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}let _=new f(".gallery a",{navText:["<",">"],captionsData:"alt",captionDelay:250,enableKeyboard:!0});const l=new h;o.form.addEventListener("submit",b);function b(i){i.preventDefault(),o.galleryContainer.innerHTML="",a(o.loaderEl),l.findValue=i.currentTarget.elements.find.value,l.fetchImade().then(e=>{a(o.loaderEl),o.galleryContainer.insertAdjacentHTML("beforeend",d(e)),_.refresh(),o.form.reset()}).catch(y())}
//# sourceMappingURL=commonHelpers.js.map
