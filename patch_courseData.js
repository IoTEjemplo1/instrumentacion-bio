const fs = require('fs');
let code = fs.readFileSync('js/courseData.js', 'utf8');

// 1. Add image and button to Oscilloscope card
const osciloscopioCardEnd = `
                    <li><strong>Trigger (Disparo):</strong> Sincroniza el barrido horizontal para estabilizar señales periódicas repetitivas en la pantalla.</li>
                  </ul>
                </div>
              </div>`;

const osciloscopioCardReplacement = `
                    <li><strong>Trigger (Disparo):</strong> Sincroniza el barrido horizontal para estabilizar señales periódicas repetitivas en la pantalla.</li>
                  </ul>
                  <div class="mb-3 mt-3 text-center" style="border-radius: var(--radius-sm); overflow: hidden; border: 1px solid var(--border-color); background-color: #0b132b;">
                    <img src="./public/osciloscopio.jpg" alt="Osciloscopio Digital" class="img-fluid" style="max-height: 200px; object-fit: contain; padding: 5px;">
                  </div>
                  <div class="mt-4 text-center">
                    <button id="btn-activate-osc-activity" class="btn btn-sm fw-bold px-3 py-2 shadow-sm w-100" style="background-color: #3b82f6; color: #fff; border: none; border-radius: var(--radius-sm); transition: transform 0.2s;">
                      📊 Simulador: Osciloscopio Digital
                    </button>
                  </div>
                </div>
              </div>`;

code = code.replace(osciloscopioCardEnd.trim(), osciloscopioCardReplacement.trim());

// 2. Add new interactive activity root just before MODAL DE DESCRIPCIÓN TÉCNICA
const modalStart = `<!-- MODAL DE DESCRIPCIÓN TÉCNICA -->`;

const newActivityHTML = `
            <!-- ACTIVIDAD INTERACTIVA DEL OSCILOSCOPIO -->
            <div class="card p-4 border border-primary mb-4 bg-dark-card shadow d-none" id="oscilloscope-interactive-activity-root">
              <h3 class="h4 text-primary fw-bold mb-3 text-center" style="font-family: var(--font-title);">🔬 Práctica Interactiva: Osciloscopio Agilent DSO-X 2002A</h3>
              <p class="small text-secondary mb-4 text-center">
                Domina el funcionamiento físico del <strong>Osciloscopio Agilent DSO-X 2002A</strong>. Completa las 3 fases formativas.
              </p>

              <!-- Navegación de Fases e Info General -->
              <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4 p-2 rounded" style="background-color: var(--bg-secondary); border: 1px solid var(--border-color);">
                <div class="d-flex align-items-center gap-2">
                  <span class="badge bg-primary fs-7" id="osc-active-phase-badge" style="font-size: 0.75rem;">Fase 1 de 3</span>
                  <strong class="text-light-theme-adjust small" id="osc-active-phase-title" style="color: var(--text-primary);">Reconocimiento de Componentes</strong>
                </div>
                <div class="d-flex align-items-center gap-3">
                  <span class="small text-secondary fw-semibold">🎯 Aciertos: <span class="text-primary fw-bold" id="osc-score-counter">0</span></span>
                  <button class="btn btn-sm btn-outline px-3 py-1" id="osc-hint-button" style="font-size: 0.75rem;">💡 Ver Pista</button>
                </div>
              </div>

              <!-- Barra de Progreso General -->
              <div class="mb-4">
                <div class="d-flex justify-content-between mb-1">
                  <span class="small text-secondary fw-semibold">Progreso de la actividad</span>
                  <span class="small text-primary fw-bold" id="osc-progress-percent">0%</span>
                </div>
                <div class="progress" style="height: 10px; background-color: var(--border-color); border-radius: 5px; overflow: hidden;">
                  <div class="progress-bar bg-primary progress-bar-striped progress-bar-animated" id="osc-activity-progress-bar" role="progressbar" style="width: 0%; transition: width 0.4s ease;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <!-- CONTENEDOR PRINCIPAL DEL JUEGO -->
              <div class="row g-4 position-relative">
                
                <!-- Panel Lateral Izquierdo -->
                <div class="col-12 col-lg-4 d-flex flex-column gap-3" id="osc-left-control-panel">
                  
                  <div class="fase-container d-flex flex-column gap-2" id="osc-phase-1-cards-container">
                    <div class="alert alert-info py-2 px-3 small border-0 mb-2" style="background-color: rgba(59, 130, 246, 0.1); color: var(--text-primary); font-size: 0.8rem;">
                      💡 <strong>¿Cómo jugar?</strong> Arrastra las tarjetas hacia los marcadores circulares del osciloscopio.
                    </div>
                    <div class="d-flex flex-column gap-2" id="osc-draggable-cards-bank" style="min-height: 200px; padding: 5px; border-radius: var(--radius-sm); border: 1px dashed var(--border-color); background-color: rgba(0,0,0,0.15);">
                      <!-- Se inyectará dinámicamente -->
                    </div>
                  </div>

                  <div class="fase-container d-none flex-column gap-3" id="osc-phase-2-trivia-container"></div>
                  <div class="fase-container d-none flex-column gap-3" id="osc-phase-3-challenge-container"></div>
                </div>

                <!-- Panel Derecho: Imagen y Hotspots -->
                <div class="col-12 col-lg-8">
                  <div class="position-relative w-100 rounded overflow-hidden shadow-lg" id="osc-image-hotspots-wrapper" style="background-color: #0b0f19; border: 1px solid var(--border-color); min-height: 200px;">
                    <img src="./public/osciloscopio.jpg" alt="Osciloscopio Agilent" class="img-fluid w-100" style="display: block; pointer-events: none; user-select: none; max-width: 100%; height: auto;">
                    <div class="absolute-fill" id="osc-hotspots-overlay-container" style="position: absolute; top:0; left:0; right:0; bottom:0; width:100%; height:100%;"></div>
                  </div>
                </div>
              </div>
            </div>

            `;

code = code.replace(modalStart, newActivityHTML + modalStart);

fs.writeFileSync('js/courseData.js', code);
console.log('courseData patched successfully');
