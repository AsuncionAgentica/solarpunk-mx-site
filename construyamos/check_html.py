from html.parser import HTMLParser
import re, sys

path = 'construyamos/index.html'
txt = open(path, encoding='utf-8').read()
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
            self.errs.append(f'extra </{tag}> at {self.getpos()}')
            return
        while self.stack and self.stack[-1][0] != tag:
            self.errs.append(f'unclosed <{self.stack[-1][0]}> opened at {self.stack[-1][1]}, closing </{tag}> at {self.getpos()}')
            self.stack.pop()
        if self.stack:
            self.stack.pop()

p = P()
p.feed(txt)
for t, pos in p.stack:
    p.errs.append(f'unterminated <{t}> opened at {pos}')

print('ERRORS:' if p.errs else 'HTML OK')
for e in p.errs:
    print(' ', e)

for pat, label in [
    (r'\bon\w+\s*=', 'inline event handler'),
    (r'style="', 'inline style attr'),
    (r'<style', 'internal <style>'),
    (r'<script(?![^>]*src=)[^>]*>(?!\s*</script>)', 'inline script'),
    (r'https?://(?:cdn\.|fonts\.googleapis|unpkg|jsdelivr)', 'CDN link'),
    (r'\bfetch\(', 'fetch call'),
]:
    lines = [txt[:m.start()].count('\n') + 1 for m in re.finditer(pat, txt)]
    if lines:
        print(f'PROHIBITED {label}: lines {lines}')
print('prohibited-pattern scan done')
EOF_MARKER_UNUSED = None
