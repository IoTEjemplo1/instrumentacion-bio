const fs = require('fs');

let code = fs.readFileSync('js/components.js', 'utf8');
const oscActivityCode = fs.readFileSync('osc_activity.js', 'utf8');

// Append function if not already there
if (!code.includes('function initOscilloscopeActivity(onAwardXp)')) {
  code += '\n' + oscActivityCode + '\n';
}

// Now patch the button logic in renderCourseContentView
const oldButtonLogic = `
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

const newButtonLogic = `
            const activateBtn = document.getElementById('btn-activate-activity');
            const activityRoot = document.getElementById('afg1022-interactive-activity-root');
            const psActivateBtn = document.getElementById('btn-activate-ps-activity');
            const psActivityRoot = document.getElementById('power-supply-interactive-activity-root');
            const oscActivateBtn = document.getElementById('btn-activate-osc-activity');
            const oscActivityRoot = document.getElementById('oscilloscope-interactive-activity-root');

            const hideAllActivities = () => {
              if (activityRoot) activityRoot.classList.add('d-none');
              if (activateBtn) activateBtn.parentElement.classList.remove('d-none');
              
              if (psActivityRoot) psActivityRoot.classList.add('d-none');
              if (psActivateBtn) psActivateBtn.parentElement.classList.remove('d-none');

              if (oscActivityRoot) oscActivityRoot.classList.add('d-none');
              if (oscActivateBtn) oscActivateBtn.parentElement.classList.remove('d-none');
            };

            if (activateBtn && activityRoot) {
              activateBtn.addEventListener('click', () => {
                hideAllActivities();
                activityRoot.classList.remove('d-none');
                activateBtn.parentElement.classList.add('d-none');
                initGeneratorActivity(onAwardXp);
                setTimeout(() => activityRoot.scrollIntoView({ behavior: 'smooth' }), 100);
              });
            }

            if (psActivateBtn && psActivityRoot) {
              psActivateBtn.addEventListener('click', () => {
                hideAllActivities();
                psActivityRoot.classList.remove('d-none');
                psActivateBtn.parentElement.classList.add('d-none');
                initPowerSupplyActivity(onAwardXp);
                setTimeout(() => psActivityRoot.scrollIntoView({ behavior: 'smooth' }), 100);
              });
            }

            if (oscActivateBtn && oscActivityRoot) {
              oscActivateBtn.addEventListener('click', () => {
                hideAllActivities();
                oscActivityRoot.classList.remove('d-none');
                oscActivateBtn.parentElement.classList.add('d-none');
                initOscilloscopeActivity(onAwardXp);
                setTimeout(() => oscActivityRoot.scrollIntoView({ behavior: 'smooth' }), 100);
              });
            }
`;

if (code.includes(oldButtonLogic.trim())) {
  code = code.replace(oldButtonLogic.trim(), newButtonLogic.trim());
} else {
  console.log("Could not find the exact old button logic to replace!");
}

fs.writeFileSync('js/components.js', code);
console.log('components.js patched for oscilloscope');
