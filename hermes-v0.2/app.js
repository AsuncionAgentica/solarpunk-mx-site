(function(){
  var btn=document.getElementById('btn-menu');
  var list=document.getElementById('nav-anclas');
  if(btn&&list){btn.addEventListener('click',function(){var o=list.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});}
  // tabs
  document.querySelectorAll('[data-tabs]').forEach(function(group){
    var tabs=group.querySelectorAll('[role="tab"]');
    tabs.forEach(function(tab){
      tab.addEventListener('click',function(){
        tabs.forEach(function(t){t.setAttribute('aria-selected','false');var p=document.getElementById(t.getAttribute('aria-controls'));if(p)p.classList.add('hidden');});
        tab.setAttribute('aria-selected','true');
        var panel=document.getElementById(tab.getAttribute('aria-controls'));if(panel)panel.classList.remove('hidden');
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
  // tabs: show first panel on load (already default via markup)
})();
