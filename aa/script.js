let indexSlide = 0;
afficherSlides();

function afficherSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  indexSlide++;
  if (indexSlide > slides.length) { indexSlide = 1 }
  slides[indexSlide - 1].style.display = "block";
  setTimeout(afficherSlides, 3000);
}

function changerSlide(n) {
  indexSlide += n - 1;
  let slides = document.getElementsByClassName("slide");
  if (indexSlide >= slides.length) indexSlide = 0;
  if (indexSlide < 0) indexSlide = slides.length - 1;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[indexSlide].style.display = "block";
}

function afficherSurprise() {
  const coeurs = document.getElementById("coeurs");
  coeurs.innerHTML = "";
  for (let i = 0; i < 20; i++) {
    const coeur = document.createElement("span");
    coeur.textContent = "💗";
    coeur.style.fontSize = `${Math.random() * 20 + 20}px`;
    coeur.style.position = "absolute";
    coeur.style.top = `${Math.random() * 80 + 10}%`;
    coeur.style.left = `${Math.random() * 90 + 5}%`;
    coeur.style.animation = "float 3s ease-in-out infinite";
    coeurs.appendChild(coeur);
  }
}

function toggleMusique() {
  const audio = document.getElementById("musiqueFond");
  const btn = document.getElementById("btnMusique");
  if (audio.paused) {
    audio.play();
    btn.textContent = "Pause musique 🎵";
  } else {
    audio.pause();
    btn.textContent = "Jouer la musique ▶️";
  }
}