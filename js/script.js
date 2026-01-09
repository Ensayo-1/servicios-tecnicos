let current = 0;
const images = document.querySelectorAll(".gallery-img");
const maxImages = Math.min(images.length, 3);

images[0].style.opacity = 1;

setInterval(() => {
  images[current].style.opacity = 0;
  current = (current + 1) % maxImages;
  images[current].style.opacity = 1;
}, 3000);
