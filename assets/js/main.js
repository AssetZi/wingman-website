// Weight Wingman — site interactions

// ── Mobile nav toggle ─────────────────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);
    navLinks.classList.toggle('nav-open');
  });
}

function closeMobileNav() {
  if (navLinks && navLinks.classList.contains('nav-open')) {
    navLinks.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
}

// ── Scroll reveal ─────────────────────────────────────────────────
const revealObserver = ('IntersectionObserver' in window)
  ? new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const el = en.target;
          const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
          if (delay) setTimeout(() => el.classList.add('in'), delay);
          else el.classList.add('in');
          revealObserver.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })
  : null;

function watchReveals() {
  document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
    if (revealObserver) revealObserver.observe(el);
    else el.classList.add('in');
  });
}
watchReveals();

// ── Audience toggle (Athletes / Coaches) ──────────────────────────
const athleteSection = document.getElementById('athletes');
const coachSection = document.getElementById('coaches');
const segButtons = document.querySelectorAll('[data-audience]');

function setAudience(mode, scroll) {
  if (!athleteSection || !coachSection) return;
  athleteSection.classList.toggle('active', mode === 'athlete');
  coachSection.classList.toggle('active', mode === 'coach');
  segButtons.forEach((b) => {
    if (b.classList.contains('seg-btn')) {
      b.classList.toggle('active', b.getAttribute('data-audience') === mode);
    }
  });
  watchReveals();
  if (scroll) {
    const anchor = document.getElementById('audience');
    if (anchor) {
      const top = anchor.getBoundingClientRect().top + window.scrollY - 68;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
  closeMobileNav();
}

segButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (btn.tagName === 'A') e.preventDefault();
    setAudience(btn.getAttribute('data-audience'), btn.hasAttribute('data-scroll'));
  });
});

// Default state (supports linking to /#coaches)
if (athleteSection && coachSection) {
  setAudience(window.location.hash === '#coaches' ? 'coach' : 'athlete', false);
}

// ── Hero weigh-in card animation ──────────────────────────────────
(function () {
  const num = document.getElementById('hero-weight-num');
  const bar = document.querySelector('.ring .bar');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (bar) {
    const r = parseFloat(bar.getAttribute('r'));
    const c = 2 * Math.PI * r;
    bar.style.strokeDasharray = c;
    bar.style.strokeDashoffset = reduce ? c * (1 - 0.72) : c;
    if (!reduce) {
      setTimeout(() => { bar.style.strokeDashoffset = c * (1 - 0.72); }, 450);
    }
  }

  if (num) {
    if (reduce) { num.textContent = '171.2'; return; }
    const from = 174.0, to = 171.2, dur = 1700, t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      num.textContent = (from + (to - from) * e).toFixed(1);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
})();

// ── Smooth scroll for /# anchor links ─────────────────────────────
document.querySelectorAll('a[href^="/#"], a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    if (link.hasAttribute('data-audience')) return; // handled above
    const hash = link.getAttribute('href').replace('/', '');
    if (hash === '#') return;
    const target = document.querySelector(hash);
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 68;
      window.scrollTo({ top, behavior: 'smooth' });
      closeMobileNav();
    }
  });
});
