(function(){
  var btn=document.getElementById('btn-menu');
  var list=document.getElementById('nav-anclas');
  function closeMenu(){if(list&&list.classList.contains('open')){list.classList.remove('open');if(btn)btn.setAttribute('aria-expanded','false');}}
  if(btn&&list){btn.addEventListener('click',function(){var o=list.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});}
  // cerrar el menu movil al navegar a una seccion
  if(list){list.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeMenu);});}

  // tabs (con navegacion por teclado: flechas, Home, End)
  document.querySelectorAll('[data-tabs]').forEach(function(group){
    var tabs=Array.prototype.slice.call(group.querySelectorAll('[role="tab"]'));
    function activate(tab){
      tabs.forEach(function(t){t.setAttribute('aria-selected','false');t.setAttribute('tabindex','-1');var p=document.getElementById(t.getAttribute('aria-controls'));if(p)p.classList.add('hidden');});
      tab.setAttribute('aria-selected','true');tab.setAttribute('tabindex','0');
      var panel=document.getElementById(tab.getAttribute('aria-controls'));if(panel)panel.classList.remove('hidden');
    }
    tabs.forEach(function(tab,i){
      tab.setAttribute('tabindex', tab.getAttribute('aria-selected')==='true'?'0':'-1');
      tab.addEventListener('click',function(){activate(tab);});
      tab.addEventListener('keydown',function(e){
        var k=e.key, target=null;
        if(k==='ArrowRight'||k==='ArrowDown'){target=tabs[(i+1)%tabs.length];}
        else if(k==='ArrowLeft'||k==='ArrowUp'){target=tabs[(i-1+tabs.length)%tabs.length];}
        else if(k==='Home'){target=tabs[0];}
        else if(k==='End'){target=tabs[tabs.length-1];}
        if(target){e.preventDefault();target.focus();activate(target);}
      });
    });
  });

  // copy
  document.querySelectorAll('.copy').forEach(function(b){
    b.addEventListener('click',function(){
      var box=b.closest('.code');var code=box?box.querySelector('code'):null;
      if(!code)return;
      navigator.clipboard.writeText(code.innerText).then(function(){var t=b.textContent;b.textContent='Copiado';setTimeout(function(){b.textContent=t;},1500);});
    });
  });

  // carousel
  document.querySelectorAll('[data-carousel]').forEach(function(c){
    var track=c.querySelector('.carousel-track');
    var prev=c.querySelector('[data-dir="prev"]');
    var next=c.querySelector('[data-dir="next"]');
    function step(){var card=track.querySelector('.card');return card?card.getBoundingClientRect().width+16:320;}
    if(prev)prev.addEventListener('click',function(){track.scrollBy({left:-step(),behavior:'smooth'});});
    if(next)next.addEventListener('click',function(){track.scrollBy({left:step(),behavior:'smooth'});});
  });
})();
