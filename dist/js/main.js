const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector(".menu-btn__burger");

const nav = document.querySelector(".nav");
const menuNav = document.querySelector('.menu-nav');

const menuItems = document.getElementsByClassName('menu-nav__item');

let state = false;

menuBtn.addEventListener('click', function(){
    hamburger.classList.toggle("open");
    nav.classList.toggle("open");
    menuNav.classList.toggle("open");
});

for (let i=0; i< menuItems.length; i++){
    menuItems[i].addEventListener('click', function(){
        hamburger.classList.remove("open");
        nav.classList.remove("open");
        menuNav.classList.remove("open");
    });
}