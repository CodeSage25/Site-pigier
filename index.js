const text = `Le leadership
par l’action positive`;

const container = document.querySelector(".text");
let index = 0;

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

const grid = document.querySelector('.partenaires-grid');

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
const cards = document.querySelectorAll('.partenaire-card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    currentSpeed = 0; // pause
  });
  card.addEventListener('mouseleave', () => {
    currentSpeed = speed; // reprendre
  });
});

const socialLinks = document.querySelectorAll('.socials a');

document.addEventListener('mousemove', e => {
  const x = e.clientX / window.innerWidth - 0.5; // valeur entre -0.5 et 0.5
  const y = e.clientY / window.innerHeight - 0.5;

  socialLinks.forEach((link, i) => {
    const offset = (i + 1) * 5; // décalage progressif pour chaque icône
    link.style.transform = `translate(${x * offset}px, ${y * offset}px)`;
  });
});

/* Reset transform au hover pour que l'effet CSS prenne le dessus */
socialLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'scale(1.2) translateY(-3px)';
  });
  link.addEventListener('mouseleave', () => {
    link.style.transform = 'translate(0,0)';
  });
});

// ... votre code existant (typeEffect, etc.) ...

// Carrousel d'images automatique
const slides = document.querySelectorAll('.img-slide');
let currentSlide = 0;

function nextSlide() {
  // Retirer la classe active de l'image actuelle
  slides[currentSlide].classList.remove('active');
  
  // Passer à l'image suivante
  currentSlide = (currentSlide + 1) % slides.length;
  
  // Ajouter la classe active à la nouvelle image
  slides[currentSlide].classList.add('active');
}

// Changer d'image toutes les 4 secondes
setInterval(nextSlide, 4000);