(()=>{var e={278:()=>{document.addEventListener("DOMContentLoaded",(function(){for(var e=document.getElementsByClassName("faq-container__collapsible-button"),t=function(t){e[t].addEventListener("click",(function(){this.classList.toggle("active"),console.log(t);var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))},n=0;n<e.length;n++)t(n)}))},864:()=>{var e,t=document.querySelectorAll(".chip-month"),n=(document.querySelector("#end-cosmetology"),document.querySelector("#end-hairstylist"),document.querySelector("#end-nail"),document.querySelector("#end-esthetician"),document.querySelector("#end-barber"),new Date),a=["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()+1];document.addEventListener("DOMContentLoaded",(function(){for(var e=0;e<=t.length;e++)t[e].textContent="start in "+a})),e=n.setDate(n.getDate()+215),console.log(e)},225:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=(new Date).getFullYear();document.getElementById("currentYear").textContent=e}))},528:()=>{var e,t=0,n=$(".header__container").outerHeight();$(window).scroll((function(t){e=!0})),setInterval((function(){e&&(function(){var e=$(this).scrollTop();Math.abs(t-e)<=5||(e>t&&e>n?$(".header__container").removeClass("nav-down").addClass("nav-up"):e+$(window).height()<$(document).height()&&$(".header__container").removeClass("nav-up").addClass("nav-down"),t=e)}(),e=!1)}),150)}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{"use strict";n(278),n(225),n(528);const e=n.p+"images/IMG_5802.39a20e073aa7d3e4d811.webp",t=n.p+"images/IMG_5485.20a3fab4cef5744fc20c.mp4";var a,o=document.querySelector(".reviews-container__reviews-list"),r=document.querySelector(".button-forward"),i=document.querySelector(".button-backward"),c=document.querySelector("#page-count"),s=document.querySelector("#current-page"),u=document.documentElement.lang,l=document.querySelector("#review-text-template").content,m=document.querySelector("#review-photo-template").content,p=document.querySelector("#review-video-template").content,d=1,h=[{type:"text",contentEn:"“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”",contentEs:"test spanish review",avatar:e,nameEn:"Gabriel, barber",nameEs:"Gabriel, barber",tag:"@barbergabrielaurora"},{type:"video",contentEn:t,contentEs:t,nameEn:"Anna",nameEs:"Maria",tag:"@barberannaurora"},{type:"photo",contentEn:e,contentEs:e,nameEn:"Anna",nameEs:"Maria",tag:"@barberannaurora"},{type:"text",contentEn:"“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”",contentEs:"“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”",avatar:void 0,nameEn:"Gabriel, barber",nameEs:"Gabriel, barber",tag:"@barbergabrielaurora"},{type:"photo",contentEn:e,contentEs:e,nameEn:"Anna",nameEs:"Maria",tag:"@barberannaurora"},{type:"text",contentEn:"“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”",contentEs:"“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”“We aim to make education accessible to the Spanish-speaking community, which is why we keep our prices at a minimum”",avatar:e,nameEn:"Gabriel, barber",nameEs:"Gabriel, barber",tag:"@barbergabrielaurora"},{type:"video",contentEn:t,contentEs:t,nameEn:"Anna",nameEs:"Maria",tag:"@barberannaurora"}];function v(e){var t,n;"text"==e.type?(console.log("type text"),(t=l.querySelector(".review-text").cloneNode(!0)).querySelector(".review__text-content").textContent=e.contentEs,e.avatar?(t.querySelector(".review__avatar").src=e.avatar,n=!0,console.log("avatar found, "+n)):(n=!1,t.querySelector(".review__avatar").classList.add("avatar-hidden")),t.querySelector(".review__author-name").textContent=e.nameEs,t.querySelector(".review__author-tag").textContent=e.tag,o.append(t)):"photo"==e.type?(console.log("type photo"),(t=m.querySelector(".review-photo").cloneNode(!0)).querySelector(".review-photo__image").src=e.contentEs,t.querySelector(".review__author-name").textContent=e.nameEs+", "+e.tag,o.append(t)):"video"==e.type?(console.log("type video"),(t=p.querySelector(".review-video").cloneNode(!0)).querySelector(".review__video").src=e.contentEs,t.querySelector(".review__author-name").textContent=e.nameEs+", "+e.tag,o.append(t)):console.log("review undefined, will not render")}function g(e){console.log("entered loadReviews, current page "+e),s.textContent=e,function(e){console.log("checking page limits, current page "+e+", page count "+a),e<=1?(i.classList.add("inactive"),s.classList.add("page-number-inactive"),console.log("reached first page")):(i.classList.remove("inactive"),s.classList.remove("page-number-inactive")),e>=a?(r.classList.add("inactive"),c.classList.add("page-number-inactive"),console.log("reached last page")):(r.classList.remove("inactive"),c.classList.remove("page-number-inactive"))}(e);var t,n,d,g=4*e-3;!function(){for(var e=document.querySelectorAll(".review"),t=0;t<e.length;t++)e[t].remove(),console.log("review removed")}();for(var y=g;y<g+4;y++)console.log("loading "+y+" review"),"en"==u?h[y-1]&&(n=void 0,d=void 0,"text"==(t=h[y-1]).type?(console.log("type text"),(n=l.querySelector(".review-text").cloneNode(!0)).querySelector(".review__text-content").textContent=t.contentEn,t.avatar?(n.querySelector(".review__avatar").src=t.avatar,d=!0,console.log("avatar found, "+d)):(d=!1,n.querySelector(".review__avatar").classList.add("avatar-hidden")),n.querySelector(".review__author-name").textContent=t.nameEn,n.querySelector(".review__author-tag").textContent=t.tag,o.append(n)):"photo"==t.type?(console.log("type photo"),(n=m.querySelector(".review-photo").cloneNode(!0)).querySelector(".review-photo__image").src=t.contentEn,n.querySelector(".review__author-name").textContent=t.nameEn+", "+t.tag,o.append(n)):"video"==t.type?(console.log("type video"),(n=p.querySelector(".review-video").cloneNode(!0)).querySelector(".review__video").src=t.contentEn,n.querySelector(".review__author-name").textContent=t.nameEn+", "+t.tag,o.append(n)):console.log("review undefined, will not render")):h[y-1]&&v(h[y-1])}document.addEventListener("DOMContentLoaded",(function(){var e;e=h,a=Math.ceil(e.length/4),console.log("calculated pageCount, it is "+a),console.log("pageCount "+a),c.textContent=a,g(d)})),i.addEventListener("click",(function(){g(--d)})),r.addEventListener("click",(function(){g(++d)})),n(864)})()})();