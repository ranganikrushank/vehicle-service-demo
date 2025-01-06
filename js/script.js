"use strict";

// ======== Mobile Navbar Toggle
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function (e) {
  e.stopPropagation();

  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (navbar.classList.contains("active")) {
    if (!navbar.contains(e.target)) {
      navbar.classList.remove("active");
      navToggler.classList.remove("active");
    }
  }
});
