const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIndex = 0;

// Fungsi untuk menampilkan slide
function showSlide(index) {
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
        currentIndex = index;
        showSlide(index);
    });
});

// Tombol navigasi
prev.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
    showSlide(currentIndex);
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

// Auto-slide
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, 5000);
