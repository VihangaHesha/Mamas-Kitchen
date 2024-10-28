document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    // Animate hamburger to X
    const bars = this.querySelectorAll(".bar");
    bars[0].style.transform =
      bars[0].style.transform === "rotate(45deg) translate(5px, 5px)"
        ? ""
        : "rotate(45deg) translate(5px, 5px)";

    bars[1].style.opacity = bars[1].style.opacity === "0" ? "1" : "0";

    bars[2].style.transform =
      bars[2].style.transform === "rotate(-45deg) translate(7px, -6px)"
        ? ""
        : "rotate(-45deg) translate(7px, -6px)";
  });
});
