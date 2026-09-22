/* Selección de modalidad en Planes: cada botón reconecta con el flujo real del club
   (login con intención de plan preservada). La base de la URL vive en el punto único
   de configuración del sitio: window.SOLAR_PUNK_SITE_CONFIG (definido en app.js). */

const chooseButtons = Array.from(document.querySelectorAll('.planes-choose'));
const selectionStatus = document.querySelector('.planes-selection-status');
const siteConfig = window.SOLAR_PUNK_SITE_CONFIG || {};
const clubOrigin = siteConfig.clubOrigin || '';
const endpointReady = Boolean(siteConfig.registrationReady && clubOrigin);

function clubLoginUrlForPlan(modality) {
  const plan = modality === 'Presencial' ? 'presencial' : 'virtual';
  return `${clubOrigin}/club/login/?sp_next=payment&sp_plan=${plan}`;
}

if (chooseButtons.length && selectionStatus) {
  for (const button of chooseButtons) {
    const isAnchor = button.tagName === 'A';
    if (isAnchor) {
      button.setAttribute('href', clubLoginUrlForPlan(button.dataset.modality));
      if (!endpointReady) button.hidden = true;
    }
    button.addEventListener('click', () => {
      const isSelected = isAnchor && button.getAttribute('aria-pressed') === 'true';
      if (!isSelected) selectionStatus.textContent = `Modalidad seleccionada: ${button.dataset.modality}. Sigue al login del club para continuar.`;
      for (const other of chooseButtons) {
        other.setAttribute('aria-pressed', String(!isSelected && other === button));
      }
    });
  }
}
