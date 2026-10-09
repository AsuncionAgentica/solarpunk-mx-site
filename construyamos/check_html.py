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
for path in ['construyamos/index.html', 'construyamos/cartelera/index.html', 'construyamos/cowork/index.html']:
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
    ('3 tarjetas lab con color propio', all(x in src for x in ['cjs-lab-card--consultoria','cjs-lab-card--eventos','cjs-lab-card--cowork']) and 'Consultoría sobre innovación' in src and '>Eventos</h3>' in src and '>CoWork</h3>' in src),
    ('tarjetas lab con imagen', src.count('cjs-lab-card-img') == 3),
    ('testimonios con embeds de Instagram', src.count('instagram.com/p/') >= 9 and '/embed/captioned/' in src),
    ('placeholder cartelera enlazado', 'href="cartelera/">Consulta cartelera' in src),
    ('instructor renombrado', 'Conoce a tu compañero de innovación' in src),
    ('trayectorias desplegables (details) con enlaces', src.count('<details class="cjs-tray-col') == 2 and 'facebook.com/groups/561441093882100' in src),
    ('carrusel de medios en instructor', 'cjs-shelf' in src and 'youtube.com/embed/' in src),
    ('sin Costos sin letra pequeña', 'Costos, sin letra pequeña' not in src),
    ('sin seccion Fuentes', 'id="fuentes"' not in src and '10 · Fuentes' not in src),
    ('sin cierre viejo CTA curso', 'La IA se aprende construyendo' not in src),
    ('correo solarpunk', 'solarpunk@empresaagentica.com' in src and 'asuncion@empresaagentica.com' not in src),
    ('secciones 01-04 presentes', all(('%02d · ' % n) in src for n in range(1, 5))),
    ('orden de testimonios exacto', [m.group(1) for m in re.finditer(r'instagram\.com/p/([A-Za-z0-9_-]+)/embed', src)][:9] == ['DMOuEfcx13A','DM9RWYPtkMb','DNjvlomtzEv','DQFYVMfj_FB','DPAjaZejSrQ','DK8UQlUSgTs','DOKXT_VjVSF','DNXC5Ajt1uw','DOeF4Lxkf3c']),
    ('2o cajon con img_index=4', 'DM9RWYPtkMb/?utm_source=ig_embed&amp;ig_rid=ARXDq-IGPsjKq9QLQEgVdsd&amp;img_index=4' in src),
    ('tarjeta Cowork enlaza subpagina', 'href="cowork/">Conoce el CoWork' in src),
    ('sin notas editoriales', not re.search(r'\b(boceto|sketch|pendiente|próximamente se|esta versión)\b', src, re.I)),
]
print('DoD textual:')
for name, passed in checks:
    print(('  PASS ' if passed else '  FAIL ') + name)
    ok = ok and passed

# ---- DoD textual de la subpagina cowork ----
cw = open('construyamos/cowork/index.html', encoding='utf-8').read()
cw_checks = [
    ('modo A la carta', 'A la carta' in cw and 'Pagas por lo que consumes' in cw),
    ('modo Barra de trabajo 75/h', 'Barra de trabajo' in cw and '$75' in cw),
    ('modo Membresia activa texto literal', 'Membresía activa' in cw and 'Lo mismo que la barra de trabajo +' in cw and 'casco de RV' in cw and '10% de descuento en todo' in cw),
    ('sin tarjeta sala/sofa modo', 'cw-mode--sala' not in cw and 'cw-mode--sofa' not in cw),
    ('sin seccion Membresia', 'id="membresia"' not in cw),
    ('sin regadera ni bano seco', 'Regadera' not in cw and 'regadera' not in cw and 'Baño seco' not in cw),
    ('sin notas en tabla', 'class="note"' not in cw),
    ('sin tarjetas de menu', 'cw-menu-card' not in cw and 'Barra premium</h3>' not in cw),
    ('sin lead de pago por separado', 'se pagan por separado' not in cw and 'Sin contratos ni mensualidades' not in cw),
    ('sin lead todo se cobra por uso', 'Todo se cobra por uso' not in cw),
    ('sin caption tabla', '<caption>' not in cw),
    ('paso 1 Elige como', 'Elige cómo' in cw and 'Elige dónde' not in cw),
    ('paso 3 texto nuevo', 'Menú a la carta o lo incluido en tu plan' in cw),
    ('sin paso 4 hazte miembro', 'Hazte miembro' not in cw),
    ('precio bebida 35', 'agua fresca' in cw and '$35' in cw),
    ('precio sandwich 75', 'Sándwich del día' in cw),
    ('precio pastel 30', 'Rebanada de pastel' in cw and '$30' in cw),
    ('precio toast 75', 'Toast (salmón, germinado con pera y queso de cabra' in cw),
    ('tour 50 por persona', 'Tour por el laboratorio' in cw and '$50 por persona' in cw),
    ('impresora 3D 100/h', 'Impresora 3D' in cw and '$100 / hora' in cw),
    ('CNC 100/h', 'Cortadora CNC' in cw),
    ('impresion tinta 1 y 3', '$1 B/N' in cw and '$3 color' in cw),
    ('proyector 35/h', '$35 / hora' in cw),
    ('barra premium +30/h', '+$30 / hora' in cw),
    ('IVA incluido', 'IVA incluido' in cw),
    ('sofá sin texto beber', 'Solo vienes a beber algo' not in cw),
    ('FAQ necesito reservar', 'no es necesario reservar' in cw and 'te recomendamos reservar' in cw),
    ('FAQ puedo ir solo a ver', '¿Puedo ir solo a ver?' in cw and 'bienvenida/o cuando gustes' in cw),
    ('reserva 3 pasos', 'cw-res' in cw and 'Continuar por WhatsApp' in cw),
    ('hero ilustracion nueva', 'cowork-hero.webp' in cw),
    ('sin notas editoriales', not re.search(r'\b(boceto|sketch|pendiente|próximamente|TBD)\b', cw, re.I)),
]
print('DoD cowork:')
for name, passed in cw_checks:
    print(('  PASS ' if passed else '  FAIL ') + name)
    ok = ok and passed

print('RESULT:', 'PASS' if ok else 'FAIL')
sys.exit(0 if ok else 1)
