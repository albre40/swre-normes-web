var closeMainMenu=function(){document.querySelector(".ulaval-header-mobile-menu").classList.remove("open"),document.querySelector(".ulaval-header-menu-trigger").querySelector("span.screen-reader-text").innerText="Ouvrir le menu principal",document.querySelector(".ulaval-header-menu-trigger").setAttribute("aria-expanded","false"),document.body.classList.remove("ulaval-nav-mobile-open")},closeMainSearch=function(){document.querySelector(".ulaval-header-search").classList.add("remove"),document.querySelector(".ulaval-header-search").classList.remove("open"),document.querySelector(".ulaval-header-search-trigger").setAttribute("aria-expanded","false")},closeLanguageSwitcher=function(){document.getElementById("ulaval-language-switcher-list").hidden=!0,document.querySelector(".ulaval-language-switcher-trigger").setAttribute("aria-expanded","false"),(currentlyFocusedLang=document.querySelector("#ulaval-language-switcher-list>li[aria-selected=true]"))&&currentlyFocusedLang.setAttribute("aria-selected","false"),document.removeEventListener("keyup",languageSwitcherKeys),document.removeEventListener("keydown",preventScrollOnNavKeyDowns),document.removeEventListener("click",detectClickOutside);document.querySelectorAll("#ulaval-language-switcher-list>li a").forEach((e=>{e.removeEventListener("mouseover",blurSwitcherItems)}))};document.querySelector(".ulaval-header-menu-trigger").addEventListener("click",(function(){"false"==this.getAttribute("aria-expanded")?((searchBarButton=document.querySelector(".ulaval-header-search-trigger"))&&"true"==searchBarButton.getAttribute("aria-expanded")&&closeMainSearch(),document.querySelector(".ulaval-header-mobile-menu").classList.add("open"),this.querySelector("span.screen-reader-text").innerText="Fermer le menu principal",this.setAttribute("aria-expanded","true"),document.body.classList.add("ulaval-nav-mobile-open")):closeMainMenu()})),(searchBarButton=document.querySelector(".ulaval-header-search-trigger"))&&searchBarButton.addEventListener("click",(function(){"false"==this.getAttribute("aria-expanded")?("true"==document.querySelector(".ulaval-header-menu-trigger").getAttribute("aria-expanded")&&closeMainMenu(),document.querySelector(".ulaval-header-search").classList.add("open"),document.querySelector(".champ-recherche").focus(),this.setAttribute("aria-expanded","true")):closeMainSearch()})),(languageSwitcher=document.querySelector(".ulaval-language-switcher-trigger"))&&languageSwitcher.addEventListener("click",(function(){if("false"==this.getAttribute("aria-expanded")){document.getElementById("ulaval-language-switcher-list").hidden=!1,this.setAttribute("aria-expanded","true"),document.querySelector("#ulaval-language-switcher-list>li:first-child a").focus(),document.querySelector("#ulaval-language-switcher-list>li:first-child").setAttribute("aria-selected","true"),document.addEventListener("keyup",languageSwitcherKeys),document.addEventListener("keydown",preventScrollOnNavKeyDowns),document.addEventListener("click",detectClickOutside);document.querySelectorAll("#ulaval-language-switcher-list>li a").forEach((e=>{e.addEventListener("mouseover",blurSwitcherItems)}))}else closeLanguageSwitcher()}));var blurSwitcherItems=function(e){document.querySelectorAll("#ulaval-language-switcher-list>li a").forEach((e=>{e==document.activeElement&&e.blur()}))},detectClickOutside=function(e){document.querySelector(".ulaval-language-switcher").contains(e.target)||closeLanguageSwitcher()},preventScrollOnNavKeyDowns=function(e){38!=e.keyCode&&40!=e.keyCode||e.preventDefault()},languageSwitcherKeys=function(e){const t=document.activeElement.parentElement,a=[...t.parentElement.children].indexOf(t);switch(e.keyCode){case 38:t.setAttribute("aria-selected","false"),0==a?(document.querySelector("#ulaval-language-switcher-list li:last-child a").focus(),document.querySelector("#ulaval-language-switcher-list li:last-child").setAttribute("aria-selected","true")):(t.previousElementSibling.querySelector("a").focus(),t.previousElementSibling.setAttribute("aria-selected","true"));break;case 40:t.setAttribute("aria-selected","false"),a==[...t.parentElement.children].length-1?(document.querySelector("#ulaval-language-switcher-list li:first-child a").focus(),document.querySelector("#ulaval-language-switcher-list li:first-child").setAttribute("aria-selected","true")):(t.nextElementSibling.querySelector("a").focus(),t.nextElementSibling.setAttribute("aria-selected","true"));break;case 27:case 9:closeLanguageSwitcher(),document.querySelector(".ulaval-language-switcher-trigger").focus()}};document.addEventListener("animationstart",(function(e){"ulaval-header-search-fadeIn"!==e.animationName&&"ulaval-header-mobile-fadeIn"!==e.animationName||e.target.classList.add("remove")})),document.addEventListener("animationend",(function(e){"ulaval-header-search-fadeOut"!==e.animationName&&"ulaval-header-mobile-fadeOut"!==e.animationName||e.target.classList.remove("remove")}));
//# sourceMappingURL=maps/normes_ul.js.map
