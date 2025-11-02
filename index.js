const text = `Le leadership
par l’action positive`;

const container = document.querySelector(".text");
let index = 0;
// Menu hamburger
const burger = document.getElementById("burgerBtn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const menuLinks = menu.querySelectorAll("a");

// Toggle menu au clic sur le burger
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

// Fermer le menu en cliquant sur l'overlay
overlay.addEventListener("click", () => {
  burger.classList.remove("active");
  menu.classList.remove("active");
  overlay.classList.remove("active");
});

// Fermer le menu en cliquant sur un lien
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
    overlay.classList.remove("active");
  });
});
function typeEffect() {
  if (index < text.length) {
    const char = text[index] === "\n" ? "<br>" : text[index];
    container.innerHTML += char; // ajoute lettre par lettre
    index++;
    setTimeout(typeEffect, 80); // vitesse d'apparition
  }
}

typeEffect();

const logosSlide = document.querySelector(".logos-slide");
const clone = logosSlide.cloneNode(true);
document.querySelector(".logos-container").appendChild(clone);

const grid = document.querySelector(".partenaires-grid");

// Cloner pour un défilement infini
const gridClone = grid.cloneNode(true);
grid.parentNode.appendChild(gridClone);

let x = 0;
let speed = 0.5; // vitesse par défaut
let currentSpeed = speed; // vitesse actuelle

function loop() {
  x -= currentSpeed;

  if (x <= -grid.offsetWidth) {
    x = 0;
  }

  grid.style.transform = `translateX(${x}px)`;
  gridClone.style.transform = `translateX(${x + grid.offsetWidth}px)`;

  requestAnimationFrame(loop);
}

loop();

// Arrêter le scroll au hover sur n'importe quelle carte
const cards = document.querySelectorAll(".partenaire-card");
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    currentSpeed = 0; // pause
  });
  card.addEventListener("mouseleave", () => {
    currentSpeed = speed; // reprendre
  });
});

const socialLinks = document.querySelectorAll(".socials a");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth - 0.5; // valeur entre -0.5 et 0.5
  const y = e.clientY / window.innerHeight - 0.5;

  socialLinks.forEach((link, i) => {
    const offset = (i + 1) * 5; // décalage progressif pour chaque icône
    link.style.transform = `translate(${x * offset}px, ${y * offset}px)`;
  });
});

/* Reset transform au hover pour que l'effet CSS prenne le dessus */
socialLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "scale(1.2) translateY(-3px)";
  });
  link.addEventListener("mouseleave", () => {
    link.style.transform = "translate(0,0)";
  });
});

// ... votre code existant (typeEffect, etc.) ...

// Carrousel d'images automatique corrigé
const slides = document.querySelectorAll(".img-slide");
let currentSlide = 0;
const totalSlides = slides.length;
const interval = 4000; // 4 secondes entre chaque image
const transitionTime = 1500; // correspond à transition CSS (1.5s)

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active", "prev");
    if (i === index) {
      slide.classList.add("active");
    } else if (i === (index - 1 + totalSlides) % totalSlides) {
      slide.classList.add("prev");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

showSlide(currentSlide);

// Synchronisation fluide entre transition et intervalle
setInterval(nextSlide, interval - transitionTime / 2);
