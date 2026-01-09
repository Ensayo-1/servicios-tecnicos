const slides = document.querySelectorAll('.slide');
let i = 0;

slides[i].style.opacity = 1;

setInterval(() => {
  slides[i].style.opacity = 0;
  i = (i + 1) % slides.length;
  slides[i].style.opacity = 1;
}, 3500);
