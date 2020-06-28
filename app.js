const btnDrop = document.querySelector(".hamburger");
const menu = document.querySelector(".mobile-nav");

btnDrop.addEventListener("click", drop);
menu.addEventListener("click", clear);

function drop() {
  if (menu.classList.contains("mobile-nav-passive")) {
    menu.classList.remove("mobile-nav-passive");
  } else {
    menu.classList.toggle("mobile-nav-active");
  }
}

function clear() {
  menu.classList.add("mobile-nav-passive");
}
