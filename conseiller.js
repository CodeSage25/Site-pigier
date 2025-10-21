document.addEventListener("DOMContentLoaded", () => {
  const conseillers = [
    { nom: "Fabrice MONKAM", poste: "Conseiller d'orientation", campus: "Douala", tel: "+237655355391", email: "fabrice.monkam@pigier-cm.com", image: "assets/image/codla.webp" },
    { nom: "NGUEND Jonathan", poste: "Conseiller d'orientation", campus: "Maroua", tel: "+237698326662", email: "nguend.jonathan@pigier-cm.com", image: "assets/image/comra.webp" },
    { nom: "KENGNE TAGUETUE Étienne Landri", poste: "Conseiller d'orientation", campus: "Yaoundé", tel: "+237695637923", email: "kengne.tag@pigier-cm.com", image: "assets/image/coyde.webp" }
  ];

  const container = document.getElementById("conseillers-container");
  const btns = document.querySelectorAll(".campus-btn");

  function afficherConseillers(filtre = "tous") {
    container.innerHTML = "";
    const filtered = conseillers.filter(c => filtre === "tous" || c.campus === filtre);

    if(filtered.length === 0) {
      container.innerHTML = "<p>Aucun conseiller trouvé pour ce campus.</p>";
      return;
    }

    filtered.forEach(c => {
      const card = document.createElement("div");
      card.classList.add("conseiller-card");
      card.innerHTML = `
        <div class="conseiller-image">
          <img src="${c.image}" alt="${c.nom}" onerror="this.onerror=null; this.src='/assets/image/conseiller/default.webp';" />
        </div>
        <h3>${c.nom}</h3>
        <p>${c.poste}</p>
        <p><strong>Campus :</strong> ${c.campus}</p>
        <p><i class="fa-solid fa-phone"></i> <a href="tel:${c.tel}">${c.tel}</a></p>
        <p><i class="fa-solid fa-envelope"></i> <a href="mailto:${c.email}">${c.email}</a></p>
      `;
      container.appendChild(card);
    });
  }

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      afficherConseillers(btn.getAttribute("data-campus"));
    });
  });

  afficherConseillers(); // affichage initial : tous les conseillers
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