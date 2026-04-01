// ===== STICKY HEADER =====
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  document.querySelectorAll('.mobile-link, .mobile-menu .btn').forEach(el => {
    el.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ===== REVEAL ON SCROLL =====
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
revealEls.forEach(el => revealObs.observe(el));

// ===== COUNTER ANIMATION =====
function animateCounter(el) {
  const target = parseInt(el.closest('[data-target]').dataset.target);
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 120));
  const interval = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current;
    if (current >= target) clearInterval(interval);
  }, 16);
}
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.counted) {
      entry.target.dataset.counted = '1';
      const val = entry.target.querySelector('.count-val');
      if (val) animateCounter(val);
    }
  });
}, { threshold: 0.4 });
document.querySelectorAll('[data-target]').forEach(el => counterObs.observe(el));

// ===== BACK TO TOP =====
const backTop = document.getElementById('back-top');
if (backTop) {
  window.addEventListener('scroll', () => backTop.classList.toggle('show', window.scrollY > 500));
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== SMOOTH ANCHOR SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const t = document.querySelector(link.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
