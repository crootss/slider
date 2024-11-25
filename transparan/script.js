const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let interval;

// Fungsi untuk menampilkan slide
function showSlide(index) {
    currentIndex = index;
    slider.style.transform = `translateX(-${index * 100}vw)`;
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        const progress = dot.querySelector('.progress');
        if (i === index) {
            dot.classList.add('active');
            progress.style.animation = `progress 5s linear infinite`;
        } else {
            progress.style.animation = 'none';
        }
    });
}

// Event listener untuk dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(interval);
        showSlide(index);
        startAutoSlide();
    });
});

// Auto-slide
function startAutoSlide() {
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 5000); // Durasi timer
}

// Swipe functionality
let startPos = 0;
let isDragging = false;

slider.addEventListener('touchstart', (e) => {
    isDragging = true;
    startPos = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
    if (isDragging) {
        const currentPos = e.touches[0].clientX;
        if (currentPos - startPos > 50 && currentIndex > 0) {
            showSlide(currentIndex - 1);
            isDragging = false;
        } else if (startPos - currentPos > 50 && currentIndex < slides.length - 1) {
            showSlide(currentIndex + 1);
            isDragging = false;
        }
    }
});

slider.addEventListener('touchend', () => {
    isDragging = false;
});

startAutoSlide();
