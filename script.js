const slides = document.querySelectorAll('.slideshow-container img');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds