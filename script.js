const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    nav.classList.add("show");
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    nav.classList.remove("show");
    showMenu = false;
  }
}
