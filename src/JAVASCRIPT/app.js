// let fullName = prompt("What Is Your Full Name?", "");
// let upperCaseFullName = fullName.toUpperCase();
// alert(`Welcome To Enayon Sublime Design ${upperCaseFullName}`);

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

// Hero Background Image Slider
const bgImages = [
    './assets/banner_1.jpg',
    './assets/banner_2.jpg',
    './assets/agbada_3.jpg'
  ];
  
  let bgIndex = 0;
  const heroSection = document.getElementById('hero-bg-slider');
  const dots = document.querySelectorAll('.bg-dot');
  
  function setBgSlide(index) {
    bgIndex = index;
    heroSection.style.backgroundImage = `url('${bgImages[bgIndex]}')`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('bg-blue-600', i === bgIndex);
      dot.classList.toggle('bg-gray-400', i !== bgIndex);
    });
  }
  
  // Button events
  document.getElementById('bg-prev').onclick = () => {
    setBgSlide((bgIndex - 1 + bgImages.length) % bgImages.length);
  };
  document.getElementById('bg-next').onclick = () => {
    setBgSlide((bgIndex + 1) % bgImages.length);
  };
  // Dot events
  dots.forEach((dot, i) => {
    dot.onclick = () => setBgSlide(i);
  });
  
  // Auto-slide
  setInterval(() => {
    setBgSlide((bgIndex + 1) % bgImages.length);
  }, 5000);
  
  // Initialize
  setBgSlide(0);

