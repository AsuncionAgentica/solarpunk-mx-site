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
- `assets/`: hero responsive y seis WebP de la secuencia del Huerto.
- `SECURITY.md`: frontera de seguridad y reglas de publicación.

## Activar el CTA

El respaldo conserva el registro desactivado por seguridad:

```js
const SITE_CONFIG = Object.freeze({
  registrationUrl: '',
  registrationReady: false,
  registrationUrlStatus: 'disabled-unverified'
});
```

Sólo después de verificar el destino HTTPS:

1. definir `registrationUrl`;
2. cambiar `registrationReady` a `true`;
3. cambiar `registrationUrlStatus` a `verified`;
4. comprobar navegación sin enviar datos reales.

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
- CTA bloqueado mientras `registrationReady` sea `false`.

## Activos

El Huerto Autónomo es una visualización conceptual generada, no una fotografía documental ni una representación de una sede o dispositivo construido. Los textos y etiquetas permanecen en HTML.

## Distribución

Repositorio privado de trabajo. No redistribuir ni publicar el código o los activos sin autorización del titular del proyecto.
