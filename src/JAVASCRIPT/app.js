let fullName = prompt("What Is Your Full Name?", "");
let upperCaseFullName = fullName.toUpperCase();
alert(`Welcome To Enayon Sublime Design ${upperCaseFullName}`);

// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.add('hidden');
    }
});

// Scroll to top functionality
const scrollToTopButton = document.getElementById('scroll-to-top');

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hero Slider

const images = [
    "https://ik.imagekit.io/derf9ry7bk/Grandeur/Photos/home/hero-desktop.jpg", // New first image
    "https://wp-media-dejiandkola.s3.eu-west-2.amazonaws.com/2021/08/228013867_226535282691755_7723897417864312630_n.jpg",
    "https://wp-media-dejiandkola.s3.eu-west-2.amazonaws.com/2021/07/221010174_514682686473681_3806229032056508721_n.jpg",
    "https://wp-media-dejiandkola.s3.eu-west-2.amazonaws.com/2025/02/165706373_351484026244111_1730607163972531344_n.jpg"
  ];

let current = 0;
const slides = images.map((_img, i) => document.getElementById(`slide-${i}`));
slides.forEach((slide, i) => {
  slide.style.backgroundImage = `url('${images[i]}')`;
});

function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('opacity-0', i !== idx);
    slide.classList.toggle('opacity-100', i === idx);
  });
}

document.getElementById('prev-slide').onclick = () => {
  current = (current - 1 + images.length) % images.length;
  showSlide(current);
};
document.getElementById('next-slide').onclick = () => {
  current = (current + 1) % images.length;
  showSlide(current);
};

// Optional: Auto-slide every 7 seconds
let autoSlide = setInterval(() => {
  current = (current + 1) % images.length;
  showSlide(current);
}, 7000);

// Pause auto-slide on hover
document.getElementById('hero-slider').addEventListener('mouseenter', () => clearInterval(autoSlide));
document.getElementById('hero-slider').addEventListener('mouseleave', () => {
  autoSlide = setInterval(() => {
    current = (current + 1) % images.length;
    showSlide(current);
  }, 7000);
});

// Initialize
showSlide(current);
