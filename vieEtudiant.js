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