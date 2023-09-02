//----------------------------------FLOWER BURGER MENU-------------------------------------------//
const hamburger = document.querySelector(".nav-bar-button-wrapper");
const navMenu = document.querySelector(".nav-bar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

