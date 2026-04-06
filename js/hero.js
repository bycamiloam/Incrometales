/* ============================================================
   hero.js — Carousel logic (auto-rotate, prev/next, tabs)
   ============================================================ */

(function () {
  const slides = [
    {
      image:       'public/hero-pisos.jpg',
      category:    'Pisos y Revestimientos',
      title:       'Exhibidores para pisos cerámicos y laminados',
      description: 'Estructuras especializadas que maximizan la exposición de materiales, con compartimentos angulados para muestra directa al cliente.',
    },
    {
      image:       'public/hero-herramientas.jpg',
      category:    'Ferretería y Herramientas',
      title:       'Góndolas y racks para punto de venta',
      description: 'Sistemas modulares de alambre y tubo con ganchos, repisas y paneles perforados adaptados a cada línea de producto.',
    },
    {
      image:       'public/hero-colchones.jpg',
      category:    'Muebles para Colchones',
      title:       'Estructuras comerciales a la medida',
      description: 'Muebles de exhibición en tubo de acero con acabados electrostáticos, diseñados para showrooms y tiendas especializadas.',
    },
    {
      image:       'public/hero-alimentos.jpg',
      category:    'Alimentos y Supermercados',
      title:       'Góndolas metálicas para retail alimentario',
      description: 'Sistemas de estantería certificados para cadenas de supermercados, con configuraciones de alto tráfico y fácil reposición.',
    },
  ];

  let current        = 0;
  let isTransitioning = false;
  let autoTimer      = null;

  /* ----- DOM refs ----- */
  const bgSlides    = document.querySelectorAll('.hero-bg-slide');
  const categoryEl  = document.getElementById('hero-category');
  const titleEl     = document.getElementById('hero-title');
  const descEl      = document.getElementById('hero-desc');
  const tabs        = document.querySelectorAll('.hero-tab');
  const progressBar = document.getElementById('hero-progress-bar');
  const tagWrapper  = document.getElementById('hero-tag-wrapper');

  /* ----- Update UI to reflect current slide ----- */
  function updateSlide() {
    const slide = slides[current];

    // Background opacity
    bgSlides.forEach((el, i) => {
      el.style.opacity = i === current ? '1' : '0';
    });

    // Text content
    categoryEl.textContent = slide.category;
    titleEl.textContent    = slide.title;
    descEl.textContent     = slide.description;

    // Restart fade-in animation on text elements
    [tagWrapper, titleEl, descEl].forEach(el => {
      el.classList.remove('animate-fade-in');
      void el.offsetWidth; // force reflow to restart animation
      el.classList.add('animate-fade-in');
    });

    // Tab active state
    tabs.forEach((btn, i) => {
      if (i === current) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Restart progress bar animation
    progressBar.style.animation = 'none';
    void progressBar.offsetWidth;
    progressBar.style.animation = 'progress-bar 6s linear forwards';
  }

  /* ----- Navigation ----- */
  function goTo(index) {
    if (isTransitioning) return;
    isTransitioning = true;
    current = index;
    updateSlide();
    setTimeout(() => { isTransitioning = false; }, 700);
  }

  function prev() { goTo((current - 1 + slides.length) % slides.length); }
  function next() { goTo((current + 1) % slides.length); }

  /* ----- Auto-play ----- */
  function startAutoPlay() {
    stopAutoPlay();
    autoTimer = setInterval(next, 6000);
  }

  function stopAutoPlay() {
    if (autoTimer) clearInterval(autoTimer);
  }

  /* ----- Event listeners ----- */
  document.getElementById('hero-prev').addEventListener('click', () => { prev(); startAutoPlay(); });
  document.getElementById('hero-next').addEventListener('click', () => { next(); startAutoPlay(); });

  tabs.forEach((btn, i) => {
    btn.addEventListener('click', () => { goTo(i); startAutoPlay(); });
  });

  /* ----- Init ----- */
  updateSlide();
  startAutoPlay();
})();
