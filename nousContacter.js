// Gestion du formulaire
        const form = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');
        const btnText = document.getElementById('btnText');
        const successMessage = document.getElementById('successMessage');
        const errorMessage = document.getElementById('errorMessage');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validation
            const formData = new FormData(form);
            let isValid = true;

            for (let [key, value] of formData.entries()) {
                if (!value.trim()) {
                    isValid = false;
                    break;
                }
            }

            if (!isValid) {
                showError();
                return;
            }

            // Validation email
            const email = formData.get('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showError('Veuillez entrer une adresse email valide.');
                return;
            }

            // Validation téléphone
            const tel = formData.get('telephone');
            const telRegex = /^\+?237[0-9]{9}$/;
            if (!telRegex.test(tel.replace(/\s/g, ''))) {
                showError('Veuillez entrer un numéro de téléphone valide (+237XXXXXXXXX).');
                return;
            }

            // Simulation d'envoi
            submitBtn.classList.add('loading');
            btnText.innerHTML = '<div class="spinner"></div> Envoi en cours...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.classList.remove('loading');
                btnText.innerHTML = '<i class="fas fa-check"></i> Message envoyé !';
                
                successMessage.style.display = 'block';
                errorMessage.style.display = 'none';

                // Réinitialisation
                form.reset();

                setTimeout(() => {
                    btnText.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer le message';
                    submitBtn.disabled = false;
                    successMessage.style.display = 'none';
                }, 3000);
            }, 2000);
        });

        function showError(message = 'Veuillez remplir tous les champs obligatoires.') {
            errorMessage.textContent = message;
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';

            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 5000);
        }

        // Animation des inputs
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
                this.parentElement.style.transition = 'all 0.3s ease';
            });

            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
        });

        // Fonction pour afficher la carte (simulation)
        function showMap(city) {
            const urls = {
                'douala': 'https://www.google.com/maps/search/Douala+Bessengue',
                'yaounde': 'https://www.google.com/maps/search/Yaoundé+Bastos',
                'maroua': 'https://www.google.com/maps/search/Maroua+Comice'
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
        const headerText = document.querySelector('.header p');
        const originalText = headerText.textContent;
        headerText.textContent = '';
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
        const campusCards = document.querySelectorAll('.campus-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInLeft 0.8s ease forwards';
                }
            });
        });

        campusCards.forEach(card => observer.observe(card));

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