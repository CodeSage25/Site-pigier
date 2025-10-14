document.addEventListener("DOMContentLoaded", () => {
  const actualites = [
    { titre: "Journée Portes Ouvertes 2025", date: "12 Novembre 2025", description: "Venez découvrir nos formations et rencontrer nos enseignants et étudiants lors de notre journée portes ouvertes.", image: "assets/image/visite.WEBP", categorie: "evenement" },
    { titre: "Lancement du programme Digital Marketing", date: "5 Octobre 2025", description: "Notre nouveau programme en Digital Marketing est maintenant disponible pour tous les étudiants de Pigier Cameroun.", image: "assets/image/duos.WEBP", categorie: "formation" },
    { titre: "Remise des diplômes 2025", date: "30 Septembre 2025", description: "Félicitations à nos diplômés ! Découvrez les photos et moments forts de la cérémonie de remise des diplômes.",  image: "assets/image/sortiePedagogiqueDesAppenants.WEBP", categorie: "diplome" },
    { titre: "Forum de l’emploi et de l’entrepreneuriat 2025", date: "20 Août 2025", description: "Un forum rassemblant entreprises et jeunes diplômés pour promouvoir l’insertion professionnelle et l’esprit d’entreprise.", image: "assets/image/sortiePedagogiqueDesAppenants.WEBP", categorie: "evenement" },
    { titre: "Création du Club Innovation Pigier", date: "2 Juillet 2025", description: "Un nouvel espace dédié à la créativité, aux technologies émergentes et à la collaboration entre étudiants innovants.", image: "assets/image/meuf.WEBP", categorie: "innovation" },
    { titre: "Nouvelle offre de formation continue", date: "10 Juin 2025", description: "Des sessions pour les professionnels souhaitant se perfectionner en management et stratégie digitale.", image: "assets/image/vieEtud.WEBP", categorie: "formation" },
  ];

  const container = document.getElementById("liste-actualites");

  const modal = document.getElementById("modal-actualite");
  const modalImage = modal.querySelector(".modal-image img ");
  const modalTitre = modal.querySelector(".modal-titre");
  const modalDate = modal.querySelector(".modal-date");
  const modalDescription = modal.querySelector(".modal-description");
  const closeBtn = modal.querySelector(".close");

  function ouvrirModal(actu) {
    modalImage.src = actu.image;
    modalImage.alt = actu.titre;
    modalTitre.textContent = actu.titre;
    modalDate.textContent = actu.date;
    modalDescription.textContent = actu.description;
    modal.style.display = "flex";
  }

  closeBtn.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", (e) => { if(e.target===modal) modal.style.display="none"; });

  function afficherActualites(filtre="tous") {
    container.innerHTML = "";
    const filtered = actualites.filter(a => filtre==="tous" || a.categorie===filtre);
    filtered.forEach(actu => {
      const card = document.createElement("div");
      card.classList.add("actualite-card");
      card.innerHTML = `
        <div class="image">
          <img src="${actu.image}" alt="${actu.titre}" />
        </div>
        <h3>${actu.titre}</h3>
        <span class="date">${actu.date}</span>
        <p>${actu.description}</p>
        <a href="#" class="btn-section"><span class="btn-text">Lire la suite</span><i class="fa-solid fa-arrow-right"></i></a>
      `;
      card.querySelector(".btn-section").addEventListener("click", e => { e.preventDefault(); ouvrirModal(actu); });
      container.appendChild(card);
    });
  }

  const filtres = document.querySelectorAll(".filtre-btn");
  filtres.forEach(btn => btn.addEventListener("click", () => {
    filtres.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    afficherActualites(btn.getAttribute("data-filtre"));
  }));

  afficherActualites();
});