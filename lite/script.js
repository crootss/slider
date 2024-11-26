const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let index = 0;

function showSlide(index) {
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(${-index * 100}%)`;

  // Reset active class
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

next.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prev.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

// Initialize
showSlide(index);
