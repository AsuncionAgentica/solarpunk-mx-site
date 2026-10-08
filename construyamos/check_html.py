#!/usr/bin/env python3
"""Validacion estructural + DoD textual de /construyamos/ (AG-SPX-CONSTRUYAMOS-07).

Uso: python3 construyamos/check_html.py   (desde la raiz del repo/worktree)
Checa balance de tags de ambas paginas, patrones prohibidos por CSP y el DoD
textual de la tarea 07 (secciones creadas/eliminadas, sin notas editoriales).
"""
from html.parser import HTMLParser
import re
import sys

VOID = {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}

class P(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack, self.errs = [], []
    def handle_starttag(self, tag, attrs):
        if tag not in VOID:
            self.stack.append((tag, self.getpos()))
    def handle_endtag(self, tag):
        if tag in VOID:
            return
        if not self.stack:
            self.errs.append('extra </%s> at %s' % (tag, self.getpos()))
            return
        while self.stack and self.stack[-1][0] != tag:
            self.errs.append('unclosed <%s> opened at %s, closing </%s> at %s' % (self.stack[-1][0], self.stack[-1][1], tag, self.getpos()))
            self.stack.pop()
        if self.stack:
            self.stack.pop()

ok = True
for path in ['construyamos/index.html', 'construyamos/cartelera/index.html']:
    txt = open(path, encoding='utf-8').read()
    p = P()
    p.feed(txt)
    for t, pos in p.stack:
        p.errs.append('unterminated <%s> opened at %s' % (t, pos))
    print(path, '->', 'HTML OK' if not p.errs else 'ERRORS:')
    for e in p.errs:
        print('  ', e)
        ok = False
    for pat, label in [
        (r'\bon\w+\s*=', 'inline event handler'),
        (r'style="', 'inline style attr'),
        (r'<style', 'internal <style>'),
        (r'<script(?![^>]*src=)[^>]*>(?!\s*</script>)', 'inline script'),
        (r'https?://(?:cdn\.|fonts\.googleapis|unpkg|jsdelivr)', 'CDN link'),
        (r'\bfetch\(', 'fetch call'),
        (r'element\.style', 'element.style'),
    ]:
        lines = [txt[:m.start()].count('\n') + 1 for m in re.finditer(pat, txt)]
        if lines:
            print('  PROHIBITED %s: lines %s' % (label, lines))
            ok = False

# ---- DoD textual de la pagina principal ----
src = open('construyamos/index.html', encoding='utf-8').read()
checks = [
    ('kicker sin Xalapa', 'Programa de innovación aplicada</p>' in src and 'aplicada · Xalapa' not in src),
    ('-PERO- presente', '<span class="cjs-pero">-PERO-</span>' in src),
    ('boton Agenda una consultoria (hero)', 'Agenda una consultoría' in src),
    ('boton Conoce el laboratorio (hero)', '>Conoce el laboratorio</a>' in src),
    ('boton Quiero ser competitivo -> #oportunidades', 'href="#oportunidades">Quiero ser competitivo' in src),
    ('#oportunidades existe', 'id="oportunidades"' in src),
    ('sin seccion El problema', 'El problema</p>' not in src and 'id="problema"' not in src),
    ('sin seccion economia 30% como seccion', 'id="economia"' not in src and 'economía agéntica</p>' not in src),
    ('hook 30% debajo de columnas', 'transacciones globales serán hechas por agentes de IA' in src),
    ('titulo lab correcto', 'Conoce el laboratorio de innovación aplicada' in src),
    ('3 tarjetas lab', src.count('cjs-lab-card reveal') == 3 and 'Consultoría sobre innovación' in src and '>Eventos</h3>' in src and '>CoWork</h3>' in src),
    ('mapa con >= 9 puntos', src.count('cjs-map-dot') >= 9),
    ('mapa sin fuentes externas', 'google.com/maps/api' not in src and 'mapbox' not in src),
    ('placeholder cartelera enlazado', 'href="cartelera/">Consulta cartelera' in src),
    ('instructor renombrado + 2 col', 'Conoce a tu compañero de innovación' in src and 'cjs-tray-grid' in src and src.count('cjs-tray-col reveal') == 2),
    ('sin Costos sin letra pequeña', 'Costos, sin letra pequeña' not in src),
    ('sin seccion Fuentes', 'id="fuentes"' not in src and '10 · Fuentes' not in src),
    ('sin notas editoriales', not re.search(r'\b(boceto|sketch|pendiente|próximamente se|esta versión)\b', src, re.I)),
    ('numeros 01-06 presentes', all(('%02d · ' % n) in src for n in range(1, 7))),
]
print('DoD textual:')
for name, passed in checks:
    print(('  PASS ' if passed else '  FAIL ') + name)
    ok = ok and passed

print('RESULT:', 'PASS' if ok else 'FAIL')
sys.exit(0 if ok else 1)
