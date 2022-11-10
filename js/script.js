"use strict";
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const navLink = document.querySelectorAll(".main-nav__link");
const linkBox = document.querySelectorAll(".main-nav__link-box");

btnNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
  linkBox.forEach((hover) =>
    hover.classList.toggle("main-nav__link-box--hover")
  );
  navLink.forEach((hover) => hover.classList.toggle("main-nav__link--hover"));
});

let currentDropdown;
// let currentIcon;
document.addEventListener("click", (e) => {
  if (window.innerWidth <= 900) {
    const clickedDropdownBtn = e.target.closest("[data-dropdown-btn]");
    if (
      !clickedDropdownBtn &&
      e.target.closest(".main-nav__dropdown-menu") != null
    )
      return;

    if (clickedDropdownBtn) {
      currentDropdown = e.target.closest("[data-dropdown]");
      // change to relative/rotate arrow icon/btn-link-opacity: 0,8
      currentDropdown.classList.toggle("active");
    }
  }
});

window.onload = resetMenu();
function resetMenu() {
  if (window.innerWidth > 900) {
    header.classList.remove("nav-open"); // hide mobile menu on screen > 900
    navLink.forEach((hover) => hover.classList.add("main-nav__link--hover")); //add hover on desktop if we don't close menu with open/close btn.
    navLink.forEach((linkHover) => linkHover.classList.remove("active"));

    linkBox.forEach((underline) =>
      underline.classList.add("main-nav__link-box--hover")
    );
  }
}

window.addEventListener("resize", resetMenu);
