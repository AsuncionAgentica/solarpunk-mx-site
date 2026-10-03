// Menú móvil mínimo, sin dependencias externas.
  (function(){
    var btn = document.getElementById('btn-menu');
    var list = document.getElementById('nav-anclas');
    btn.addEventListener('click', function(){
      var open = list.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  })();
