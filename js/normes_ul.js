const mainHeader=document.querySelector("header.ulaval-header");document.body.style.setProperty("--header-height",`${mainHeader.clientHeight}px`),document.body.style.setProperty("--scrollbar-width",(window.innerWidth-document.body.clientWidth)/2+"px");var closeMainMenu=function(){document.querySelector(".ulaval-header-mobile-menu").classList.remove("open"),document.querySelector(".ulaval-header-menu-trigger").querySelector("span.screen-reader-text").innerText="Ouvrir le menu principal",document.querySelector(".ulaval-header-menu-trigger").setAttribute("aria-expanded","false"),document.body.classList.remove("ulaval-nav-mobile-open")},closeMainSearch=function(){document.querySelector(".ulaval-header-search").classList.add("remove"),document.querySelector(".ulaval-header-search").classList.remove("open"),document.querySelector(".ulaval-header-search-trigger").setAttribute("aria-expanded","false")};document.querySelector(".ulaval-header-menu-trigger").addEventListener("click",(function(){"false"==this.getAttribute("aria-expanded")?((searchBarButton=document.querySelector(".ulaval-header-search-trigger"))&&"true"==searchBarButton.getAttribute("aria-expanded")&&closeMainSearch(),document.querySelector(".ulaval-header-mobile-menu").classList.add("open"),this.querySelector("span.screen-reader-text").innerText="Fermer le menu principal",this.setAttribute("aria-expanded","true"),document.body.classList.add("ulaval-nav-mobile-open")):closeMainMenu()})),(searchBarButton=document.querySelector(".ulaval-header-search-trigger"))&&searchBarButton.addEventListener("click",(function(){"false"==this.getAttribute("aria-expanded")?("true"==document.querySelector(".ulaval-header-menu-trigger").getAttribute("aria-expanded")&&closeMainMenu(),document.querySelector(".ulaval-header-search").classList.add("open"),document.querySelector(".champ-recherche").focus(),this.setAttribute("aria-expanded","true")):closeMainSearch()})),(languageSwitcher=document.querySelector(".ulaval-language-switcher-trigger"))&&languageSwitcher.addEventListener("click",(function(){"false"==this.getAttribute("aria-expanded")?(document.getElementById("ulaval-language-switcher-list").hidden=!1,this.setAttribute("aria-expanded","true"),document.querySelector("#ulaval-language-switcher-list>li:first-child a").focus(),document.addEventListener("keyup",languageSwitcherKeys)):(document.getElementById("ulaval-language-switcher-list").hidden=!0,this.setAttribute("aria-expanded","false"),document.removeEventListener("keyup",languageSwitcherKeys))}));var languageSwitcherKeys=function(e){const a=document.activeElement.parentElement,t=[...a.parentElement.children].indexOf(a);switch(console.log(t),e.keyCode){case 38:0==t?document.querySelector("#ulaval-language-switcher-list li:last-child a").focus():a.previousElementSibling.querySelector("a").focus();break;case 40:t==[...a.parentElement.children].length-1?document.querySelector("#ulaval-language-switcher-list li:first-child a").focus():a.nextElementSibling.querySelector("a").focus();break;case 27:case 9:document.getElementById("ulaval-language-switcher-list").hidden=!0,document.querySelector(".ulaval-language-switcher-trigger").focus(),document.querySelector(".ulaval-language-switcher-trigger").setAttribute("aria-expanded","false"),document.removeEventListener("keyup",languageSwitcherKeys)}};document.addEventListener("animationstart",(function(e){"ulaval-header-search-fadeIn"!==e.animationName&&"ulaval-header-mobile-fadeIn"!==e.animationName||e.target.classList.add("remove")})),document.addEventListener("animationend",(function(e){"ulaval-header-search-fadeOut"!==e.animationName&&"ulaval-header-mobile-fadeOut"!==e.animationName||e.target.classList.remove("remove")}));
//# sourceMappingURL=maps/normes_ul.js.map
