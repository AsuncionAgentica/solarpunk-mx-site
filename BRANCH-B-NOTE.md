# Nota de rama B - spx-club-flow (SPX-BRANCH-01)

Esta rama representa el lado B (main tecnica) del diseno A/B de membresia:

- **B NO se publica como landing independiente.** B (dominio
  `wp-test.test.solarpunk.empresaagentica.com`) sirve la MISMA landing
  compartida que produce `main` (copy unificado, mismo arbol de archivos).
- La bifurcacion de flujo ocurre por **hostname** en `app.js`
  (`detectFlowByHost`): host B conserva el wiring actual
  Privy -> WordPress -> Stripe Test -> Supabase (login en
  `/club/login/` y pago directo en `/club/pago/?plan=...`).
- Host A (`solarpunk.empresaagentica.com`) y cualquier preview u host no
  listado caen a Tally (`https://tally.so/r/VL7Xl6`), con Stripe
  productivo detras (dinero real; registro manual, sin login).
- **No merges esta rama a `main` sin revision:** main es la produccion
  de salida y no necesita nada extra de B; el dispatch de publish
  existente sigue sirviendo desde main.
