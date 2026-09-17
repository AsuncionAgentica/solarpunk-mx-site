# Club SolarPunk Mx — sitio web

Sitio web estático de atracción y conversión para presentar la membresía del Club SolarPunk Mx. La experiencia explica la oferta y dirige hacia un sistema de registro separado; no procesa pagos, cuentas ni datos personales.

## Ejecutar localmente

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Abrir <http://127.0.0.1:8000/>.

No requiere instalación, compilación, paquetes de terceros, CDN ni servicios externos.

## Estructura

- `index.html`: contenido y semántica.
- `styles.css`: diseño responsive, accesibilidad y motion.
- `app.js`: configuración del CTA y ensamblaje controlado por scroll.
- `planes/`: página informativa de Planes (artes visuales en `planes/planes.css`).
- `assets/`: hero responsive y seis WebP de la secuencia del Huerto.
- `README.md`: guía de ejecución, frontera funcional y despliegue público autorizado.
- `vercel.json`: headers de seguridad para el hosting estático.

## CTA y página de Planes

El CTA lleva a la página informativa de Planes en el mismo origen:

```js
const SITE_CONFIG = Object.freeze({
  registrationUrl: '/planes/',
  registrationReady: true,
  registrationUrlStatus: 'verified'
});
```

`planes/index.html` replica el contenido aprobado de membresías: propósito, precio temprano $1,500 MXN/mes (primeros 10 lugares), precio regular $2,500 MXN/mes y modalidades Virtual y Presencial. Es puramente informativo: no hay registro, pago, cuentas ni proveedores conectados, y los CTAs de modalidad no forman parte de esta página. Si el destino deja de estar disponible, el CTA debe volver a estado desactivado antes de desplegar.

Nunca incluir claves, tokens, identificadores privados ni datos personales en esta configuración.

## Verificación

```bash
node --check app.js
python3 -m http.server 8000 --bind 127.0.0.1
```

Revisar como mínimo:

- desktop 1440 × 900;
- móvil 390 × 844;
- teclado y foco visible;
- `prefers-reduced-motion: reduce`;
- ausencia de overflow horizontal y errores de consola;
- CTA dirigido a `/planes/` (página estática en el repo) y marcado como `verified`; mientras no exista un destino disponible, queda desactivado.

## Activos

El Huerto Autónomo es una visualización conceptual generada, no una fotografía documental ni una representación de una sede o dispositivo construido. Los textos y etiquetas permanecen en HTML.

## Distribución

Repositorio público autorizado por el titular del proyecto para publicar la landing informativa. Antes de cada despliegue deben cumplirse las verificaciones de `SECURITY.md`; nunca incorporar secretos, datos personales, flujos de pago ni cuentas a este repositorio.
