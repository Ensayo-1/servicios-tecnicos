let current = 0;
const images = document.querySelectorAll(".gallery-img");

// mostrar solo la primera
images[current].style.opacity = 1;

// solo rota las primeras 3 aunque haya más
const maxImages = Math.min(images.length, 3);

setInterval(() => {
  images[current].style.opacity = 0;
  current = (current + 1) % maxImages;
  images[current].style.opacity = 1;
}, 3500); // más corto y elegante
