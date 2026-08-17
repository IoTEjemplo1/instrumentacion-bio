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
    name: "Pedro Antonio Aya Parra",
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
            "Comprender los fundamentos eléctricos",
            "Analizar circuitos eléctricos",
            "Diferenciar los tipos de señales",
            "Interpretar las características de una señal AC",
            "Explicar el comportamiento de los componentes pasivos",
            "Comprender el funcionamiento de sensores y transductores"
          ],
          summary: "Esta clase introduce los conceptos clave de la instrumentación biomédica, definiendo los sensores, los transductores y las etapas de acondicionamiento analógico de señales fisiológicas de origen celular y sistémico.",
          content: `
            <h3>Introducción a los Sistemas de Instrumentación Médica</h3>
            <p>La bioinstrumentación se basa en la adquisición, medición e interpretación de señales biológicas mediante sistemas electrónicos. En esta unidad se abordarán los fundamentos de la electricidad, incluyendo voltaje, corriente, resistencia y circuitos eléctricos, así como las características de las señales de corriente continua (DC) y alterna (AC). Además, se estudiará el comportamiento de los componentes pasivos (R, L y C), el funcionamiento de sensores y transductores, y las principales características de los instrumentos de medición, proporcionando las bases necesarias para comprender los sistemas de instrumentación biomédica.</p>
            
            <div class="callout clinical">
              <div class="callout-icon">🫀</div>
              <div class="callout-content">
                <div class="callout-title">El Desafío Fisiológico</div>
                <p>Los sistemas de bioinstrumentación dependen de la correcta adquisición y procesamiento de señales eléctricas. Comprender sus características, comportamiento y posibles fuentes de error es fundamental para garantizar mediciones confiables y el adecuado funcionamiento de los dispositivos biomédicos.</p>
              </div>
            </div>
            
            <h3>Conceptos claves</h3>
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

            <!-- Sección: Generador de Funciones -->
            <div class="mb-5 d-flex align-items-center gap-2 mt-2">
              <span class="fs-4">⚡</span>
              <h2 class="h4 text-primary fw-bold mb-0" id="generador-funciones" style="font-family: var(--font-title);">Generador de Funciones (Tektronix AFG1022)</h2>
            </div>

            <div class="card p-4 border-0 mb-4 bg-dark-card shadow">
              <div class="mb-3 text-center">
                <img src="./public/generador_funciones.png?v=2" alt="Generador de Funciones Tektronix AFG1022" class="img-fluid rounded border border-secondary shadow-sm" style="max-height: 400px; max-width: 100%;">
              </div>
              
              <div class="mt-4 text-center">
                <p class="text-secondary small mb-3">
                  El <strong>Generador de Funciones Tektronix AFG1022</strong> permite generar voltajes variables en el tiempo con formas de onda predefinidas (senoidal, cuadrada, rampa, pulso, ruido) o arbitrarias para inyectar estímulos a los circuitos de acondicionamiento.
                </p>
                
                <ul class="small text-secondary ps-3 mb-4 text-start d-inline-block" style="max-width: 800px; margin: 0 auto;">
                  <li><strong>Canales:</strong> Posee dos canales de salida independientes (<code>Out 1</code> y <code>Out 2</code>) con conectores BNC. Se activan con los botones iluminados <code>On/Off</code>.</li>
                  <li><strong>Frecuencia y Amplitud:</strong> Permite establecer la frecuencia de la señal (hasta 25 MHz) y su amplitud (desde mVpp hasta Vpp).</li>
                  <li><strong>Offset DC:</strong> Añade un nivel continuo de voltaje a la señal alterna.</li>
                  <li><strong>Botones de Función:</strong> Permiten cambiar rápidamente entre tipos de onda: <code>Sine</code>, <code>Square</code>, <code>Ramp</code>, <code>Pulse</code>, <code>Arb</code> y <code>Noise</code>.</li>
                </ul>

                <div class="d-flex justify-content-center">
                  <div style="max-width: 300px; width: 100%;">
                    <button id="btn-activate-activity" class="btn btn-sm fw-bold px-3 py-2 shadow-sm w-100" style="background-color: var(--color-secondary); color: #fff; border: none; border-radius: var(--radius-sm); transition: transform 0.2s;">
                      💡 Actividad / prueba tus conocimientos
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Sección: Osciloscopio Digital -->
            <div class="mb-5 d-flex align-items-center gap-2 mt-5">
              <span class="fs-4">📊</span>
              <h2 class="h4 text-primary fw-bold mb-0" id="osciloscopio-digital" style="font-family: var(--font-title);">Osciloscopio Digital (Agilent DSO-X 2002A)</h2>
            </div>

            <div class="card p-4 border-0 mb-4 bg-dark-card shadow">
              <div class="mb-3 text-center">
                <img src="./public/osciloscopio.png" alt="Osciloscopio Digital Agilent DSO-X 2002A" class="img-fluid rounded border border-secondary shadow-sm" style="max-height: 400px; max-width: 100%;">
              </div>
              
              <div class="mt-4 text-center">
                <p class="text-secondary small mb-3">
                  El <strong>Osciloscopio Digital Agilent DSO-X 2002A</strong> es el instrumento de visualización principal. Permite graficar el voltaje en función del tiempo para analizar la forma, amplitud, período, desfase y frecuencia de señales bioeléctricas y de acondicionamiento.
                </p>
                
                <ul class="small text-secondary ps-3 mb-4 text-start d-inline-block" style="max-width: 800px; margin: 0 auto;">
                  <li><strong>Escala Vertical (Volts/Div):</strong> Controla la escala de amplitud. En bioinstrumentación, se suele configurar en rangos muy sensibles (mV/div) debido a la baja amplitud de las señales biológicas.</li>
                  <li><strong>Escala Horizontal (Sec/Div):</strong> Controla la ventana temporal en la pantalla.</li>
                  <li><strong>Acoplamiento (AC, DC, GND):</strong> 
                    <br>• <code>DC</code>: Muestra la señal completa incluyendo su offset.
                    <br>• <code>AC</code>: Filtra la componente continua, ideal para observar señales biológicas pequeñas montadas sobre offsets grandes.
                    <br>• <code>GND</code>: Desconecta la señal de entrada y muestra la referencia de tierra.
                  </li>
                  <li><strong>Trigger (Disparo):</strong> Sincroniza el barrido horizontal para estabilizar señales periódicas repetitivas en la pantalla.</li>
                </ul>

                <div class="d-flex justify-content-center">
                  <div style="max-width: 300px; width: 100%;">
                    <button id="btn-activate-osc-activity" class="btn btn-sm fw-bold px-3 py-2 shadow-sm w-100" style="background-color: #3b82f6; color: #fff; border: none; border-radius: var(--radius-sm); transition: transform 0.2s;">
                      📊 Simulador: Osciloscopio Digital
                    </button>
                  </div>
                </div>
              </div>
            </div>

              <!-- Sección: Fuente de Alimentación -->
            <div class="mb-5 d-flex align-items-center gap-2">
              <span class="fs-4">🔋</span>
              <h2 class="h4 text-primary fw-bold mb-0" id="fuente-de-alimentacion" style="font-family: var(--font-title);">Fuente de Alimentación (PeakTech 6145)</h2>
            </div>

            <div class="card p-4 border-0 mb-4 bg-dark-card shadow">
              <div class="mb-3 text-center">
                <img src="./public/fuente_poder.png" alt="Fuente de Alimentación Dual PeakTech 6145" class="img-fluid rounded border border-secondary shadow-sm" style="max-height: 400px; max-width: 100%;">
              </div>
              
              <!-- Botón para iniciar actividad interactiva -->
              <div class="mt-4 text-center">
                <p class="text-secondary small mb-3">
                  La <strong>Fuente de Alimentación PeakTech 6145</strong> te permite configurar el voltaje, limitar la corriente y crear una fuente dual (simétrica) usando los canales Master y Slave.
                </p>
                
                <ul class="small text-secondary ps-3 mb-4 text-start d-inline-block" style="max-width: 800px; margin: 0 auto;">
                  <li><strong>Modos Master / Slave:</strong> Permite operar la fuente en modo independiente, en serie (para sumar voltajes) o en paralelo (para aumentar la capacidad de corriente).</li>
                  <li><strong>Fuente Simétrica (Dual):</strong> Esencial en bioinstrumentación para alimentar amplificadores operacionales con voltajes positivos (+Vcc) y negativos (-Vee) usando el terminal de tierra (GND) como referencia común.</li>
                  <li><strong>Ajuste de Voltaje y Corriente (CV/CC):</strong> Cuenta con perillas para establecer un voltaje constante (CV) y fijar un límite de corriente constante (CC) como protección.</li>
                  <li><strong>Protección contra Cortocircuitos:</strong> Limita automáticamente la corriente entregada para proteger tanto a la fuente como a los circuitos bajo prueba.</li>
                </ul>

                <div class="d-flex justify-content-center">
                  <div style="max-width: 300px; width: 100%;">
                    <button id="btn-activate-ps-activity" class="btn btn-sm fw-bold px-3 py-2 shadow-sm w-100" style="background-color: #10b981; color: #fff; border: none; border-radius: var(--radius-sm); transition: transform 0.2s;">
                      ⚡ Iniciar Actividad Interactiva
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Sección: Multímetro Digital -->
            <div class="mb-5 d-flex align-items-center gap-2 mt-5">
              <span class="fs-4">🌡️</span>
              <h2 class="h4 text-primary fw-bold mb-0" id="multimetro-digital" style="font-family: var(--font-title);">Multímetro Digital (Agilent 34450A)</h2>
            </div>

            <div class="card p-4 border-0 mb-4 bg-dark-card shadow">
              <div class="mb-3 text-center">
                <img src="./public/Multimetro.jpg" alt="Multímetro Digital Agilent 34450A" class="img-fluid rounded border border-secondary shadow-sm" style="max-height: 400px; max-width: 100%;">
              </div>
              
              <!-- Botón para iniciar actividad interactiva -->
              <div class="mt-4 text-center">
                <p class="text-secondary small mb-3">
                  El <strong>Multímetro Digital Agilent 34450A</strong> es un instrumento multipropósito para verificar y diagnosticar el estado eléctrico de un circuito. Aprende a conectarlo correctamente para medir voltaje, corriente y resistencia.
                </p>
                
                <ul class="small text-secondary ps-3 mb-4 text-start d-inline-block" style="max-width: 800px; margin: 0 auto;">
                  <li><strong>Medición de Voltaje (AC/DC):</strong> Permite medir voltajes de alimentación continua y evaluar el comportamiento en corriente alterna de los circuitos de instrumentación.</li>
                  <li><strong>Medición de Resistencia y Continuidad:</strong> Fundamental para comprobar valores de componentes pasivos (como puentes de Wheatstone) y verificar conexiones físicas (descartar cortocircuitos).</li>
                  <li><strong>Medición de Corriente:</strong> Se conecta en serie con el circuito para comprobar el consumo de corriente de las etapas de amplificación y filtrado.</li>
                  <li><strong>Alta Precisión (5.5 Dígitos):</strong> Brinda gran exactitud y resolución, indispensable para calibrar y ajustar pequeñas variaciones en la adquisición de biopotenciales.</li>
                </ul>

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
            "Comprender los principios fundamentales de la medición, las magnitudes físicas y el Sistema Internacional de Unidades como base para la instrumentación biomédica.",
            "Explicar la importancia de la metrología, la calibración y la trazabilidad para garantizar mediciones confiables y comparables.",
            "Diferenciar las características de las señales de corriente continua (DC) y corriente alterna (AC), interpretando sus principales parámetros eléctricos.",
            "Analizar el comportamiento de circuitos y componentes electrónicos básicos (R, L y C) frente a diferentes tipos de señales eléctricas.",
            "Relacionar las características de sensores e instrumentos de medición con la calidad y confiabilidad de las mediciones realizadas en aplicaciones biomédicas."
          ],
          summary: "Las mediciones constituyen la base de toda actividad científica y clínica. Análisis de fundamentos de metrología, señales eléctricas DC/AC y comportamiento de componentes básicos.",
          content: `
            <h3>Introducción al tema</h3>
            <p>Las mediciones constituyen la base de toda actividad científica, tecnológica y clínica. En bioinstrumentación, la adquisición de información confiable depende no solo del funcionamiento de sensores e instrumentos, sino también de la correcta comprensión de las magnitudes físicas, las unidades de medida y el comportamiento de las señales eléctricas.</p>
            <p>En esta unidad se estudiarán los fundamentos de la metrología, el Sistema Internacional de Unidades y las características de las señales de corriente continua (DC) y alterna (AC). Además, se analizará el comportamiento de los principales componentes electrónicos y las propiedades de los instrumentos de medición, proporcionando las bases necesarias para comprender cómo se adquieren y evalúan las señales utilizadas en ingeniería biomédica.</p>
            
            <h4 class="mt-4 mb-3">Conceptos Claves</h4>
            <div class="table-responsive mb-4">
              <table class="table table-bordered table-hover align-middle">
                <thead class="table-light">
                  <tr>
                    <th>Concepto</th>
                    <th>Definición</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Medición</strong></td>
                    <td>Proceso de determinar el valor de una magnitud física mediante su comparación con un patrón de referencia.</td>
                  </tr>
                  <tr>
                    <td><strong>Metrología</strong></td>
                    <td>Ciencia de las mediciones que garantiza la exactitud, confiabilidad y trazabilidad de los resultados obtenidos.</td>
                  </tr>
                  <tr>
                    <td><strong>Magnitud Física</strong></td>
                    <td>Propiedad de un fenómeno, cuerpo o sustancia que puede medirse y expresarse mediante un valor y una unidad.</td>
                  </tr>
                  <tr>
                    <td><strong>Señal DC (Corriente Continua)</strong></td>
                    <td>Señal cuyo valor y polaridad permanecen constantes en el tiempo.</td>
                  </tr>
                  <tr>
                    <td><strong>Señal AC (Corriente Alterna)</strong></td>
                    <td>Señal cuya amplitud y polaridad varían periódicamente con el tiempo.</td>
                  </tr>
                  <tr>
                    <td><strong>Frecuencia</strong></td>
                    <td>Número de ciclos que ocurren en un segundo; se expresa en Hertz (Hz).</td>
                  </tr>
                  <tr>
                    <td><strong>Sensor y Transductor</strong></td>
                    <td>Dispositivos que detectan una magnitud física y la convierten en una señal útil para su medición y procesamiento.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="callout clinical">
              <div class="callout-icon">📏</div>
              <div class="callout-content">
                <div class="callout-title">El desafío de la medición</div>
                <p>Toda decisión en ingeniería biomédica depende de una medición confiable. Un instrumento mal calibrado, una señal mal interpretada o una unidad de medida incorrecta pueden conducir a errores en el diagnóstico, el monitoreo o el funcionamiento de un dispositivo biomédico. Comprender cómo se generan, miden e interpretan las señales eléctricas, así como los principios de la metrología, es fundamental para garantizar la calidad, la precisión y la confiabilidad de los sistemas de instrumentación.</p>
              </div>
            </div>

            <h3 class="mt-4">Referencias</h3>
            <ul class="small text-secondary ps-3 mb-4">
              <li class="mb-2"><strong>Paul, S., Saikia, A., Majhi, V., & Pandey, V. K. (2022).</strong> <em>Introduction to Biomedical Instrumentation and Its Applications.</em> Elsevier.<br>Excelente para introducir instrumentación biomédica, sensores, sistemas de medición y adquisición de señales.</li>
              <li class="mb-2"><strong>Enderle, J. D., & Bronzino, J. D. (2012).</strong> <em>Introduction to Biomedical Engineering (3rd ed.).</em> Academic Press.<br>Capítulos sobre sensores, medición e instrumentación.</li>
              <li class="mb-2"><strong>Khandpur, R. S. (2003).</strong> <em>Handbook of Biomedical Instrumentation.</em> McGraw-Hill.<br>Aunque es un texto clásico, sigue siendo una referencia muy utilizada para conceptos de medición biomédica.</li>
              <li class="mb-2"><strong>Webster, J. G., & Eren, H. (Eds.). (2014).</strong> <em>Measurement, Instrumentation, and Sensors Handbook (2nd ed.).</em> CRC Press.</li>
              <li class="mb-2"><strong>BIPM. (2022).</strong> <em>The International System of Units (SI), 9th Edition.</em></li>
            </ul>
          `,
          presentation: [
            "https://docs.google.com/presentation/d/e/2PACX-1vT70bnXQlJDSqC_aSBDI7a6FIuEpVdAEKXidE_q4r65m8lXKAVQRLCmfEpqnJ2wXQ/pubembed?start=false&loop=false&delayms=3000",
            "https://docs.google.com/presentation/d/e/2PACX-1vQrfEVYzjmEtIhcqPVjLK_2L8j8EuGO_6H66D45EIc_UtYaCGZty67296jVasoTFA/pubembed?start=false&loop=false&delayms=3000"
          ],
          simulator: ["simulador_cargas_campo_electrico.html", "simulador_circuitos_led.html"],
          labs: [
            {
              title: "Laboratorio 1: Fundamentos de Señales y Adquisición",
              guide: "01 Lab_Señales_Fundamentos.docx",
              description: "Práctica introductoria para el reconocimiento de señales en osciloscopio y análisis de fundamentos en el laboratorio físico.",
              url: "https://docs.google.com/document/d/e/2PACX-1vT-HdkkrFV6mO0dFiJLYpNCYvOYxARdOn-Vix3BhC3yLKjZhadqYykdAXdBHJBnqw/pub?embedded=true"
            }
          ],
          resources: [
            { name: "2_Fundamentos Señal DC-AC.pptx", type: "pptx", size: "3.2 MB" },
            { name: "Methods for the metrological characterization.pdf", type: "pdf", size: "2.4 MB" },
            { name: "BIPM Headquarters Work Programme.pdf", type: "pdf", size: "3.1 MB" },
            { name: "Recomendaciones Metrologicas.pdf", type: "pdf", size: "1.5 MB" }
          ],
          quizzes: [
            {
              question: "Pregunta 1\n\nUn sensor biomédico entrega una señal de muy baja amplitud que posteriormente será digitalizada. ¿Cuál de las siguientes características del sistema de medición es más importante para garantizar que pequeñas variaciones de la señal puedan detectarse correctamente?",
              options: [
                "A) Alta resolución del instrumento.",
                "B) Alta sensibilidad del sistema de medición.",
                "C) Baja histéresis del sensor.",
                "D) Amplio rango de medición."
              ],
              answer: 1,
              explanation: "La sensibilidad determina la capacidad del instrumento para responder ante pequeños cambios de la variable medida."
            },
            {
              question: "Pregunta 2\n\nSe conectan dos resistencias idénticas a una fuente de voltaje constante.\n\n¿Cuál configuración permite que circule una mayor corriente suministrada por la fuente?",
              options: [
                "A) Conexión en serie.",
                "B) Conexión en paralelo.",
                "C) Ambas producen la misma corriente.",
                "D) Depende únicamente del valor del voltaje."
              ],
              answer: 1,
              explanation: "En paralelo disminuye la resistencia equivalente, incrementando la corriente total según la Ley de Ohm."
            },
            {
              question: "Pregunta 3\n\nEn un circuito alimentado con corriente alterna, se observa que el voltaje y la corriente no alcanzan simultáneamente sus valores máximos.\n\n¿Cuál componente es el responsable directo de este comportamiento?",
              options: [
                "A) Una resistencia pura.",
                "B) Un conductor ideal.",
                "C) Un inductor o un condensador.",
                "D) La fuente de alimentación continua."
              ],
              answer: 2,
              explanation: "Los elementos inductivos y capacitivos almacenan energía y generan desfases entre voltaje y corriente."
            },
            {
              question: "Pregunta 4\n\nDos señales presentan exactamente la misma amplitud máxima, pero una tiene una frecuencia cinco veces mayor que la otra.\n\n¿Cuál afirmación es correcta?",
              options: [
                "A) Ambas poseen el mismo período.",
                "B) La señal de mayor frecuencia posee un período menor.",
                "C) La señal de mayor frecuencia tiene necesariamente mayor voltaje RMS.",
                "D) La frecuencia no influye sobre el comportamiento temporal de una señal."
              ],
              answer: 1,
              explanation: "La frecuencia y el período son magnitudes inversamente proporcionales."
            },
            {
              question: "Pregunta 5\n\nDurante la calibración de un instrumento, se observa que al aumentar y disminuir la misma variable física el instrumento entrega valores ligeramente diferentes.\n\n¿Qué característica metrológica explica mejor este fenómeno?",
              options: [
                "A) Exactitud.",
                "B) Sensibilidad.",
                "C) Histéresis.",
                "D) Resolución."
              ],
              answer: 2,
              explanation: "La histéresis describe la diferencia en la respuesta del instrumento dependiendo de si la variable aumenta o disminuye."
            },
            {
              question: "💡 Pregunta desafío (opcional)\n\nUn sistema de monitoreo requiere medir una señal fisiológica de muy baja amplitud y con cambios rápidos en el tiempo.\n\n¿Cuál sería la combinación más adecuada para obtener una medición confiable?",
              options: [
                "A) Un sensor con baja sensibilidad y un circuito resistivo simple.",
                "B) Un sensor de alta sensibilidad, un adecuado acondicionamiento de señal y un sistema capaz de responder a la frecuencia de la señal.",
                "C) Un instrumento con un rango de medición muy amplio, sin importar su resolución.",
                "D) Cualquier sensor es suficiente siempre que el voltaje de alimentación sea estable."
              ],
              answer: 1,
              explanation: "En bioinstrumentación no basta con medir una señal; es necesario seleccionar un sensor apropiado, acondicionar correctamente la señal y utilizar instrumentos cuyas características metrológicas permitan representar fielmente la información adquirida."
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
            "Comprender la diferencia entre el dominio del tiempo y el dominio de la frecuencia en el análisis de señales.",
            "Explicar cómo una señal compleja puede descomponerse en componentes senoidales mediante la Transformada de Fourier.",
            "Interpretar espectros de frecuencia e identificar la frecuencia fundamental y los armónicos de señales periódicas.",
            "Comprender la importancia del teorema de Nyquist para la adquisición digital de bioseñales.",
            "Relacionar los conceptos de muestreo, frecuencia y espectro con aplicaciones reales en bioinstrumentación y procesamiento digital de señales."
          ],
          summary: "Esta sesión profundiza en la conversión del dominio temporal al frecuencial, la Transformada de Fourier, el teorema de Nyquist y su impacto en la adquisición de bioseñales.",
          content: `
            <h3>Introducción: El Dominio de la Frecuencia</h3>
            <p>Cuando observamos una bioseñal en el dominio del tiempo, analizamos cómo cambia su amplitud a medida que transcurre el tiempo. Sin embargo, muchas señales fisiológicas están formadas por la combinación de múltiples componentes de distinta frecuencia, las cuales no siempre son evidentes en una gráfica temporal.</p>
            <p>El dominio de la frecuencia permite descomponer una señal en sus diferentes componentes senoidales para identificar qué frecuencias están presentes y con qué intensidad. Esta representación resulta esencial para comprender el comportamiento de bioseñales como el electrocardiograma (ECG), el electroencefalograma (EEG), la electromiografía (EMG) o los sonidos cardíacos, donde la información clínica suele estar asociada a determinadas bandas de frecuencia.</p>
            <p>Gracias a la Transformada de Fourier, es posible pasar del dominio del tiempo al dominio de la frecuencia, facilitando el diseño de filtros, la eliminación de ruido, la extracción de características y el desarrollo de algoritmos de procesamiento digital utilizados en equipos biomédicos modernos. Estos conceptos se introducen en la presentación mediante ejemplos de señales sinusoidales, cuadradas, triangulares y diente de sierra, mostrando su representación temporal y espectral.</p>
            
            <h4 class="mt-4 mb-3">Conceptos Clave</h4>
            <div class="table-responsive mb-4">
              <table class="table table-bordered table-hover align-middle">
                <thead class="table-light">
                  <tr>
                    <th>Concepto</th>
                    <th>Definición</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Dominio del tiempo</strong></td>
                    <td>Representación de una señal según cómo varía su amplitud a lo largo del tiempo.</td>
                  </tr>
                  <tr>
                    <td><strong>Dominio de la frecuencia</strong></td>
                    <td>Representación que muestra las frecuencias que componen una señal y la contribución de cada una.</td>
                  </tr>
                  <tr>
                    <td><strong>Transformada de Fourier</strong></td>
                    <td>Herramienta matemática que permite convertir una señal del dominio del tiempo al dominio de la frecuencia.</td>
                  </tr>
                  <tr>
                    <td><strong>Frecuencia de muestreo (Fs)</strong></td>
                    <td>Número de muestras de una señal adquiridas por segundo durante el proceso de digitalización.</td>
                  </tr>
                  <tr>
                    <td><strong>Teorema de Nyquist</strong></td>
                    <td>Establece que la frecuencia de muestreo debe ser, como mínimo, el doble de la máxima frecuencia presente en la señal para evitar el aliasing.</td>
                  </tr>
                  <tr>
                    <td><strong>Espectro de frecuencia</strong></td>
                    <td>Distribución de las amplitudes de las diferentes componentes frecuenciales presentes en una señal.</td>
                  </tr>
                  <tr>
                    <td><strong>Armónicos</strong></td>
                    <td>Componentes de frecuencia que son múltiplos enteros de la frecuencia fundamental y determinan la forma de una señal periódica.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 class="mt-4">Referencias Claves</h3>
            <h6 class="text-muted">Libros recomendados</h6>
            <ul class="small text-secondary ps-3 mb-4">
              <li class="mb-2"><strong>Oppenheim, A. V., Willsky, A. S., & Nawab, S. H.</strong> <em>Signals and Systems. 2nd ed.</em> Prentice Hall, 1997.<br>Referencia clásica para comprender señales, sistemas y Transformada de Fourier.</li>
              <li class="mb-2"><strong>Proakis, J. G., & Manolakis, D. G.</strong> <em>Digital Signal Processing: Principles, Algorithms, and Applications.</em> Pearson.<br>Excelente para procesamiento digital de señales y aplicaciones biomédicas.</li>
              <li class="mb-2"><strong>Webster, J. G., & Clark, J. W.</strong> <em>Medical Instrumentation: Application and Design.</em> Wiley.<br>Referencia fundamental en bioinstrumentación, adquisición de bioseñales y sistemas de medición.</li>
              <li class="mb-2"><strong>Bronzino, J. D., & Peterson, D. R.</strong> <em>The Biomedical Engineering Handbook.</em> CRC Press.<br>Contiene capítulos especializados sobre adquisición, procesamiento y análisis de bioseñales.</li>
            </ul>
          `,
          presentation: "https://docs.google.com/presentation/d/1KGsz04BdLTNRUUgqa_ubpllRwftUuIsW/embed?start=false&loop=false&delayms=3000",
          simulator: "simulador_fourier.html",
          labs: [
            {
              title: "Laboratorio 2: Análisis Espectral y Tiempo-Frecuencia",
              guide: "02 Lab_Señales_t-f.docx",
              description: "Uso de MATLAB o Python para aplicar la FFT sobre señales de biopotenciales y comprender la descomposición espectral."
            }
          ],
          resources: [
            { name: "2_Senales_tiempo-frecuencia.pptx", type: "pptx", size: "2.1 MB" },
            { name: "2_Actividad Senales_tiempo-frecuencia.pptx", type: "pptx", size: "1.9 MB" },
            { name: "Dialnet-LaRelevanciaDelAnalisisDeFourierEnLasMatematicasAp-10051248.pdf", type: "pdf", size: "1.1 MB" },
            { name: "Utilizing_fast_Fourier_transform_in_the_processing.pdf", type: "pdf", size: "1.8 MB" }
          ],
          quizzes: [
            {
              question: "Una señal cuadrada y una señal senoidal tienen la misma frecuencia fundamental.\n\n¿Por qué el espectro de frecuencia de la señal cuadrada presenta varios picos mientras que el de la señal senoidal muestra únicamente uno?",
              options: [
                "A. Porque la señal cuadrada tiene mayor amplitud.",
                "B. Porque la señal cuadrada está compuesta por la frecuencia fundamental y múltiples armónicos.",
                "C. Porque la señal senoidal contiene ruido.",
                "D. Porque la señal cuadrada tiene un período menor."
              ],
              answer: 1,
              explanation: "La Transformada de Fourier demuestra que una señal cuadrada puede representarse como la suma de una frecuencia fundamental y varios armónicos, mientras que una señal senoidal pura contiene una única componente frecuencial."
            },
            {
              question: "Un ingeniero observa una bioseñal únicamente en el dominio del tiempo.\n\n¿Cuál información adicional obtiene al analizar la misma señal en el dominio de la frecuencia?",
              options: [
                "A. El voltaje instantáneo de cada muestra.",
                "B. Las componentes frecuenciales presentes y su amplitud.",
                "C. La temperatura del sensor.",
                "D. El número de muestras adquiridas."
              ],
              answer: 1,
              explanation: "El dominio de la frecuencia permite identificar qué frecuencias forman una señal y cuál es la contribución de cada una al espectro."
            },
            {
              question: "Se desea digitalizar una señal fisiológica cuya máxima frecuencia de interés es 120 Hz.\n\n¿Cuál de las siguientes frecuencias de muestreo cumple el criterio del Teorema de Nyquist?",
              options: [
                "A. 120 Hz",
                "B. 180 Hz",
                "C. 240 Hz",
                "D. 200 Hz"
              ],
              answer: 2,
              explanation: "Según el Teorema de Nyquist, la frecuencia de muestreo debe ser al menos el doble de la máxima frecuencia presente en la señal para evitar el aliasing."
            },
            {
              question: "Durante un análisis espectral se incrementa únicamente la amplitud de una componente senoidal de 50 Hz.\n\n¿Qué cambio debería observarse en el espectro?",
              options: [
                "A. El pico cambia de posición.",
                "B. Aparece una nueva frecuencia.",
                "C. El pico de 50 Hz aumenta su magnitud, pero permanece en la misma frecuencia.",
                "D. Todos los armónicos cambian de amplitud."
              ],
              answer: 2,
              explanation: "Modificar la amplitud afecta únicamente la altura del pico correspondiente, mientras que su posición depende exclusivamente de la frecuencia."
            },
            {
              question: "Dos señales poseen exactamente las mismas componentes de frecuencia, pero una presenta un desfase de 90° respecto a la otra.\n\n¿Qué ocurre con su espectro de frecuencia?",
              options: [
                "A. Cambian las frecuencias presentes.",
                "B. Cambian las amplitudes de los picos.",
                "C. El espectro de magnitud permanece prácticamente igual.",
                "D. Desaparece la frecuencia fundamental."
              ],
              answer: 2,
              explanation: "La fase modifica la forma temporal de la señal, pero no altera la magnitud de las componentes frecuenciales representadas en el espectro."
            },
            {
              question: "Durante el análisis de una señal periódica se detectan componentes en:\n\n50 Hz\n150 Hz\n250 Hz\n350 Hz\n\n¿Cuál afirmación es correcta?",
              options: [
                "A. Todas las componentes corresponden a ruido.",
                "B. La frecuencia fundamental es 150 Hz.",
                "C. Las frecuencias de 150 Hz, 250 Hz y 350 Hz corresponden a armónicos de la componente de 50 Hz.",
                "D. La señal contiene únicamente una componente senoidal."
              ],
              answer: 2,
              explanation: "Los armónicos son múltiplos enteros de la frecuencia fundamental y son los responsables de la forma de muchas señales periódicas. Este comportamiento se ilustra en la presentación mediante ejemplos de suma de ondas senoidales y análisis espectral."
            },
            {
              question: "💡 Pregunta Desafío (Opcional)\n\nUn estudiante compara dos bioseñales. Ambas tienen la misma frecuencia fundamental y la misma amplitud máxima. Sin embargo, una presenta muchos armónicos y la otra únicamente la frecuencia fundamental.\n\n¿Cuál de las siguientes conclusiones es la más adecuada?",
              options: [
                "A. Ambas señales tendrán exactamente la misma forma en el dominio del tiempo.",
                "B. La señal con mayor número de armónicos presentará una forma de onda más compleja.",
                "C. La señal con más armónicos necesariamente tendrá mayor frecuencia fundamental.",
                "D. Los armónicos únicamente afectan el valor RMS de la señal."
              ],
              answer: 1,
              explanation: "Los armónicos enriquecen el contenido frecuencial de una señal y determinan su forma en el dominio del tiempo. Por ello, señales con la misma frecuencia fundamental pueden tener apariencias muy diferentes dependiendo de sus componentes armónicas, tal como se muestra en los ejemplos de señales senoidales, cuadradas, triangulares y diente de sierra de la presentación."
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
            "Comprender el principio de funcionamiento de los filtros pasivos basados en resistencias, inductores y capacitores.",
            "Analizar el comportamiento de la impedancia de los elementos R, L y C en función de la frecuencia.",
            "Interpretar la respuesta en frecuencia mediante diagramas de Bode y la escala en decibelios (dB).",
            "Identificar las características y aplicaciones de los filtros pasabajas, pasaaltas, pasabanda y rechazabanda.",
            "Calcular la frecuencia de corte y relacionarla con el comportamiento eléctrico del circuito.",
            "Reconocer la importancia de los filtros pasivos en el acondicionamiento de señales biomédicas."
          ],
          summary: "Estudio del funcionamiento de los filtros pasivos (R, L, C), su respuesta en frecuencia, diagramas de Bode y su aplicación en la selección y acondicionamiento de señales biomédicas.",
          content: `
            <h3>Introducción al tema</h3>
            <p>Las señales biológicas adquiridas mediante sensores biomédicos rara vez llegan libres de interferencias. Durante su adquisición aparecen componentes no deseadas como ruido eléctrico, interferencia de la red eléctrica (50/60 Hz) y señales provenientes de otras fuentes fisiológicas.</p>
            <p>Los filtros permiten seleccionar únicamente el rango de frecuencias de interés y atenuar aquellas componentes que deterioran la calidad de la señal. En esta unidad se estudiará el funcionamiento de los filtros pasivos construidos con resistencias (R), inductores (L) y capacitores (C), analizando su respuesta en frecuencia, la frecuencia de corte y los diferentes tipos de filtros utilizados en sistemas electrónicos y biomédicos.</p>

            <h3>El principio fundamental de los filtros pasivos</h3>
            <p>Los filtros funcionan aprovechando que la impedancia de los componentes eléctricos depende de la frecuencia.</p>
            <p>Mientras que:</p>
            <ul>
              <li>la resistencia mantiene un valor prácticamente constante,</li>
              <li>la reactancia inductiva aumenta con la frecuencia,</li>
              <li>la reactancia capacitiva disminuye con la frecuencia.</li>
            </ul>
            <p>Como consecuencia, determinadas frecuencias encuentran un camino de menor impedancia y otras son atenuadas, permitiendo que el circuito seleccione únicamente la información de interés. Este comportamiento constituye el fundamento físico de los filtros pasivos y de gran parte de los sistemas de acondicionamiento de señales biomédicas.</p>

            <h3>Conceptos Claves</h3>
            
            <div class="row g-3">
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Decibelio (dB)</h4>
                  <p class="small text-secondary mb-0">Unidad logarítmica utilizada para expresar ganancias o pérdidas de voltaje, corriente o potencia.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Impedancia (Z)</h4>
                  <p class="small text-secondary mb-0">Oposición total que presenta un circuito al paso de corriente alterna, considerando resistencia y reactancia.</p>
                </div>
              </div>
              <div class="col-12">
                <div class="card p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Reactancia</h4>
                  <p class="small text-secondary mb-2">Resistencia dependiente de la frecuencia que presentan inductores y capacitores.</p>
                  <ul class="small text-secondary mb-0">
                    <li><strong>Inductiva:</strong> \\(X_L = 2\\pi fL\\)</li>
                    <li><strong>Capacitiva:</strong> \\(X_C = \\frac{1}{2\\pi fC}\\)</li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Frecuencia de corte (\\(f_c\\))</h4>
                  <p class="small text-secondary mb-0">Frecuencia en la cual la salida del filtro disminuye al 70,7 % de su valor máximo (−3 dB).</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Respuesta en frecuencia</h4>
                  <p class="small text-secondary mb-0">Relación entre la ganancia del circuito y la frecuencia de la señal de entrada.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Curva de Bode</h4>
                  <p class="small text-secondary mb-0">Representación gráfica de la ganancia (dB) y la fase de un circuito en función de la frecuencia, generalmente en escala logarítmica.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Tipos de filtros</h4>
                  <ul class="small text-secondary mb-0">
                    <li><strong>Pasabajas:</strong> deja pasar bajas frecuencias.</li>
                    <li><strong>Pasaaltas:</strong> deja pasar altas frecuencias.</li>
                    <li><strong>Pasabanda:</strong> deja pasar únicamente una banda de frecuencias.</li>
                    <li><strong>Rechazabanda:</strong> elimina una banda específica de frecuencias.</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 class="mt-4">Referencias Claves</h3>
            <p>Estas referencias mantienen coherencia con la bibliografía utilizada en tu presentación y son ideales para incluir en la plataforma del curso.</p>
            <ul>
              <li>Boylestad, R. L. <em>Introducción al análisis de circuitos</em>. 12.ª ed. Pearson, 2011.</li>
              <li>Floyd, T. L. <em>Principios de circuitos eléctricos</em>. 8.ª ed. Pearson Education, 2007.</li>
              <li>Kuphaldt, T. R. <em>Lessons in Electric Circuits, Volume II – AC</em>. Sixth Edition.</li>
            </ul>
          `,
          presentation: "https://docs.google.com/presentation/d/1ecwfGixM-jpVmNMDD4x-l-k4Tw2jjJxe/embed?start=false&loop=false&delayms=3000",
          labs: [
            {
              title: "Laboratorio 3: Filtros Pasivos RC y Caracterización de Bode",
              guide: "03 Lab_Filtros_pasivos.docx",
              description: "Diseño físico, simulación por software (Multisim/LTSpice) e implementación práctica de filtros RC pasa-altas y pasa-bajas."
            }
          ],
          simulator: 'laboratorio_virtual_filtros_ruido.html',
          resources: [
            { name: "3_Filtros_pasivos.pptx", type: "pptx", size: "2.8 MB" },
            { name: "“Gettin’ In Tune” with the EMI Filter.pdf", type: "pdf", size: "1.6 MB", url: "public/“Gettin’ In Tune” with the EMI Filter.pdf" },
            { name: "MI-OTA Based First Order Filters.pdf", type: "pdf", size: "2.2 MB", url: "public/MI-OTA Based First Order Filters.pdf" },
            { name: "practical-filter-design-precision-ADCs.pdf", type: "pdf", size: "0.4 MB", url: "public/practical-filter-design-precision-ADCs.pdf" }
          ],
          quizzes: [
            {
              question: "Pregunta 1\n\nDurante el diseño de un sistema de adquisición de bioseñales se desea eliminar el ruido de alta frecuencia, preservando únicamente la información fisiológica de baja frecuencia.\n\n¿Qué tipo de filtro sería el más adecuado?",
              options: [
                "A. Filtro pasaaltas.",
                "B. Filtro pasabajas.",
                "C. Filtro pasabanda.",
                "D. Filtro rechazabanda."
              ],
              answer: 1,
              explanation: "Los filtros pasabajas permiten el paso de las componentes de baja frecuencia y atenúan las frecuencias altas, siendo ampliamente utilizados en el acondicionamiento de bioseñales."
            },
            {
              question: "Pregunta 2\n\nEn un circuito RC pasaaltas, la frecuencia de la señal de entrada aumenta progresivamente por encima de la frecuencia de corte.\n\n¿Qué sucede con el voltaje de salida?",
              options: [
                "A. Disminuye hasta cero.",
                "B. Permanece constante en 0,707 del voltaje de entrada.",
                "C. Aumenta y tiende al valor del voltaje de entrada.",
                "D. Se vuelve independiente de la frecuencia."
              ],
              answer: 2,
              explanation: "En un filtro RC pasaaltas, al aumentar la frecuencia, la reactancia capacitiva disminuye y el voltaje de salida se aproxima al voltaje de entrada."
            },
            {
              question: "Pregunta 3\n\nLa frecuencia de corte de un filtro RC se define como el punto donde el voltaje de salida corresponde aproximadamente al:",
              options: [
                "A. 50 % del voltaje máximo.",
                "B. 70,7 % del voltaje máximo (−3 dB).",
                "C. 90 % del voltaje máximo.",
                "D. 100 % del voltaje máximo."
              ],
              answer: 1,
              explanation: "La frecuencia de corte (fc) se alcanza cuando la salida es aproximadamente el 70,7 % del valor máximo, equivalente a una atenuación de −3 dB."
            },
            {
              question: "Pregunta 4\n\nEn un circuito RLC serie se observa que la reactancia inductiva (XL) es igual a la reactancia capacitiva (XC).\n\n¿Cuál es la condición del circuito?",
              options: [
                "A. El circuito es predominantemente capacitivo.",
                "B. El circuito presenta la máxima reactancia.",
                "C. El circuito se encuentra en resonancia y se comporta como una resistencia pura.",
                "D. El circuito deja de conducir corriente."
              ],
              answer: 2,
              explanation: "Cuando XL = XC, ambas reactancias se cancelan y el circuito entra en resonancia, comportándose como un circuito puramente resistivo."
            },
            {
              question: "Pregunta 5\n\nSe requiere diseñar un sistema que permita únicamente el paso de señales comprendidas entre 100 Hz y 500 Hz, rechazando las frecuencias inferiores y superiores.\n\n¿Qué tipo de filtro debería emplearse?",
              options: [
                "A. Pasabajas.",
                "B. Pasaaltas.",
                "C. Pasabanda.",
                "D. Rechazabanda."
              ],
              answer: 2,
              explanation: "Un filtro pasabanda permite el paso únicamente de un intervalo específico de frecuencias, denominado banda de paso."
            },
            {
              question: "Pregunta 6\n\nDurante la caracterización de un filtro, un ingeniero observa la ganancia en función de la frecuencia utilizando una escala logarítmica.\n\n¿Qué herramienta gráfica está utilizando?",
              options: [
                "A. Histograma.",
                "B. Diagrama fasorial.",
                "C. Curva o diagrama de Bode.",
                "D. Transformada de Fourier."
              ],
              answer: 2,
              explanation: "El diagrama de Bode representa la respuesta en frecuencia de un circuito, mostrando cómo varía su ganancia y, en muchos casos, su fase respecto a la frecuencia. La presentación utiliza estas curvas para analizar los diferentes filtros pasivos."
            },
            {
              question: "💡 Pregunta Desafío (Opcional)\n\nUn sistema de adquisición de ECG presenta una fuerte interferencia proveniente de la red eléctrica de 60 Hz, mientras que la información clínica de interés se encuentra entre 0,5 Hz y 40 Hz.\n\n¿Cuál sería la estrategia más adecuada para reducir esta interferencia sin afectar significativamente la señal fisiológica?",
              options: [
                "A. Utilizar únicamente un filtro pasaaltas con frecuencia de corte de 100 Hz.",
                "B. Utilizar un filtro pasabajas con frecuencia de corte de 5 Hz.",
                "C. Incorporar un filtro rechazabanda (notch) centrado en 60 Hz.",
                "D. Eliminar completamente todas las frecuencias superiores a 1 Hz."
              ],
              answer: 2,
              explanation: "Cuando la interferencia se concentra en una frecuencia específica, como los 50 o 60 Hz de la red eléctrica, un filtro rechazabanda (notch) permite atenuarla de forma selectiva, preservando la mayor parte de la información útil de la bioseñal. Este tipo de filtro se introduce en la presentación como una de las configuraciones básicas de los filtros pasivos."
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
            "Comprender el funcionamiento de los filtros activos y su diferencia respecto a los filtros pasivos.",
            "Identificar el papel de los amplificadores operacionales dentro del diseño de filtros electrónicos.",
            "Analizar la respuesta en frecuencia de filtros activos pasa bajas y pasa altas.",
            "Interpretar la ganancia, la frecuencia de corte y el comportamiento del filtro mediante diagramas de Bode.",
            "Diseñar filtros activos básicos de primer orden para aplicaciones de bioinstrumentación."
          ],
          summary: "Estudio de los filtros activos mediante el uso de amplificadores operacionales. Análisis de respuesta en frecuencia, ganancia, frecuencia de corte y diagramas de Bode para aplicaciones en bioinstrumentación.",
          content: `
            <h3>Breve introducción</h3>
            <p>En bioinstrumentación, muchas señales fisiológicas presentan amplitudes muy pequeñas y suelen estar contaminadas por ruido e interferencias. Aunque los filtros pasivos permiten atenuar componentes no deseadas, presentan limitaciones relacionadas con pérdidas de señal, impedancia y ausencia de ganancia.</p>
            <p>Los filtros activos superan estas limitaciones al incorporar amplificadores operacionales, permitiendo no solo seleccionar determinadas bandas de frecuencia, sino también amplificar la señal mientras se realiza el proceso de filtrado. Esta característica los convierte en una de las herramientas fundamentales para el acondicionamiento de señales biomédicas como ECG, EMG y EEG. La presentación desarrolla esta idea mediante ejemplos de filtros pasa bajas y pasa altas implementados con amplificadores operacionales.</p>
            
            <h3 class="mt-4">Principio (Teorema) para Filtros Activos</h3>
            <p>Un filtro activo combina una red selectiva RC con un amplificador operacional para controlar la respuesta en frecuencia del sistema.</p>
            <p>Su comportamiento está determinado por dos parámetros fundamentales:</p>
            <ul>
                <li><strong>Frecuencia de corte:</strong> <i>f<sub>c</sub> = 1 / (2πRC)</i></li>
                <li><strong>Ganancia del amplificador no inversor:</strong> <i>A<sub>F</sub> = 1 + (R<sub>1</sub> / R<sub>2</sub>)</i></li>
            </ul>
            <p>De esta manera, el filtro no solamente atenúa determinadas frecuencias, sino que también puede proporcionar ganancia sobre la banda de paso, característica que no poseen los filtros pasivos. La presentación utiliza estas expresiones para explicar el diseño tanto de filtros pasa bajas como pasa altas.</p>
            
            <h3 class="mt-4">Conceptos Claves</h3>
            <div class="row g-3 mt-3">
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Amplificador operacional (AO)</h4>
                  <p class="small text-secondary mb-0">Dispositivo electrónico de alta ganancia utilizado para amplificar la diferencia de voltaje entre dos señales de entrada.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Filtro activo</h4>
                  <p class="small text-secondary mb-0">Circuito que utiliza componentes pasivos junto con un amplificador operacional para seleccionar y amplificar determinadas bandas de frecuencia.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Frecuencia de corte (fc)</h4>
                  <p class="small text-secondary mb-0">Frecuencia que separa la banda de paso de la banda de atenuación y donde la ganancia disminuye aproximadamente 3 dB respecto al valor máximo.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Ganancia (A<sub>F</sub>)</h4>
                  <p class="small text-secondary mb-0">Relación entre el voltaje de salida y el voltaje de entrada, determinada por la configuración del amplificador operacional.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Banda de paso</h4>
                  <p class="small text-secondary mb-0">Rango de frecuencias que atraviesa el filtro con mínima atenuación y donde la señal conserva prácticamente toda su amplitud.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Diagrama de Bode</h4>
                  <p class="small text-secondary mb-0">Representación gráfica de la ganancia del filtro en función de la frecuencia, utilizada para analizar su respuesta en frecuencia.</p>
                </div>
              </div>
              <div class="col-12">
                <div class="card p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Especificaciones del amplificador operacional</h4>
                  <p class="small text-secondary mb-0">Parámetros como Slew Rate, Gain Bandwidth (GBW), CMRR, PSRR e impedancias de entrada y salida determinan el desempeño real del filtro activo.</p>
                </div>
              </div>
            </div>

            <h3 class="mt-4">Referencias Claves</h3>
            <ul>
                <li>Sedra, A. S., & Smith, K. C. Microelectronic Circuits. 8th ed. Oxford University Press, 2020.</li>
                <li>Scherz, P., & Monk, S. Practical Electronics for Inventors. 5th ed. McGraw-Hill, 2023.</li>
                <li>Alexander, C., & Sadiku, M. Fundamentals of Electric Circuits. 7th ed. McGraw-Hill, 2021.</li>
                <li>Nilsson, J., & Riedel, S. Electric Circuits. 12th ed. Pearson, 2022.</li>
            </ul>
          `,
          presentation: "https://docs.google.com/presentation/d/e/2PACX-1vQ5_GMZ0sEcVnhgh-WKm0gcVnDe3ane4weBFPwSprmw3NJBVfYH_u55SClrxFTgkg/pubembed?start=false&loop=false&delayms=3000",
          labs: [
            {
              title: "Laboratorio 4: Diseño e Implementación de Filtros Activos",
              guide: "04 Lab_Filtros_activos.docx",
              description: "Diseño y montaje de filtros activos de segundo orden Butterworth pasa-altas y pasa-bajas con Op-Amps TL084 u opamps biomédicos."
            }
          ],
          simulator: 'laboratorio_virtual_filtros_activos.html',
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
