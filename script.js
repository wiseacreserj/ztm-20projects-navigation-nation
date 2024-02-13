const menuBars = document.querySelector(".menu-bars");
const overlay = document.querySelector(".overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");

const navItems = [nav1, nav2, nav3, nav4, nav5];

function navAnimation(direction1, direction2) {
    navItems.forEach((nav, index) => {
        nav.classList.replace(
            `slide-${direction1}-${index + 1}`,
            `slide-${direction2}-${index + 1}`
        );
    });
}

function toggleNav() {
    menuBars.classList.toggle("change");
    overlay.classList.toggle("overlay-active");
    if (overlay.classList.contains("overlay-active")) {
        overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
        navAnimation("out", "in");
    } else {
        overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
        navAnimation("in", "out");
    }
}

//Event Listeners
menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener("click", toggleNav);
});
