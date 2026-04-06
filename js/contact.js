/* ============================================================
   contact.js — Form submission (client-side only)
   ============================================================ */

(function () {
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('contact-success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.add('hidden');
    success.classList.add('visible');
  });
})();
