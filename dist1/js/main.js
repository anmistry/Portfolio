// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBar = document.querySelector('.menu-bar');
const menuBranding = document.querySelector('.menu-branding');
const navModule = document.querySelectorAll('nav-module');

// state of menu
let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuBar.classList.add('show');
        menuBranding.classList.add('show');
        navModule.forEach(module =>module.classList.add('show'));

        showMenu = true;

    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuBar.classList.remove('show');
        menuBranding.classList.remove('show');
        navModule.forEach(module =>module.classList.remove('show'));

        
        showMenu = false;
    }
}
