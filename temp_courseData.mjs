/**
 * @file courseData.js
 * @description Base de datos estructurada con el contenido académico del curso Bioinstrumentación.
 * Organiza las 13 clases del plan de estudios real distribuidas en los 3 Cortes (módulos),
 * incluyendo sus recursos físicos (PDF, PPTX, DOCX, INO) y preguntas de autoevaluación.
 * @author Antigravity Pair Programmer
 */

/**
 * Estructura de datos que representa el plan de estudios del curso de Bioinstrumentación.
 * Contiene información de los módulos, clases, recursos asociados, laboratorios y cuestionarios.
 */
export const courseData = {
  courseTitle: "Bioinstrumentación",
  university: "Pontificia Universidad Javeriana",
  program: "Ingeniería Biomédica",
  academicTerm: "2026-1",
  stats: {
    modules: 3,
    topics: 13,
    labs: 11,
    datasets: 5,
    estimatedHours: 64
  },
  professor: {
    name: "Dr. Pedro Antonio",
    title: "Profesor Asociado",
    department: "Departamento de Ingeniería Biomédica",
    email: "pedro.antonio@javeriana.edu.co",
    office: "Edificio José Gabriel Maldonado, S.J. - Piso 4",
    bio: "Ingeniero Biomédico con doctorado en Ingeniería y especialización en el diseño de hardware médico de bajo consumo, IoT médico y procesamiento digital de señales en tiempo real.",
    researchLines: [
      "Sistemas Embebidos para Dispositivos Médicos (IoMT)",
      "Clasificación de Señales Bioeléctricas mediante TinyML",
      "Seguridad Eléctrica y Compatibilidad Electromagnética en Hospitales"
    ]
  },
  modules: [
    {
      id: 1,
      title: "Módulo I: Primer Corte - Fundamentos y Filtrado Analógico",
      description: "Fundamentos de las señales biomédicas, teoría de medición, y el diseño de filtros analógicos activos y pasivos para acondicionamiento primario de señales.",
      topics: [
        {
          id: "clase-01",
          number: 1,
          title: "Fundamentos de Señales y Bioinstrumentación",
          duration: "4 horas",
          difficulty: "Básico",
          objectives: [
            "Definir el diagrama de bloques general de un sistema de bioinstrumentación.",
            "Comprender el origen físico y fisiológico de las señales biomédicas principales (ECG, EMG, EEG).",
            "Identificar las características fundamentales de frecuencia y amplitud de los biopotenciales."
          ],
          summary: "Esta clase introduce los conceptos clave de la instrumentación biomédica, definiendo los sensores, los transductores y las etapas de acondicionamiento analógico de señales fisiológicas de origen celular y sistémico.",
          content: `
            <h3>Introducción a los Sistemas de Instrumentación Médica</h3>
            <p>Un sistema de bioinstrumentación es el conjunto de dispositivos diseñados para medir y procesar variables fisiológicas del cuerpo humano. A diferencia de la instrumentación industrial tradicional, los sistemas médicos enfrentan retos únicos como la variabilidad entre pacientes, la naturaleza ruidosa de los entornos clínicos y, sobre todo, la <strong>seguridad del paciente</strong>.</p>
            
            <div class="callout clinical">
              <div class="callout-icon">🫀</div>
              <div class="callout-content">
                <div class="callout-title">El Desafío Fisiológico</div>
                <p>Las señales biológicas como el ECG o el EEG presentan amplitudes del orden de los microvoltios (µV) o milivoltios (mV) con una impedancia de fuente extremadamente alta, lo que las hace propensas al ruido de 60Hz inducido por las redes de energía hospitalarias.</p>
              </div>
            </div>
            
            <h3>Diagrama de Bloques General</h3>
            <p>Cualquier instrumento médico moderno contiene al menos los siguientes elementos:</p>
            <ol>
              <li><strong>Mensurando:</strong> La variable física o química que se desea medir (ej. presión arterial, concentración de O2, ECG).</li>
              <li><strong>Transductor / Sensor:</strong> Convierte la variable fisiológica en una señal eléctrica (ej. electrodos de Ag/AgCl, termistores, sensores ópticos).</li>
              <li><strong>Acondicionador de Señales:</strong> Amplifica y filtra la señal analógica para eliminar el ruido y adaptar su rango (ej. amplificador de instrumentación, filtros activos).</li>
              <li><strong>Conversor Analógico a Digital (ADC):</strong> Digitaliza la señal acondicionada para su procesamiento (ej. ADC interno de microcontroladores).</li>
              <li><strong>Procesamiento y Visualización:</strong> Microcontroladores, DSPs o computadoras donde se visualiza o procesa digitalmente el dato (ej. Arduino, ESP32, Python, MATLAB).</li>
            </ol>
          `,
          presentation: "https://docs.google.com/presentation/d/e/2PACX-1vTPSjlIpM2i-PeWkrazo58mfdP3lBru4_7OK4XSdA1LAGj5_xwNmwEMz9AHiW9Pbg/pubembed?start=false&loop=false&delayms=3000",
          simulator: [],
          labs: [
            {
              title: "Práctica Corta: Comportamiento de Señales",
              guide: "Lab comportamiento de una señal en.txt",
              description: "Medición básica y caracterización de impedancia de entrada yoffsets analógicos."
            }
          ],
          labContent: `
            <h3 class="h5 text-primary fw-bold mb-3">🔬 Reconocimiento de Equipos de Laboratorio</h3>
            <p class="small text-secondary mb-4">
              Antes de iniciar con el diseño de circuitos y la adquisición de señales de origen biológico, es fundamental dominar el uso de los instrumentos básicos de medición y generación en el laboratorio. A continuación, se presenta una guía detallada de los equipos principales y sus parámetros críticos.
            </p>

            <div class="row g-4 mb-4">
              <!-- Generador de Funciones -->
              <div class="col-12 col-lg-6">
                <div class="card h-100 p-3 bg-dark-card border border-indigo">
                  <div class="d-flex align-items-center gap-2 mb-2">
                    <span class="fs-4">⚡</span>
                    <h4 class="h6 m-0 fw-bold text-primary">Generador de Funciones</h4>
                  </div>
                  <p class="small text-secondary mb-3">
                    Permite generar voltajes variables en el tiempo con formas de onda predefinidas (senoidal, cuadrada, rampa, pulso, ruido) o arbitrarias para inyectar estímulos a los circuitos de acondicionamiento.
                  </p>
                  <div class="mb-3 text-center" style="border-radius: var(--radius-sm); overflow: hidden; border: 1px solid var(--border-color); background-color: #0b132b;">
                    <img src="./public/generador_funciones.png?v=2" alt="Generador de Funciones Tektronix AFG1022" class="img-fluid" style="max-height: 200px; object-fit: contain; padding: 5px;">
                  </div>
                  <ul class="small text-secondary ps-3 mb-0">
                    <li><strong>Canales:</strong> Posee dos canales de salida independientes (<code>Out 1</code> y <code>Out 2</code>) con conectores BNC. Se activan con los botones iluminados <code>On/Off</code>.</li>
                    <li><strong>Frecuencia y Amplitud:</strong> Permite establecer la frecuencia de la señal (hasta 25 MHz) y su amplitud (desde mVpp hasta Vpp).</li>
                    <li><strong>Offset DC:</strong> Añade un nivel continuo de voltaje a la señal alterna.</li>
                    <li><strong>Botones de Función:</strong> Permiten cambiar rápidamente entre tipos de onda: <code>Sine</code>, <code>Square</code>, <code>Ramp</code>, <code>Pulse</code>, <code>Arb</code> y <code>Noise</code>.</li>
                  </ul>
                  <div class="mt-4 text-center">
                    <button id="btn-activate-activity" class="btn btn-sm fw-bold px-3 py-2 shadow-sm w-100" style="background-color: var(--color-secondary); color: #fff; border: none; border-radius: var(--radius-sm); transition: transform 0.2s;">
                      💡 Actividad / prueba tus conocimientos
                    </button>
                  </div>
                </div>
              </div>

              <!-- Osciloscopio -->
              <div class="col-12 col-lg-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <div class="d-flex align-items-center gap-2 mb-2">
                    <span class="fs-4">📊</span>
                    <h4 class="h6 m-0 fw-bold text-primary">Osciloscopio Digital</h4>
                  </div>
                  <p class="small text-secondary mb-3">
                    Es el instrumento de visualización principal. Permite graficar el voltaje en función del tiempo para analizar la forma, amplitud, período, desfase y frecuencia de señales bioeléctricas y de acondicionamiento.
                  </p>
                  <ul class="small text-secondary ps-3 mb-0">
                    <li><strong>Escala Vertical (Volts/Div):</strong> Controla la escala de amplitud. En bioinstrumentación, se suele configurar en rangos muy sensibles (mV/div) debido a la baja amplitud de las señales biológicas.</li>
                    <li><strong>Escala Horizontal (Sec/Div):</strong> Controla la ventana temporal en la pantalla.</li>
                    <li><strong>Acoplamiento (AC, DC, GND):</strong> 
                      <br>• <code>DC</code>: Muestra la señal completa incluyendo su offset.
                      <br>• <code>AC</code>: Filtra la componente continua, ideal para observar señales biológicas pequeñas montadas sobre offsets grandes.
                      <br>• <code>GND</code>: Desconecta la señal de entrada y muestra la referencia de tierra.
                    </li>
                    <li><strong>Trigger (Disparo):</strong> Sincroniza el barrido horizontal para estabilizar señales periódicas repetitivas en la pantalla.</li>
                  </ul>
                  <div class="mb-3 mt-3 text-center" style="border-radius: var(--radius-sm); overflow: hidden; border: 1px solid var(--border-color); background-color: #0b132b;">
                    <img src="./public/osciloscopio.png" alt="Osciloscopio Digital" class="img-fluid" style="max-height: 200px; object-fit: contain; padding: 5px;">
                  </div>
                  <div class="mt-4 text-center">
                    <button id="btn-activate-osc-activity" class="btn btn-sm fw-bold px-3 py-2 shadow-sm w-100" style="background-color: #3b82f6; color: #fff; border: none; border-radius: var(--radius-sm); transition: transform 0.2s;">
                      📊 Simulador: Osciloscopio Digital
                    </button>
                  </div>
                </div>
              </div>

              <!-- Sección: Fuente de Alimentación -->
            <div class="mb-5 d-flex align-items-center gap-2">
              <span class="fs-4">🔋</span>
              <h2 class="h4 text-primary fw-bold mb-0" id="fuente-de-alimentacion" style="font-family: var(--font-title);">Fuente de Alimentación</h2>
            </div>

            <div class="card p-4 border-0 mb-4 bg-dark-card shadow">
              <div class="mb-3 text-center">
                <img src="./public/fuente_poder.png" alt="Fuente de Alimentación Dual" class="img-fluid rounded border border-secondary shadow-sm" style="max-height: 400px; max-width: 100%;">
              </div>
              
              <!-- Botón para iniciar actividad interactiva -->
              <div class="mt-4 text-center">
                <p class="text-secondary small mb-3">
                  Aprende a configurar el voltaje, limitar la corriente y crear una fuente dual (simétrica) usando los canales Master y Slave.
                </p>
                <div class="d-flex justify-content-center">
                  <div style="max-width: 300px; width: 100%;">
                    <button id="btn-activate-ps-activity" class="btn btn-sm fw-bold px-3 py-2 shadow-sm w-100" style="background-color: #10b981; color: #fff; border: none; border-radius: var(--radius-sm); transition: transform 0.2s;">
                      ⚡ Iniciar Actividad Interactiva
                    </button>
                  </div>
                </div>
              </div>
            </div> <!-- Cierre de row anterior si existiera (ajuste seguro) -->

            <!-- Sección: Multímetro Digital -->
            <div class="mb-5 d-flex align-items-center gap-2 mt-5">
              <span class="fs-4">🌡️</span>
              <h2 class="h4 text-primary fw-bold mb-0" id="multimetro-digital" style="font-family: var(--font-title);">Multímetro Digital (DMM)</h2>
            </div>

            <div class="card p-4 border-0 mb-4 bg-dark-card shadow">
              <div class="mb-3 text-center">
                <img src="./public/Multimetro.jpg" alt="Multímetro Digital Agilent 34450A" class="img-fluid rounded border border-secondary shadow-sm" style="max-height: 400px; max-width: 100%;">
              </div>
              
              <!-- Botón para iniciar actividad interactiva -->
              <div class="mt-4 text-center">
                <p class="text-secondary small mb-3">
                  Instrumento multipropósito para verificar y diagnosticar el estado eléctrico de un circuito. Aprende a conectarlo correctamente para medir voltaje, corriente y resistencia.
                </p>
                <div class="d-flex justify-content-center">
                  <div style="max-width: 300px; width: 100%;">
                    <button id="btn-activate-dmm-activity" class="btn btn-sm fw-bold px-3 py-2 shadow-sm w-100" style="background-color: #f59e0b; color: #fff; border: none; border-radius: var(--radius-sm); transition: transform 0.2s;">
                      ⚡ Iniciar Actividad Interactiva
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="callout warning mt-2 mb-4">
              <div class="callout-icon">⚠️</div>
              <div class="callout-content">
                <div class="callout-title">Regla de Oro en Bioinstrumentación</div>
                <p>Antes de encender la fuente de voltaje, verifica la continuidad entre las líneas de alimentación (+Vcc y GND, -Vee y GND) con el multímetro en modo continuidad para descartar cortocircuitos que puedan dañar los integrados de amplificación.</p>
              </div>
            </div>

            <!-- ACTIVIDAD INTERACTIVA DE LA FUENTE DE PODER -->
            <div class="card p-4 border border-success mb-4 bg-dark-card shadow d-none" id="power-supply-interactive-activity-root">
              <h3 class="h4 text-success fw-bold mb-3 text-center" style="font-family: var(--font-title);">🔬 Práctica Interactiva: PeakTech 6145</h3>
              <p class="small text-secondary mb-4 text-center">
                Domina el funcionamiento físico de la <strong>Fuente Dual PeakTech 6145</strong>. Completa las 3 fases formativas.
              </p>

              <!-- Navegación de Fases e Info General -->
              <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4 p-2 rounded" style="background-color: var(--bg-secondary); border: 1px solid var(--border-color);">
                <div class="d-flex align-items-center gap-2">
                  <span class="badge bg-success fs-7" id="ps-active-phase-badge" style="font-size: 0.75rem;">Fase 1 de 3</span>
                  <strong class="text-light-theme-adjust small" id="ps-active-phase-title" style="color: var(--text-primary);">Reconocimiento por Hotspots</strong>
                </div>
                <div class="d-flex align-items-center gap-3">
                  <span class="small text-secondary fw-semibold">🎯 Aciertos: <span class="text-success fw-bold" id="ps-score-counter">0</span></span>
                  <button class="btn btn-sm btn-outline px-3 py-1" id="ps-hint-button" style="font-size: 0.75rem;">💡 Ver Pista</button>
                </div>
              </div>

              <!-- Barra de Progreso General -->
              <div class="mb-4">
                <div class="d-flex justify-content-between mb-1">
                  <span class="small text-secondary fw-semibold">Progreso de la actividad</span>
                  <span class="small text-success fw-bold" id="ps-progress-percent">0%</span>
                </div>
                <div class="progress" style="height: 10px; background-color: var(--border-color); border-radius: 5px; overflow: hidden;">
                  <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" id="ps-activity-progress-bar" role="progressbar" style="width: 0%; transition: width 0.4s ease;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <!-- CONTENEDOR PRINCIPAL DEL JUEGO -->
              <div class="row g-4 position-relative">
                
                <!-- Panel Lateral Izquierdo -->
                <div class="col-12 col-lg-4 d-flex flex-column gap-3" id="ps-left-control-panel">
                  
                  <div class="fase-container d-flex flex-column h-100" id="ps-phase-1-cards-container">
                    <div class="bg-white rounded-3 shadow-sm border overflow-hidden d-flex flex-column h-100" style="border-color: #e2e8f0;">
                      <div class="p-3 text-white fw-bold d-flex align-items-center gap-2" style="background-color: #1e3a8a; font-size: 0.9rem;">
                        <span>🧩</span> TARJETAS DRAG & DROP
                      </div>
                      <div class="p-3 flex-grow-1" style="background-color: #f8fafc;">
                        <p class="small text-muted mb-3" style="font-size: 0.75rem;">
                          Arrastra cada tarjeta hacia su marcador circular correspondiente en la fuente de alimentación.
                        </p>
                        <div class="d-flex flex-column gap-2" id="ps-draggable-cards-bank">
                          <!-- Se inyectará dinámicamente -->
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="fase-container d-none flex-column gap-3" id="ps-phase-2-trivia-container"></div>
                  <div class="fase-container d-none flex-column gap-3" id="ps-phase-3-challenge-container"></div>
                </div>

                <!-- Panel Derecho: Imagen y Hotspots -->
                <div class="col-12 col-lg-8">
                  <div class="position-relative w-100 rounded overflow-hidden shadow-lg" id="ps-image-hotspots-wrapper" style="background-color: #0b0f19; border: 1px solid var(--border-color); min-height: 200px;">
                    <img src="./public/fuente_poder.png" alt="Fuente PeakTech 6145" class="img-fluid w-100" style="display: block; pointer-events: none; user-select: none; max-width: 100%; height: auto;">
                    <div class="absolute-fill" id="ps-hotspots-overlay-container" style="position: absolute; top:0; left:0; right:0; bottom:0; width:100%; height:100%;"></div>
                  </div>
                </div>
              </div>
            </div>

            
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
                    <img src="./public/osciloscopio.png" alt="Osciloscopio Agilent" class="img-fluid w-100" style="display: block; pointer-events: none; user-select: none; max-width: 100%; height: auto;">
                    <div class="absolute-fill" id="osc-hotspots-overlay-container" style="position: absolute; top:0; left:0; right:0; bottom:0; width:100%; height:100%;"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- MODAL DE DESCRIPCIÓN TÉCNICA -->
            <div class="custom-modal-backdrop d-none" id="ps-info-modal-backdrop" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.75); z-index: 9998; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(5px);">
              <div class="card p-4 bg-dark shadow-2xl border animate-fade-in" id="ps-info-modal-content" style="max-width: 500px; width: 90%; z-index: 9999; border-radius: var(--radius-md); border-color: #10b981; background-color: #0b0f19 !important;">
                <div class="d-flex align-items-center gap-2 mb-3 text-success">
                  <span class="fs-4" id="ps-info-modal-icon">✅</span>
                  <h4 class="h5 m-0 fw-bold" id="ps-info-modal-title" style="color: #10b981;">¡Emparejamiento Correcto!</h4>
                </div>
                <div id="ps-info-modal-body" class="small text-secondary mb-4" style="line-height: 1.5; color: #94a3b8;"></div>
                <button class="btn btn-success w-100 py-2 fw-semibold" id="ps-info-modal-close-btn" style="background-color: #10b981; border-color: #10b981; color: white;">Continuar</button>
              </div>
            </div>

            <!-- ACTIVIDAD INTERACTIVA DEL GENERADOR -->
            <div class="card p-4 border border-indigo mb-4 bg-dark-card shadow d-none" id="afg1022-interactive-activity-root">
              <h3 class="h4 text-primary fw-bold mb-3 text-center" style="font-family: var(--font-title);">🔬 Práctica Interactiva: Uso del Generador de Funciones AFG1022</h3>
              <p class="small text-secondary mb-4 text-center">
                Domina el funcionamiento físico del <strong>Tektronix AFG1022</strong>. Completa las 3 fases formativas para desbloquear tus logros y XP de bioinstrumentación básica.
              </p>

              <!-- Navegación de Fases e Info General -->
              <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4 p-2 rounded" style="background-color: var(--bg-secondary); border: 1px solid var(--border-color);">
                <div class="d-flex align-items-center gap-2">
                  <span class="badge badge-gold fs-7" id="active-phase-badge" style="font-size: 0.75rem;">Fase 1 de 3</span>
                  <strong class="text-light-theme-adjust small" id="active-phase-title" style="color: var(--text-primary);">Reconocimiento por Hotspots</strong>
                </div>
                <div class="d-flex align-items-center gap-3">
                  <span class="small text-secondary fw-semibold">🎯 Aciertos: <span class="text-primary fw-bold" id="score-counter">0</span></span>
                  <button class="btn btn-sm btn-outline px-3 py-1" id="hint-button" style="font-size: 0.75rem;">💡 Ver Pista</button>
                </div>
              </div>

              <!-- Barra de Progreso General -->
              <div class="mb-4">
                <div class="d-flex justify-content-between mb-1">
                  <span class="small text-secondary fw-semibold">Progreso de la actividad</span>
                  <span class="small text-primary fw-bold" id="progress-percent">0%</span>
                </div>
                <div class="progress" style="height: 10px; background-color: var(--border-color); border-radius: 5px; overflow: hidden;">
                  <div class="progress-bar bg-primary progress-bar-striped progress-bar-animated" id="activity-progress-bar" role="progressbar" style="width: 0%; transition: width 0.4s ease;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <!-- CONTENEDOR PRINCIPAL DEL JUEGO -->
              <div class="row g-4 position-relative">
                
                <!-- Panel Lateral Izquierdo (Mazo de Tarjetas / Trivia / Guía de Reto) -->
                <div class="col-12 col-lg-4 d-flex flex-column gap-3" id="left-control-panel">
                  
                  <!-- Contenedor Fase 1: Tarjetas Arrastrables -->
                  <div class="fase-container d-flex flex-column h-100" id="phase-1-cards-container">
                    <div class="card h-100 border-0 shadow-sm" style="border-radius: 8px; overflow: hidden; background-color: #ffffff;">
                      <div class="card-header text-white fw-bold text-center py-2" style="background-color: #0b1c3c; font-size: 0.85rem; letter-spacing: 0.5px;">
                        TARJETAS DRAG & DROP
                      </div>
                      <div class="card-body p-2 d-flex flex-column gap-2" id="draggable-cards-bank" style="min-height: 200px;">
                        <!-- Se inyectará dinámicamente -->
                      </div>
                    </div>
                  </div>

                  <!-- Contenedor Fase 2: Trivia de Opción Múltiple -->
                  <div class="fase-container d-none flex-column gap-3" id="phase-2-trivia-container">
                    <!-- Se inyectará dinámicamente -->
                  </div>

                  <!-- Contenedor Fase 3: Instrucciones del Reto Físico-Virtual -->
                  <div class="fase-container d-none flex-column gap-3" id="phase-3-challenge-container">
                    <!-- Se inyectará dinámicamente -->
                  </div>

                </div>

                <!-- Panel Derecho: Imagen del Generador y Hotspots -->
                <div class="col-12 col-lg-8">
                  <div class="position-relative w-100 rounded overflow-hidden shadow-lg" id="image-hotspots-wrapper" style="background-color: #0b0f19; border: 1px solid var(--border-color); min-height: 200px;">
                    
                    <!-- Imagen Principal del Generador -->
                    <img src="./public/generador_funciones.png?v=2" alt="Generador Tektronix AFG1022" class="img-fluid w-100" style="display: block; pointer-events: none; user-select: none; max-width: 100%; height: auto;">

                    <!-- Capa de Hotspots (Se inyectará dinámicamente) -->
                    <div class="absolute-fill" id="hotspots-overlay-container" style="position: absolute; top:0; left:0; right:0; bottom:0; width:100%; height:100%;">
                      <!-- Hotspots dinámicos -->
                    </div>

                    <!-- Overlay de la Pantalla LCD Virtual (Solo para Fase 3) -->
                    <div class="d-none" id="lcd-virtual-screen" style="position: absolute; top: 22%; left: 9.5%; width: 40.5%; height: 55%; background-color: #020b12; color: #64ffda; font-family: monospace; padding: 8px; box-sizing: border-box; overflow: hidden; border: 1px solid #10b981; box-shadow: inset 0 0 10px rgba(16,185,129,0.3); z-index: 10; font-size: 0.72rem; border-radius: 2px;">
                      <!-- Se inyectará dinámicamente en components.js -->
                    </div>

                  </div>
                </div>

              </div>
            </div>

            <!-- MODAL DE DESCRIPCIÓN TÉCNICA -->
            <div class="custom-modal-backdrop d-none" id="info-modal-backdrop" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.75); z-index: 9998; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(5px);">
              <div class="card p-4 bg-dark shadow-2xl border animate-fade-in" id="info-modal-content" style="max-width: 500px; width: 90%; z-index: 9999; border-radius: var(--radius-md); border-color: #10b981; background-color: #0b0f19 !important;">
                <div class="d-flex align-items-center gap-2 mb-3 text-success">
                  <span class="fs-4" id="info-modal-icon">✅</span>
                  <h4 class="h5 m-0 fw-bold" id="info-modal-title" style="color: #10b981;">¡Emparejamiento Correcto!</h4>
                </div>
                <div id="info-modal-body" class="small text-secondary mb-4" style="line-height: 1.5; color: #94a3b8;">
                  <!-- Inyectado dinámicamente -->
                </div>
                <button class="btn btn-success w-100 py-2 fw-semibold" id="info-modal-close-btn" style="background-color: #10b981; border-color: #10b981; color: white;">Continuar</button>
              </div>
            </div>
            <!-- ACTIVIDAD INTERACTIVA DEL MULTÍMETRO DIGITAL -->
            <div class="card p-4 border border-warning mb-4 bg-dark-card shadow d-none" id="dmm-interactive-activity-root">
              <h3 class="h4 text-warning fw-bold mb-3 text-center" style="font-family: var(--font-title);">🔬 Práctica Interactiva: Multímetro Agilent 34450A</h3>
              <p class="small text-secondary mb-4 text-center">
                Domina el uso del <strong>Multímetro Digital Agilent 34450A</strong>. Completa las 3 fases formativas.
              </p>

              <!-- Navegación de Fases e Info General -->
              <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4 p-2 rounded" style="background-color: var(--bg-secondary); border: 1px solid var(--border-color);">
                <div class="d-flex align-items-center gap-2">
                  <span class="badge bg-warning text-dark fs-7" id="dmm-active-phase-badge" style="font-size: 0.75rem;">Fase 1 de 3</span>
                  <strong class="text-light-theme-adjust small" id="dmm-active-phase-title" style="color: var(--text-primary);">Reconocimiento por Hotspots</strong>
                </div>
                <div class="d-flex align-items-center gap-3">
                  <span class="small text-secondary fw-semibold">🎯 Aciertos: <span class="text-warning fw-bold" id="dmm-score-counter">0</span></span>
                  <button class="btn btn-sm btn-outline px-3 py-1" id="dmm-hint-button" style="font-size: 0.75rem;">💡 Ver Pista</button>
                </div>
              </div>

              <!-- Barra de Progreso General -->
              <div class="mb-4">
                <div class="d-flex justify-content-between mb-1">
                  <span class="small text-secondary fw-semibold">Progreso de la actividad</span>
                  <span class="small text-warning fw-bold" id="dmm-progress-percent">0%</span>
                </div>
                <div class="progress" style="height: 10px; background-color: var(--border-color); border-radius: 5px; overflow: hidden;">
                  <div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" id="dmm-activity-progress-bar" role="progressbar" style="width: 0%; transition: width 0.4s ease;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <!-- CONTENEDOR PRINCIPAL DEL JUEGO -->
              <div class="row g-4 position-relative">
                
                <!-- Panel Lateral Izquierdo -->
                <div class="col-12 col-lg-4 d-flex flex-column gap-3" id="dmm-left-control-panel">
                  
                  <div class="fase-container d-flex flex-column h-100" id="dmm-phase-1-cards-container">
                    <div class="bg-white rounded-3 shadow-sm border overflow-hidden d-flex flex-column h-100" style="border-color: #e2e8f0;">
                      <div class="p-3 text-white fw-bold d-flex align-items-center gap-2" style="background-color: #1e3a8a; font-size: 0.9rem;">
                        <span>🧩</span> TARJETAS DRAG & DROP
                      </div>
                      <div class="p-3 flex-grow-1" style="background-color: #f8fafc;">
                        <p class="small text-muted mb-3" style="font-size: 0.75rem;">
                          Arrastra cada tarjeta hacia su marcador circular correspondiente en el multímetro.
                        </p>
                        <div class="d-flex flex-column gap-2" id="dmm-draggable-cards-bank">
                          <!-- Se inyectará dinámicamente -->
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="fase-container d-none flex-column gap-3" id="dmm-phase-2-trivia-container"></div>
                  <div class="fase-container d-none flex-column gap-3" id="dmm-phase-3-challenge-container"></div>
                </div>

                <!-- Panel Derecho: Imagen y Hotspots -->
                <div class="col-12 col-lg-8">
                  <div class="position-relative w-100 rounded overflow-hidden shadow-lg" id="dmm-image-hotspots-wrapper" style="background-color: #0b0f19; border: 1px solid var(--border-color); min-height: 200px;">
                    <img src="./public/Multimetro.jpg" alt="Multímetro Agilent 34450A" class="img-fluid w-100" style="display: block; pointer-events: none; user-select: none; max-width: 100%; height: auto;">
                    <div class="absolute-fill" id="dmm-hotspots-overlay-container" style="position: absolute; top:0; left:0; right:0; bottom:0; width:100%; height:100%;"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- MODAL DE DESCRIPCIÓN TÉCNICA (DMM) -->
            <div class="custom-modal-backdrop d-none" id="dmm-info-modal-backdrop" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.75); z-index: 9998; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(5px);">
              <div class="card p-4 bg-dark shadow-2xl border animate-fade-in" id="dmm-info-modal-content" style="max-width: 500px; width: 90%; z-index: 9999; border-radius: var(--radius-md); border-color: #f59e0b; background-color: #0b0f19 !important;">
                <div class="d-flex align-items-center gap-2 mb-3 text-warning">
                  <span class="fs-4" id="dmm-info-modal-icon">✅</span>
                  <h4 class="h5 m-0 fw-bold" id="dmm-info-modal-title" style="color: #f59e0b;">¡Emparejamiento Correcto!</h4>
                </div>
                <div id="dmm-info-modal-body" class="small text-secondary mb-4" style="line-height: 1.5; color: #94a3b8;"></div>
                <button class="btn btn-warning w-100 py-2 fw-semibold text-dark" id="dmm-info-modal-close-btn" style="background-color: #f59e0b; border-color: #f59e0b;">Continuar</button>
              </div>
            </div>
          `,
          resources: [
            { name: "1_Fundamentos_señales.pptx", type: "pptx", size: "6.6 MB" },
            { name: "Sílabo_Instrumentación_Biomédica2026.pdf", type: "pdf", size: "363 KB", url: "https://docs.google.com/document/d/e/2PACX-1vR3gCXpDeUzsQpPsZZH_9vyakArntiMYVz3KyO5BlNkEgwVYGgVNVYa2fPiKZ83XQ/pub?embedded=true" },
            { name: "Articulo Advanced Sensor Research.pdf", type: "pdf", size: "5.8 MB", url: "https://drive.google.com/file/d/1HxBoKDOCh7jrLv-NZs6x5PkMQUlJY9R7/view?usp=sharing" },
            { name: "Articulo IA Driven Wearable.pdf", type: "pdf", size: "4.2 MB", url: "https://drive.google.com/file/d/1cN_b2ENlJW6XqqjyAM_5VqUiCxxdEcZd/view?usp=sharing" }
          ],
          quizzes: [
            {
              question: "🧠 Reto 1. El laboratorio acaba de abrir\n\nAntes de conectar un circuito por primera vez, ¿cuál es el instrumento más adecuado para verificar que la fuente realmente entrega el voltaje esperado?",
              options: [
                "A. Osciloscopio",
                "B. Multímetro",
                "C. Analizador lógico",
                "D. Tacómetro"
              ],
              answer: 1,
              explanation: "Excelente. El multímetro es el primer instrumento que deberías utilizar para verificar voltajes, continuidad y resistencia antes de energizar un circuito."
            },
            {
              question: "🧠 Reto 2. ¿Cuál instrumento escogerías?\n\nQuieres observar la forma de una señal ECG y verificar si existe ruido eléctrico.\n\n¿Qué equipo utilizarías?",
              options: [
                "A. Generador de funciones",
                "B. Multímetro",
                "C. Osciloscopio",
                "D. Fuente DC"
              ],
              answer: 2,
              explanation: "El osciloscopio permite visualizar la señal en el tiempo, identificar interferencias y medir amplitud, frecuencia y período."
            },
            {
              question: "🧠 Reto 3. Pensando como ingeniero\n\nUna señal de temperatura corporal cambia lentamente durante varios minutos.\n\n¿Cómo clasificarías esta señal?",
              options: [
                "A. Digital",
                "B. Analógica",
                "C. Binaria",
                "D. PWM"
              ],
              answer: 1,
              explanation: "Las variables fisiológicas normalmente cambian de forma continua; por ello la mayoría de las bioseñales son inicialmente analógicas antes de ser digitalizadas."
            },
            {
              question: "🧠 Reto 4. El paciente ya está conectado\n\nUn sensor ECG entrega aproximadamente 1 mV.\n\n¿Por qué NO puede conectarse directamente a un microcontrolador?",
              options: [
                "A. Porque la señal es demasiado lenta.",
                "B. Porque primero debe amplificarse y acondicionarse.",
                "C. Porque necesita convertirse en corriente.",
                "D. Porque un microcontrolador solo mide señales digitales."
              ],
              answer: 1,
              explanation: "Antes del ADC, las bioseñales suelen requerir amplificación, filtrado y acondicionamiento para mejorar su calidad y aprovechar el rango de entrada del convertidor."
            },
            {
              question: "🧠 Reto 5. ¿Qué ocurre dentro del ADC?\n\nCuando una señal analógica entra al convertidor A/D...",
              options: [
                "A. Se transforma en una secuencia de números.",
                "B. Se convierte en corriente alterna.",
                "C. Se elimina el ruido automáticamente.",
                "D. Se vuelve una señal continua."
              ],
              answer: 0,
              explanation: "El ADC toma muestras de la señal y asigna a cada una un valor numérico para que pueda procesarse digitalmente."
            },
            {
              question: "🧠 Reto 6. ¿Cuál es la mejor explicación?\n\n¿Por qué un monitor de paciente necesita un ADC?",
              options: [
                "A. Para alimentar los sensores.",
                "B. Para convertir las señales fisiológicas en datos que pueda procesar el computador.",
                "C. Para aumentar el voltaje.",
                "D. Para disminuir el consumo eléctrico."
              ],
              answer: 1,
              explanation: "Los computadores y microcontroladores trabajan con información digital; por eso toda bioseñal analógica debe convertirse antes de ser procesada."
            },
            {
              question: "🧠 Reto 7. ¿Qué sensor elegirías?\n\nDeseas construir un dispositivo para medir la actividad eléctrica del corazón.\n\n¿Cuál es el sensor más apropiado?",
              options: [
                "A. Acelerómetro",
                "B. Electrodos ECG",
                "C. Sensor ultrasónico",
                "D. Sensor infrarrojo"
              ],
              answer: 1,
              explanation: "Los electrodos permiten captar las diferencias de potencial eléctrico generadas por la actividad cardíaca."
            },
            {
              question: "🧠 Reto 8. Más allá de la medicina\n\nDurante la presentación viste ejemplos donde las bioseñales también se utilizan en animales y agricultura.\n\n¿Cuál es la principal razón?",
              options: [
                "A. Porque las señales biológicas existen únicamente en humanos.",
                "B. Porque cualquier organismo vivo genera variables que pueden medirse y analizarse.",
                "C. Porque los sensores funcionan únicamente en animales.",
                "D. Porque los equipos médicos son más económicos."
              ],
              answer: 1,
              explanation: "La bioinstrumentación trasciende el ámbito clínico y hoy tiene aplicaciones en medicina veterinaria, agricultura de precisión, monitoreo ambiental y bienestar animal."
            },
            {
              question: "🧠 Reto 9. Piensa como diseñador\n\nSi una bioseñal tiene una amplitud de apenas 50 μV, ¿qué característica del sistema de adquisición resulta más importante?",
              options: [
                "A. El color de la pantalla.",
                "B. La sensibilidad y el bajo nivel de ruido del sistema.",
                "C. El tamaño del equipo.",
                "D. El tipo de batería."
              ],
              answer: 1,
              explanation: "Las bioseñales de muy baja amplitud requieren sistemas altamente sensibles y con excelente rechazo al ruido para obtener mediciones confiables."
            },
            {
              question: "🧠 Reto 10. La pregunta más importante de la clase\n\nCompleta correctamente el flujo de un sistema de bioinstrumentación:\n\nFenómeno fisiológico → ______ → ______ → Procesamiento → Visualización",
              options: [
                "A. Sensor → Acondicionamiento de señal",
                "B. Pantalla → Computador",
                "C. Batería → Sensor",
                "D. ADC → Paciente"
              ],
              answer: 0,
              explanation: "Todo sistema de bioinstrumentación inicia con un fenómeno biológico, que es captado por un sensor, acondicionado electrónicamente y posteriormente procesado para generar información útil."
            }
          ]
        },
        {
          id: "clase-02",
          number: 2,
          title: "Fundamentos de Medidas y Señales DC-AC",
          duration: "4 horas",
          difficulty: "Básico",
          objectives: [
            "Diferenciar componentes DC y AC de una señal eléctrica en el contexto de biopotenciales.",
            "Comprender la importancia del voltaje de modo común en biopotenciales.",
            "Evaluar el error de carga de un circuito de medición debido a la impedancia del sensor."
          ],
          summary: "Análisis técnico de las componentes continuas (DC) y alternas (AC) de las señales. Conceptos clave sobre acoplamiento, voltajes de offset en electrodos y la impedancia de entrada en amplificadores biomédicos.",
          content: `
            <h3>Componentes DC y AC en Biopotenciales</h3>
            <p>En bioinstrumentación, la señal captada a menudo posee una componente continua (DC) y una alterna (AC). El potencial de media celda del electrodo actúa como una gran batería DC (típicamente entre 200mV y 300mV), mientras que la señal de interés fisiológico (ej. el ECG de 1mV) oscila sobre esta base de corriente continua.</p>
            
            <div class="callout warning">
              <div class="callout-icon">⚠️</div>
              <div class="callout-content">
                <div class="callout-title">Saturación del Amplificador</div>
                <p>Si intentamos amplificar una señal de ECG de 1mV en conjunto con el offset DC del electrodo de 300mV usando un amplificador con ganancia G=1000, el circuito intentará entregar 300V, saturándose inmediatamente con los rieles de alimentación (+/-5V).</p>
              </div>
            </div>
            
            <h3>Impedancia de Entrada</h3>
            <p>Para evitar atenuaciones severas debido al efecto divisor de voltaje, la impedancia de entrada de la etapa amplificadora biomédica debe ser al menos 100 veces superior a la impedancia de contacto piel-electrodo (que puede rondar los 10kΩ a 100kΩ). Por esto, se emplean amplificadores de instrumentación con entradas de transistores FET de altísima impedancia (Gigaohms).</p>
          `,
          presentation: [
            "https://docs.google.com/presentation/d/e/2PACX-1vT70bnXQlJDSqC_aSBDI7a6FIuEpVdAEKXidE_q4r65m8lXKAVQRLCmfEpqnJ2wXQ/pubembed?start=false&loop=false&delayms=3000",
            "https://docs.google.com/presentation/d/e/2PACX-1vQrfEVYzjmEtIhcqPVjLK_2L8j8EuGO_6H66D45EIc_UtYaCGZty67296jVasoTFA/pubembed?start=false&loop=false&delayms=3000"
          ],
          simulator: "simulador_circuitos_led.html",
          labs: [
            {
              title: "Laboratorio 1: Fundamentos de Señales y Adquisición",
              guide: "01 Lab_Señales_Fundamentos.docx",
              description: "Práctica introductoria para el reconocimiento de señales en osciloscopio y análisis de fundamentos en el laboratorio físico.",
              url: "https://docs.google.com/document/d/e/2PACX-1vT-HdkkrFV6mO0dFiJLYpNCYvOYxARdOn-Vix3BhC3yLKjZhadqYykdAXdBHJBnqw/pub?embedded=true"
            }
          ],
          resources: [
            { name: "2_Fundamentos Señal DC-AC.pptx", type: "pptx", size: "3.2 MB" }
          ],
          quizzes: [
            {
              question: "Pregunta 1: Un sensor de presión entrega una señal continua de 2.5 V. ¿Qué representa ese valor?",
              options: [
                "A) Una corriente",
                "B) Una frecuencia",
                "C) Un nivel de voltaje constante asociado a la variable medida",
                "D) Una señal digital"
              ],
              answer: 2,
              explanation: "El voltaje continuo (DC) entregado por el sensor es la señal analógica que representa la magnitud física medida (presión) de forma constante en ese instante."
            },
            {
              question: "Pregunta 2: Durante una cirugía observas una señal ECG en el monitor. ¿Por qué el monitor necesita convertir la señal antes de procesarla?",
              options: [
                "A) Para disminuir el voltaje.",
                "B) Para transformarla en información digital que pueda analizar el sistema.",
                "C) Para cambiar la frecuencia.",
                "D) Para aumentar la corriente."
              ],
              answer: 1,
              explanation: "Los procesadores digitales y computadoras del monitor operan con datos binarios (digitales). Por ello, la señal analógica original del paciente debe ser digitalizada mediante un convertidor ADC."
            },
            {
              question: "Pregunta 3: Si aumentas la frecuencia de una señal alterna... ¿Qué ocurre?",
              options: [
                "A) Hay más ciclos por segundo.",
                "B) Aumenta automáticamente el voltaje.",
                "C) Disminuye el período y desaparece la amplitud.",
                "D) Cambia la polaridad de la fuente."
              ],
              answer: 0,
              explanation: "La frecuencia define la cantidad de ciclos completos de una onda por segundo (medida en Hertz). A mayor frecuencia, mayor velocidad de oscilación y menor período."
            },
            {
              question: "Pregunta 4: En un circuito puramente inductivo... ¿Qué ocurre entre el voltaje y la corriente?",
              options: [
                "A) Están en fase.",
                "B) La corriente se adelanta.",
                "C) La corriente se atrasa 90°.",
                "D) No existe corriente."
              ],
              answer: 2,
              explanation: "En un inductor ideal estimulado por corriente alterna, la reactancia inductiva provoca que la corriente se desfase atrasándose exactamente 90 grados respecto al voltaje."
            },
            {
              question: "Pregunta 5: ¿Por qué un ingeniero biomédico debe conocer las características estáticas de un sensor?",
              options: [
                "A) Porque determinan únicamente el tamaño del dispositivo.",
                "B) Porque permiten evaluar la confiabilidad de la medición y seleccionar el sensor adecuado.",
                "C) Porque cambian el color del sensor.",
                "D) Porque solo aplican en la industria."
              ],
              answer: 1,
              explanation: "Las características estáticas (sensibilidad, exactitud, repetibilidad, linealidad) definen la calidad del proceso de medición de variables constantes o de cambio lento."
            },
            {
              question: "Pregunta 6: Durante la calibración de un equipo biomédico, obtienes resultados repetidos muy similares, pero todos alejados del valor real. ¿Qué característica posee el instrumento?",
              options: [
                "A) Alta exactitud.",
                "B) Alta sensibilidad.",
                "C) Alta repetibilidad, pero baja exactitud.",
                "D) Alta histéresis."
              ],
              answer: 2,
              explanation: "El instrumento es consistente (alta repetibilidad/precisión) pero posee un error sistemático o sesgo que desvía todas las mediciones respecto al valor patrón (baja exactitud)."
            },
            {
              question: "Pregunta 7: Si un instrumento presenta una amplia zona muerta... ¿Qué ocurrirá?",
              options: [
                "A) Detectará cualquier cambio mínimo.",
                "B) No responderá ante pequeñas variaciones de la variable medida.",
                "C) Medirá con mayor precisión.",
                "D) Mejorará automáticamente su exactitud."
              ],
              answer: 1,
              explanation: "La zona muerta es el rango de valores de entrada para los que la salida no cambia. Si es amplia, cambios pequeños del mensurando no serán detectados en absoluto."
            },
            {
              question: "Pregunta 8: Un oxímetro de pulso mide una señal óptica y luego muestra un porcentaje de saturación de oxígeno. ¿Cuál es el orden correcto del proceso?",
              options: [
                "A) Pantalla → Sensor → ADC.",
                "B) Sensor → Acondicionamiento → Conversión digital → Procesamiento → Visualización.",
                "C) ADC → Sensor → Pantalla.",
                "D) Fuente → Pantalla → Sensor."
              ],
              answer: 1,
              explanation: "La secuencia lógica universal en instrumentación médica es: captar con un sensor, filtrar/amplificar, digitalizar, procesar matemáticamente y presentar en pantalla."
            },
            {
              question: "Pregunta 9: Un laboratorio clínico desea comparar sus mediciones con las de otro hospital. ¿Qué concepto metrológico garantiza que ambos resultados puedan compararse confiablemente?",
              options: [
                "A) Sensibilidad.",
                "B) Histéresis.",
                "C) Trazabilidad metrológica.",
                "D) Zona muerta."
              ],
              answer: 2,
              explanation: "La trazabilidad metrológica relaciona los resultados de medición con referencias estándar internacionales mediante calibraciones ininterrumpidas, permitiendo su comparación universal."
            },
            {
              question: "Pregunta 10 (Pregunta favorita del profesor): Estás diseñando un nuevo dispositivo biomédico basado en inteligencia artificial. ¿Qué elemento es el más importante para que la IA tome buenas decisiones?",
              options: [
                "A) Una pantalla más grande.",
                "B) Un microcontrolador más rápido.",
                "C) Mediciones confiables obtenidas mediante sensores correctamente calibrados y caracterizados.",
                "D) Una batería de mayor capacidad."
              ],
              answer: 2,
              explanation: "Excelente. Un sistema inteligente solo será robusto y confiable si se alimenta de datos brutos precisos, estables y bien calibrados ('Garbage In, Garbage Out')."
            }
          ]
        },
        {
          id: "clase-03",
          number: 3,
          title: "Análisis de Señales en Tiempo y Frecuencia",
          duration: "4 horas",
          difficulty: "Intermedio",
          objectives: [
            "Aplicar la Transformada de Fourier para analizar el espectro de frecuencia de biopotenciales.",
            "Identificar el Teorema de Nyquist para evitar el aliasing en la digitalización.",
            "Caracterizar el ancho de banda necesario para señales ECG, EMG y EEG."
          ],
          summary: "Esta sesión profundiza en la conversión del dominio temporal al dominio frecuencial. El uso de la Transformada Rápida de Fourier (FFT), filtrado frecuencial introductorio y tasas de muestreo en ADC.",
          content: `
            <h3>El Dominio de la Frecuencia en Bioingeniería</h3>
            <p>Toda señal fisiológica puede descomponerse en una suma de ondas senoidales puras a diferentes frecuencias. Conocer el contenido espectral es crucial para diseñar filtros analógicos y digitales:</p>
            <ul>
              <li><strong>EEG (Electroencefalograma):</strong> Contiene información útil entre 0.5 Hz y 40 Hz (ondas Delta, Theta, Alpha, Beta).</li>
              <li><strong>ECG (Electrocardiograma):</strong> Ancho de banda clínico estándar de 0.05 Hz a 150 Hz para diagnóstico completo.</li>
              <li><strong>EMG (Electromiografía):</strong> Mayor frecuencia de oscilación, abarcando desde 10 Hz hasta 500 Hz.</li>
            </ul>
            
            <div class="callout tip">
              <div class="callout-icon">💡</div>
              <div class="callout-content">
                <div class="callout-title">Teorema de Nyquist</div>
                <p>Para evitar el fenómeno del Aliasing (donde frecuencias altas se disfrazan de bajas), la frecuencia de muestreo Fs debe ser estrictamente mayor al doble de la frecuencia máxima componente de la señal (Fs > 2 * Fmax). En la práctica, se suele muestrear a 5 o 10 veces Fmax.</p>
              </div>
            </div>
          `,
          presentation: "2_Señales_tiempo-frecuencia.pdf",
          labs: [
            {
              title: "Laboratorio 2: Análisis Espectral y Tiempo-Frecuencia",
              guide: "02 Lab_Señales_t-f.docx",
              description: "Uso de MATLAB o Python para aplicar la FFT sobre señales de biopotenciales y comprender la descomposición espectral."
            }
          ],
          resources: [
            { name: "2_Señales_tiempo-frecuencia.pptx", type: "pptx", size: "2.1 MB" },
            { name: "2_Actividad Señales_tiempo-frecuencia.pptx", type: "pptx", size: "1.9 MB" },
            { name: "Dialnet-LaRelevanciaDelAnalisisDeFourierEnLasMatematicasAp-10051248.pdf", type: "pdf", size: "1.1 MB" },
            { name: "Utilizing_fast_Fourier_transform_in_the_processing.pdf", type: "pdf", size: "1.8 MB" }
          ],
          quizzes: [
            {
              question: "Si una señal de EMG tiene componentes significativos de frecuencia hasta 500 Hz, ¿cuál es la frecuencia mínima teórica de muestreo recomendada para digitalizarla sin aliasing?",
              options: [
                "250 Hz",
                "500 Hz",
                "1000 Hz",
                "5000 Hz"
              ],
              answer: 2,
              explanation: "Según el teorema de Nyquist-Shannon, la frecuencia de muestreo mínima requerida es 2 veces la frecuencia máxima de la señal: Fs = 2 * 500 Hz = 1000 Hz."
            }
          ]
        },
        {
          id: "clase-04",
          number: 4,
          title: "Filtros Pasivos",
          duration: "4 horas",
          difficulty: "Intermedio",
          objectives: [
            "Diseñar filtros pasa-altas y pasa-bajas RC de primer orden.",
            "Calcular la frecuencia de corte y desfase a diferentes frecuencias de estimulación.",
            "Comprender la limitación de la cascada de filtros pasivos sin buffers."
          ],
          summary: "Cálculo y diseño de filtros pasivos RC y RL. Respuesta en frecuencia, diagramas de Bode de magnitud y fase, y atenuaciones en decibelios (dB) por década.",
          content: `
            <h3>Filtros Pasivos en Acondicionamiento Biomédico</h3>
            <p>Los filtros pasivos utilizan únicamente resistencias, condensadores e inductancias (R, C, L) para atenuar bandas de frecuencia indeseadas. Se emplean en la primera etapa, inmediatamente después del electrodo, para evitar interferencias de muy alta frecuencia (RF) y eliminar offsets continuos.</p>
            
            <h4>Filtro Pasa-Altas RC (Acoplamiento AC)</h4>
            <p>Permite el paso de frecuencias superiores a la frecuencia de corte \(f_c\). Se calcula como:</p>
            \[f_c = \frac{1}{2 \pi R C}\]
            <p>Este filtro elimina el offset DC de los electrodos. En ECG, se escoge \(f_c \approx 0.05 \text{ Hz}\) o \(0.5 \text{ Hz}\) para no distorsionar el segmento ST.</p>
            
            <h4>Filtro Pasa-Bajas RC</h4>
            <p>Atenúa señales de alta frecuencia. En bioinstrumentación, se sitúa a la entrada del ADC para actuar como filtro <strong>Anti-aliasing</strong> analógico.</p>
            
            <div class="callout warning">
              <div class="callout-icon">⚠️</div>
              <div class="callout-content">
                <div class="callout-title">Efecto de Carga en Cascada</div>
                <p>Conectar un filtro pasivo directamente detrás de otro modifica la impedancia equivalente del sistema, variando las frecuencias de corte calculadas. Para aislar etapas se requiere usar amplificadores de acoplamiento (Buffers).</p>
              </div>
            </div>
          `,
          presentation: "3_Filtros_pasivos.pdf",
          labs: [
            {
              title: "Laboratorio 3: Filtros Pasivos RC y Caracterización de Bode",
              guide: "03 Lab_Filtros_pasivos.docx",
              description: "Diseño físico, simulación por software (Multisim/LTSpice) e implementación práctica de filtros RC pasa-altas y pasa-bajas."
            }
          ],
          resources: [
            { name: "3_Filtros_pasivos.pptx", type: "pptx", size: "2.8 MB" },
            { name: "2_Fundamentos Medidas.pdf", type: "pdf", size: "1.4 MB" }
          ],
          quizzes: [
            {
              question: "¿A qué frecuencia disminuye la potencia de salida de un filtro RC pasivo a la mitad (-3 dB)?",
              options: [
                "A la frecuencia de resonancia",
                "A la frecuencia de corte (fc)",
                "Al doble de la frecuencia de corte",
                "A 0 Hz (DC)"
              ],
              answer: 1,
              explanation: "La frecuencia de corte fc define el punto en el que el voltaje de salida cae a Vout = Vin / sqrt(2) ≈ 0.707 * Vin, lo que corresponde a una caída de potencia del 50% (-3 decibeles)."
            }
          ]
        },
        {
          id: "clase-05",
          number: 5,
          title: "Filtros Activos",
          duration: "4 horas",
          difficulty: "Avanzado",
          objectives: [
            "Diseñar filtros activos de topología Sallen-Key y MFB de segundo orden.",
            "Comparar las aproximaciones Butterworth, Chebyshev y Bessel.",
            "Implementar filtros Notch activos (Doble T) para remover la interferencia de 60Hz."
          ],
          summary: "Uso de amplificadores operacionales (Op-Amps) para construir filtros analógicos activos de mayor orden. Ventajas en acoplamiento de impedancias y selectividad frecuencial.",
          content: `
            <h3>Filtros Activos con Op-Amps</h3>
            <p>Los filtros activos combinan componentes reactivos pasivos (R, C) con amplificadores operacionales. Esto permite ganancias en la banda de paso y elimina el problema de atenuación y efecto de carga entre etapas en cascada.</p>
            
            <h4>Aproximaciones de Diseño</h4>
            <ul>
              <li><strong>Butterworth:</strong> Respuesta máxima plana en la banda de paso. Es la opción preferida en biopotenciales para evitar alterar las amplitudes relativas de los espectros.</li>
              <li><strong>Chebyshev:</strong> Transición más abrupta hacia la banda de rechazo, a costa de rizado (ripple) en la banda de paso o rechazo.</li>
              <li><strong>Bessel:</strong> Fase lineal en la banda de paso, lo que mantiene intactas las formas de las ondas temporales. Ideal para ECG donde los tiempos del complejo QRS son diagnósticos.</li>
            </ul>
            
            <h4>Filtros Notch (Rechazo de Banda)</h4>
            <p>El principal enemigo de las señales médicas es el ruido de línea eléctrica de 60 Hz (en Colombia). Se utiliza un filtro Notch activo de Doble T o un filtro pasa-banda angosto para atenuar selectivamente solo esa frecuencia.</p>
          `,
          presentation: "4_Filtros_activos.pdf",
          labs: [
            {
              title: "Laboratorio 4: Diseño e Implementación de Filtros Activos",
              guide: "04 Lab_Filtros_activos.docx",
              description: "Diseño y montaje de filtros activos de segundo orden Butterworth pasa-altas y pasa-bajas con Op-Amps TL084 u opamps biomédicos."
            }
          ],
          resources: [
            { name: "4_Filtros_activos.pptx", type: "pptx", size: "3.5 MB" }
          ],
          quizzes: [
            {
              question: "¿Qué aproximación de filtro de segundo orden ofrece la respuesta más plana en la banda de paso, evitando oscilaciones o rizados?",
              options: [
                "Chebyshev tipo I",
                "Chebyshev tipo II",
                "Bessel",
                "Butterworth"
              ],
              answer: 3,
              explanation: "El filtro Butterworth está matemáticamente diseñado para poseer una respuesta en magnitud lo más plana posible en la banda de paso (maximally flat response)."
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Módulo II: Segundo Corte - Sensores e Instrumentación Transductora",
      description: "Estudio detallado de la instrumentación para variables no eléctricas: temperatura, presión, fuerza, ultrasonido y análisis de gases.",
      topics: [
        {
          id: "clase-06",
          number: 6,
          title: "Sistemas Embebidos y Arduino en Medicina",
          duration: "4 horas",
          difficulty: "Básico",
          objectives: [
            "Configurar puertos GPIO y el conversor analógico a digital (ADC) de una tarjeta de desarrollo.",
            "Programar la lectura analógica y transmisión serial de variables fisiológicas.",
            "Comprender la resolución y cuantización en bits de un ADC."
          ],
          summary: "Introducción a los microcontroladores y plataformas embebidas en el campo biomédico. Configuración de puertos de comunicación serial y conversión analógico-digital.",
          content: `
            <h3>Microcontroladores en Bioinstrumentación</h3>
            <p>Una vez acondicionada la señal analógica, ingresa al microcontrolador para su digitalización y análisis. El conversor analógico a digital (ADC) convierte el nivel de tensión continua en un número binario cuantizado.</p>
            
            <h4>Resolución del ADC</h4>
            <p>La resolución determina qué tan pequeños pueden ser los cambios de voltaje detectables. Para un ADC de \(N\) bits con voltaje de referencia \(V_{\text{ref}}\):</p>
            \[\text{Resolución (LSB)} = \frac{V_{\text{ref}}}{2^N}\]
            <p>Para un Arduino Uno con ADC de 10 bits y \(V_{\text{ref}} = 5\text{V}\), la resolución es de \(4.88\text{ mV}\). Un microcontrolador de 12 bits ofrece una resolución de \(1.22\text{ mV}\), vital para captar pequeños picos cardíacos.</p>
          `,
          presentation: "0 Introduccion Arduino.pptx",
          labs: [
            {
              title: "Práctica de Programación: Lectura ADC y Serial Plotter",
              guide: "Lab arduino.txt",
              description: "Configuración del microcontrolador para leer datos analógicos y visualizarlos en tiempo real a través del puerto serial."
            }
          ],
          resources: [],
          quizzes: [
            {
              question: "Si se lee una tensión de 2.5 V en un ADC de 10 bits alimentado con referencia de 5 V, ¿cuál es el valor binario/entero obtenido?",
              options: [
                "256",
                "512",
                "1023",
                "2048"
              ],
              answer: 1,
              explanation: "El valor devuelto por el ADC es igual a Vin * (2^N - 1) / Vref. Para 2.5V de 5V (que es la mitad exacta), el valor es 1023 / 2 ≈ 511.5, redondeando a 512."
            }
          ]
        },
        {
          id: "clase-07",
          number: 7,
          title: "Instrumentación de Temperatura",
          duration: "4 horas",
          difficulty: "Intermedio",
          objectives: [
            "Comparar el comportamiento de sensores de temperatura LM35, termistores NTC/PTC y sondas de platino PT100.",
            "Diseñar un puente de Wheatstone acoplado a un amplificador de instrumentación para linealizar sensores resistivos.",
            "Diferenciar mediciones de temperatura analógicas de las digitales (ej. DS18B20)."
          ],
          summary: "Estudio de transductores térmicos de uso hospitalario y de laboratorio. Diseño de circuitos de acondicionamiento de precisión como puentes de Wheatstone y fuentes de corriente constante.",
          content: `
            <h3>Medición de Temperatura Corporal</h3>
            <p>La temperatura es una variable fisiológica vital. En hospitales se requiere precisión menor a \(0.1^{\circ}\text{C}\) para el control en incubadoras neonatales o quirófanos. Se emplean principalmente:</p>
            <ul>
              <li><strong>LM35:</strong> Sensor analógico integrado de silicio. Entrega una respuesta lineal directa de \(10\text{ mV}/^{\circ}\text{C}\). Muy fácil de usar pero limitado en rango y flexibilidad física.</li>
              <li><strong>Termistores (NTC/PTC):</strong> Resistencias que varían con la temperatura. Las NTC (Coeficiente de Temperatura Negativo) disminuyen su resistencia exponencialmente al calentarse. Tienen altísima sensibilidad pero son altamente no lineales.</li>
              <li><strong>PT100 (RTD):</strong> Resistencia de Platino de \(100\,\Omega\) a \(0^{\circ}\text{C}\). Es el estándar de oro en precisión y estabilidad industrial/médica. Al tener baja sensibilidad, requiere un circuito especial de amplificación.</li>
            </ul>
            
            <h4>Puente de Wheatstone</h4>
            <p>Se utiliza para medir variaciones resistivas muy pequeñas convirtiéndolas en señales de voltaje diferenciales.</p>
            \[V_{\text{out}} = V_{\text{in}} \left( \frac{R_x}{R_3 + R_x} - \frac{R_2}{R_1 + R_2} \right)\]
          `,
          presentation: "5_Instrumentación_temperatura.pdf",
          labs: [
            {
              title: "Laboratorio 5: Medición de Temperatura con PT100 y NTC",
              guide: "Lab_Temperatura_PT100.docx",
              description: "Diseño del puente de Wheatstone y amplificación con Op-Amp de instrumentación (AD620) para sensor de platino."
            },
            {
              title: "Laboratorio Alterno: Acondicionamiento de Temperatura Analógico/Digital",
              guide: "Lab_Temperatura_ana-Dig.docx",
              description: "Comparativa experimental entre sensores integrados analógicos (LM35) y transductores resistivos en puente."
            }
          ],
          resources: [
            { name: "5_Instrumentación_temperatura.pptx", type: "pptx", size: "2.6 MB" }
          ],
          quizzes: [
            {
              question: "¿Por qué el sensor PT100 requiere típicamente un puente de Wheatstone y un amplificador en lugar de conectarse directamente a un pin ADC?",
              options: [
                "Porque entrega una salida de corriente alterna de alta frecuencia",
                "Porque sus variaciones de resistencia son muy pequeñas y sobre una base de resistencia fija",
                "Porque opera con voltajes peligrosos que requieren aislamiento",
                "Porque solo funciona a temperaturas bajo cero"
              ],
              answer: 1,
              explanation: "El PT100 cambia solo 0.385 Ω por cada °C. Para medir pequeños cambios sobre una base de 100 Ω, se necesita un puente balanceado que elimine el voltaje base y entregue una pequeña señal diferencial para ser amplificada por un AD620."
            }
          ]
        },
        {
          id: "clase-08",
          number: 8,
          title: "Sensores Piezoeléctricos y Ultrasonido",
          duration: "4 horas",
          difficulty: "Avanzado",
          objectives: [
            "Comprender el efecto piezoeléctrico directo e inverso y sus materiales (cuarzo, PZT, PVDF).",
            "Diseñar un amplificador de carga para sensores piezoeléctricos.",
            "Describir el principio de medición Doppler y por tiempo de vuelo en ecografía."
          ],
          summary: "Estudio de transductores piezoeléctricos aplicados a la detección de pulsos arteriales, fonocardiografía e imágenes por ultrasonido médico.",
          content: `
            <h3>El Efecto Piezoeléctrico</h3>
            <p>Ciertos materiales cristalinos y polímeros (como el PVDF) generan una carga eléctrica superficial proporcional a la fuerza o deformación mecánica aplicada (efecto directo). De manera recíproca, al aplicarles un campo eléctrico, experimentan deformaciones mecánicas (efecto inverso), permitiendo generar ondas de sonido a alta frecuencia (Ultrasonido).</p>
            
            <h4>Amplificador de Carga</h4>
            <p>Los sensores piezoeléctricos tienen una impedancia de fuente extremadamente alta (comportamiento capacitivo). Conectar un amplificador tradicional causaría una descarga instantánea de la señal. Se diseña un <strong>amplificador de carga</strong> utilizando un amplificador operacional con un condensador en realimentación para acumular la carga y entregar un voltaje proporcional estable.</p>
          `,
          presentation: "6_Sensores_piezoelectricos_US.pptx",
          labs: [
            {
              title: "Laboratorio 6: Detección de Pulso y Presión con Sensores Piezoeléctricos",
              guide: "Lab_presion_sanguinea_piezo.docx",
              description: "Implementación de un circuito acondicionador de carga para captar el pulso cardiaco radial usando un transductor piezoeléctrico."
            }
          ],
          resources: [
            { name: "Sensores Piezoelectricos.pdf", type: "pdf", size: "1.2 MB" },
            { name: "Tencon_Paper_ResearchGate-1.pdf", type: "pdf", size: "2.1 MB" }
          ],
          quizzes: [
            {
              question: "¿Qué tipo de etapa amplificadora es la recomendada para conectar a un sensor piezoeléctrico para evitar la caída rápida de la señal por su alta impedancia?",
              options: [
                "Amplificador inversor básico de baja impedancia",
                "Amplificador de carga (con condensador en realimentación)",
                "Filtro pasa-bajas pasivo simple",
                "Puente rectificador de diodos"
              ],
              answer: 1,
              explanation: "El amplificador de carga integra la corriente del transductor piezoeléctrico en un capacitor de realimentación, manteniendo una tensión de salida proporcional a la fuerza y evitando el efecto de carga de la impedancia del cable."
            }
          ]
        },
        {
          id: "clase-09",
          number: 9,
          title: "Instrumentación de Fuerza y Presión (Galgas)",
          duration: "4 horas",
          difficulty: "Intermedio",
          objectives: [
            "Calcular el factor de galga (Gauge Factor) y su variación con el esfuerzo mecánico.",
            "Diseñar la instrumentación para puentes de Wheatstone de cuarto, medio y cuarto de puente.",
            "Analizar señales dinámicas en celdas de carga para plantillas de marcha biomecánica."
          ],
          summary: "Acondicionamiento de sensores deformables (galgas extensiométricas) aplicados al pesaje de pacientes, medición de presión plantar en plantillas biomecánicas e incubadoras.",
          content: `
            <h3>Galgas Extensiométricas y Fuerza</h3>
            <p>Una galga es un conductor metálico delgado cuyo valor óhmico cambia al ser estirado o comprimido por fuerzas mecánicas. La deformación unitaria \(\epsilon = \Delta L / L\) se relaciona con el cambio resistivo \(\Delta R / R\) mediante el Factor de Galga (\(GF\)):</p>
            \[\frac{\Delta R}{R} = GF \cdot \epsilon\]
            
            <div class="callout clinical">
              <div class="callout-icon">🔬</div>
              <div class="callout-content">
                <div class="callout-title">Caso Clínico: Plantillas de Marcha</div>
                <p>Las plantillas sensorizadas integran múltiples galgas o sensores capacitivos/resistivos de película delgada bajo la planta del pie. Miden la distribución de fuerzas durante el ciclo de marcha, ayudando a diagnosticar pie diabético, problemas de postura y optimizar plantillas ortopédicas.</p>
              </div>
            </div>
          `,
          presentation: "Instrumentación_fuerza-presion_galga.pdf",
          labs: [
            {
              title: "Laboratorio 7: Celda de Carga y Báscula de Precisión",
              guide: "Lab_Presion_Galga.docx",
              description: "Acondicionamiento de una celda de carga de 4 galgas usando el circuito integrado de precisión HX711 acoplado a un microcontrolador."
            }
          ],
          code: [
            {
              filename: "PruebaCelda.ino",
              path: "Segundo Corte/09 Clase/PruebaCelda/PruebaCelda.ino",
              description: "Código en Arduino para calibrar la celda de carga usando el módulo conversor de 24 bits HX711."
            }
          ],
          resources: [
            { name: "Instrumentación_fuerza-presion_galga.pptx", type: "pptx", size: "3.7 MB" },
            { name: "Foot Plantar Pressure Measurement System.pdf", type: "pdf", size: "1.9 MB" },
            { name: "9496-121842-1-PB.pdf", type: "pdf", size: "850 KB" },
            { name: "Galga_Peso.mp4", type: "video", size: "12.4 MB" },
            { name: "Puente.mp4", type: "video", size: "8.2 MB" }
          ],
          quizzes: [
            {
              question: "¿Cómo compensa un puente de Wheatstone con dos galgas activas opuestas (medio puente) las variaciones causadas por la temperatura?",
              options: [
                "Las variaciones de temperatura se suman aumentando la señal de ruido",
                "Los cambios térmicos afectan a ambas galgas por igual, cancelándose mutuamente en la resta del puente diferencial",
                "Requiere calentar el puente de Wheatstone constantemente",
                "El microcontrolador debe aplicar un retraso temporal"
              ],
              answer: 1,
              explanation: "Dado que el puente realiza una resta diferencial de los dos brazos, si la temperatura causa un cambio resistivo igual en ambas galgas idénticas, este término se cancela en la salida diferencial (Vout = 0 para variaciones térmicas comunes)."
            }
          ]
        },
        {
          id: "clase-10",
          number: 10,
          title: "Instrumentación de Gases",
          duration: "4 horas",
          difficulty: "Avanzado",
          objectives: [
            "Conocer los principios de operación de sensores electroquímicos, infrarrojos (NDIR) y catalíticos de gases.",
            "Diseñar circuitos acondicionadores potencioestáticos para sensores de oxígeno (O2) y CO2.",
            "Describir el principio físico de la capnografía clínica."
          ],
          summary: "Este tema cubre los sensores y circuitos necesarios para el monitoreo de gases en anestesia, capnografía y sistemas de ventilación mecánica en unidades de cuidados intensivos.",
          content: `
            <h3>Sensores de Gases en Ventilación Mecánica</h3>
            <p>El monitoreo de la concentración de gases inhalados y exhalados (\(\text{O}_2\), \(\text{CO}_2\), gases anestésicos) es vital en UCI. El dispositivo más importante es el **Capnógrafo**, que mide la concentración de \(\text{CO}_2\) en la exhalación en tiempo real utilizando absorción de luz infrarroja no dispersiva (NDIR) a una longitud de onda específica donde el carbono tiene su pico de absorción.</p>
            
            <h4>Sensores de O2 Electroquímicos</h4>
            <p>Actúan como celdas de combustible de metal-oxígeno que generan una corriente eléctrica proporcional a la presión parcial de oxígeno. Requieren un amplificador con circuito potencioestático de realimentación para mantener un potencial de polarización constante.</p>
          `,
          presentation: "Instrumentación_Gas.pdf",
          labs: [
            {
              title: "Laboratorio 8: Sensor de Gas y Monitoreo de Parámetros de Respiración",
              guide: "Lab_Gases.docx",
              description: "Caracterización de sensores electroquímicos de gases o sensores analógicos de CO2 mediante el microcontrolador."
            }
          ],
          code: [
            {
              filename: "Ultrasonido.ino",
              path: "Segundo Corte/10 Clase/Ultrasonido/Ultrasonido.ino",
              description: "Código para el cálculo de distancias por tiempo de vuelo aplicable a sensores de nivel en fluidos médicos."
            }
          ],
          resources: [
            { name: "Instrumentación_Gas.pptx", type: "pptx", size: "4.1 MB" },
            { name: "Lab_Gases.pdf", type: "pdf", size: "750 KB" }
          ],
          quizzes: [
            {
              question: "¿Qué técnica óptica es la más utilizada en capnografía médica para monitorear la concentración de CO2 en el aire exhalado del paciente?",
              options: [
                "Fluorescencia láser de alta potencia",
                "Absorción óptica infrarroja no dispersiva (NDIR)",
                "Dispersión de Rayleigh en el ultravioleta",
                "Refractometría de haz cruzado"
              ],
              answer: 1,
              explanation: "El CO2 absorbe fuertemente la radiación infrarroja en la banda de 4.26 µm. Los sensores NDIR emiten luz IR a través de la cámara de muestra y un filtro óptico para medir la atenuación del haz, determinando la concentración de gas exhalado."
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Módulo III: Tercer Corte - Instrumentación Bioeléctrica y Óptica",
      description: "Acondicionamiento avanzado de biopotenciales eléctricos (ECG), instrumentación optoelectrónica (SpO2) e instrumentación en otras ramas biológicas.",
      topics: [
        {
          id: "clase-11",
          number: 11,
          title: "Instrumentación Optoelectrónica y Pulsioximetría",
          duration: "4 horas",
          difficulty: "Avanzado",
          objectives: [
            "Comprender la Ley de Beer-Lambert aplicada a la absorción de luz en tejidos biológicos.",
            "Describir la absorción diferencial de la oxihemoglobina (HbO2) y desoxihemoglobina (Hb) a 660nm y 940nm.",
            "Diseñar un circuito acondicionador de fotopletismografía (PPG) con control alternado de LEDs."
          ],
          summary: "Diseño físico de oxímetros de pulso. Circuitos de conmutación de corrientes para diodos emisores de luz infrarroja y roja, amplificación de fotodiodos transimpedancia y cálculo digital de SpO2.",
          content: `
            <h3>Física de la Pulsioximetría (SpO2)</h3>
            <p>La pulsioximetría mide de forma no invasiva la saturación de oxígeno en sangre. Se fundamenta en la absorción de luz por parte de dos formas de hemoglobina:</p>
            <ul>
              <li><strong>Oxihemoglobina (\(\text{HbO}_2\)):</strong> Transporta oxígeno. Absorbe más luz infrarroja (940 nm) y permite el paso de luz roja (660 nm).</li>
              <li><strong>Hemoglobina reducida (\(\text{Hb}\)):</strong> Sin oxígeno. Absorbe fuertemente luz roja (660 nm) y permite el paso de luz infrarroja (940 nm).</li>
            </ul>
            
            <h4>Circuito de Transimpedancia (Amplificador de Fotodiodo)</h4>
            <p>La corriente eléctrica generada por el fotodiodo receptor (del orden de los nanoamperios) debe convertirse en voltaje. Se utiliza un Op-Amp en configuración inversora de transimpedancia con una gran resistencia de realimentación \(R_f\):</p>
            \[V_{\text{out}} = -I_{\text{photo}} \cdot R_f\]
          `,
          presentation: "9_Instrumentación_optoelectrónica.pdf",
          labs: [
            {
              title: "Laboratorio 9: Fotopletismografía (PPG) y Ritmo Cardíaco Óptico",
              guide: "Lab_Pulso_Interfaz.docx",
              description: "Construcción de una pinza de pulso con un par fototransistor/LED, amplificación transimpedancia e interfaz con el ADC."
            }
          ],
          code: [
            {
              filename: "FrecuenciaC.ino",
              path: "Tercer Corte/11 Clase/FrecuenciaC/FrecuenciaC.ino",
              description: "Código para procesar las oscilaciones de PPG en el microcontrolador y estimar la frecuencia de pulso en BPM."
            }
          ],
          resources: [
            { name: "9_Instrumentación_optoelectrónica.pptx", type: "pptx", size: "3.9 MB" }
          ],
          quizzes: [
            {
              question: "Si la oxihemoglobina (HbO2) absorbe menos luz a 660 nm (roja) que la desoxihemoglobina (Hb), ¿de qué color se observa la sangre arterial oxigenada?",
              options: [
                "Azul oscuro o violáceo",
                "Rojo brillante",
                "Verde oliva",
                "Transparente"
              ],
              answer: 1,
              explanation: "Debido a que la oxihemoglobina no absorbe bien la luz roja a 660 nm, esta luz se refleja o transmite a través del tejido, confiriendo a la sangre arterial su característico color rojo brillante."
            }
          ]
        },
        {
          id: "clase-12",
          number: 12,
          title: "Bioelectricidad e Instrumentación de ECG",
          duration: "4 horas",
          difficulty: "Avanzado",
          objectives: [
            "Modelar eléctricamente la interfaz piel-electrodo utilizando un circuito RC paralelo con potencial de media celda.",
            "Diseñar un amplificador de instrumentación de tres operacionales con alta Relación de Rechazo en Modo Común (CMRR).",
            "Implementar el circuito de pierna derecha activa (RLD) para suprimir interferencia eléctrica en el paciente."
          ],
          summary: "El estándar técnico de los biopotenciales. Diseño del front-end analógico para ECG, cálculo de amplificadores de instrumentación y mitigación de voltajes de modo común usando electrodos activos.",
          content: `
            <h3>Diseño del Front-End para Electrocardiografía</h3>
            <p>La señal cardíaca se capta mediante electrodos de Ag/AgCl sobre el pecho o extremidades. La etapa de amplificación analógica debe cumplir rigurosos estándares de seguridad y rechazo de ruido:</p>
            
            <h4>1. Amplificador de Instrumentación (In-Amp)</h4>
            <p>Mide la diferencia de voltaje entre dos electrodos. Posee una ganancia diferencial controlable por una sola resistencia y una impedancia de entrada de orden Gigaohm. Se requiere un CMRR mínimo de \(100\text{ dB}\) para rechazar el modo común inducido por el cuerpo.</p>
            
            <h4>2. Pierna Derecha Activa (Right Leg Drive - RLD)</h4>
            <p>En lugar de conectar al paciente a la tierra del circuito, se toma la señal de modo común presente en el cuerpo, se invierte analógicamente y se reinyecta al paciente a través del electrodo de pierna derecha. Esto contrarresta de forma activa la corriente de desplazamiento de 60Hz, disminuyendo el ruido de modo común en más de 20dB sin comprometer la seguridad eléctrica.</p>
          `,
          presentation: "Instrumentación_bioelectricidad.pdf",
          labs: [
            {
              title: "Laboratorio 10: Amplificador de Biopotenciales ECG y Circuito de Pierna Derecha",
              guide: "Lab_ECG_Click_Interfaz.docx",
              description: "Montaje completo del amplificador de instrumentación AD620, filtros pasa-altas, pasa-bajas analógicos y circuito de pierna activa."
            }
          ],
          resources: [
            { name: "8_Instrumentación_bioelectricidad.pptx", type: "pptx", size: "4.8 MB" }
          ],
          quizzes: [
            {
              question: "¿Cuál es el propósito principal del circuito de Pierna Derecha Activa (RLD) en un electrocardiógrafo?",
              options: [
                "Alimentar al paciente con corriente continua para polarizar los electrodos",
                "Invertir y reinyectar el voltaje de modo común para cancelar activamente la interferencia de 60 Hz en el cuerpo",
                "Proveer una tierra de baja impedancia para descargar corrientes de falla a la red eléctrica",
                "Monitorear la frecuencia respiratoria mediante bioimpedancia"
              ],
              answer: 1,
              explanation: "El RLD amplifica e invierte el voltaje de modo común captado por los electrodos y lo devuelve al cuerpo, forzando la tensión de modo común del paciente a un nivel cercano a la referencia analógica del circuito, reduciendo drásticamente el ruido de 60 Hz."
            }
          ]
        },
        {
          id: "clase-13",
          number: 13,
          title: "Instrumentación Aplicada al Sector Agrícola y Avanzada",
          duration: "4 horas",
          difficulty: "Intermedio",
          objectives: [
            "Conocer las variaciones de instrumentación para fisiología vegetal y del suelo.",
            "Diseñar circuitos puente para transductores resistivos y capacitivos de humedad en suelo.",
            "Analizar señales bioeléctricas y procesar datos biológicos en microcontroladores modernos."
          ],
          summary: "Aplicación de los principios de instrumentación analógica y digital a otras áreas biológicas, como el monitoreo ambiental, bioinstrumentación vegetal y agrotecnología médica.",
          content: `
            <h3>Bioinstrumentación Extrapolada: Agronomía e Instrumentación Vegetal</h3>
            <p>Los mismos principios utilizados para medir el corazón humano o los músculos se emplean en la agronomía de precisión. Las plantas y los árboles exhiben biopotenciales eléctricos dinámicos en respuesta a estímulos luminosos, riego y estrés hídrico. Además, el monitoreo ambiental y de suelos requiere sensores de conductividad eléctrica (EC) para medir la salinidad del agua de riego, usando voltajes alternos para evitar la electrólisis y polarización de los electrodos.</p>
          `,
          presentation: "10_Instrumentación_agro.pdf",
          labs: [
            {
              title: "Laboratorio 11: Sensor de Humedad y Conductividad en Suelo",
              guide: "ECG_Click.txt",
              description: "Monitoreo avanzado e interfaz con sensores capacitivos para evitar corrosión galvánica en la medición de humedad."
            }
          ],
          resources: [
            { name: "10_Instrumentación_agro.pptx", type: "pptx", size: "3.2 MB" }
          ],
          quizzes: [
            {
              question: "¿Por qué se utiliza una señal de excitación de Corriente Alterna (AC) en lugar de Corriente Continua (DC) para medir la conductividad eléctrica del suelo o agua?",
              options: [
                "Porque la corriente continua es muy costosa de generar",
                "Para evitar la polarización del electrodo y la electrólisis en el medio que alteraría las propiedades químicas",
                "Porque las plantas solo reaccionan a corrientes alternas de alta frecuencia",
                "Para aumentar el ruido de modo común en la lectura del ADC"
              ],
              answer: 1,
              explanation: "Excitar con corriente continua causa acumulación de iones alrededor de los electrodos (polarización) y reacciones de electrólisis, dañando los electrodos y distorsionando la conductividad real. Con corriente alterna de frecuencia media, los iones oscilan y se evita la polarización."
            }
          ]
        }
      ]
    }
  ]
};
