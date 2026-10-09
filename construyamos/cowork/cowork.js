// cowork.js — /construyamos/cowork/ (CSP-safe: archivo propio, sin inline)
(function () {
  'use strict';
  document.documentElement.classList.add('has-js');
  var rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.reveal');
  if (rm || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    els.forEach(function (el) { io.observe(el); });
  }

  // Reserva en 3 pasos → arma el mensaje de WhatsApp (sin cuenta, sin backend)
  var go = document.getElementById('cw-res-go');
  if (go) {
    var fecha = document.getElementById('cw-res-fecha');
    if (fecha && !fecha.value) {
      var t = new Date();
      var mm = String(t.getMonth() + 1).padStart(2, '0');
      var dd = String(t.getDate()).padStart(2, '0');
      fecha.value = t.getFullYear() + '-' + mm + '-' + dd;
    }
    go.addEventListener('click', function () {
      var modo = document.getElementById('cw-res-modo');
      var hora = document.getElementById('cw-res-hora');
      var personas = document.getElementById('cw-res-personas');
      var nota = document.getElementById('cw-res-note');
      var falta = !fecha || !fecha.value;
      if (falta) {
        if (nota) { nota.textContent = 'Falta elegir la fecha.'; nota.classList.add('is-error'); }
        if (fecha) { fecha.focus(); }
        return;
      }
      if (nota) { nota.textContent = 'Te llevaremos a WhatsApp con tu solicitud ya escrita.'; nota.classList.remove('is-error'); }
      var p = parseInt((personas && personas.value) || '1', 10);
      if (isNaN(p) || p < 1) { p = 1; }
      var msg = 'Hola, quiero reservar en el CoWork SolarPunk.%0A'
        + 'Modo: ' + encodeURIComponent(modo ? modo.value : '') + '%0A'
        + 'Fecha: ' + encodeURIComponent(fecha.value) + '%0A'
        + 'Hora: ' + encodeURIComponent((hora && hora.value) || '') + '%0A'
        + 'Personas: ' + p;
      window.open('https://wa.me/529832011923?text=' + msg, '_blank', 'noopener');
    });
  }
})();
