let elBox = document.querySelector(".header__box");
let elCloseBtn = document.querySelector(".haeder__close-btn");
let elMenuBtn = document.querySelector(".header__menu-btn");


elMenuBtn.addEventListener('click', () => {
    elBox.style.right = "0px"
});

elCloseBtn.addEventListener('click', () => {
    elBox.style.right = "-400px"
});