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
- `planes/`: página informativa de Planes (artes visuales en `planes/planes.css`, selección de modalidad en `planes/planes.js`).
- `assets/`: hero responsive y seis WebP de la secuencia del Huerto.
- `README.md`: guía de ejecución, frontera funcional y despliegue público autorizado.
- `vercel.json`: headers de seguridad para el hosting estático.

## CTA y página de Planes

El CTA lleva a la plataforma de miembros del club (WordPress staging) con identidad Privy: `https://wp-test.test.solarpunk.empresaagentica.com/club/login/`.

**Punto único de configuración:** `CLUB_ORIGIN` y `SITE_CONFIG.registrationUrl` en `app.js`. Cambias la URL en ese único lugar y los tres CTA del landing y los botones de modalidad de `planes/` se actualizan (los botones de modalidad componen su propia URL de destino a partir de `window.SOLAR_PUNK_SITE_CONFIG.clubOrigin`, que `app.js` expone). No hay secretos en ninguna URL: son parámetros públicos de navegación (`sp_next=payment`, `sp_plan=virtual|presencial`).

```js
// Punto único de configuración: app.js (la constante CLUB_ORIGIN se comparte con planes/planes.js vía window.SOLAR_PUNK_SITE_CONFIG)
const CLUB_ORIGIN = 'https://wp-test.test.solarpunk.empresaagentica.com';

const SITE_CONFIG = Object.freeze({
  clubOrigin: CLUB_ORIGIN,
  registrationUrl: `${CLUB_ORIGIN}/club/login/`,
  registrationReady: true,
  registrationUrlStatus: 'verified'
});
```

`planes/index.html` presenta la membresía: precio de lanzamiento $1,500 MXN/mes, precio regular $2,500 MXN/mes y modalidades Virtual y Presencial. Los botones Elegir Virtual / Elegir Presencial reconectan con el flujo real del club: llevan a la superficie de login en el origen del club (`/club/login/`) preservando la intención de plan en la query (`sp_next=payment`, `sp_plan=virtual|presencial`), para que una persona que llega del landing pueda iniciar sesión y continuar hacia pago. Ningún dato sensible viaja en la URL.

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
- CTA dirigido a la plataforma de miembros del club: `SITE_CONFIG.registrationUrl` = `${CLUB_ORIGIN}/club/login/` en `app.js` (punto único de configuración), marcado como `verified`.

## Activos

El Huerto Autónomo es una visualización conceptual generada, no una fotografía documental ni una representación de una sede o dispositivo construido. Los textos y etiquetas permanecen en HTML.

## Distribución

Repositorio público autorizado por el titular del proyecto para publicar la landing informativa. Antes de cada despliegue deben cumplirse las verificaciones de `SECURITY.md`; nunca incorporar secretos, datos personales, flujos de pago ni cuentas a este repositorio.
