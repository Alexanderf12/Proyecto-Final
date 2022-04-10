const menuNav = document.querySelector(".menu-nav");
const navButton = document.querySelector(".nav-button");

navButton.addEventListener("click", () => {
    menuNav.classList.toggle("nav-visible")
})