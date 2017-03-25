var burgerButton = document.querySelector(".page-header__toggle");
var mainNav = document.querySelector(".main-nav");
var userBlock = document.querySelector(".user-block");

mainNav.classList.remove("main-nav--nojs");
mainNav.classList.add("main-nav--closed");
userBlock.classList.remove("user-block--nojs");
userBlock.classList.add("user-block--closed");

burgerButton.addEventListener("click", function () {
    if (mainNav.classList.contains("main-nav--closed")) {
        mainNav.classList.remove("main-nav--closed");
        mainNav.classList.add("main-nav--opened");
        userBlock.classList.remove("user-block--closed");
        userBlock.classList.add("user-block--opened");
    } else {
        mainNav.classList.add("main-nav--closed");
        mainNav.classList.remove("main-nav--opened");
        userBlock.classList.add("user-block--closed");
        userBlock.classList.remove("user-block--opened");
    }
});

burgerButton.addEventListener("click", function () {
    if (burgerButton.classList.contains("page-header__toggle--unactive")) {
        burgerButton.classList.remove("page-header__toggle--unactive");
        burgerButton.classList.add("page-header__toggle--active");
    } else {
        burgerButton.classList.add("page-header__toggle--unactive");
        burgerButton.classList.remove("page-header__toggle--avtive");
}
});
