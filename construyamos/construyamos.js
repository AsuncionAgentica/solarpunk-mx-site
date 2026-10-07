/* ======================================================================
   construyamos.js — página /construyamos/ (AG-SPX-CONSTRUYAMOS-01b)
   JS local sin librerías, sin fetch, sin eval (CSP: script-src 'self').
   CSP-compliant: ninguna asignación a element.style ni <style> inyectado
   (la CSP de producción es style-src 'self'). El estado visual pasa por
   clases CSS (classList) o por atributos de presentación SVG
   (setAttribute), que NO son estilos inline.
   Genera 2 gráficas SVG propias:
     1. Efecto tijera — doble eje, serie 2021-2026, cruce 2023/2024.
     2. Deuda cognitiva — medidores animados (MIT 55% / 83.3%).
   Las reglas de las clases SVG viven en construyamos.css.
   Patrón reveal con IntersectionObserver (copia de app.js del sitio).
   Respeta prefers-reduced-motion.
   ====================================================================== */

(function () {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const SVG_NS = 'http://www.w3.org/2000/svg';

  function el(name, attrs, parent) {
    const node = document.createElementNS(SVG_NS, name);
    for (const key in attrs) node.setAttribute(key, attrs[key]);
    if (parent) parent.appendChild(node);
    return node;
  }

  function fmt(n) {
    return String(n).replace('.', ',');
  }

  // ---------- Tooltip SVG local (CSP-safe) ----------
  // Vive dentro del SVG: se mueve con setAttribute('transform', ...)
  // (atributo permitido) y se muestra/oculta con la clase .is-on.
  function makeTip(svg, W, H) {
    const TIP_W = 186, TIP_H = 58, PAD = 11;
    const g = el('g', { class: 'cjs-svg-tip-g', 'aria-hidden': 'true' }, svg);
    el('rect', { x: 0, y: 0, width: TIP_W, height: TIP_H, rx: 3 }, g);
    const title = el('text', { x: PAD, y: 18, class: 'tip-title' }, g);
    const row1 = el('text', { x: PAD, y: 35, class: 'tip-row' }, g);
    const row2 = el('text', { x: PAD, y: 49, class: 'tip-row' }, g);
    return {
      show(year, valA, valB, sx, sy) {
        title.textContent = year;
        row1.textContent = valA;
        row2.textContent = valB;
        // Cerca del borde derecho se voltea a la izquierda del cursor.
        const flip = sx + PAD + TIP_W > W - 4;
        const tx = flip ? sx - PAD - TIP_W : sx + PAD;
        const ty = Math.max(4, Math.min(sy - 10, H - TIP_H - 4));
        g.setAttribute('transform', 'translate(' + tx + ',' + ty + ')');
        g.classList.add('is-on');
      },
      hide() { g.classList.remove('is-on'); }
    };
  }

  // ---------- 1) Efecto tijera ----------
  function buildScissorsChart() {
    const host = document.getElementById('tijera-chart');
    if (!host) return;
    const DATA = [
      { year: '2021', empleo: 9.0, ia: 4.2 },
      { year: '2022', empleo: 8.2, ia: 8.5 },
      { year: '2023', empleo: 6.5, ia: 14.1 },
      { year: '2024', empleo: 4.8, ia: 22.0 },
      { year: '2025', empleo: 3.6, ia: 28.5 },
      { year: '2026', empleo: 3.0, ia: 31.4 }
    ];
    const W = 900, H = 460, M = { top: 34, right: 46, bottom: 44, left: 66 };
    const iw = W - M.left - M.right, ih = H - M.top - M.bottom;
    const x = (i) => M.left + (iw * i) / (DATA.length - 1);
    const yL = (v) => M.top + ih - (v / 10) * ih;   // eje izquierdo 0-10%
    const yR = (v) => M.top + ih - (v / 35) * ih;   // eje derecho 0-35%

    const svg = el('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'presentation' });

    // rejilla + ticks izquierdos (0..10, paso 2)
    for (let v = 0; v <= 10; v += 2) {
      const yy = yL(v);
      el('line', { x1: M.left, y1: yy, x2: W - M.right, y2: yy, class: 'grid-line' }, svg);
      const t = el('text', { x: M.left - 10, y: yy + 4, 'text-anchor': 'end', class: 'axis-text' }, svg);
      t.textContent = String(v) + '%';
    }
    // ticks derechos (0..35, paso 7)
    for (let v = 0; v <= 35; v += 7) {
      const t = el('text', { x: W - M.right + 10, y: yR(v) + 4, class: 'axis-text' }, svg);
      t.textContent = String(v) + '%';
    }
    // ejes
    el('line', { x1: M.left, y1: M.top, x2: M.left, y2: M.top + ih, class: 'axis-line' }, svg);
    el('line', { x1: W - M.right, y1: M.top, x2: W - M.right, y2: M.top + ih, class: 'axis-line' }, svg);
    el('line', { x1: M.left, y1: M.top + ih, x2: W - M.right, y2: M.top + ih, class: 'axis-line' }, svg);
    // etiquetas de eje
    const yl = el('text', { x: 18, y: M.top + 8, class: 'axis-text' }, svg);
    yl.textContent = 'Empleo nivel inicial';
    const yl2 = el('text', { x: 18, y: M.top + 24, class: 'axis-text' }, svg);
    yl2.textContent = '(%) · eje izq.';
    const yr = el('text', { x: W - M.right + 8, y: M.top - 8, class: 'axis-text' }, svg);
    yr.textContent = 'Desplazamiento IA';
    const yr2 = el('text', { x: W - M.right - 116, y: M.top - 8, class: 'axis-text' }, svg);
    yr2.textContent = '(%) · eje der.';

    // años
    DATA.forEach((d, i) => {
      const t = el('text', { x: x(i), y: M.top + ih + 22, 'text-anchor': 'middle', class: 'year-text' }, svg);
      t.textContent = d.year;
    });

    // línea de cruce 2023.5 (entre 2023 y 2024)
    const cx = (x(2) + x(3)) / 2;
    el('line', { x1: cx, y1: M.top, x2: cx, y2: M.top + ih, class: 'cross-line' }, svg);
    const ct = el('text', { x: cx, y: M.top - 8, 'text-anchor': 'middle', class: 'cross-label' }, svg);
    ct.textContent = '↑ cruce 2023-2024';

    // series
    const pEmpleo = DATA.map((d, i) => (i ? 'L' : 'M') + x(i) + ' ' + yL(d.empleo)).join(' ');
    const pIa = DATA.map((d, i) => (i ? 'L' : 'M') + x(i) + ' ' + yR(d.ia)).join(' ');
    // pathLength=100 normaliza el trazo para la animación de dibujado
    // (los valores --len en CSS inline quedaron prohibidos por la CSP).
    const lineE = el('path', { d: pEmpleo, class: 'serie-empleo cjs-svg-line', pathLength: '100' }, svg);
    const lineI = el('path', { d: pIa, class: 'serie-ia cjs-svg-line', pathLength: '100' }, svg);

    // puntos + zonas de hover
    const tip = makeTip(svg, W, H);
    const guide = el('line', { x1: 0, y1: M.top, x2: 0, y2: M.top + ih, class: 'hover-guide' }, svg);
    DATA.forEach((d, i) => {
      el('circle', { cx: x(i), cy: yL(d.empleo), r: 5, class: 'dot-empleo cjs-svg-dot' }, svg);
      el('circle', { cx: x(i), cy: yR(d.ia), r: 5, class: 'dot-ia cjs-svg-dot' }, svg);
      const zone = el('rect', {
        x: x(i) - iw / (DATA.length - 1) / 2,
        y: M.top, width: iw / (DATA.length - 1), height: ih,
        class: 'hit-zone'
      }, svg);
      zone.addEventListener('mousemove', (ev) => {
        // Coordenadas del cursor convertidas al sistema del viewBox.
        const box = svg.getBoundingClientRect();
        const scale = W / box.width;
        const sx = (ev.clientX - box.left) * scale;
        const sy = (ev.clientY - box.top) * scale;
        guide.setAttribute('x1', x(i)); guide.setAttribute('x2', x(i));
        guide.classList.add('is-on');
        tip.show(
          d.year,
          'Empleo nivel inicial: ' + fmt(d.empleo.toFixed(1)) + '%',
          'Desplazamiento IA: ' + fmt(d.ia.toFixed(1)) + '%',
          sx, sy
        );
      });
      zone.addEventListener('mouseleave', () => {
        guide.classList.remove('is-on');
        tip.hide();
      });
    });

    host.appendChild(svg);
  }

  // ---------- Contadores ----------
  function animateCounters(scope) {
    if (reducedMotion.matches) return;
    scope.querySelectorAll('[data-count]').forEach((node) => {
      const target = parseFloat(node.dataset.count);
      if (!isFinite(target)) return;
      const suffix = node.dataset.suffix || '';
      const decimals = (String(node.dataset.count).split('.')[1] || '').length;
      const duration = 1100;
      const start = performance.now();
      function tick(now) {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        node.textContent = (target * eased).toFixed(decimals) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  // ---------- Medidores (deuda cognitiva) ----------
  function primeMeters() {
    document.querySelectorAll('.cjs-meter').forEach((meter) => {
      meter.classList.add('reveal');
    });
  }

  // ---------- Reveal (patrón app.js) ----------
  const revealObserver = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      if (entry.target.matches('[data-chart="tijera"]')) {
        animateCounters(entry.target);
      }
      if (entry.target.matches('.cjs-meter, .cjs-eco-cards')) animateCounters(entry.target);
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.2, rootMargin: '0px 0px -5% 0px' });

  // ---------- Single-acordeón en details (patrón app.js) ----------
  function wireAccordions() {
    for (const detail of document.querySelectorAll('details')) {
      detail.addEventListener('toggle', () => {
        if (!detail.open) return;
        document.querySelectorAll('details[open]').forEach((other) => {
          if (other !== detail) other.open = false;
        });
      });
    }
  }

  // ---------- Header con scroll ----------
  function wireHeader() {
    const header = document.querySelector('[data-header]');
    if (!header) return;
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 36);
    if (reducedMotion.matches) { onScroll(); return; }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function init() {
    buildScissorsChart();
    primeMeters();
    wireAccordions();
    wireHeader();

    if (reducedMotion.matches) {
      // Sin motion: todo visible de inmediato.
      document.querySelectorAll('.reveal, .cjs-meter').forEach((n) => n.classList.add('is-visible'));
      document.querySelectorAll('.cjs-meter').forEach((m) => m.classList.add('is-visible'));
    } else {
      document.querySelectorAll('.reveal').forEach((n) => revealObserver.observe(n));
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
