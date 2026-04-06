/* ============================================================
   navbar.js — Sticky scroll detection & mobile menu
   ============================================================ */

(function () {
  const navbar        = document.getElementById('navbar');
  const mobileMenu    = document.getElementById('mobile-menu');
  const menuOpenIcon  = document.getElementById('menu-icon-open');
  const menuCloseIcon = document.getElementById('menu-icon-close');
  const menuToggle    = document.getElementById('menu-toggle');

  /* ----- Scroll detection ----- */
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  /* ----- Mobile menu toggle ----- */
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuOpenIcon.style.display  = isOpen ? 'none'  : 'block';
    menuCloseIcon.style.display = isOpen ? 'block' : 'none';
  });

  /* ----- Smooth scroll helper (shared) ----- */
  window.scrollToSection = function (id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu if open
      mobileMenu.classList.remove('open');
      menuOpenIcon.style.display  = 'block';
      menuCloseIcon.style.display = 'none';
    }
  };
})();
