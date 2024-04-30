const btnMobile = document.querySelector(".btn-mobile-nav");
const btnMobileOpen = document.querySelector(
  '.icon-mobile-nav[name="menu-outline"]'
);
const btnMobileClose = document.querySelector(
  '.icon-mobile-nav[name="close-outline"]'
);
const nav = document.querySelector(".main-nav");

btnMobile.addEventListener("click", function (e) {
  const name = e.target.getAttribute("name");
  if (!name) return;

  if (name === "menu-outline") {
    btnMobileOpen.style.display = "none";
    btnMobileClose.style.display = "block";
    nav.style.transform = "translateX(0%)";
  }
  if (name === "close-outline") {
    btnMobileOpen.style.display = "block";
    btnMobileClose.style.display = "none";
    nav.style.transform = "translateX(100%)";
  }
});
