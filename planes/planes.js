/* Selección local de modalidad en Planes: estado visual accesible, sin navegación ni envío de datos. */

const chooseButtons = Array.from(document.querySelectorAll('.planes-choose'));
const selectionStatus = document.querySelector('.planes-selection-status');

function paintSelection() {
  const active = chooseButtons.find((button) => button.getAttribute('aria-pressed') === 'true');
  selectionStatus.textContent = active
    ? `Modalidad seleccionada: ${active.dataset.modality}.`
    : '';
}

if (chooseButtons.length && selectionStatus) {
  for (const button of chooseButtons) {
    button.addEventListener('click', () => {
      const isSelected = button.getAttribute('aria-pressed') === 'true';
      for (const other of chooseButtons) {
        other.setAttribute('aria-pressed', String(!isSelected && other === button));
      }
      paintSelection();
    });
  }
}
