// Effets d'animation au scroll
const sections = document.querySelectorAll("section");

function revealOnScroll() {
  const windowBottom = window.innerHeight + window.scrollY;
  sections.forEach(section => {
    if (section.offsetTop + 100 < windowBottom) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
}

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);