(()=>{var e={278:()=>{document.addEventListener("DOMContentLoaded",(function(){for(var e=document.getElementsByClassName("faq-container__collapsible-button"),t=function(t){e[t].addEventListener("click",(function(){this.classList.toggle("active"),console.log(t);var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))},o=0;o<e.length;o++)t(o)}))},266:()=>{document.addEventListener("DOMContentLoaded",(function(){[{profession:"Cosmetology",credits:50,hours:1500,price:17500,creditsElement:document.querySelector("#credits-cosmetology"),priceElement:document.querySelector("#price-cosmetology")},{profession:"Hairstylist",credits:40,hours:1200,price:14500,creditsElement:document.querySelector("#credits-hairstylist"),priceElement:document.querySelector("#price-hairstylist")},{profession:"Nail Technician",credits:20,hours:600,price:9500,creditsElement:document.querySelector("#credits-nail"),priceElement:document.querySelector("#price-nail")},{profession:"Esthetician",credits:20,hours:600,price:9500,creditsElement:document.querySelector("#credits-esthetician"),priceElement:document.querySelector("#price-esthetician")},{profession:"Barber",credits:50,hours:1500,price:17500,creditsElement:document.querySelector("#credits-barber"),priceElement:document.querySelector("#price-barber")}].forEach((function(e){e.creditsElement&&(e.creditsElement.textContent="".concat(e.credits," credits / ").concat(e.hours," hours")),e.priceElement&&(e.priceElement.textContent="$".concat(e.price.toLocaleString()))}))}))},225:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=(new Date).getFullYear();document.getElementById("currentYear").textContent=e}))},692:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#submit-button"),t=document.querySelector("#name"),o=document.querySelector("#tel"),n=document.querySelectorAll(".form__error"),r=document.querySelector("#checkbox");function a(){o.validity.patternMismatch?n.forEach((function(e){e.classList.add("form__error-visible")})):n.forEach((function(e){e.classList.remove("form__error-visible")})),t.validity.valid&&o.validity.valid&&r.validity.valid?e.classList.remove("disabled"):e.classList.add("disabled")}t.addEventListener("change",a),o.addEventListener("change",a),r.addEventListener("change",a)}))},528:()=>{var e,t=0,o=$(".header__container").outerHeight();$(window).scroll((function(t){e=!0})),setInterval((function(){e&&(function(){var e=$(this).scrollTop();Math.abs(t-e)<=5||(e>t&&e>o?$(".header__container").removeClass("nav-down").addClass("nav-up"):e+$(window).height()<$(document).height()&&$(".header__container").removeClass("nav-up").addClass("nav-down"),t=e)}(),e=!1)}),150)}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{"use strict";o(278),o(225),o(528);const e=o.p+"images/IMG_5802.39a20e073aa7d3e4d811.webp",t=o.p+"images/review-video-1.4ea29108da007b0e65ae.mp4",n=o.p+"images/review-video-2.f59d5039356c4ecfa28b.mp4",r=o.p+"images/review-video-3.a62954d4d5bfccb2f784.mp4",a=o.p+"images/review-video-4.0b4633adf68e5a057d62.mp4",c=o.p+"images/review-video-5.064e8b389168db6bd678.mp4",i=o.p+"images/review-video-6.3cda349bed4adfd5400a.mp4",s=(o.p,o.p+"images/review-video-7-subs-en.2e3ee5c08f23e00ddbb4.mp4"),d=o.p+"images/review-video-7-subs.e8d7c2bd9265382c7d2c.mp4";var l=document.querySelector(".reviews-container__reviews-list"),u=document.querySelector(".button-forward"),p=document.querySelector(".button-backward"),v=document.documentElement.lang,m=document.querySelector("#review-text-template").content,y=document.querySelector("#review-photo-template").content,h=document.querySelector("#review-video-template").content,E=[{type:"text",contentEn:'"I am a student of nueva imagen, Laura the owner and our teacher, truly cares about our learning, she gives all her knowledge and love in each class she teaches us, without a doubt she is an example to follow for new generations of beauticians, cosmetologists etc. Thank you Laura."',contentEs:'"Soy estudiante de nueva imagen, Laura la propietaria y nuestra profesora, verdaderamente se preocupa por nuestro aprendizaje, ella brinda todo su conocimiento y amor en cada clase que nos imparte, sin duda alguna es un ejemplo a seguir para nuevas generaciones de esteticistas, cosmetologas etc. Gracias Laura."'},{type:"photo",contentEn:e,contentEs:e},{type:"text",contentEn:'"I am a student of Nueva imagen beauty school, Ms. Laura super professional and excellent instructor. I am very happy to be part of this class!"',contentEs:'"Soy estudiante de Nueva imagen beauty school , Mra. Laura súper profesional y excelente instructora. Estoy muy contenta de formar parte de esta clase!"'},{type:"video",contentEn:c,contentEs:c},{type:"video",contentEn:t,contentEs:t},{type:"text",contentEn:'"Today I am proud to have attended Escuela Nueva Imagen. It was a life-changing experience, an educational one. I am very grateful for the support I received"',contentEs:'"Hoy estoy orgullosa de haber asistido a Escuela Nueva Imagen. Fue un cambio de vida, de educación. Estoy muy agradecida por el apoyo que se me brindó"'},{type:"video",contentEn:n,contentEs:n},{type:"text",contentEn:'"Today I am proud to have attended Escuela Nueva Imagen. It was a life-changing experience, an educational one. I am very grateful for the support I received"',contentEs:'"Hoy estoy orgullosa de haber asistido a Escuela Nueva Imagen. Fue un cambio de vida, de educación. Estoy muy agradecida por el apoyo que se me brindó"'},{type:"video",contentEn:r,contentEs:r},{type:"video",contentEn:a,contentEs:a},{type:"video",contentEn:i,contentEs:i},{type:"video",contentEn:s,contentEs:d}];document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".review").forEach((function(e){return e.remove()})),E.forEach((function(e){var t,o;"en"===v?"text"==(t=e).type?((o=m.querySelector(".review-text").cloneNode(!0)).querySelector(".review__text-content").textContent=t.contentEn,t.avatar?o.querySelector(".review__avatar").src=t.avatar:o.querySelector(".review__avatar").classList.add("avatar-hidden"),l.append(o)):"photo"==t.type?((o=y.querySelector(".review-photo").cloneNode(!0)).querySelector(".review-photo__image").src=t.contentEn,l.append(o)):"video"==t.type?((o=h.querySelector(".review-video").cloneNode(!0)).querySelector(".review__video").src=t.contentEn,l.append(o)):console.log("review undefined, will not render"):function(e){var t;"text"==e.type?((t=m.querySelector(".review-text").cloneNode(!0)).querySelector(".review__text-content").textContent=e.contentEs,e.avatar?t.querySelector(".review__avatar").src=e.avatar:t.querySelector(".review__avatar").classList.add("avatar-hidden"),l.append(t)):"photo"==e.type?((t=y.querySelector(".review-photo").cloneNode(!0)).querySelector(".review-photo__image").src=e.contentEs,l.append(t)):"video"==e.type?((t=h.querySelector(".review-video").cloneNode(!0)).querySelector(".review__video").src=e.contentEs,l.append(t)):console.log("review undefined, will not render")}(e)}))})),u.addEventListener("click",(function(){l.scrollBy({left:300,behavior:"smooth"})})),p.addEventListener("click",(function(){l.scrollBy({left:-300,behavior:"smooth"})})),o(266),o(692)})()})();