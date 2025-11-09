// Gestion du formulaire
const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const btnText = document.getElementById("btnText");
const successMessage = document.getElementById("successMessage");
const errorMessage = document.getElementById("errorMessage");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Gardez le preventDefault() pour pouvoir valider en JS
  // --- NOUVEAU/COMPLÉTÉ : RÉ-INTÉGRATION DE LA LOGIQUE DE VALIDATION ---

  // const formData = new FormData(form);
  let isValid = true; // Variable de vérification

  // 1. Validation de tous les champs remplis
  for (let [key, value] of formData.entries()) {
    // Vérifie si la valeur est vide après avoir retiré les espaces blancs
    if (!value.trim()) {
      isValid = false;
      break;
    }
  }

  if (!isValid) {
    showError("Veuillez remplir tous les champs obligatoires.");
    return;
  }

  // 2. Validation email
  const email = formData.get("email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError("Veuillez entrer une adresse email valide.");
    return;
  }

  // 3. Validation téléphone
  const tel = formData.get("telephone");
  const telRegex = /^\+?237[0-9]{9}$/;
  if (!telRegex.test(tel.replace(/\s/g, ""))) {
    showError("Veuillez entrer un numéro de téléphone valide (+237XXXXXXXXX).");
    return;
  }

  // --- FIN DE LA LOGIQUE DE VALIDATION ---

  // 1. Indiquer l'état d'envoi (le reste de la logique FETCH est bonne)
  // ...
  // ... (Votre code de Validation Nom/Email/Téléphone reste ici) ...
  // Si la validation échoue, ça s'arrête ici.

  if (!isValid) {
    showError();
    return;
  }
  // ... (Validation email et téléphone)

  // --- DEBUT : REMPLACEMENT DE LA SIMULATION PAR L'ENVOI FORMSPREE ---

  // 1. Indiquer l'état d'envoi
  submitBtn.classList.add("loading");
  btnText.innerHTML = '<div class="spinner"></div> Envoi en cours...';
  submitBtn.disabled = true;
  hideMessages(); // Fonction que nous allons ajouter pour masquer les messages

  // 2. Préparer les données
  const formData = new FormData(form);
  const formspreeUrl = "https://formspree.io/f/mgvnbpzk"; // Votre URL

  // 3. Effectuer l'envoi réel avec FETCH
  fetch(formspreeUrl, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json", // Nécessaire pour recevoir une réponse JSON de Formspree
    },
  })
    .then((response) => {
      if (response.ok) {
        // L'envoi à Formspree a réussi
        showSuccess();
        form.reset(); // Vider le formulaire
      } else {
        // L'envoi à Formspree a échoué (ex: mauvaise configuration)
        showError(
          "Oups ! Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard."
        );
      }
    })
    .catch((error) => {
      // Erreur réseau ou autre
      showError(
        "Erreur de connexion : impossible de joindre le service d'envoi."
      );
    })
    .finally(() => {
      // Cette partie s'exécute que l'envoi soit réussi ou échoué
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;

      // Rétablir le texte du bouton après un délai (optionnel)
      setTimeout(() => {
        btnText.innerHTML =
          '<i class="fas fa-paper-plane"></i> Envoyer le message';
        successMessage.style.display = "none";
        errorMessage.style.display = "none";
      }, 5000);
    });

  // --- FIN : REMPLACEMENT DE LA SIMULATION ---
});

// Ajoutez cette fonction (ou modifiez votre fonction showError si elle est plus complexe)
function hideMessages() {
  successMessage.style.display = "none";
  errorMessage.style.display = "none";
}

function showSuccess() {
  btnText.innerHTML = '<i class="fas fa-check"></i> Message envoyé !';
  successMessage.style.display = "block";
  errorMessage.style.display = "none";
}

function showError(message = "Veuillez remplir tous les champs obligatoires.") {
  // ... (Votre code showError existant)
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
  successMessage.style.display = "none";

  setTimeout(() => {
    errorMessage.style.display = "none";
  }, 5000);
}

// Animation des inputs
const inputs = document.querySelectorAll("input, textarea, select");
inputs.forEach((input) => {
  input.addEventListener("focus", function () {
    this.parentElement.style.transform = "scale(1.02)";
    this.parentElement.style.transition = "all 0.3s ease";
  });

  input.addEventListener("blur", function () {
    this.parentElement.style.transform = "scale(1)";
  });
});

// Fonction pour afficher la carte (simulation)
function showMap(city) {
  const urls = {
    douala: "https://www.google.com/maps/search/Douala+Bessengue",
    yaounde: "https://www.google.com/maps/search/Yaoundé+Bastos",
    maroua: "https://www.google.com/maps/search/Maroua+Comice",
  };

  alert(`Ouverture de la carte pour ${city.toUpperCase()}...`);
  // window.open(urls[city], '_blank');
}

// Fonction pour appeler un numéro
function callNumber(number) {
  alert(`Appel vers +237 ${number}...`);
  // window.location.href = `tel:+237${number}`;
}

// Effet de typing sur le header
const headerText = document.querySelector(".header p");
const originalText = headerText.textContent;
headerText.textContent = "";
let i = 0;

function typeWriter() {
  if (i < originalText.length) {
    headerText.textContent += originalText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

setTimeout(typeWriter, 500);

// Animation au scroll
const campusCards = document.querySelectorAll(".campus-card");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInLeft 0.8s ease forwards";
    }
  });
});

campusCards.forEach((card) => observer.observe(card));

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
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const formStatus = document.getElementById('formStatus');
    
    // Désactiver le bouton
    submitBtn.disabled = true;
    btnText.textContent = 'Envoi en cours...';
    
    try {
        const formData = new FormData(form);
        
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Succès
            formStatus.style.display = 'block';
            formStatus.style.backgroundColor = '#d4edda';
            formStatus.style.color = '#155724';
            formStatus.innerHTML = '<i class="fas fa-check-circle"></i> Message envoyé avec succès ! Nous vous répondrons bientôt.';
            form.reset();
        } else {
            throw new Error('Erreur lors de l\'envoi');
        }
    } catch (error) {
        // Erreur
        formStatus.style.display = 'block';
        formStatus.style.backgroundColor = '#f8d7da';
        formStatus.style.color = '#721c24';
        formStatus.innerHTML = '<i class="fas fa-exclamation-circle"></i> Erreur lors de l\'envoi. Veuillez réessayer.';
    } finally {
        // Réactiver le bouton
        submitBtn.disabled = false;
        btnText.textContent = 'Envoyer le message';
    }
});