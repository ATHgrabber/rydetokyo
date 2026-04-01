// ─── NAV ──────────────────────────────────────────────
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => navLinks?.classList.toggle('open'));

// Active link
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});

// ─── ACCORDION ────────────────────────────────────────
document.querySelectorAll('.accordion-trigger').forEach(btn => {
  btn.addEventListener('click', () => {
    const body = btn.nextElementSibling;
    const isOpen = btn.classList.contains('open');
    // Close all
    document.querySelectorAll('.accordion-trigger').forEach(b => {
      b.classList.remove('open');
      b.nextElementSibling?.classList.remove('open');
    });
    // Open clicked if was closed
    if (!isOpen) {
      btn.classList.add('open');
      body?.classList.add('open');
    }
  });
});

// ─── SCROLL REVEAL ────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
