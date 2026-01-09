let slides = document.querySelectorAll(".slide");
let index = 0;

slides[index].style.opacity = 1;

setInterval(() => {
  slides[index].style.opacity = 0;
  index = (index + 1) % slides.length;
  slides[index].style.opacity = 1;
}, 3000);
