/* Menu Animation */
const boxMenu = document.getElementById("menuOpenBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenuBtn = document.getElementById("closeMenuBtn");

/** functionality for menu */

boxMenu.addEventListener("click", () => {
  console.log("Open Btn Is Clicked!");
  mobileMenu.classList.add("menuOpen");
});

closeMenuBtn.addEventListener("click", () => {
  console.log("Close Btn Is Clicked!");
  mobileMenu.classList.remove("menuOpen");
});
