const authCallbackHash = new URLSearchParams(window.location.hash.replace(/^#/, ''));
const hasAuthCallback = ['access_token', 'refresh_token', 'type', 'error', 'error_code']
  .some((key) => authCallbackHash.has(key));
if (hasAuthCallback) {
  window.location.replace(`/club/${window.location.search}${window.location.hash}`);
}

// ---- Enrutado de membresia por hostname (dibueno 23-sep 2026) ----
// Un solo copy compartido; el flujo difiere por configuracion, no por copia.
//  - Sitio A (produccion de salida): solarpunk.empresaagentica.com -> Tally
//    (https://tally.so/r/VL7Xl6, Stripe productivo, registro manual, sin login;
//    el form de Tally pregunta la modalidad dentro del form).
//  - Sitio B (main tecnica): wp-test.test.solarpunk.empresaagentica.com ->
//    flujo Privy->WP->Stripe Test->Supabase (wiring actual, sin login nuevo).
// Cualquier otro host (preview local, dominio nuevo) usa Tally por defecto.
const TALLY_URL = 'https:' + '//tally.so' + '/r/VL7Xl6';
const CLUB_ORIGIN_B = 'https:' + '//wp-test.test.solarpunk.empresaagentica.com';
const LOGIN_URL_B = CLUB_ORIGIN_B + '/club/login/';
const PAGO_URL_B = CLUB_ORIGIN_B + '/club/pago/';

function detectFlowByHost(host) {
  const hostname = String(host || '').toLowerCase().replace(/^www\./, '');
  if (hostname === CLUB_ORIGIN_B.replace('https:' + '//', '')) return 'club-wp';
  if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.endsWith('.local')) return 'tally';
  if (hostname.endsWith('.empresaagentica.com')) {
    return hostname === 'solarpunk.empresaagentica.com' ? 'tally' : 'club-wp';
  }
  return 'tally';
}

const FLOW = detectFlowByHost(window.location && window.location.host);

function membershipUrlFor(flow) {
  return flow === 'club-wp' ? LOGIN_URL_B : TALLY_URL;
}

function paymentPlanUrlFor(flow, plan) {
  return flow === 'club-wp' ? PAGO_URL_B + '?plan=' + plan : TALLY_URL;
}

// Punto unico de configuracion del destino de membresia.
const FROZEN_SITE_CONFIG = {
  flow: FLOW,
  clubOrigin: CLUB_ORIGIN_B,
  registrationUrl: membershipUrlFor(FLOW),
  registrationReady: true,
  registrationUrlStatus: 'verified',
  registrationOwner: 'Club SolarPunk Mx',
  paymentHandledHere: false,
  accountCreationHandledHere: false
};
window.SOLAR_PUNK_SITE_CONFIG = Object.freeze(FROZEN_SITE_CONFIG);

const SITE_CONFIG = FROZEN_SITE_CONFIG;

const root = document.documentElement;
const header = document.querySelector('[data-header]');
const journey = document.querySelector('[data-journey]');
const journeyStages = [...document.querySelectorAll('[data-stage]')];
const assembly = document.querySelector('[data-assembly]');
const assemblyParts = [...document.querySelectorAll('[data-assembly-part]')];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

for (const link of document.querySelectorAll('[data-cta]')) {
  link.href = SITE_CONFIG.registrationReady ? SITE_CONFIG.registrationUrl : '#registro';
  link.dataset.endpointStatus = SITE_CONFIG.registrationUrlStatus;
  link.addEventListener('click', (event) => {
    if (!SITE_CONFIG.registrationReady) event.preventDefault();
    document.dispatchEvent(new CustomEvent('solarpunk:registration-intent', {
      detail: {
        destination: SITE_CONFIG.registrationUrl,
        destinationStatus: SITE_CONFIG.registrationUrlStatus
      }
    }));
  });
}

// CTA directo al área de pago con la modalidad ya seleccionada (sin paso intermedio).
for (const link of document.querySelectorAll('[data-payment-plan]')) {
  const plan = link.dataset.paymentPlan === 'presencial' ? 'presencial' : 'virtual';
  if (SITE_CONFIG.registrationReady) {
    link.href = paymentPlanUrlFor(SITE_CONFIG.flow, plan);
  } else {
    link.hidden = true;
  }
}

const ctaStatus = document.querySelector('[data-cta-status]');
if (ctaStatus && SITE_CONFIG.registrationUrlStatus === 'verified') {
  ctaStatus.textContent = 'Registro disponible en la plataforma de miembros.';
}

let ticking = false;

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function updateAssembly(progress) {
  if (!assembly || !assemblyParts.length) return;
  const remaining = 1 - progress;
  const scale = 0.82 + progress * 0.15;
  assembly.style.transform = `scale(${scale.toFixed(4)})`;
  const assembled = progress >= 0.94;
  assembly.classList.toggle('is-final', assembled);
  assembly.classList.toggle('is-complete', assembled);

  for (const part of assemblyParts) {
    const x = Number(part.dataset.scatterX || 0) * remaining;
    const y = Number(part.dataset.scatterY || 0) * remaining;
    const rotation = Number(part.dataset.scatterRotate || 0) * remaining;
    part.style.transform = `translate3d(calc(-50% + ${x.toFixed(2)}px), ${y.toFixed(2)}px, 0) rotate(${rotation.toFixed(2)}deg)`;
  }
}

function clearAssemblyMotion() {
  assembly?.removeAttribute('style');
  assembly?.classList.add('is-final');
  assembly?.classList.add('is-complete');
  assemblyParts.forEach(part => part.removeAttribute('style'));
}

function updateMotion() {
  ticking = false;
  const scrollY = window.scrollY;
  const viewport = window.innerHeight || 1;
  const heroProgress = clamp(scrollY / viewport);

  root.style.setProperty('--hero-progress', heroProgress.toFixed(4));
  header?.classList.toggle('is-scrolled', scrollY > 36);

  if (!journey || !journeyStages.length) return;
  const rect = journey.getBoundingClientRect();
  const travel = Math.max(1, journey.offsetHeight - viewport);
  const progress = clamp(-rect.top / travel);
  root.style.setProperty('--journey-progress', progress.toFixed(4));
  updateAssembly(progress);

  const activeIndex = Math.min(
    journeyStages.length - 1,
    Math.floor(progress * journeyStages.length)
  );
  journeyStages.forEach((stage, index) => {
    stage.classList.toggle('is-active', index === activeIndex);
    stage.classList.toggle('is-past', index < activeIndex);
  });
}

function requestMotionUpdate() {
  if (ticking || reducedMotion.matches) return;
  ticking = true;
  requestAnimationFrame(updateMotion);
}

if (!reducedMotion.matches) {
  addEventListener('scroll', requestMotionUpdate, { passive: true });
  addEventListener('resize', requestMotionUpdate, { passive: true });
  updateMotion();
}

reducedMotion.addEventListener?.('change', () => {
  root.removeAttribute('style');
  if (reducedMotion.matches) clearAssemblyMotion();
  else updateMotion();
});

if (reducedMotion.matches) clearAssemblyMotion();

const revealObserver = new IntersectionObserver((entries, observer) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  }
}, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

document.querySelectorAll('.section-pad, .schedule article, .tier, .faq-list details').forEach((element) => {
  element.classList.add('reveal');
  revealObserver.observe(element);
});

for (const detail of document.querySelectorAll('details')) {
  detail.addEventListener('toggle', () => {
    if (!detail.open) return;
    document.querySelectorAll('details[open]').forEach((other) => {
      if (other !== detail) other.open = false;
    });
  });
}
