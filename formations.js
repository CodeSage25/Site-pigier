// ==== Données complètes des formations ====
const formations = {
  licence: [
    {
      code: "bf",
      nom: "Banque et Finance",
      niveaux: [
        {
          niveau: "Licence 1",
          objectif: "Former des Techniciens Supérieurs et des cadres capables de maîtriser les techniques bancaires et de superviser un service.",
          debouches: ["Analyste financier", "Gestionnaire de comptes", "Trader"],
          prerequis: "BAC C, D, G2 ou ACG ou équivalent"
        },
        {
          niveau: "Licence 2",
          objectif: "Former des Techniciens Supérieurs et des cadres capables de maîtriser les techniques bancaires et de superviser un service.",
          debouches: ["Analyste financier", "Gestionnaire de comptes", "Trader"],
          prerequis: "Licence 1 + Visite d’entreprise"
        },
        {
          niveau: "Licence 3",
          objectif: "Former des Techniciens Supérieurs et des cadres capables de maîtriser les techniques bancaires et de superviser un service.",
          debouches: ["Analyste financier", "Gestionnaire de comptes", "Trader"],
          prerequis: "Licence 2 + Stage académique, Licence 3 + Mission académique en alternance",
          avantages: ["Formation en alternance (3 jours école / 2 jours entreprise)", "Placement en entreprise assuré"]
        }
      ]
    },
    {
      code: "cg",
      nom: "Audit et Contrôle de Gestion",
      niveaux: [
        {
          niveau: "Licence 1",
          objectif: "Former des Techniciens Supérieurs et des cadres capables de diriger un service comptable et d’analyser les résultats d’exploitation.",
          debouches: ["Auditeur", "Commissaire aux comptes", "Chargé de recouvrement"],
          prerequis: "BAC C, D, G2 ou ACG"
        },
        {
          niveau: "Licence 2",
          objectif: "Approfondir les compétences de contrôle et supervision comptable.",
          debouches: ["Auditeur", "Commissaire aux comptes", "Chargé de recouvrement"],
          prerequis: "Licence 1 + Visite d’entreprise"
        },
        {
          niveau: "Licence 3",
          objectif: "Former des cadres capables de superviser un service comptable et financier.",
          debouches: ["Auditeur", "Commissaire aux comptes", "Chargé de recouvrement"],
          prerequis: "Licence 2 + Stage académique",
          avantages: ["Formation en alternance", "Placement en entreprise"]
        }
      ]
    },
    {
      code: "nm",
      nom: "Négociation et Communication Multimédia",
      niveaux: [
        {
          niveau: "Licence 1",
          objectif: "Former des techniciens supérieurs capables d’animer une équipe et de mettre en œuvre un plan de communication et de marketing.",
          debouches: ["Chargé(e) de communication interne", "Consultant en communication", "Média planner", "Responsable Relation presse", "Directrice de la communication"],
          prerequis: "BAC toutes séries"
        },
        {
          niveau: "Licence 2",
          objectif: "Approfondir les compétences en communication et marketing.",
          debouches: ["Chargé(e) de communication interne", "Consultant en communication", "Média planner", "Responsable Relation presse", "Directrice de la communication"],
          prerequis: "Licence 1 + Visite d’entreprise"
        },
        {
          niveau: "Licence 3",
          objectif: "Former des cadres capables de piloter des stratégies de communication et marketing.",
          debouches: ["Consultant en communication", "Média planner", "Responsable Relation presse", "Directrice de la communication"],
          prerequis: "Bac+2 en Marketing et action commerciale, Communication d’entreprise, Commerce international ou équivalent, Licence 2 + Stage académique",
          avantages: ["Formation en alternance (3 jours école / 2 jours entreprise)", "Placement en entreprise"]
        }
      ]
    },
    {
      code: "tl",
      nom: "Transport, Transit, Douane et Logistique",
      niveaux: [
        {
          niveau: "Licence 1",
          objectif: "Former des cadres capables de concevoir et mettre en œuvre des solutions optimales dans la logistique et le transport sur les marchés nationaux et internationaux.",
          debouches: ["Accomplir les opérations administratives et commerciales relatives à la circulation des marchandises"],
          prerequis: "BAC toutes séries"
        },
        {
          niveau: "Licence 2",
          objectif: "Approfondir les compétences en logistique et transport.",
          debouches: ["Accomplir les opérations administratives et commerciales relatives à la circulation des marchandises"],
          prerequis: "Licence 1 + Visite d’entreprise"
        },
        {
          niveau: "Licence 3",
          objectif: "Former des techniciens supérieurs et cadres capables de maîtriser les opérations logistiques et de supervision.",
          debouches: ["Contrôleur des Douanes", "Agent de Transit", "Responsable d’Exploitation"],
          prerequis: "Bac+2 Marketing et Action Commerciale, Commerce International ou équivalent, Licence 2 + Stage académique",
          avantages: ["Formation en alternance (3 jours école / 2 jours entreprise)", "Placement en entreprise"]
        }
      ]
    },
    {
      code: "cmd",
      nom: "Communication & Marketing Digital",
      niveaux: [
        {
          niveau: "Licence 1",
          objectif: "Former des techniciens supérieurs et cadres commerciaux capables de mettre en œuvre un plan de communication et marketing.",
          debouches: ["Social Media Manager", "Cadre Commercial", "Chargé des Études Marketing et Média"],
          prerequis: "BAC toutes séries"
        },
        {
          niveau: "Licence 2",
          objectif: "Approfondir les compétences marketing digital et communication.",
          debouches: ["Social Media Manager", "Cadre Commercial", "Chargé des Études Marketing et Média"],
          prerequis: "Licence 1 + Visite d’entreprise"
        },
        {
          niveau: "Licence 3",
          objectif: "Former des cadres capables de superviser une stratégie marketing digitale.",
          debouches: ["Social Media Manager", "Cadre Commercial", "Chargé des Études Marketing et Média"],
          prerequis: "Bac+2 Marketing et Action Commerciale, Communication d’Entreprise, Commerce International ou équivalent, Licence 2 + Stage académique",
          avantages: ["Formation en alternance (3 jours école / 2 jours entreprise)", "Placement en entreprise"]
        }
      ]
    },
    {
      code: "msd",
      nom: "Management et Stratégie Digitale",
      niveaux: [
        {
          niveau: "Licence 3",
          objectif: "Former des techniciens supérieurs et cadres moyens rompus dans les métiers du management et capables d’animer une équipe pluridisciplinaire.",
          debouches: ["Cadres moyens pluridisciplinaire", "Cadres commerciaux", "Responsables des équipes projets", "Social Media Manager", "Community Managers"],
          prerequis: "Bac+2 Droit, Lettres, Science ou niveau équivalent"
        }
      ]
    },
    {
      code: "iaie",
      nom: "Intelligence Artificielle & Intelligence Économique",
      niveaux: [
        {
          niveau: "Licence 1",
          objectif: "Collecte et traitement des données massives (big data) dans tous les secteurs d’activités.",
          debouches: ["Chef de projet innovation", "Data Scientist spécialisé en IA", "Spécialiste en cybersécurité et IA", "Spécialiste NLP", "Chatbot master", "Data analyst", "Data designer", "Chef de projet informatique"],
          prerequis: "BAC toutes séries"
        },
        {
          niveau: "Licence 2",
          objectif: "Approfondir le traitement des données massives et applications IA.",
          debouches: ["Chef de projet innovation", "Data Scientist spécialisé en IA", "Spécialiste en cybersécurité et IA", "Spécialiste NLP", "Chatbot master", "Data analyst", "Data designer", "Chef de projet informatique"],
          prerequis: "Licence 1 + Visite d’entreprise"
        }
      ]
    }
  ],

  master: [
  {
    code: "maaco",
    nom: "Audit et Contrôle de Gestion",
    niveaux: [
      {
        niveau: "Master 1",
        objectif: "Former des Cadres Supérieurs capables d’exercer des responsabilités dans des sociétés de bourse ou institutions financières.",
        debouches: ["Gestionnaire Comptable", "Directeur financier", "Auditeur"],
        prerequis: "Licence professionnelle en Sciences de Gestion ou équivalent"
      },
      {
        niveau: "Master 2",
        objectif: "Approfondir les compétences pour des missions stratégiques.",
        debouches: ["Gestionnaire Comptable", "Directeur financier", "Auditeur"],
        prerequis: "Master 1 ou équivalent"
      }
    ]
  },
  {
    code: "macmad",
    nom: "Communication, Marketing et Digital",
    niveaux: [
      {
        niveau: "Master 1",
        objectif: "Former des Cadres Supérieurs capables d’élaborer des stratégies efficaces de Communication et Marketing.",
        debouches: ["Chargé d’études et de conseil", "Directeur Commerciale ou Marketing", "Data Manager", "Webdesigner"],
        prerequis: "Licence professionnelle ou équivalent"
      },
      {
        niveau: "Master 2",
        objectif: "Approfondir la stratégie marketing digitale et communication.",
        debouches: ["Chargé d’études et de conseil", "Directeur Commerciale ou Marketing", "Data Manager", "Webdesigner"],
        prerequis: "Master 1 ou équivalent"
      }
    ]
  },
  {
    code: "mafine",
    nom: "Finance",
    niveaux: [
      {
        niveau: "Master 1",
        objectif: "Former des Cadres Supérieurs capables d’exercer des responsabilités dans des sociétés de bourse ou institutions financières.",
        debouches: ["Directeur financier", "Contrôleur de gestion", "Expert Comptable"],
        prerequis: "Licence professionnelle en Sciences de Gestion ou équivalent"
      },
      {
        niveau: "Master 2",
        objectif: "Approfondir les compétences pour des missions financières stratégiques.",
        debouches: ["Directeur financier", "Contrôleur de gestion", "Expert Comptable"],
        prerequis: "Master 1 ou équivalent"
      }
    ]
  },
  {
    code: "mafida",
    nom: "Fiscalité et Droit des Affaires",
    niveaux: [
      {
        niveau: "Master 1",
        objectif: "Former des Cadres Supérieurs capables d’apporter des solutions aux problèmes juridiques et fiscaux de l’entreprise.",
        debouches: ["Fiscaliste", "Responsable Fiscal", "Juriste spécialisé en Droit Fiscal"],
        prerequis: "Licence professionnelle ou équivalent"
      },
      {
        niveau: "Master 2",
        objectif: "Approfondir les compétences pour résoudre des problématiques juridiques complexes.",
        debouches: ["Fiscaliste", "Responsable Fiscal", "Juriste spécialisé en Droit Fiscal"],
        prerequis: "Master 1 ou équivalent"
      }
    ]
  },
  {
    code: "mames",
    nom: "Management des Entreprises",
    niveaux: [
      {
        niveau: "Master 1",
        objectif: "Former des Cadres Supérieurs capables de maîtriser l’environnement humain, comptable et juridique de l’entreprise.",
        debouches: ["Chef d’Entreprise", "Entrepreneur", "Manager d’équipe"],
        prerequis: "Licence professionnelle ou équivalent"
      },
      {
        niveau: "Master 2",
        objectif: "Approfondir les compétences managériales pour des fonctions de direction.",
        debouches: ["Chef d’Entreprise", "Entrepreneur", "Manager d’équipe"],
        prerequis: "Master 1 ou équivalent"
      }
    ]
  },
  {
    code: "maquap",
    nom: "Management de la Qualité et des Projets",
    niveaux: [
      {
        niveau: "Master 1",
        objectif: "Former des Cadres Supérieurs Qualiticiens et Gestionnaires de Projets modernes.",
        debouches: ["Responsable Qualité", "Manager de Projet", "Collaborateur Service Qualité"],
        prerequis: "Licence professionnelle ou équivalent"
      },
      {
        niveau: "Master 2",
        objectif: "Approfondir les compétences pour piloter des démarches qualité et projets complexes.",
        debouches: ["Responsable Qualité", "Manager de Projet", "Collaborateur Service Qualité"],
        prerequis: "Master 1 ou équivalent"
      }
    ]
  },
  {
    code: "mamreh",
    nom: "Management des Ressources Humaines",
    niveaux: [
      {
        niveau: "Master 1",
        objectif: "Former des Cadres Supérieurs capables d’anticiper et résoudre les problèmes RH.",
        debouches: ["DRH", "Responsable Développement RH", "Chargé de Recrutement/Formation"],
        prerequis: "Licence professionnelle ou équivalent"
      },
      {
        niveau: "Master 2",
        objectif: "Approfondir les compétences en gestion des ressources humaines et leadership.",
        debouches: ["DRH", "Responsable Développement RH", "Chargé de Recrutement/Formation"],
        prerequis: "Master 1 ou équivalent"
      }
    ]
  },
  {
    code: "matras",
    nom: "Transport & Supply Chain Management",
    niveaux: [
      {
        niveau: "Master 1",
        objectif: "Doter des cadres supérieurs en compétences pour gérer les flux de produits et d’informations.",
        debouches: ["Manager Supply Chain", "Consultant Logistique", "Directeur des achats"],
        prerequis: "Licence professionnelle ou équivalent"
      },
      {
        niveau: "Master 2",
        objectif: "Approfondir les compétences pour piloter la chaîne logistique de manière stratégique.",
        debouches: ["Manager Supply Chain", "Consultant Logistique", "Directeur des achats"],
        prerequis: "Master 1 ou équivalent"
      }
    ]
  },
  {
    code: "miaie",
    nom: "Intelligence Artificielle & Intelligence Économique",
    niveaux: [
      {
        niveau: "Master 1",
        objectif: "Concevoir et mettre en œuvre la stratégie d’intelligence économique de l’organisation.",
        debouches: ["Veilleur", "Consultant Intelligence Économique", "Data Scientist", "Planner stratégique"],
        prerequis: "Toutes licences"
      }
    ]
  },
  {
    code: "mamsd",
    nom: "Management et Stratégie Digitale",
    niveaux: [
      {
        niveau: "Master 1",
        objectif: "Former des Cadres Supérieurs capables d’exercer des responsabilités dans le management digital.",
        debouches: ["Manager digital", "Directeur de projets digitaux", "Community Manager"],
        prerequis: "Licence professionnelle ou équivalent"
      }
    ]
  }
]
};

// ==== Sélecteurs et fonctions JS identiques à la version précédente ====
const btnLicence = document.getElementById("btn-licence");
const btnMaster = document.getElementById("btn-master");
const content = document.getElementById("formations-content");

function afficherFormations(type) {
  content.innerHTML = "";
  const liste = formations[type];

  liste.forEach(f => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<h3>${f.nom}</h3><p>${f.niveaux ? "Cliquez pour voir les détails" : ""}</p>`;
    card.addEventListener("click", () => afficherDetails(f));
    content.appendChild(card);
  });
}

function afficherDetails(formation) {
  if (!formation.niveaux) {
    alert(`Les détails de ${formation.nom} seront bientôt disponibles.`);
    return;
  }

  content.innerHTML = `
    <h2>${formation.nom}</h2>
    ${formation.niveaux.map(niv => `
      <div class="details">
        <h4>${niv.niveau}</h4>
        <p><strong>🎯 Objectif :</strong> ${niv.objectif}</p>
        <p><strong>🎓 Débouchés :</strong> ${niv.debouches.join(", ")}</p>
        <p><strong>📋 Prérequis :</strong> ${niv.prerequis}</p>
        ${niv.avantages ? `<p><strong>✅ Avantages :</strong> ${niv.avantages.join(" / ")}</p>` : ""}
        <a href="#" class="btn">📄 Télécharger la fiche produit</a>
      </div>
    `).join("")}
    <br><button class="btn" id="back-btn">⬅ Retour</button>
  `;

  document.getElementById("back-btn").addEventListener("click", () => {
    const active = document.querySelector(".filiere-btn.active").id.includes("licence") ? "licence" : "master";
    afficherFormations(active);
  });
}

btnLicence.addEventListener("click", () => {
  btnLicence.classList.add("active");
  btnMaster.classList.remove("active");
  afficherFormations("licence");
});

btnMaster.addEventListener("click", () => {
  btnMaster.classList.add("active");
  btnLicence.classList.remove("active");
  afficherFormations("master");
});

// Initialisation
afficherFormations("licence");



