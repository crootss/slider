const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

// Fungsi untuk menampilkan slide
function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}vw)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Event listener untuk dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(index);
    });
});

// Autoslide
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, 5000); // Setiap 5 detik
