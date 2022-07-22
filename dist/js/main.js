const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector(".menu-btn__burger");

const nav = document.querySelector(".nav");
const menuNav = document.querySelector('.menu-nav');

menuBtn.addEventListener('click', function(){
    hamburger.classList.toggle("open");
    nav.classList.toggle("open");
    menuNav.classList.toggle("open");
} );