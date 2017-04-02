"use strict";

var burgerButton = document.querySelector(".page-header__toggle");
var mainNav = document.querySelector(".main-nav");
var userBlock = document.querySelector(".user-block");
var overLay = document.querySelector(".overlay");
var pageModal = document.querySelector(".page-modal");
var cartButton = document.querySelectorAll(".btn-buy");
var writeButton = document.querySelector(".reviews__btn-write");
var contactsButton = document.querySelector(".contacts__btn");

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

cartButton.forEach(item => {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    if (pageModal.classList.contains("page-modal--closed")) {
        pageModal.classList.remove("page-modal--closed");
        overLay.classList.remove("overlay--closed");
        overLay.classList.add("overlay--opened");
    }
});
});

overLay.addEventListener("click", function () {
    if (overLay.classList.contains("overlay--opened")) {
        pageModal.classList.add("page-modal--closed");
        overLay.classList.add("overlay--closed");
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (overLay.classList.contains("overlay--opened")) {
            overLay.classList.remove("overlay--opened");
            overLay.classList.add("overlay--closed");
            pageModal.classList.add("page-modal--closed");
      }
    }
});

writeButton.addEventListener("click", function (event) {
  event.preventDefault();
})

contactsButton.addEventListener("click", function (event) {
  event.preventDefault();
})
