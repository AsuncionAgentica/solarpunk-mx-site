
/* ═══════════════ DATOS GENERADOS DESDE TALLY ═══════════════ */
const CUESTIONARIO = [{"titulo": "Datos de contacto", "campos": [{"label": "Nombre completo o alias", "req": false, "tipo": "texto", "opts": [], "tipo_raw": "INPUT_TEXT", "multiple": false}, {"label": "Correo electrónico", "req": false, "tipo": "email", "opts": [], "tipo_raw": "INPUT_EMAIL", "multiple": false}, {"label": "WhatsApp", "req": false, "tipo": "tel", "opts": [], "tipo_raw": "INPUT_PHONE_NUMBER", "multiple": false}, {"label": "Ciudad", "req": false, "tipo": "texto", "opts": [], "tipo_raw": "INPUT_TEXT", "multiple": false}], "textos": []}, {"titulo": "Parte 1. Quién eres y a qué te dedicas", "textos": [], "campos": [{"label": "¿A qué te dedicas? Cuéntanos en 2 o 3 líneas.", "req": false, "tipo": "textarea", "opts": [], "tipo_raw": "TEXTAREA", "multiple": false}, {"label": "¿Cuál es tu rol principal?", "req": false, "tipo": "opciones", "opts": ["Fundador/a o dueño/a", "Freelance o independiente", "Gerente o director/a", "Empleado/a", "Estudiante", "Otro"], "tipo_raw": "MULTIPLE_CHOICE_OPTION", "multiple": false}, {"label": "¿Cómo opera tu trabajo hoy?", "req": false, "tipo": "opciones", "opts": ["Trabajo solo/a", "Yo con 1 a 3 personas", "Equipo de 4 a 10", "Equipo de 11 o más", "Otro"], "tipo_raw": "MULTIPLE_CHOICE_OPTION", "multiple": false}, {"label": "¿Cuál es tu giro o industria?", "req": false, "tipo": "opciones", "opts": ["Servicios profesionales", "Comercio y retail", "Industria y manufactura", "Procesos industriales", "Investigación y Desarrollo (I+D)", "Salud", "Educación", "Construcción y obra", "Tecnología y software", "Alimentos y bebidas", "Creativo y marketing", "ONG e impacto social", "Turismo y hospitalidad", "Logística y transporte", "Agro y campo", "Otro"], "tipo_raw": "DROPDOWN_OPTION", "multiple": false}, {"label": "¿Cuántas veces usas una IA al día hoy?", "req": false, "tipo": "opciones", "opts": ["Nunca", "Menos de 1 vez al día", "1 a 3 veces", "4 a 10 veces", "Más de 10 veces", "Todo el día"], "tipo_raw": "MULTIPLE_CHOICE_OPTION", "multiple": false}, {"label": "¿Qué herramientas usas a diario? Elige todas las que apliquen.", "req": false, "tipo": "opciones", "opts": ["WhatsApp", "Correo (Gmail u Outlook)", "Google Workspace (Docs, Sheets, Drive)", "Microsoft 365 (Word, Excel)", "Notion u Obsidian", "CRM (HubSpot, Zoho u otro)", "Trello, Asana o Monday", "Slack o Discord", "Shopify o WooCommerce", "WordPress", "Stripe, Mercado Pago o PayPal", "Instagram, TikTok o Meta Ads", "Otro"], "tipo_raw": "CHECKBOX", "multiple": true}, {"label": "¿Qué otras herramientas o sistemas usas que no estén en la lista?", "req": false, "tipo": "textarea", "opts": [], "tipo_raw": "TEXTAREA", "multiple": false}]}, {"titulo": "Parte 2. Tu día a día y tus procesos", "textos": [], "campos": [{"label": "Describe un día típico de trabajo, de la mañana a la noche.", "req": false, "tipo": "textarea", "opts": [], "tipo_raw": "TEXTAREA", "multiple": false}, {"label": "¿Qué procesos haces a mano y te gustaría automatizar o que te asistan?", "req": false, "tipo": "textarea", "opts": [], "tipo_raw": "TEXTAREA", "multiple": false}, {"label": "Ordena tus tareas según cuánto tiempo o desgaste te quitan. La primera es la que más.", "req": false, "tipo": "ranking", "opts": ["Comunicación con clientes", "Cotizaciones y propuestas", "Facturación y cobranza", "Contenido y redes sociales", "Investigación y búsqueda de información", "Reportes y seguimiento", "Agenda y coordinación", "Soporte y postventa", "Datos y hojas de cálculo", "Trámites y documentación"], "tipo_raw": "RANKING_OPTION", "multiple": false}, {"label": "¿Cuántas horas a la semana dedicas hoy a tareas repetitivas o manuales?", "req": false, "tipo": "escala", "opts": [], "tipo_raw": "LINEAR_SCALE", "multiple": false, "escala": {"min": 0, "max": 10, "izq": "0 h", "der": "40 h o más"}}, {"label": "¿Qué te impide delegar o automatizar esas tareas hoy? Elige todas las que apliquen.", "req": false, "tipo": "opciones", "opts": ["No tengo tiempo para configurarlo", "No sé cómo hacerlo", "Es costoso", "No confío en la IA", "Mis herramientas no se conectan", "Dudas legales o de privacidad", "Prefiero hacerlo yo", "Otro"], "tipo_raw": "CHECKBOX", "multiple": true}, {"label": "¿Dónde vive hoy tu información de trabajo? Elige todas las que apliquen.", "req": false, "tipo": "opciones", "opts": ["WhatsApp", "Correo electrónico", "Nube (Drive, OneDrive o Dropbox)", "Archivos en mi computadora", "Papel", "CRM o sistema interno", "Notas (Notion u Obsidian)", "Otro"], "tipo_raw": "CHECKBOX", "multiple": true}]}, {"titulo": "Parte 3. Para qué usarás tu agente", "textos": [], "campos": [{"label": "¿Para qué usarás tu agente? Describe el objetivo central.", "req": false, "tipo": "textarea", "opts": [], "tipo_raw": "TEXTAREA", "multiple": false}, {"label": "Enumera de 3 a 5 casos de uso específicos que quieres resolver.", "req": false, "tipo": "textarea", "opts": [], "tipo_raw": "TEXTAREA", "multiple": false}, {"label": "¿Qué resultado esperas en los primeros 30 días?", "req": false, "tipo": "textarea", "opts": [], "tipo_raw": "TEXTAREA", "multiple": false}, {"label": "¿Qué tareas NO quieres delegar nunca a un agente?", "req": false, "tipo": "textarea", "opts": [], "tipo_raw": "TEXTAREA", "multiple": false}]}, {"titulo": "Parte 4. No-negociables, límites y riesgos", "textos": ["Ejemplos que suelen mencionarse: fuga de datos o secretos, pérdida de archivos, cobros no autorizados, mensajes enviados sin aprobación, información falsa presentada como cierta, suplantación de identidad, quedar mal con un cliente, o acceder a sistemas sin permiso. Escribe lo que para ti sería grave, aunque coincida con estos ejemplos.", "Nada de autonomía significa que tu agente te propone cada acción y no mueve nada hasta que apruebas. Es lo más seguro y también lo más lento: sirve cuando hay dinero, clientes o archivos delicados de por medio. El punto medio deja que resuelva solo lo rutinario y te pregunte en lo que tenga consecuencias. Mucha autonomía ejecuta varias cosas sin preguntar: avanza rapidísimo, pero un error tuyo de configuración se multiplica igual de rápido."], "campos": [{"label": "¿Cuáles son tus NO-NEGOCIABLES de un asistente? Elige todos los que apliquen.", "req": false, "tipo": "opciones", "opts": ["Nunca compartir mis datos o secretos", "Nunca enviar mensajes o correos sin mi revisión", "Nunca gastar dinero sin autorización", "Nunca borrar archivos o datos sin mi permiso", "Nunca tomar decisiones legales, médicas o financieras por mí", "Nunca hablar en mi nombre sin aprobación", "Nunca inventar información (siempre debe citar fuentes)", "Respetar la privacidad de mis clientes", "Otro"], "tipo_raw": "CHECKBOX", "multiple": true}, {"label": "¿Qué escenarios considerarías graves si tu agente los provocara? Cuéntanos con tus palabras.", "req": false, "tipo": "textarea", "opts": [], "tipo_raw": "TEXTAREA", "multiple": false}, {"label": "¿Qué acciones deben pedir tu aprobación antes de ejecutarse?", "req": false, "tipo": "textarea", "opts": [], "tipo_raw": "TEXTAREA", "multiple": false}, {"label": "¿Qué nivel de autonomía quieres para tu agente?", "req": false, "tipo": "escala", "opts": [], "tipo_raw": "LINEAR_SCALE", "multiple": false, "escala": {"min": 0, "max": 10, "izq": "Pregúntame todo", "der": "Muy autónomo"}}, {"label": "Cuando tu agente no sepa qué hacer, ¿qué prefieres que haga?", "req": false, "tipo": "opciones", "opts": ["Detenerse y preguntarme", "Elegir la opción más segura y avisarme", "Proponer un plan y esperar mi OK", "Otro"], "tipo_raw": "MULTIPLE_CHOICE_OPTION", "multiple": false}]}, {"titulo": "Parte 5. Gran valor y éxito", "textos": [], "campos": [{"label": "¿Qué escenarios te darían el mayor valor o considerarías un gran éxito?", "req": false, "tipo": "textarea", "opts": [], "tipo_raw": "TEXTAREA", "multiple": false}, {"label": "¿Cómo sabrás que tu agente está funcionando bien?", "req": false, "tipo": "textarea", "opts": [], "tipo_raw": "TEXTAREA", "multiple": false}, {"label": "¿Qué tendría que pasar para que consideraras que no valió la pena?", "req": false, "tipo": "textarea", "opts": [], "tipo_raw": "TEXTAREA", "multiple": false}]}, {"titulo": "Parte 6. Tu agente y su configuración", "textos": ["Con el modelo y el sistema de tu computadora cargamos la guía técnica correcta para instalarte las herramientas."], "campos": [{"label": "¿Qué debe saber siempre tu agente sobre ti y tu proyecto? Esto define tu SOUL.md.", "req": false, "tipo": "textarea", "opts": [], "tipo_raw": "TEXTAREA", "multiple": false}, {"label": "¿Qué tono quieres que tenga tu agente? Elige todos los que apliquen.", "req": false, "tipo": "opciones", "opts": ["Profesional y formal", "Cercano y cálido", "Directo y conciso", "Técnico y detallado", "Con humor", "Otro"], "tipo_raw": "CHECKBOX", "multiple": true}, {"label": "¿En qué idioma debe trabajar por defecto?", "req": false, "tipo": "opciones", "opts": ["Español (México)", "Español neutro", "Inglés", "Bilingüe", "Otro"], "tipo_raw": "MULTIPLE_CHOICE_OPTION", "multiple": false}, {"label": "¿Qué debería saber hacer tu agente? Elige todo lo que aplique a tu trabajo.", "req": false, "tipo": "opciones", "opts": ["Redacción: correos, propuestas, publicaciones", "Hojas de cálculo: presupuestos, inventario, reportes", "Documentos: contratos, manuales, reportes", "Trato con clientes: seguimiento, recordatorios, respuestas", "Compras y proveedores: cotizaciones, comparación de precios", "Redes sociales: contenido, calendario, respuestas", "Facturación y cobranza", "Investigación: buscar fuentes, resumir, verificar datos", "Análisis de datos y reportes", "Diseño: imágenes, presentaciones", "Video y audio", "Trámites y papeleo", "Agenda y coordinación", "Otro"], "tipo_raw": "CHECKBOX", "multiple": true}, {"label": "¿Cómo te gustaría que se comunicaran tus agentes? Elige todas las que veas útiles.", "req": false, "tipo": "opciones", "opts": ["Un solo agente que hace todo", "Varios agentes que se pasan la tarea por mensajes directos entre ellos (A2A)", "Varios agentes en un grupo donde conversan entre sí", "Agentes que coordino yo desde un solo chat", "Otro"], "tipo_raw": "CHECKBOX", "multiple": true}, {"label": "¿Qué modelo de IA usas hoy o te gustaría usar? Elige todos los que apliquen.", "req": false, "tipo": "opciones", "opts": ["ChatGPT (OpenAI)", "Claude (Anthropic)", "Gemini (Google)", "DeepSeek", "Kimi", "Grok (xAI)", "Un modelo local en mi computadora", "No lo sé todavía", "Otro"], "tipo_raw": "CHECKBOX", "multiple": true}, {"label": "¿Qué computadora usas? Marca, modelo y sistema operativo.", "req": false, "tipo": "texto", "opts": [], "tipo_raw": "INPUT_TEXT", "multiple": false}]}, {"titulo": "Parte 7. Presupuesto y cierre", "textos": [], "campos": [{"label": "¿Qué presupuesto mensual tienes pensado para IA y herramientas?", "req": false, "tipo": "opciones", "opts": ["Menos de $500 MXN", "$500 a $1,500 MXN", "$1,500 a $3,000 MXN", "Más de $3,000 MXN", "Aún no lo defino"], "tipo_raw": "MULTIPLE_CHOICE_OPTION", "multiple": false}, {"label": "¿Qué te gustaría aprender o lograr en el taller?", "req": false, "tipo": "textarea", "opts": [], "tipo_raw": "TEXTAREA", "multiple": false}, {"label": "¿Algo más que debamos saber para diseñar tu agente?", "req": false, "tipo": "textarea", "opts": [], "tipo_raw": "TEXTAREA", "multiple": false}, {"label": "Consentimiento", "req": false, "tipo": "opciones", "opts": ["Acepto que SolarPunk MX me contacte por WhatsApp o correo para dar seguimiento a este diagnóstico y a las clases."], "tipo_raw": "CHECKBOX", "multiple": true}]}];
const DESPEDIDA    = {"titulo": "¡Listo!", "textos": ["Con tus respuestas diseñamos tu SOUL.md y tu configuración inicial: los agentes que necesitas, sus skills, sus MCPs, sus modelos y cómo se van a comunicar."]};
const INTRO        = "Este cuestionario nos ayuda a diseñar tu equipo de agentes IAs. Tus respuestas nos dicen qué necesitas, cómo trabajas y qué límites quieres.";
/* Origen del servicio.
   El cuestionario vive en empresaagentica.com (sitio estático en Vercel) y el
   receptor vive en entrega.empresaagentica.com detrás del túnel de Cloudflare.
   Son orígenes distintos, así que la API se apunta al receptor explícitamente.
   Si el propio receptor sirve la página (mismo origen), se usa '' para no
   depender de CORS. */
const ORIGEN_RECEPTOR = 'https://entrega.empresaagentica.com';
const API = (location.origin === ORIGEN_RECEPTOR ||
             (location.hostname === '127.0.0.1' && location.port === '8790'))
  ? ''
  : ORIGEN_RECEPTOR;
const TIPO         = "instalacion";              // "pago" | "instalacion"
const PAGO         = TIPO === "pago";

/* ═══════════════ ESTADO Y PERSISTENCIA ═══════════════ */
const CLAVE = 'spx-onboarding-v2';
const SERVICIO = 500;
let limpiando = false;                 // true mientras se borra el borrador
let revision = 0;                      // contador para descartar validaciones viejas
let estado = { ruta:null, modo:null, codigo:'', codigoOK:false, respuestas:{}, paso:1, actualizado:null, enviado:false };
let actual = 1;
let TOTAL = PAGO ? 5 : 4;

function guardar(mostrar){
  estado.paso = actual;
  estado.actualizado = new Date().toISOString();
  try{ localStorage.setItem(CLAVE, JSON.stringify(estado)); }catch(e){}
  if(mostrar) sello('Guardado');
}
function sello(prefijo){
  const g=document.getElementById('guardado'); if(!g) return;
  if(!estado.actualizado){ g.textContent=''; return; }
  g.textContent = prefijo + ' · ' + new Date(estado.actualizado).toLocaleString('es-MX');
}
function cargar(){
  try{ const s=localStorage.getItem(CLAVE); if(s){ estado={...estado,...JSON.parse(s)}; return true; } }catch(e){}
  return false;
}
function limpiarTodo(){
  if(!confirm('¿Borrar tus respuestas guardadas y empezar de nuevo?')) return;
  limpiando = true;                       // que beforeunload NO lo vuelva a guardar
  try{ localStorage.removeItem(CLAVE); }catch(e){}
  location.reload();
}

/* ═══════════════ NAVEGACIÓN ═══════════════ */
function pasoVisual(n){ return n==='3b' ? 2 : (n===9 ? TOTAL : n); }
function paint(){
  document.querySelectorAll('.dot').forEach((d,i)=>{
    const v = pasoVisual(actual);
    d.className='dot'+(i+1<v?' done':'')+(i+1===v?' on':'');
  });
  document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('active',String(actual)===s.dataset.n));
  document.getElementById('progTxt').textContent =
    (actual===9) ? 'Listo' : `Paso ${pasoVisual(actual)} de ${TOTAL}`;
}
function go(n){ actual=n; paint(); guardar(false); }
document.getElementById('steps').innerHTML=Array.from({length:TOTAL},()=>'<div class="dot"></div>').join('');
document.getElementById('app').classList.toggle('solo', !PAGO);

/* ═══════════════ PASO 1 · RUTA ═══════════════ */
document.querySelectorAll('section[data-n="1"] .opt').forEach(o=>o.onclick=()=>{
  document.querySelectorAll('section[data-n="1"] .opt').forEach(x=>x.classList.remove('sel'));
  o.classList.add('sel');
  estado.ruta={id:o.dataset.id,nombre:o.dataset.nombre,precio:o.dataset.precio};
  document.getElementById('b1').disabled=false;
  if(PAGO) renderCarrito();
  guardar(false);
});

/* ═══════════════ PASO 2 · QUIÉN CONFIGURA ═══════════════ */
document.querySelectorAll('section[data-n="2"] .opt').forEach(o=>o.onclick=()=>{
  document.querySelectorAll('section[data-n="2"] .opt').forEach(x=>x.classList.remove('sel'));
  o.classList.add('sel');
  estado.modo={id:o.dataset.id,nombre:o.dataset.nombre,precio:o.dataset.precio};
  if(PAGO) renderCarrito();
  const blk=document.getElementById('bloqueClave');
  if(blk) blk.style.display = (o.dataset.id==='servicio') ? 'block' : 'none';
  document.getElementById('b2').disabled =
    (o.dataset.id==='servicio' && !PAGO && !estado.codigoOK) ? true : false;
  guardar(false);
});
// que escribir el código no cambie la opción elegida
['click','mousedown','input'].forEach(ev=>{
  const i=document.getElementById('codigoStripe');
  if(i) i.addEventListener(ev, e=>e.stopPropagation());
});
function codigoValido(){ return !!(estado.codigoOK); }
let revisandoCodigo = false;
async function validarClave(){
  const i=document.getElementById('codigoStripe'); if(!i) return;
  const v=i.value.trim();
  const m=document.getElementById('msgClave');
  estado.codigo=v; guardar(false);
  if(!v){ estado.codigoOK=false; m.textContent='Escribe el código que te dio Stripe al pagar.'; m.style.color='';
    document.getElementById('b2').disabled=true; return; }
  m.textContent='Revisando…'; m.style.color='var(--muted)';
  estado.codigoOK=false;                 // mientras se revisa, nadie avanza
  document.getElementById('b2').disabled=true;
  revision++;
  const mi=revision;
  try{
    const r=await fetch(API+'/validar-codigo',{method:'POST',
      headers:{'Content-Type':'application/json'},body:JSON.stringify({codigo:v})});
    const d=await r.json();
    if(mi!==revision) return;           // llegó tarde: ya hay una revisión más nueva
    estado.codigoOK = !!d.ok;
    m.textContent = d.ok ? '✓ Código válido' : (d.detalle || 'Ese código no es válido.');
    m.style.color = d.ok ? 'var(--acid)' : 'var(--danger)';
  }catch(e){
    if(mi!==revision) return;
    // sin conexión al receptor: acepta el formato oficial y avisa
    const okFmt = /^SPX-[A-Z0-9]{4}-[A-Z0-9]{4}$/i.test(v) || /^[A-Z0-9]{6,20}$/i.test(v);
    estado.codigoOK = okFmt;
    m.textContent = okFmt ? '✓ Código con formato válido' : 'Revisa el código que te dieron.';
    m.style.color = okFmt ? 'var(--acid)' : 'var(--danger)';
  }
  const sel = document.querySelector('section[data-n="2"] .opt.sel');
  document.getElementById('b2').disabled = !(estado.codigoOK || (sel && sel.dataset.id==='propio'));
}
function elegirConfig(){
  if(!estado.modo) return;
  if(estado.modo.id==='propio'){ aceptarPropio(); return; }
  go(3);
}
function aceptarPropio(){
  // sin cuestionario: pasa directo al cierre
  mostrarDespedida();
}

/* ═══ CIERRE: la despedida cambia según ruta + quién configura ═══ */
const DESCARGAS = 'https://empresaagentica.com/solarpunk/hermes/descargas/';

/* Cada ruta entrega lo suyo. A y B son el mismo tipo de paquete
   —conector de escritorio al servidor— porque en ambas el agente vive en
   un VPS; lo único que cambia es quién es dueño del servidor. C instala
   Hermes en la computadora, así que lleva el instalador de Docker. */
const PAQUETES = {
  A: { tipo:'conector', win: DESCARGAS+'conexion-windows.zip',
       mac: DESCARGAS+'instalador-vps-curso-mac-linux.zip' },
  B: { tipo:'conector', win: DESCARGAS+'conexion-windows.zip',
       mac: DESCARGAS+'instalador-vps-curso-mac-linux.zip' },
  C: { tipo:'local',    win: DESCARGAS+'instalador-docker.zip',
       mac: DESCARGAS+'instalador-docker.zip' }
};

function volverDesdeCierre(){
  // regresa al último paso editable según lo que eligió
  go((estado.modo && estado.modo.id==='servicio') ? 3 : 2);
}

function mostrarDespedida(){
  const A = (estado.ruta && estado.ruta.id) || 'A';
  const M = (estado.modo && estado.modo.id) || 'servicio';
  const conServicio = (M === 'servicio');

  document.getElementById('desp_titulo').textContent = DESPEDIDA.titulo;

  // texto principal: sólo el del Tally describe lo que hacemos NOSOTROS
  document.getElementById('desp_texto').innerHTML = conServicio
    ? DESPEDIDA.textos.map(t=>`<p class="grave">${esc(t)}</p>`).join('')
    : `<p class="grave">Tus respuestas quedaron guardadas. Abajo está lo que sigue
       para dejar tus agentes funcionando.</p>`;

  // siguiente paso: depende de DÓNDE se instala
  const pasos = {
    A: {
      servicio:'Descarga el conector de tu sistema y ábrelo: te lleva a tus agentes ya creados en tu VPS del curso.',
      propio:'Descarga el conector de tu sistema y ábrelo: te lleva a tus agentes ya creados en tu VPS del curso.'
    },
    B: {
      servicio:'Descarga el conector de tu sistema y ábrelo: conecta tu computadora con tu VPS y ahí viven tus agentes.',
      propio:'Descarga el conector de tu sistema y ábrelo: conecta tu computadora con tu VPS y ahí viven tus agentes.'
    },
    C: {
      servicio:'Descarga el instalador, ejecútalo y tus agentes quedan dentro del contenedor seguro en tu computadora.',
      propio:'Descarga el instalador y ejecútalo. Con eso tu agente queda listo en tu computadora.'
    }
  };
  const siguiente = (pasos[A] || pasos.A)[conServicio ? 'servicio' : 'propio'];
  document.getElementById('desp_siguiente').innerHTML = '<b>Tu siguiente paso:</b> ' + esc(siguiente);

  // ── Bloque de descarga: según ruta, con elección de sistema operativo ──
  const box = document.getElementById('desp_instalador');
  const p = PAQUETES[A] || PAQUETES.A;

  if (p.tipo === 'conector') {
    // A y B: el agente vive en un VPS. El alumno conecta su computadora.
    box.style.display = 'block';
    box.innerHTML = `
      <div class="note hard">
        <b>Descarga el conector de tu computadora</b><br>
        Abre el túnel seguro a tu servidor y te deja los agentes en el navegador.
        No instalas nada en tu equipo.
        <div class="ayuda mt-8">
          Windows: abre <code>conectar.bat</code> ·
          macOS y Linux: abre la Terminal y corre <code>bash conectar.sh</code>
        </div>
      </div>
      <p class="lbl mt-12">Elige tu sistema</p>
      <div class="row mt-8">
        <a class="btnlink" href="${p.win}" download>&#11015; Windows</a>
        <a class="btnlink" href="${p.mac}" download>⬇ macOS y Linux</a>
      </div>
      <div class="note warn mt-12">
        <b>Antes de abrirlo:</b> el paquete trae un archivo <code>config.txt</code>.
        Escribe ahí la IP de tu servidor. Es lo único que hay que llenar.
      </div>`;
  } else {
    // C: Hermes se instala en la computadora del alumno.
    box.style.display = 'block';
    box.innerHTML = `
      <div class="note hard">
        <b>Instala Hermes en tu computadora</b><br>
        1. Descarga el paquete y descomprímelo.<br>
        2. Entra a la carpeta y abre el archivo <b>LEEME</b>: ahí están los pasos
           para <b>Windows</b>, <b>Mac</b> y <b>Linux</b>.<br>
        3. Al terminar, tu agente queda abierto en tu navegador.
        <div class="ayuda mt-8">
          Windows: <code>instalar-docker.bat</code> ·
          Mac: <code>instalar-docker.command</code> ·
          Linux: <code>instalar-docker.sh</code>
        </div>
      </div>
      <p class="lbl mt-12">Elige tu sistema</p>
      <div class="row mt-8">
        <a class="btnlink" href="${p.win}" download>&#11015; Windows</a>
        <a class="btnlink" href="${p.mac}" download>⬇ macOS y Linux</a>
      </div>`;
  }

  go(9);
}

/* ═══════════════ PASO 3 · CUESTIONARIO ═══════════════ */
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

function renderCampo(c){
  if(c.ayuda) return `<p class="ayuda">${esc(c.ayuda)}</p>`;
  const req=c.req?' <span class="req">*</span>':'';
  const L=esc(c.label);
  const t=c.tipo;
  if(t==='opciones' && c.opts && c.opts.length){
    const tipo = c.multiple ? 'checkbox' : 'radio';
    const ops=c.opts.map(o=>{
      const esOtro=/^otro$/i.test(o.trim());
      return `<label class="opt-c"><input type="${tipo}" name="q_${slug(c.label)}" value="${esc(o)}"> ${esc(o)}</label>`
        + (esOtro?`<div class="otro-txt"><input type="text" placeholder="¿Cuál? Escríbelo aquí"></div>`:'');
    }).join('');
    return `<div class="campo" data-label="${L}"><label class="lbl">${L}${req}</label><div class="opts">${ops}</div></div>`;
  }
  if(t==='ranking'){
    const ops=c.opts.map(o=>`<label class="opt-c ranking" data-r="${esc(o)}">
      <span class="num">·</span> ${esc(o)}<input type="hidden" value=""></label>`).join('');
    return `<div class="campo" data-label="${L}" data-tipo="ranking"><label class="lbl">${L}${req}</label>
      <div class="ayuda">Haz clic en el orden que prefieras (1 = la que más tiempo te quita). Clic de nuevo para quitar.</div>
      <div class="opts">${ops}</div></div>`;
  }
  if(t==='textarea') return `<div class="campo" data-label="${L}"><label class="lbl">${L}${req}</label><textarea rows="3"></textarea></div>`;
  if(t==='escala'){
    const mn=c.escala&&c.escala.min!=null?c.escala.min:0, mx=c.escala&&c.escala.max!=null?c.escala.max:10;
    const izq=c.escala&&c.escala.izq||'', der=c.escala&&c.escala.der||'';
    let ops='';
    for(let i=mn;i<=mx;i++) ops+=`<label class="opt-c"><input type="radio" name="esc_${slug(c.label)}" value="${i}"> ${i}</label>`;
    return `<div class="campo" data-label="${L}"><label class="lbl">${L}${req}</label>
      <div class="esc-head"><span>${esc(izq)}</span><span>${esc(der)}</span></div>
      <div class="esc-opts">${ops}</div></div>`;
  }
  const tipo = t==='email'?'email' : t==='tel'?'tel' : 'text';
  return `<div class="campo" data-label="${L}"><label class="lbl">${L}${req}</label><input type="${tipo}"></div>`;
}
function slug(s){ return String(s).toLowerCase().replace(/[^a-z0-9]+/g,'_').slice(0,40); }
function claveDe(c){ const l=c.querySelector('.lbl'); return l?l.textContent.replace('*','').trim():null; }

function renderCuestionario(){
  const cont=document.getElementById('cuestionario');
  document.getElementById('introCuest').textContent = INTRO;
  cont.innerHTML = CUESTIONARIO.map(s=>
    `<section class="qsec"><h2>${esc(s.titulo)}</h2>`+
    s.textos.map(t=>`<p class="ayuda">${esc(t)}</p>`).join('')+
    s.campos.map(renderCampo).join('')+`</section>`).join('');
  restaurar();
  enlazar();
}
function restaurar(){
  document.querySelectorAll('#cuestionario .campo').forEach(c=>{
    const k=claveDe(c); if(!k) return;
    const v=estado.respuestas[k]; if(v===undefined || v===null || v==='') return;
    if(c.dataset.tipo==='ranking' && Array.isArray(v)){
      const labs=[...c.querySelectorAll('.ranking')];
      v.forEach((nombre,i)=>{
        const lab=labs.find(l=>l.dataset.r===nombre);
        if(lab){ lab.classList.add('puesto'); lab.dataset.p=i+1; lab.querySelector('.num').textContent=i+1; }
      });
      return;
    }
    const ta=c.querySelector('textarea'), inp=c.querySelector('input[type=text],input[type=email],input[type=tel]');
    if(ta) ta.value=v;
    else if(inp) inp.value=v;
    else{
      const arr=Array.isArray(v)?v:[v];
      c.querySelectorAll('input[type=checkbox],input[type=radio]').forEach(x=>{ if(arr.includes(x.value)) x.checked=true; });
      const otro=c.querySelector('.otro-txt input');
      const ov=estado.respuestas[k+' (Otro)'];
      if(otro && ov){ otro.value=ov; otro.parentElement.classList.add('on'); }
    }
  });
}
function enlazar(){
  const cont=document.getElementById('cuestionario');
  // abrir/cerrar "Otro"
  cont.querySelectorAll('.opt-c input[type=checkbox],.opt-c input[type=radio]').forEach(inp=>{
    const otro=inp.closest('.opt-c')?.nextElementSibling;
    if(otro && otro.classList.contains('otro-txt')){
      const sync=()=>otro.classList.toggle('on', inp.checked);
      inp.addEventListener('change', sync); sync();
    }
  });
  // ranking: clic ordena (1,2,3…) y se puede quitar
  cont.querySelectorAll('.campo[data-tipo="ranking"]').forEach(caja=>{
    const labs=[...caja.querySelectorAll('.ranking')];
    labs.forEach(lab=>lab.addEventListener('click', e=>{
      e.preventDefault();
      const orden = labs.filter(l=>l.classList.contains('puesto'))
                        .map(l=>({l, p:+l.dataset.p}))
                        .filter(x=>x.p>0).sort((a,b)=>a.p-b.p);
      if(lab.classList.contains('puesto')){
        lab.classList.remove('puesto');
        lab.querySelector('.num').textContent='·';
        lab.dataset.p='';
      }else{
        lab.classList.add('puesto');
        lab.dataset.p = orden.length+1;
        lab.querySelector('.num').textContent = orden.length+1;
      }
      // renumerar los que quedan
      labs.filter(l=>l.classList.contains('puesto'))
          .sort((a,b)=>+a.dataset.p-+b.dataset.p)
          .forEach((l,i)=>{ l.dataset.p=i+1; l.querySelector('.num').textContent=i+1; });
      recolectar(); guardar(true);
    }));
  });
  const salvar=()=>{ recolectar(); guardar(true); };
  cont.querySelectorAll('input,textarea').forEach(x=>{
    x.addEventListener('input', salvar);
    x.addEventListener('change', salvar);
  });
  const btnLimpiar=document.getElementById('btnLimpiar');
  if(btnLimpiar) btnLimpiar.onclick=limpiarTodo;
}
function recolectar(){
  const out={};
  document.querySelectorAll('#cuestionario .campo').forEach(c=>{
    const k=claveDe(c); if(!k) return;
    if(c.dataset.tipo==='ranking'){
      const puestos=[...c.querySelectorAll('.ranking.puesto')]
        .sort((a,b)=>+a.dataset.p-+b.dataset.p).map(l=>l.dataset.r);
      if(puestos.length) out[k]=puestos;
      return;
    }
    const ta=c.querySelector('textarea'), inp=c.querySelector('input[type=text],input[type=email],input[type=tel]');
    const chs=[...c.querySelectorAll('input[type=checkbox]')].filter(x=>x.checked).map(x=>x.value);
    const rd=c.querySelector('input[type=radio]:checked');
    if(ta) out[k]=ta.value;
    else if(inp) out[k]=inp.value;
    else if(chs.length) out[k]=chs;
    else if(rd) out[k]=rd.value;
    const otro=c.querySelector('.otro-txt input');
    if(otro && otro.value.trim()) out[k+' (Otro)']=otro.value.trim();
  });
  estado.respuestas=out;
  return out;
}

function enviar(){
  const resp=recolectar();
  // Las respuestas del cuestionario SON la solicitud: el receptor configura
  // los agentes a partir de ellas (no mandamos una lista prefabricada).
  const pedido={
    alumno: resp['Nombre completo o alias'] || 'Alumno',
    email: resp['Correo electrónico'] || '',
    whatsapp: resp['WhatsApp'] || '',
    ciudad: resp['Ciudad'] || '',
    ruta: estado.ruta?estado.ruta.id:'A',
    modo: estado.modo?estado.modo.id:'servicio',
    codigo: estado.codigo||'',
    respuestas: resp
  };
  const btn = document.querySelector('[data-spx-click="enviar()"], [data-spx-click="enviar"]');
  if(btn){ btn.disabled=true; btn.textContent='Enviando…'; }
  const terminar=(ok)=>{
    const o=document.getElementById('ok'); o.style.display='block';
    o.innerHTML = ok
      ? '<b>¡Listo!</b> Recibimos tu diagnóstico. Ya estamos diseñando tu configuración.'
      : '<b>Guardado en este navegador.</b> El receptor no está disponible ahora; tu diagnóstico quedó guardado y puedes reintentar.';
    if(btn){ btn.disabled=false; btn.textContent='Enviar mi diagnóstico'; }
    estado.enviado=true; guardar(false);
    setTimeout(mostrarDespedida, 700);
  };
  fetch(API+'/enviar',{method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify(pedido)})
    .then(r=>r.json()).then(d=>terminar(!!d.ok)).catch(()=>terminar(false));
}

/* ═══════════════ VARIANTE CON CARRITO ═══════════════ */
const money = n => '$'+n.toLocaleString('es-MX')+' MXN';
function renderCarrito(){
  const box=document.getElementById('cartItems'); if(!box) return;
  const meta=document.getElementById('cartMeta');
  if(!estado.ruta){ box.innerHTML='<div class="empty">Aún no eliges dónde instalar</div>';
    meta.textContent='Nada seleccionado aún'; document.getElementById('cartTot').style.display='none'; return; }
  const items=[{l:estado.ruta.nombre,s:'',p:estado.ruta.precio,zero:estado.ruta.id!=='A'}];
  let conf=0;
  if(estado.modo){
    if(estado.modo.id==='servicio'){ conf=SERVICIO; items.push({l:'Servicio de Configuración',s:'Diseño y puesta a punto',p:money(conf),zero:false}); }
    else items.push({l:'Lo configuras tú',s:'Sin costo',p:'$0 MXN',zero:true});
  }
  box.innerHTML=items.map(i=>`<div class="ci"><div class="l">${esc(i.l)}<small>${esc(i.s)}</small></div>
    <div class="p ${i.zero?'zero':''}">${i.p}</div></div>`).join('');
  meta.textContent = estado.modo ? estado.ruta.nombre+' · '+estado.modo.nombre : estado.ruta.nombre;
  document.getElementById('cartTot').style.display='block';
  document.getElementById('tInst').textContent = estado.ruta.id==='A'?'Incluido':estado.ruta.precio;
  document.getElementById('tAg').textContent = estado.modo
    ? (estado.modo.id==='servicio' ? money(SERVICIO) : '$0 MXN') : '—';
  document.getElementById('tTotal').textContent = money(conf);
}
function renderResumen(){
  const el=document.getElementById('resumen'); if(!el||!estado.ruta){ if(el) el.innerHTML=''; return; }
  const conf = estado.modo && estado.modo.id==='servicio' ? SERVICIO : 0;
  el.innerHTML=`
    <div class="ci"><div class="l">Dónde se instala</div><div class="p">${esc(estado.ruta.nombre)}</div></div>
    <div class="ci"><div class="l">Configuración</div><div class="p">${esc(estado.modo?estado.modo.nombre:'—')}</div></div>
    <div class="ci"><div class="l">Total hoy</div><div class="p">${money(conf)}</div></div>`;
}
function confirmar(){ mostrarDespedida(); }

/* ═══════════════ ARRANQUE ═══════════════ */
renderCuestionario();
const habia = cargar();
if(habia){
  // fijar el paso ANTES de restaurar: validarClave() y otros disparan guardar()
  actual = pasoValido(estado.paso);
  if(estado.ruta){
    document.querySelector(`section[data-n="1"] .opt[data-id="${estado.ruta.id}"]`)?.classList.add('sel');
    document.getElementById('b1').disabled=false;
  }
  if(estado.modo){
    document.querySelector(`section[data-n="2"] .opt[data-id="${estado.modo.id}"]`)?.classList.add('sel');
    const blk=document.getElementById('bloqueClave');
    if(blk) blk.style.display = estado.modo.id==='servicio' ? 'block' : 'none';
    document.getElementById('b2').disabled = false;
    if(estado.codigo && document.getElementById('codigoStripe')){
      document.getElementById('codigoStripe').value=estado.codigo;
      validarClave();          // revalida contra la lista y reactiva el botón
    }
  }
  if(PAGO) renderCarrito();
}
restaurar();
paint();
if(habia && estado.actualizado && Object.keys(estado.respuestas||{}).length){
  sello('Retomado');
  guardar(false);
}else{
  // no había nada real: no presumir de guardado
  estado.actualizado = null;
  sello('');
  guardar(false);
  sello('');
}
window.addEventListener('beforeunload', ()=>{
  if(limpiando) return;                 // no re-guardar si estamos borrando
  try{ recolectar(); estado.paso=actual; estado.actualizado=new Date().toISOString();
       localStorage.setItem(CLAVE, JSON.stringify(estado)); }catch(e){}
});

/* paso guardado → paso navegable de verdad */
function pasoValido(p){
  if(p===9) return 9;
  if(p==='3b') return '3b';
  const n = Number(p);
  if(!n || n<1) return 1;
  if(n===3){ // solo puede estar en el cuestionario si eligió el servicio
    return (estado.modo && estado.modo.id==='servicio') ? 3 : 2;
  }
  if(n===4 && !PAGO && !(estado.modo && estado.modo.id==='servicio')) return 2;
  if(n===4) return PAGO ? 4 : 3;
  if(n>=TOTAL) return PAGO ? 4 : 3;
  return n;
}


/* ── Cableado de eventos para CSP estricta ──
   El sitio publica script-src 'self' sin 'unsafe-eval', así que ni onclick=""
   inline ni new Function() están permitidos: el navegador los bloquea y los
   botones quedan muertos. Aquí se mapea cada acción a la función real, sin
   evaluar cadenas. */
(function(){
  var ACCIONES = {
    'go':               function(v){ go(v); },
    'go(1)':            function(){ go(1); },
    'go(2)':            function(){ go(2); },
    'enviar':           function(){ enviar(); },
    'enviar()':         function(){ enviar(); },
    'elegirConfig':     function(){ elegirConfig(); },
    'elegirConfig()':   function(){ elegirConfig(); },
    'limpiarTodo':      function(){ limpiarTodo(); },
    'limpiarTodo()':    function(){ limpiarTodo(); },
    'volverDesdeCierre':  function(){ volverDesdeCierre(); },
    'volverDesdeCierre()':function(){ volverDesdeCierre(); },
    'validarClave':     function(){ validarClave(); },
    'validarClave()':   function(){ validarClave(); }
  };

  function accionDe(valor){
    if(!valor) return null;
    if(ACCIONES[valor]) return ACCIONES[valor];
    var m = /^([a-zA-Z_$][\w$]*)\s*\(\s*(\d+)?\s*\)$/.exec(valor);
    if(m && typeof window[m[1]] === 'function'){
      var n = m[2] === undefined ? undefined : Number(m[2]);
      return function(){ window[m[1]](n); };
    }
    if(typeof window[valor] === 'function') return window[valor];
    return null;
  }

  var EVENTOS = {
    'data-spx-click':  'click',
    'data-spx-input':  'input',
    'data-spx-change': 'change'
  };
  Object.keys(EVENTOS).forEach(function(atributo){
    var tipo = EVENTOS[atributo];
    document.querySelectorAll('[' + atributo + ']').forEach(function(el){
      var fn = accionDe(el.getAttribute(atributo));
      if(!fn){
        console.error('[onboarding] acción desconocida:', el.getAttribute(atributo));
        return;
      }
      el.addEventListener(tipo, function(ev){ fn.call(el, ev); });
    });
  });
})();
