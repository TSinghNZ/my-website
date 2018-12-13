const menuIcon = document.querySelector("#toggle"),
  overlay = document.querySelector("#overlay"),
  navList = document.querySelector(".nav-list"),
  navItems = document.querySelectorAll(".nav-item");

let menuVisible = false;
menuIcon.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!menuVisible) {
    menuIcon.classList.add("active");
    overlay.classList.add("open");
    menuVisible = true;
  } else {
    menuIcon.classList.remove("active");
    overlay.classList.remove("open");
    menuVisible = false;
  }
}

navList.addEventListener("click", e => {
  targetElem = e.target.parentElement;
  navItems.forEach(item => item.classList.remove("current"));
  targetElem.classList.add("current");
  toggleMenu();
});
