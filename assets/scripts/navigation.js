const myLinks = document.querySelector('#myLinks');
const myBurger = document.querySelector('#burger');
const productMenu = document.querySelector('.product');
const productItem = document.querySelector('#product');
const companyMenu = document.querySelector('.company');
const companyItem = document.querySelector('#company');
const connectMenu = document.querySelector('.connect');
const connectItem = document.querySelector('#connect');

function myFunction() {

    if (myLinks.style.display == 'flex') {
        myLinks.style.display = 'none';
        myBurger.style.backgroundImage = "url('assets/images/icon-hamburger.svg')";
        myBurger.style.width = "32px";
        myBurger.style.height = "18px";
    } else {
        myLinks.style.display = 'flex';
        myBurger.style.backgroundImage = "url('assets/images/icon-close.svg')";
        myBurger.style.width = "26px";
        myBurger.style.height = "26px";
    }

}


productItem.addEventListener("click", function(event) {
    event.preventDefault();

    if (productMenu.style.display == 'flex') {
        productMenu.style.display = 'none';
    } else {
        productMenu.style.display = 'flex';
    }
});

companyItem.addEventListener("click", function(event) {
    event.preventDefault();

    if (companyMenu.style.display == 'flex') {
        companyMenu.style.display = 'none';
    } else {
        companyMenu.style.display = 'flex';
    }
});

connectItem.addEventListener("click", function(event) {
    event.preventDefault();

    if (connectMenu.style.display == 'flex') {
        connectMenu.style.display = 'none';
    } else {
        connectMenu.style.display = 'flex';
    }
});