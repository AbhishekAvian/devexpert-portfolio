import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function useGlobal() {

  const location = useLocation(); // 👈 track route change

  useEffect(() => {

    // ===== STICKY HEADER =====
    const header = document.getElementById('header');
    const handleHeaderScroll = () => {
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 60);
      }
    };
    window.addEventListener('scroll', handleHeaderScroll);


    // ===== MOBILE MENU =====
    const hamburger = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    const toggleMenu = () => mobileMenu?.classList.toggle('open');
    const closeMenu = () => mobileMenu?.classList.remove('open');

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', toggleMenu);

      document.querySelectorAll('.mobile-link, .mobile-menu .btn').forEach(el => {
        el.addEventListener('click', closeMenu);
      });
    }


    // ===== REVEAL =====
    const revealEls = document.querySelectorAll('.reveal');

    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    revealEls.forEach(el => revealObs.observe(el));


    // ===== CLEANUP =====
    return () => {
      window.removeEventListener('scroll', handleHeaderScroll);

      if (hamburger) hamburger.removeEventListener('click', toggleMenu);

      revealObs.disconnect();
    };

  }, [location]); // 🔥 IMPORTANT: re-run on route change
}