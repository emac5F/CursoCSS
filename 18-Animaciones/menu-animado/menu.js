const buttonMenu = document.querySelector(".nav__menu");
const menu = document.querySelector(".menu");

buttonMenu.addEventListener("click", function(){
    menu.classList.toggle("show-menu");
});