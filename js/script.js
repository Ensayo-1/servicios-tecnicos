let index = 0;
const images = document.querySelectorAll(".gallery img");

setInterval(() => {
  images.forEach(img => img.style.display = "none");
  images[index].style.display = "block";
  index = (index + 1) % images.length;
}, 3000);
