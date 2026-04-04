// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);
    navLinks.classList.toggle('nav-open');
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="/#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const hash = link.getAttribute('href').replace('/', '');
    const target = document.querySelector(hash);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      // Close mobile nav if open
      if (navLinks.classList.contains('nav-open')) {
        navLinks.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
});
