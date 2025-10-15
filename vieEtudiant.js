// // Animation fluide des cartes d’activités
// document.addEventListener("DOMContentLoaded", () => {
//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("visible");
//       }
//     });
//   }, { threshold: 0.2 });

//   document.querySelectorAll(".activite-card").forEach(card => observer.observe(card));
// });
// Animation fluide des cartes d’activités
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".activite-card").forEach(card => observer.observe(card));
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