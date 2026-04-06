/* ============================================================
   whatsapp.js — Floating WhatsApp button
   ============================================================ */

(function () {
  const WHATSAPP_NUMBER  = '573001234567'; // Reemplazar con el número real
  const WHATSAPP_MESSAGE = encodeURIComponent(
    '¡Hola! Me interesa conocer más sobre sus exhibidores metálicos y estructuras comerciales.'
  );

  const fab     = document.getElementById('whatsapp-fab');
  const popup   = document.getElementById('whatsapp-popup');
  const closeBtn = document.getElementById('wa-close-btn');
  const chatBtn  = document.getElementById('wa-chat-btn');
  const fabIconOpen  = document.getElementById('fab-icon-open');
  const fabIconClose = document.getElementById('fab-icon-close');

  function openPopup() {
    popup.classList.add('open');
    fabIconOpen.style.display  = 'none';
    fabIconClose.style.display = 'block';
  }

  function closePopup() {
    popup.classList.remove('open');
    fabIconOpen.style.display  = 'block';
    fabIconClose.style.display = 'none';
  }

  fab.addEventListener('click', () => {
    popup.classList.contains('open') ? closePopup() : openPopup();
  });

  closeBtn.addEventListener('click', closePopup);

  chatBtn.addEventListener('click', () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
      '_blank',
      'noopener,noreferrer'
    );
    closePopup();
  });
})();
