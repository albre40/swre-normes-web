!function(){let e=null;var t=function(){document.querySelector(".header-mobile-menu").classList.remove("open"),document.querySelector(".header-menu-trigger").querySelector("span.screen-reader-text").innerText="Ouvrir le menu principal",document.querySelector(".header-menu-trigger").setAttribute("aria-expanded","false"),document.body.classList.remove("mobile-menu-open")},r=function(){document.querySelector(".header-search").classList.remove("open"),document.removeEventListener("keydown",d),document.querySelector(".header-search-trigger").setAttribute("aria-expanded","false")},n=function(){document.querySelector("#ul-header-menu-sous-unite")&&(document.querySelector("#ul-header-menu-sous-unite").classList.remove("open"),document.querySelector(".header-sub-nav-button").setAttribute("aria-expanded","false"),document.querySelector(".header-sub-nav-button").setAttribute("aria-label","Ouvrir le menu"))},u=function(){e&&(console.log("currentOpenMenu.list"),console.log(e.list),document.getElementById(e.list).hidden=!0,document.querySelector(e.button).setAttribute("aria-expanded","false"),(currentlyFocusedLang=document.querySelector("#"+e.list+">li[aria-selected=true]"))&&currentlyFocusedLang.setAttribute("aria-selected","false"),document.removeEventListener("keyup",l),document.removeEventListener("keydown",o),document.removeEventListener("click",c),document.querySelectorAll("#"+e.list+">li a").forEach((e=>{e.removeEventListener("mouseover",a)}))),e=null},i=function(t,r){triggerButton=document.querySelector(r),"false"==triggerButton.getAttribute("aria-expanded")?(s(),e={list:t,button:r},console.log("menu"),console.log(t),document.getElementById(t).hidden=!1,triggerButton.setAttribute("aria-expanded","true"),document.querySelector("#"+t+">li:first-child a").focus(),document.querySelector("#"+t+">li:first-child").setAttribute("aria-selected","true"),document.addEventListener("keyup",l),document.addEventListener("keydown",o),document.addEventListener("click",c),document.querySelectorAll("#"+t+">li a").forEach((e=>{e.addEventListener("mouseover",a)}))):u()};document.querySelector(".header-menu-trigger").addEventListener("click",(function(){"false"==this.getAttribute("aria-expanded")?(s(),document.querySelector(".header-mobile-menu").classList.add("open"),this.querySelector("span.screen-reader-text").innerText="Fermer le menu principal",this.setAttribute("aria-expanded","true"),document.body.classList.add("mobile-menu-open")):t()})),(searchBarButton=document.querySelector(".header-search-trigger"))&&searchBarButton.addEventListener("click",(function(){"false"==this.getAttribute("aria-expanded")?(s(),document.querySelector(".header-search").classList.add("open"),document.querySelector(".champ-recherche").focus(),document.addEventListener("keydown",d),this.setAttribute("aria-expanded","true")):r()})),(languageSwitcher=document.querySelector(".header-language-switcher-trigger"))&&languageSwitcher.addEventListener("click",(function(){i("header-language-switcher-list",".header-language-switcher-trigger")})),(secureMenu=document.querySelector(".ul-secure-menu-trigger"))&&secureMenu.addEventListener("click",(function(){i("ul-secure-menu",".ul-secure-menu-trigger")})),(sousUniteTrigger=document.querySelector(".header-sub-nav-button"))&&sousUniteTrigger.addEventListener("click",(function(){"false"==this.getAttribute("aria-expanded")?(s(),document.querySelector(".header-sub-nav-main").classList.add("open"),this.setAttribute("aria-label","Fermer le menu"),this.setAttribute("aria-expanded","true")):n()}));var a=function(){document.querySelectorAll("#"+e.list+">li a").forEach((e=>{e==document.activeElement&&e.blur()}))},c=function(t){document.querySelector(e.button).parentElement.contains(t.target)||u()},o=function(e){38!=e.keyCode&&40!=e.keyCode||e.preventDefault()},d=function(e){document.activeElement==document.querySelector(".champ-recherche")&&e.shiftKey&&9==e.keyCode&&(document.querySelector(".header-search-trigger").focus(),e.preventDefault())},l=function(t){const r=document.activeElement.parentElement,n=[...r.parentElement.children].indexOf(r);switch(t.keyCode){case 38:r.setAttribute("aria-selected","false"),0==n?(document.querySelector("#"+e.list+" li:last-child a").focus(),document.querySelector("#"+e.list+" li:last-child").setAttribute("aria-selected","true")):(r.previousElementSibling.querySelector("a").focus(),r.previousElementSibling.setAttribute("aria-selected","true"));break;case 40:r.setAttribute("aria-selected","false"),n==[...r.parentElement.children].length-1?(document.querySelector("#"+e.list+" li:first-child a").focus(),document.querySelector("#"+e.list+" li:first-child").setAttribute("aria-selected","true")):(r.nextElementSibling.querySelector("a").focus(),r.nextElementSibling.setAttribute("aria-selected","true"));break;case 27:case 9:document.querySelector(e.button).focus(),u()}},s=function(){t(),n(),u(),document.querySelector(".header-search-trigger")&&r(),document.querySelector(".header-menu-sous-unite")&&n()};document.addEventListener("animationstart",(function(e){"slide-in-top"!==e.animationName&&"header-mobile-fadeIn"!==e.animationName&&"header-sous-unite-fadeIn"!==e.animationName||e.target.classList.add("remove")})),document.addEventListener("animationend",(function(e){"slide-out-top"!==e.animationName&&"header-mobile-fadeOut"!==e.animationName&&"header-sous-unite-fadeOut"!==e.animationName||e.target.classList.remove("remove")}))}();