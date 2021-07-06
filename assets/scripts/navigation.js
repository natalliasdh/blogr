const myLinks = document.querySelector('#myLinks');
const productMenu = document.querySelector('.product');
const productItem = document.querySelector('#product');
const companyMenu = document.querySelector('.company');
const companyItem = document.querySelector('#company');
const connectMenu = document.querySelector('.connect');
const connectItem = document.querySelector('#connect');

function myFunction() {

    if (myLinks.style.display == 'flex') {
        myLinks.style.display = 'none';
    } else {
        myLinks.style.display = 'flex';
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