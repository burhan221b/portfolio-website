// Seclect Dom Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Intitial State Menu
let showMenu = false;

// create Even Listener
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    // if showMenu is false, then we use !showMenu to run next set of code.
    if (!showMenu) {
        menuBtn.classList.add('close'); // css removes the button
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        // Change showMenu
        showMenu = true;
        xClose()
    } else {
        menuBtn.classList.remove('close'); // css removes the button
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        // Change showMenu
        showMenu = false;
        xClose()
    }
}

// Work Page - Image Zoom
let body = document.querySelector('body');
let smheading = document.querySelector('.sm-heading');
let imgzoom = document.querySelector('div.wrap img');
let x = document.querySelector('#img-close');
let wrapimg = document.querySelector('div.wrap');
const imgBtn = document.querySelectorAll('div.projects .item a img');
x.addEventListener('click', xClose);
imgBtn.forEach((imgB) => {
    imgB.addEventListener('click', imgZoom);
});
function imgZoom(e) {
    if (window.innerWidth < 700) {
        xClose()
        console.log(window.innerWidth);
        return "";
    }
    smheading.style.background = 'none';
    let zoomimg = e.target.src;
    imgzoom.src = zoomimg;
    imgzoom.style.width = '600px';
    imgzoom.style.height = '500px';
    wrapimg.style.visibility = 'visible';
    body.classList.add('clickImg');

}

function xClose() {
    if (wrapimg.style.visibility != null) {
        wrapimg.style.visibility = 'hidden';
    }
    if (body.classList.contains('clickImg')) {
        body.classList.remove('clickImg');
    }
    smheading.style.background = 'rgba(6, 6, 147, 0.5)';
}

