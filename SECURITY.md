# Seguridad

## Alcance

Este repositorio contiene únicamente un sitio informativo estático. No debe recibir, procesar ni conservar:

- credenciales, tokens o claves;
- información personal;
- datos de pago;
- sesiones o cuentas;
- disponibilidad transaccional;
- configuración de infraestructura privada.

## Configuración del registro

El CTA lleva a la página estática de Planes en el mismo origen (`/planes/`). El sitio no procesa pagos, cuentas ni datos personales; los precios y modalidades son informativos y no transaccionales hasta el gate de integración.

## Antes de publicar

- revisar el diff y el historial completo por secretos;
- confirmar derechos de código, copy e imágenes;
- aplicar CSP y headers de seguridad en la infraestructura;
- comprobar que no existan `.env`, logs, dumps, capturas, masters ni notas internas;
- verificar el CTA sin enviar datos reales;
- obtener aprobación explícita para publicación pública, despliegue y cualquier cambio de DNS.

## Reportes

Comunicar hallazgos de forma privada al equipo responsable. No abrir issues públicos con detalles explotables ni incluir secretos en reportes.
