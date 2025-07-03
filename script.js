// Toggle menu for mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Testimonial slider
let current = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

function setTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  current = index;
}
