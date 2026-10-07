/* ======================================================================
   construyamos.js — página /construyamos/ (AG-SPX-CONSTRUYAMOS-01)
   JS local sin librerías, sin fetch, sin eval (CSP: script-src 'self').
   Genera 3 gráficas SVG propias:
     1. Efecto tijera — doble eje, serie 2021-2026, cruce 2023/2024.
     2. Deuda cognitiva — medidores animados (MIT 55% / 83.3%).
     3. Economía agéntica — barras horizontales animadas + contadores.
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

  // Estilos SVG por clase en vez de atributos de estilo inline;
  // las reglas viven en construyamos.css (nada de style= en el DOM).
  function injectSvgClasses(svg) {
    const style = el('style', {}, null);
    style.textContent =
      '.axis-line{stroke:rgba(11,16,12,.25);stroke-width:1}' +
      '.grid-line{stroke:rgba(11,16,12,.10);stroke-width:1}' +
      '.axis-text{font-family:Arial,Helvetica,sans-serif;font-size:11px;fill:#59615a}' +
      '.year-text{font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;fill:#0b100c}' +
      '.serie-empleo{fill:none;stroke:#173c2d;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}' +
      '.serie-ia{fill:none;stroke:#4a6d39;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}' +
      '.dot-empleo{fill:#173c2d;stroke:#f1f0e6;stroke-width:2}' +
      '.dot-ia{fill:#4a6d39;stroke:#f1f0e6;stroke-width:2}' +
      '.hit-zone{fill:transparent;cursor:crosshair}' +
      '.cross-line{stroke:#b3541e;stroke-width:1.5;stroke-dasharray:5 4}' +
      '.cross-label{font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;fill:#b3541e}' +
      '.bar-fill{fill:#173c2d}' +
      '.bar-fill-acid{fill:#173c2d}' +
      '.bar-label{font-family:Arial,Helvetica,sans-serif;font-size:11.5px;fill:#0b100c;font-weight:700}' +
      '.bar-src{font-family:Arial,Helvetica,sans-serif;font-size:11px;fill:#59615a}' +
      '.hover-guide{stroke:rgba(11,16,12,.35);stroke-width:1;stroke-dasharray:3 3;opacity:0}';
    svg.appendChild(style);
  }

  // ---------- Tooltip local compartido ----------
  function makeTip(host) {
    const tip = document.createElement('div');
    tip.className = 'cjs-svg-tip';
    host.appendChild(tip);
    return {
      show(html, cx, cy) {
        tip.innerHTML = html;
        tip.style.left = cx + 'px';
        tip.style.top = cy + 'px';
        tip.style.opacity = '1';
      },
      hide() { tip.style.opacity = '0'; }
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
    injectSvgClasses(svg);

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
    const lineE = el('path', { d: pEmpleo, class: 'serie-empleo cjs-svg-line' }, svg);
    const lineI = el('path', { d: pIa, class: 'serie-ia cjs-svg-line' }, svg);

    // longitud de trazo para la animación de dibujado
    lineE.style.setProperty('--len', '800');
    lineI.style.setProperty('--len', '800');

    // puntos + zonas de hover
    const tip = makeTip(host);
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
        const rect = host.getBoundingClientRect();
        guide.setAttribute('x1', x(i)); guide.setAttribute('x2', x(i));
        guide.style.opacity = '1';
        tip.show(
          '<strong>' + d.year + '</strong><br>' +
          'Empleo nivel inicial: ' + fmt(d.empleo.toFixed(1)) + '%<br>' +
          'Desplazamiento IA: ' + fmt(d.ia.toFixed(1)) + '%',
          ev.clientX - rect.left + 14,
          ev.clientY - rect.top - 10
        );
      });
      zone.addEventListener('mouseleave', () => {
        guide.style.opacity = '0';
        tip.hide();
      });
    });

    host.appendChild(svg);
  }

  // ---------- 3) Economía agéntica (barras horizontales) ----------
  function buildEconomyChart() {
    const host = document.getElementById('economia-chart');
    if (!host) return;
    // Escala normalizada 0-100 para comparar las 4 proyecciones.
    const ROWS = [
      { label: 'Comercio agéntico global (McKinsey, 2030)', src: '3–5 billones USD', pct: 100 },
      { label: 'Comercio digital influenciado por IA (Getnet, 2030)', src: '30% del valor · GMV >17.5 B USD', pct: 30 },
      { label: 'Apps empresariales con IA autónoma (Gartner, 2028)', src: '33%', pct: 33 },
      { label: 'Reducción de costos con multiagente (BCG)', src: '−15% a −20%', pct: 20 }
    ];
    const W = 900, rowH = 74, barH = 30, labelW = 330, valW = 170;
    const H = rowH * ROWS.length + 20;
    const maxW = W - labelW - valW - 20;

    const svg = el('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'presentation' });
    injectSvgClasses(svg);

    ROWS.forEach((r, i) => {
      const yy = i * rowH + 26;
      const lt = el('text', { x: 8, y: yy + barH / 2 + 4, class: 'bar-src' }, svg);
      lt.textContent = r.label;
      const bar = el('rect', {
        x: labelW, y: yy, width: 0, height: barH,
        class: 'bar-fill ' + (i === 0 ? 'bar-fill-acid' : '')
      }, svg);
      bar.dataset.target = String(Math.max(8, (r.pct / 100) * maxW));
      bar.classList.add('cjs-svg-bar');
      const val = el('text', { x: labelW + 10, y: yy + barH / 2 + 4, class: 'bar-label' }, svg);
      val.textContent = r.src;
      if (r.pct < 60) val.setAttribute('x', labelW + (r.pct / 100) * maxW + 10);
    });

    host.appendChild(svg);
  }

  // ---------- Animaciones de barras ----------
  function animateBars(frame) {
    frame.querySelectorAll('.cjs-svg-bar').forEach((bar) => {
      bar.style.transition = 'width 1.2s cubic-bezier(.22,.61,.36,1)';
      bar.setAttribute('width', bar.dataset.target || '0');
    });
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
      if (entry.target.matches('[data-chart="tijera"], [data-chart="barras"]')) {
        if (entry.target.matches('[data-chart="barras"]')) animateBars(entry.target);
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
    buildEconomyChart();
    primeMeters();
    wireAccordions();
    wireHeader();

    if (reducedMotion.matches) {
      // Sin motion: todo visible de inmediato, barras a ancho final.
      document.querySelectorAll('.reveal, .cjs-meter').forEach((n) => n.classList.add('is-visible'));
      document.querySelectorAll('[data-chart="barras"]').forEach(animateBars);
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
