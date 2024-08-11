window.addEventListener("DOMContentLoaded", () => {
  init();
});

function init() {
  console.log("Full Stack Web Boilerplate");

  window.addEventListener("scroll", () => {
    const header = document.getElementById("nav");
    const navTexts = document.querySelectorAll(".nav-text");
    header.classList.toggle("below-nav", window.scrollY > 0);
    navTexts.forEach((navText) => {
      navText.classList.toggle("nav-text-below", window.scrollY > 0);
    });
  });
}
