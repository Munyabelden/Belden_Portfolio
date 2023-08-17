"use strict";
const navBar = document.querySelector('#nav-bar');
const menuBtn = document.querySelector('#menu-btn');
const exitBtn = document.querySelector('#exit-btn');
const links = document.querySelectorAll('.nav-item');

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('render');
});

exitBtn.addEventListener('click', () => {
    navBar.classList.toggle('render');
});

links.forEach((link) => {
    link.addEventListener('click', () => {
      navBar.classList.toggle('render');
    });
});
