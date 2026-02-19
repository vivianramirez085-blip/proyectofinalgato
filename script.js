// ── Form submission ──
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('form-success');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre  = document.getElementById('nombre').value.trim();
  const email   = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !email || !mensaje) {
    alert('Por favor completa los campos obligatorios.');
    return;
  }

  // Simulate sending (no backend needed for this project)
  form.reset();
  form.classList.add('hidden');
  successMsg.classList.remove('hidden');
});

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.opacity = '0.75';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.opacity = '1';
    }
  });
});