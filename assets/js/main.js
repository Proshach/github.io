/* ============================================================
   Proshach Innovations — main.js
   Sections: Cursor · Navbar · Scroll Reveal · Photo Cards
   ============================================================ */

/* ── CUSTOM CURSOR ──────────────────────────────────────────── */
(function initCursor() {
  const cursor     = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursorRing');

  if (!cursor || !cursorRing) return;

  let mx = -100, my = -100;
  let rx = -100, ry = -100;

  // Move dot instantly
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  // Smooth-lag ring
  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    cursorRing.style.left = rx + 'px';
    cursorRing.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover state on interactive elements
  const interactives = document.querySelectorAll('a, button, .photo-card, .project-card');
  interactives.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hovered');
      cursorRing.classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hovered');
      cursorRing.classList.remove('hovered');
    });
  });
})();


/* ── NAVBAR SCROLL ──────────────────────────────────────────── */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
})();


/* ── SCROLL REVEAL ──────────────────────────────────────────── */
(function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // fire once
      }
    });
  }, { threshold: 0.12 });

  elements.forEach((el) => observer.observe(el));
})();


/* ── PHOTO CARDS: swap placeholders for real images ────────────
   When you add photos to assets/images/, update the array below
   and uncomment this block. The script replaces the placeholder
   div with a proper <img> tag automatically.

(function loadGalleryImages() {
  const photos = [
    { src: 'assets/images/photo1.jpg', alt: 'Urban Reflections' },
    { src: 'assets/images/photo2.jpg', alt: 'Human Connection' },
    { src: 'assets/images/photo3.jpg', alt: 'Nature Meets Technology' },
  ];

  const cards = document.querySelectorAll('.photo-card');

  cards.forEach((card, i) => {
    if (!photos[i]) return;
    const placeholder = card.querySelector('.photo-placeholder');
    if (!placeholder) return;

    const img = document.createElement('img');
    img.src     = photos[i].src;
    img.alt     = photos[i].alt;
    img.loading = 'lazy';

    card.replaceChild(img, placeholder);
  });
})();
──────────────────────────────────────────────────────────────── */


/* ── STRIPE PAYMENT LINKS ──────────────────────────────────────
   When you create Stripe payment links in your dashboard,
   update this object and call updateStripeLinks() below.
   Keys match the photo card order (0-indexed).

const stripeLinks = {
  0: 'https://buy.stripe.com/your_link_photo1',
  1: 'https://buy.stripe.com/your_link_photo2',
  2: 'https://buy.stripe.com/your_link_photo3',
};

function updateStripeLinks() {
  const buyButtons = document.querySelectorAll('.btn-small.buy');
  buyButtons.forEach((btn, i) => {
    if (stripeLinks[i]) btn.href = stripeLinks[i];
  });
}

updateStripeLinks();
──────────────────────────────────────────────────────────────── */
