const fs = require('fs');

let code = fs.readFileSync('js/components.js', 'utf8');

// 1. Extract CSS block
const cssStartMarker = "  // 1. Inyectar Estilos Específicos de la Actividad";
const cssEndMarker = "  // 2. Definición de Datos de los Componentes";
const idxStart = code.indexOf(cssStartMarker);
const idxEnd = code.indexOf(cssEndMarker);
if (idxStart === -1 || idxEnd === -1) throw new Error("Could not find CSS block");

const cssBlock = code.substring(idxStart, idxEnd);

// 2. Insert CSS block into initPowerSupplyActivity
const psFuncStart = "function initPowerSupplyActivity(onAwardXp) {";
code = code.replace(psFuncStart, psFuncStart + '\n' + cssBlock);

// 3. Fix button click logic to close the other activity
const oldButtonLogic = `
            const activateBtn = document.getElementById('btn-activate-activity');
            const activityRoot = document.getElementById('afg1022-interactive-activity-root');
            if (activateBtn && activityRoot) {
              activateBtn.addEventListener('click', () => {
                activityRoot.classList.remove('d-none');
                activateBtn.parentElement.classList.add('d-none'); // Hide the button wrapper
                initGeneratorActivity(onAwardXp);
                setTimeout(() => {
                  activityRoot.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              });
            }

            const psActivateBtn = document.getElementById('btn-activate-ps-activity');
            const psActivityRoot = document.getElementById('power-supply-interactive-activity-root');
            if (psActivateBtn && psActivityRoot) {
              psActivateBtn.addEventListener('click', () => {
                psActivityRoot.classList.remove('d-none');
                psActivateBtn.parentElement.classList.add('d-none');
                initPowerSupplyActivity(onAwardXp);
                setTimeout(() => {
                  psActivityRoot.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              });
            }
`;

const newButtonLogic = `
            const activateBtn = document.getElementById('btn-activate-activity');
            const activityRoot = document.getElementById('afg1022-interactive-activity-root');
            const psActivateBtn = document.getElementById('btn-activate-ps-activity');
            const psActivityRoot = document.getElementById('power-supply-interactive-activity-root');

            if (activateBtn && activityRoot) {
              activateBtn.addEventListener('click', () => {
                // Show Generator
                activityRoot.classList.remove('d-none');
                activateBtn.parentElement.classList.add('d-none');
                
                // Hide Power Supply
                if (psActivityRoot) psActivityRoot.classList.add('d-none');
                if (psActivateBtn) psActivateBtn.parentElement.classList.remove('d-none');

                initGeneratorActivity(onAwardXp);
                setTimeout(() => {
                  activityRoot.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              });
            }

            if (psActivateBtn && psActivityRoot) {
              psActivateBtn.addEventListener('click', () => {
                // Show Power Supply
                psActivityRoot.classList.remove('d-none');
                psActivateBtn.parentElement.classList.add('d-none');

                // Hide Generator
                if (activityRoot) activityRoot.classList.add('d-none');
                if (activateBtn) activateBtn.parentElement.classList.remove('d-none');

                initPowerSupplyActivity(onAwardXp);
                setTimeout(() => {
                  psActivityRoot.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              });
            }
`;

code = code.replace(oldButtonLogic.trim(), newButtonLogic.trim());

fs.writeFileSync('js/components.js', code);
console.log('Patched successfully');
