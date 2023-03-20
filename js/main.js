let elNav = document.querySelector(".nav");
let elCloseBtn = document.querySelector(".haeder__close-btn");
let elMenuBtn = document.querySelector(".header__menu-btn");


elMenuBtn.addEventListener('click', () => {
    elNav.style.right = "100%"
});

elCloseBtn.addEventListener('click', () => {
    elNav.style.right = "-100%"
});