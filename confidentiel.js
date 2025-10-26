document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));
});  

document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo img");

  // Effet d'apparition avec délai fluide
  setTimeout(() => {
    logo.classList.add("visible");
  }, 300);

  // Effet "pulse" à chaque clic
  logo.addEventListener("click", (e) => {
    e.preventDefault();
    logo.style.transform = "scale(1.2)";
    setTimeout(() => {
      logo.style.transform = "scale(1)";
      window.location.href = "index.html";
    }, 250);
  });
});