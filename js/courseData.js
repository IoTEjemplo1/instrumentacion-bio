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
          isEnabled: true,
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
            <div class="row g-3">
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Mensurando</h4>
                  <p class="small text-secondary mb-0">La variable física o química que se desea medir (ej. presión arterial, concentración de O2, ECG).</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Transductor / Sensor</h4>
                  <p class="small text-secondary mb-0">Convierte la variable fisiológica en una señal eléctrica (ej. electrodos de Ag/AgCl, termistores, sensores ópticos).</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Acondicionador de Señales</h4>
                  <p class="small text-secondary mb-0">Amplifica y filtra la señal analógica para eliminar el ruido y adaptar su rango (ej. amplificador de instrumentación, filtros activos).</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Conversor Analógico a Digital (ADC)</h4>
                  <p class="small text-secondary mb-0">Digitaliza la señal acondicionada para su procesamiento (ej. ADC interno de microcontroladores).</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Procesamiento y Visualización</h4>
                  <p class="small text-secondary mb-0">Microcontroladores, DSPs o computadoras donde se visualiza o procesa digitalmente el dato (ej. Arduino, ESP32, Python, MATLAB).</p>
                </div>
              </div>
            </div>
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
          isEnabled: true,
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
            <div class="row g-3">
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Medición</h4>
                  <p class="small text-secondary mb-0">Proceso de determinar el valor de una magnitud física mediante su comparación con un patrón de referencia.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Metrología</h4>
                  <p class="small text-secondary mb-0">Ciencia de las mediciones que garantiza la exactitud, confiabilidad y trazabilidad de los resultados obtenidos.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Magnitud Física</h4>
                  <p class="small text-secondary mb-0">Propiedad de un fenómeno, cuerpo o sustancia que puede medirse y expresarse mediante un valor y una unidad.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Señal DC (Corriente Continua)</h4>
                  <p class="small text-secondary mb-0">Señal cuyo valor y polaridad permanecen constantes en el tiempo.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Señal AC (Corriente Alterna)</h4>
                  <p class="small text-secondary mb-0">Señal cuya amplitud y polaridad varían periódicamente con el tiempo.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Frecuencia</h4>
                  <p class="small text-secondary mb-0">Número de ciclos que ocurren en un segundo; se expresa en Hertz (Hz).</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Sensor y Transductor</h4>
                  <p class="small text-secondary mb-0">Dispositivos que detectan una magnitud física y la convierten en una señal útil para su medición y procesamiento.</p>
                </div>
              </div>
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
          isEnabled: true,
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
            <div class="row g-3">
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Dominio del tiempo</h4>
                  <p class="small text-secondary mb-0">Representación de una señal según cómo varía su amplitud a lo largo del tiempo.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Dominio de la frecuencia</h4>
                  <p class="small text-secondary mb-0">Representación que muestra las frecuencias que componen una señal y la contribución de cada una.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Transformada de Fourier</h4>
                  <p class="small text-secondary mb-0">Herramienta matemática que permite convertir una señal del dominio del tiempo al dominio de la frecuencia.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Frecuencia de muestreo (Fs)</h4>
                  <p class="small text-secondary mb-0">Número de muestras de una señal adquiridas por segundo durante el proceso de digitalización.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Teorema de Nyquist</h4>
                  <p class="small text-secondary mb-0">Establece que la frecuencia de muestreo debe ser, como mínimo, el doble de la máxima frecuencia presente en la señal para evitar el aliasing.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Espectro de frecuencia</h4>
                  <p class="small text-secondary mb-0">Distribución de las amplitudes de las diferentes componentes frecuenciales presentes en una señal.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Armónicos</h4>
                  <p class="small text-secondary mb-0">Componentes de frecuencia que son múltiplos enteros de la frecuencia fundamental y determinan la forma de una señal periódica.</p>
                </div>
              </div>
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
          isEnabled: true,
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
          isEnabled: true,
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
            { name: "4_Filtros_activos.pptx", type: "pptx", size: "3.5 MB" },
            { name: "A Survey of Impedance Measurement.pdf", type: "pdf", size: "611 KB" },
            { name: "Current comparator for both AC and DC.pdf", type: "pdf", size: "1.2 MB" },
            { name: "“Gettin’ In Tune” with the EMI Filter.pdf", type: "pdf", size: "1.6 MB" }
          ],
          quizzes: [
            {
              question: "¿Cuál es una de las principales ventajas de utilizar un amplificador operacional en un filtro activo?",
              options: [
                "Eliminar la necesidad de resistencias y condensadores.",
                "Permitir amplificar la señal y reducir el efecto de la carga sobre el filtro.",
                "Hacer que todas las frecuencias tengan la misma amplitud.",
                "Convertir automáticamente una señal analógica en digital."
              ],
              answer: 1,
              explanation: "La alta impedancia de entrada y baja impedancia de salida del amplificador operacional ayudan a aislar las etapas del circuito y, además, permiten incorporar ganancia."
            },
            {
              question: "Una señal contiene componentes de 5 Hz, 100 Hz y 2 kHz. Si se aplica un filtro pasa-bajas con fc = 150 Hz, ¿qué comportamiento se espera?",
              options: [
                "Se atenúan principalmente 5 Hz y 100 Hz.",
                "Se atenúan todas las componentes por igual.",
                "Se conservan principalmente 5 Hz y 100 Hz, mientras 2 kHz se atenúa.",
                "Solo permanece la componente de 2 kHz."
              ],
              answer: 2,
              explanation: "El filtro pasa-bajas permite el paso de las componentes situadas por debajo de su frecuencia de corte y atenúa progresivamente las frecuencias superiores."
            },
            {
              question: "En un filtro activo de primer orden, ¿qué representa la frecuencia de corte fc?",
              options: [
                "La frecuencia en la que la salida necesariamente se hace cero.",
                "La frecuencia en la que la ganancia alcanza el doble de su valor máximo.",
                "La frecuencia en la que la ganancia corresponde aproximadamente al 70,7 % de la ganancia de banda de paso.",
                "La máxima frecuencia que puede generar el amplificador operacional."
              ],
              answer: 2,
              explanation: "En f=fc, la magnitud de la ganancia corresponde a aproximadamente 0,707 AF, equivalente a una reducción de 3 dB respecto a la ganancia de banda de paso. Esto se desarrolla en las diapositivas 9, 13 y 14."
            },
            {
              question: "En un filtro RC de primer orden, si se aumenta el valor del condensador C manteniendo constante R, ¿qué ocurre con la frecuencia de corte?",
              options: [
                "Aumenta.",
                "Disminuye.",
                "Permanece constante.",
                "Se vuelve igual a la ganancia del amplificador."
              ],
              answer: 1,
              explanation: "Como fc depende inversamente del producto RC, incrementar la capacitancia desplaza la frecuencia de corte hacia valores menores."
            },
            {
              question: "En el ejemplo de la presentación, un filtro pasa-altas tiene fc = 1 kHz y una ganancia de banda de paso AF = 2. ¿Qué debería observarse aproximadamente para una señal de 10 kHz?",
              options: [
                "Una fuerte atenuación de la señal.",
                "Una ganancia cercana a 0.",
                "Una ganancia cercana a 2, equivalente aproximadamente a 6 dB.",
                "Una ganancia exactamente de −3 dB."
              ],
              answer: 2,
              explanation: "A frecuencias muy superiores a fc, el filtro pasa-altas se encuentra en su banda de paso y la ganancia se aproxima a AF. En el ejemplo de las diapositivas 15–17, la ganancia llega aproximadamente a 2 (6,02 dB)."
            },
            {
              question: "Se desea acondicionar una señal biomédica eliminando variaciones muy lentas de la línea base, pero conservando componentes de mayor frecuencia. ¿Qué filtro sería conceptualmente más apropiado?",
              options: [
                "Pasa-bajas.",
                "Pasa-altas.",
                "Seguidor de voltaje.",
                "Amplificador sumador."
              ],
              answer: 1,
              explanation: "Un filtro pasa-altas atenúa las componentes de baja frecuencia y permite el paso de las componentes superiores a su frecuencia de corte, principio mostrado en las diapositivas 11–14."
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
          isEnabled: false,
          number: 6,
          title: "Instrumentación de Temperatura",
          duration: "4 horas",
          difficulty: "Intermedio",
          objectives: [
            "Comprender los fundamentos físicos de la temperatura como variable de interés en bioinstrumentación.",
            "Diferenciar los principales sensores de temperatura utilizados en ingeniería biomédica: RTD, termistores, termopares y sensores integrados.",
            "Explicar el funcionamiento del Puente de Wheatstone como técnica para medir pequeñas variaciones de resistencia.",
            "Analizar las ventajas y limitaciones de las configuraciones de medición a dos y cuatro hilos.",
            "Seleccionar el sensor de temperatura más adecuado según los requerimientos de precisión, sensibilidad, rango de medición y aplicación biomédica.",
            "Interpretar aplicaciones clínicas e industriales donde la medición precisa de temperatura resulta crítica."
          ],
          summary: "La temperatura es una de las variables fisiológicas y de proceso más importantes en ingeniería biomédica, ya que influye directamente sobre el funcionamiento celular y metabólico. Esta sesión aborda sus fundamentos y medición.",
          content: `
            <h3>Breve introducción</h3>
            <p>La temperatura es una de las variables fisiológicas y de proceso más importantes en ingeniería biomédica, ya que influye directamente sobre el funcionamiento celular, la actividad metabólica, la estabilidad de medicamentos, la esterilización de equipos médicos y el monitoreo continuo de pacientes.</p>
            <p>A diferencia de otras variables fisiológicas, la temperatura puede medirse mediante diferentes principios físicos, como la variación de la resistencia eléctrica, la generación de voltaje por efecto termoeléctrico o la radiación infrarroja emitida por los cuerpos.</p>
            <p>En esta sesión se estudiarán los sensores de temperatura más utilizados en instrumentación electrónica y biomédica, analizando su principio de funcionamiento, características metrológicas y aplicaciones prácticas. Además, se introducirá el Puente de Wheatstone como una de las técnicas más empleadas para convertir pequeñas variaciones resistivas en señales eléctricas fácilmente medibles.</p>
            
            <h3 class="mt-4">Teorema general o principal del tema: Puente de Wheatstone</h3>
            <p>El Puente de Wheatstone es uno de los circuitos fundamentales de la instrumentación electrónica para medir pequeñas variaciones de resistencia.</p>
            <p>Está formado por cuatro resistencias conectadas en forma de puente y alimentadas mediante una fuente de excitación. Cuando el puente se encuentra en equilibrio, la diferencia de potencial entre los nodos centrales es cero.</p>
            <p>La condición de equilibrio viene dada por:</p>
            <div class="p-3 bg-light rounded text-center my-3 fw-bold fs-5 text-dark" style="font-family: monospace;">
              R<sub>2</sub> / R<sub>1</sub> = R<sub>x</sub> / R<sub>3</sub>
            </div>
            <p>donde:</p>
            <ul class="text-secondary small">
              <li><strong>R<sub>x</sub></strong> corresponde al sensor resistivo.</li>
              <li><strong>R<sub>1</sub>, R<sub>2</sub>, R<sub>3</sub></strong> son resistencias conocidas.</li>
            </ul>
            <p>Cuando la resistencia del sensor cambia debido a una variación de temperatura, el puente pierde el equilibrio y aparece un voltaje diferencial proporcional al cambio de resistencia.</p>
            <p>En bioinstrumentación, el Puente de Wheatstone suele combinarse con amplificadores de instrumentación para aumentar la sensibilidad y reducir el ruido.</p>
            
            <h3 class="mt-4">Conceptos claves</h3>
            <div class="row g-3">
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Temperatura</h4>
                  <p class="small text-secondary mb-0">Magnitud física que representa la energía cinética promedio de las partículas de un cuerpo y determina el sentido del flujo de calor entre dos sistemas.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Energía cinética</h4>
                  <p class="small text-secondary mb-0">Movimiento interno de átomos y moléculas que aumenta conforme se incrementa la temperatura.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">RTD (Resistance Temperature Detector)</h4>
                  <p class="small text-secondary mb-0">Sensor resistivo fabricado normalmente en platino (PT100 o PT1000) cuya resistencia aumenta casi linealmente con la temperatura.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">PT100</h4>
                  <p class="small text-secondary mb-0">RTD cuya resistencia nominal es 100 Ω a 0 °C. Es el estándar industrial más utilizado.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Termistor</h4>
                  <p class="small text-secondary mb-0">Resistencia cuyo valor cambia significativamente con la temperatura.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Termopar</h4>
                  <p class="small text-secondary mb-0">Sensor basado en el efecto Seebeck. Genera directamente un voltaje proporcional a la diferencia de temperatura entre dos uniones metálicas.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Efecto Seebeck</h4>
                  <p class="small text-secondary mb-0">Dos metales distintos generan una diferencia de potencial cuando sus uniones se encuentran a diferentes temperaturas.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Efecto Peltier</h4>
                  <p class="small text-secondary mb-0">Una corriente eléctrica aplicada a la unión entre dos materiales produce absorción o liberación de calor.</p>
                </div>
              </div>
              <div class="col-12">
                <div class="card p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Sensores infrarrojos</h4>
                  <p class="small text-secondary mb-0">Permiten medir temperatura sin contacto físico mediante la radiación térmica emitida por los objetos.</p>
                </div>
              </div>
            </div>

            <h3 class="mt-4">Referencias claves</h3>
            <ul class="small text-secondary">
              <li>Bentley JP. Principles of Measurement Systems. 6th ed. Pearson; 2021.</li>
              <li>Fraden J. Handbook of Modern Sensors: Physics, Designs, and Applications. 6th ed. Springer; 2022.</li>
              <li>Webster JG, Eren H. Measurement, Instrumentation and Sensors Handbook. CRC Press; 2023.</li>
            </ul>

            <h3 class="mt-4">Normas</h3>
            <ul class="small text-secondary">
              <li>IEC 60751:2022. Industrial Platinum Resistance Thermometers and Platinum Temperature Sensors.</li>
              <li>ASTM E230/E230M-24. Standard Specification and Temperature-Electromotive Force Tables for Thermocouples.</li>
            </ul>
          `,
          presentation: "https://docs.google.com/presentation/d/e/2PACX-1vSQDImKoxolR672i9QmW4jkl1JGbdb4O3kgf0_rzegIBxB0U-vjAQWhDpVO3jpUOA/pubembed?start=false&loop=false&delayms=3000",
          labs: [
            {
              title: "Laboratorio 5: Medición de Temperatura con PT100 y NTC",
              guide: "Lab_Temperatura_PT100.docx",
              description: "Diseño del puente de Wheatstone y amplificación con Op-Amp de instrumentación (AD620) para sensor de platino."
            }
          ],
          simulator: 'thermolab_instrumentacion_temperatura.html',
          resources: [
            { name: "5_Instrumentación_temperatura.pptx", type: "pptx", size: "2.6 MB" },
            { name: "Recent Advances in Flexible Materials for Wearable Optical Biosensors.pdf", type: "pdf", size: "2.8 MB" },
            { name: "Wearable and Flexible Sensor Devices.pdf", type: "pdf", size: "1.4 MB" }
          ],
          quizzes: [
            {
              question: "Pregunta 1\n\n¿Por qué la medición de temperatura mediante RTD suele realizarse utilizando un Puente de Wheatstone?",
              options: [
                "A. Para aumentar la corriente del sensor.",
                "B. Para eliminar completamente el ruido eléctrico.",
                "C. Porque permite detectar pequeñas variaciones de resistencia con alta sensibilidad.",
                "D. Porque convierte la temperatura directamente en corriente."
              ],
              answer: 2,
              explanation: "Correcto. El puente de Wheatstone convierte pequeñas variaciones de resistencia (como las de un RTD) en una señal de voltaje medible y diferencial."
            },
            {
              question: "Pregunta 2\n\n¿Cuál de los siguientes sensores ofrece generalmente la mayor precisión para aplicaciones biomédicas?",
              options: [
                "A. NTC",
                "B. Termopar tipo K",
                "C. RTD PT100",
                "D. LM35"
              ],
              answer: 2,
              explanation: "Correcto. Los sensores RTD (como el PT100) son conocidos como el estándar de oro en precisión y estabilidad para mediciones clínicas e industriales."
            },
            {
              question: "Pregunta 3\n\n¿Qué efecto físico explica el funcionamiento de un termopar?",
              options: [
                "A. Hall",
                "B. Joule",
                "C. Seebeck",
                "D. Faraday"
              ],
              answer: 2,
              explanation: "Correcto. El efecto Seebeck establece que la diferencia de temperatura entre dos uniones de metales distintos genera una diferencia de potencial."
            },
            {
              question: "Pregunta 4\n\n¿Cuál es la principal ventaja de una medición a cuatro hilos?",
              options: [
                "A. Reduce el consumo de energía.",
                "B. Disminuye la sensibilidad.",
                "C. Compensa la resistencia de los cables de conexión.",
                "D. Aumenta la temperatura del sensor."
              ],
              answer: 2,
              explanation: "Correcto. Al usar 4 hilos, se separa el circuito de excitación del de medición, cancelando efectivamente la resistencia parásita de los cables largos."
            },
            {
              question: "Pregunta 5\n\nUn sensor NTC presenta un incremento de temperatura. ¿Qué ocurre con su resistencia?",
              options: [
                "A. Permanece constante.",
                "B. Aumenta linealmente.",
                "C. Disminuye.",
                "D. Se vuelve infinita."
              ],
              answer: 2,
              explanation: "Correcto. Las NTC (Coeficiente de Temperatura Negativo) disminuyen su resistencia exponencialmente conforme aumenta la temperatura."
            },
            {
              question: "Pregunta 6\n\nEn un sistema de monitoreo de pacientes en UCI, ¿qué sensor sería el más adecuado para medir temperatura corporal con alta precisión y estabilidad durante varias horas?",
              options: [
                "A. Termopar tipo J.",
                "B. RTD PT100 o PT1000.",
                "C. Interruptor bimetálico.",
                "D. Sensor piezoeléctrico."
              ],
              answer: 1,
              explanation: "Correcto. Los RTD PT100/PT1000 garantizan la estabilidad y alta precisión requerida durante el monitoreo a largo plazo en UCI."
            }
          ]
        },
        {
          id: "clase-07",
          isEnabled: false,
          number: 7,
          title: "Sensores Piezoeléctricos y Ultrasonido",
          duration: "4 horas",
          difficulty: "Avanzado",
          objectives: [
            "Comprender el principio físico de la piezoelectricidad y diferenciar los efectos piezoeléctricos directo e inverso.",
            "Relacionar la deformación mecánica de un material piezoeléctrico con la generación de carga, voltaje o desplazamiento.",
            "Interpretar el modelo eléctrico equivalente y la respuesta en frecuencia de un sensor piezoeléctrico.",
            "Analizar la influencia del acondicionamiento de señal, la impedancia de entrada y las capacitancias parásitas sobre la medición.",
            "Identificar aplicaciones de sensores piezoeléctricos en bioinstrumentación, especialmente en medición de pulso, presión, vibraciones y ultrasonido.",
            "Integrar un sensor piezoeléctrico con etapas básicas de acondicionamiento para adquirir una señal fisiológica."
          ],
          summary: "Los materiales piezoeléctricos permiten realizar una conversión directa entre los dominios mecánico y eléctrico, fundamentales en bioinstrumentación para detectar pulso, presión, vibraciones y ultrasonido.",
          content: `
            <h3>Breve introducción</h3>
            <p>Los materiales piezoeléctricos permiten realizar una conversión directa entre los dominios mecánico y eléctrico. Cuando determinados materiales son sometidos a una fuerza, presión o deformación, aparece una redistribución de cargas eléctricas capaz de producir una señal medible. De manera inversa, la aplicación de un campo eléctrico puede generar una deformación mecánica.</p>
            <p>Esta capacidad de transducción hace que los materiales piezoeléctricos sean especialmente relevantes en bioinstrumentación, donde pueden utilizarse para detectar fenómenos mecánicos asociados al cuerpo humano como pulso arterial, presión, vibraciones, movimiento y señales acústicas, además de actuar como emisores y receptores de ultrasonido.</p>
            <p>En la práctica propuesta para el curso, este principio se utiliza para detectar mecánicamente la onda de pulso, acondicionarla electrónicamente y posteriormente estimar parámetros como la frecuencia cardíaca.</p>

            <h3 class="mt-4">Teorema o principio general del tema</h3>
            <h4>Principio piezoeléctrico</h4>
            <p>La piezoelectricidad describe el acoplamiento entre variables mecánicas y eléctricas en determinados materiales.</p>
            
            <h4>Efecto piezoeléctrico directo</h4>
            <p>Una fuerza o esfuerzo mecánico produce una carga eléctrica:</p>
            <div class="p-3 bg-light border rounded text-center my-3" style="font-size: 1.2rem;">
              <strong>Q = d · F</strong>
            </div>
            <p>donde:</p>
            <ul>
              <li><strong>Q:</strong> carga eléctrica generada [C]</li>
              <li><strong>d:</strong> coeficiente piezoeléctrico [C/N]</li>
              <li><strong>F:</strong> fuerza aplicada [N]</li>
            </ul>
            <p>Considerando la capacitancia equivalente del elemento (\(V = Q / C_p\)):</p>
            <div class="p-3 bg-light border rounded text-center my-3" style="font-size: 1.2rem;">
              <strong>V = (d / C<sub>p</sub>) · F</strong>
            </div>
            <p>De manera simplificada puede expresarse como:</p>
            <div class="p-3 bg-light border rounded text-center my-3" style="font-size: 1.2rem;">
              <strong>V = λ · F</strong>
            </div>
            <p>siendo <strong>λ</strong> la sensibilidad efectiva del sensor. Esta relación es precisamente la utilizada en el modelo presentado en el material de clase.</p>
            
            <h4>Efecto piezoeléctrico inverso</h4>
            <p>El fenómeno es reversible: la aplicación de un campo eléctrico produce una deformación mecánica:</p>
            <div class="p-3 bg-light border rounded text-center my-3" style="font-size: 1.2rem;">
              <strong>S = d · E</strong>
            </div>
            <p>donde <strong>S</strong> representa la deformación y <strong>E</strong> el campo eléctrico aplicado.</p>
            
            <p>Por tanto, conceptualmente:</p>
            <ul>
              <li><strong>Efecto directo:</strong> Fuerza / Presión / Vibración → Material piezoeléctrico → Carga eléctrica</li>
              <li><strong>Efecto inverso:</strong> Campo eléctrico → Material piezoeléctrico → Deformación / Vibración</li>
            </ul>
            <p>Esta dualidad explica por qué un transductor piezoeléctrico puede funcionar tanto como sensor como actuador.</p>

            <h3 class="mt-4">Conceptos claves</h3>
            
            <div class="row g-3">
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Principio piezoeléctrico</h4>
                  <p class="small text-secondary mb-0">La piezoelectricidad describe el acoplamiento entre variables mecánicas y eléctricas en determinados materiales.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Efecto piezoeléctrico directo</h4>
                  <p class="small text-secondary mb-0">Una fuerza o esfuerzo mecánico produce una carga eléctrica:</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Efecto piezoeléctrico inverso</h4>
                  <p class="small text-secondary mb-0">El fenómeno es reversible: la aplicación de un campo eléctrico produce una deformación mecánica:</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Piezoelectricidad</h4>
                  <p class="small text-secondary mb-0">Propiedad de ciertos materiales de generar carga eléctrica cuando experimentan deformación mecánica y, de manera inversa, deformarse ante un campo eléctrico.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Polarización</h4>
                  <p class="small text-secondary mb-0">La respuesta piezoeléctrica depende de la orientación de los dipolos eléctricos internos del material. El proceso de polarización permite establecer una dirección preferencial para su respuesta.</p>
                </div>
              </div>
            </div>
            <h3 class="mt-4">Referencias Claves</h3>
            <ul class="small text-secondary ps-3 mb-4">
              <li class="mb-2"><strong>Webster, J. G.</strong> <em>Medical Instrumentation: Application and Design.</em> Wiley. (Capítulos sobre sensores piezoeléctricos).</li>
              <li class="mb-2"><strong>Cobbold, R. S. C.</strong> <em>Foundations of Biomedical Ultrasound.</em> Oxford University Press, 2006.</li>
              <li class="mb-2"><strong>Khandpur, R. S.</strong> <em>Handbook of Biomedical Instrumentation.</em> McGraw-Hill.</li>
            </ul>
          
          
          `,
          presentation: "https://docs.google.com/presentation/d/e/2PACX-1vTY8fiGHuAjRoqPFfX9i39rDlzI4o9rGCU94ZzAeN2XCNmbL1H6ZmSkmgCplpk2dA/pubembed?start=false&loop=false&delayms=3000",
          labs: [
            {
              title: "Laboratorio 6: Detección de Pulso y Presión con Sensores Piezoeléctricos",
              guide: "Lab_presion_sanguinea_piezo.docx",
              description: "Implementación de un circuito acondicionador de carga para captar el pulso cardiaco radial usando un transductor piezoeléctrico."
            }
          ],
          simulator: 'piezolab_bioinstrumentacion_v2.html',
          resources: [
            { name: "Piezoelectric Chemosensors and Biosensors in Medical Diagnostics.pdf", type: "pdf", size: "1.8 MB" },
            { name: "Recent development of piezoelectric biosensors.pdf", type: "pdf", size: "2.1 MB" },
            { name: "Flexible piezoelectric materials and strain sensors for wearable electronics and artificial intelligence applications.pdf", type: "pdf", size: "2.4 MB" }
          ],
          quizzes: [
            {
              question: "Pregunta 1\n\nUn sensor piezoeléctrico es sometido a una fuerza mecánica variable y genera una carga eléctrica. ¿Qué fenómeno explica esta conversión?",
              options: [
                "A. Efecto Hall",
                "B. Efecto piezoeléctrico directo",
                "C. Efecto piezoeléctrico inverso",
                "D. Efecto termoeléctrico"
              ],
              answer: 1,
              explanation: "Correcto. El efecto piezoeléctrico directo es el fenómeno que convierte energía mecánica (fuerza/presión/vibración) en energía eléctrica (carga/voltaje)."
            },
            {
              question: "Pregunta 2\n\n¿Por qué un sensor piezoeléctrico resulta más apropiado para detectar cambios dinámicos de presión o vibración que una fuerza perfectamente constante durante largos periodos?",
              options: [
                "A. Porque necesita alimentación AC",
                "B. Porque su comportamiento capacitivo y las resistencias de fuga hacen que la carga generada decaiga con el tiempo",
                "C. Porque solo funciona en resonancia",
                "D. Porque la fuerza constante destruye la polarización"
              ],
              answer: 1,
              explanation: "Correcto. Al comportarse como un condensador en paralelo con una resistencia de fuga, la carga generada por un esfuerzo constante se disipa con el tiempo, haciéndolo ideal para medidas dinámicas pero inadecuado para mediciones estáticas o muy lentas."
            },
            {
              question: "Pregunta 3\n\nSi se incrementa considerablemente la longitud del cable entre un sensor piezoeléctrico y su amplificador, ¿qué efecto puede producirse?",
              options: [
                "A. Aumento automático de sensibilidad",
                "B. Disminución de la capacitancia equivalente",
                "C. Alteración de la señal debido a la capacitancia parásita del cable",
                "D. Eliminación del ruido eléctrico"
              ],
              answer: 2,
              explanation: "Correcto. La capacitancia del cable se suma en paralelo a la del sensor, formando un divisor de carga que atenúa el voltaje medido, especialmente si no se utiliza un acondicionamiento adecuado como un amplificador de carga."
            },
            {
              question: "Pregunta 4\n\n¿Qué característica distingue principalmente el efecto piezoeléctrico directo del inverso?",
              options: [
                "A. El directo convierte energía mecánica en eléctrica y el inverso eléctrica en mecánica",
                "B. El directo solo ocurre con corriente continua",
                "C. El inverso no depende del material",
                "D. Ambos producen exclusivamente señales eléctricas"
              ],
              answer: 0,
              explanation: "Correcto. Esta es la diferencia fundamental que permite usar los materiales piezoeléctricos tanto como sensores (efecto directo) como actuadores o emisores de ultrasonido (efecto inverso)."
            },
            {
              question: "Pregunta 5\n\nEn el laboratorio se desea registrar una onda de pulso utilizando un sensor piezoeléctrico. ¿Cuál sería la cadena de instrumentación más adecuada?",
              options: [
                "A. Sensor → ADC → fuente → osciloscopio",
                "B. Sensor → amplificador de carga → filtrado → amplificación → ADC",
                "C. Sensor → amplificador de potencia → actuador",
                "D. Sensor → puente de Wheatstone → ADC"
              ],
              answer: 1,
              explanation: "Correcto. Un sensor piezoeléctrico requiere primero de un amplificador de carga (acondicionamiento de alta impedancia), seguido de filtros y amplificación secundaria de voltaje antes de la digitalización."
            },
            {
              question: "Pregunta 6 — Integración\n\nDurante la medición de la onda de pulso, el estudiante observa una señal de gran amplitud cuando mueve bruscamente el dedo, pero una onda de pulso mucho menor cuando permanece quieto. ¿Cuál es la explicación más razonable?",
              options: [
                "A. El sensor está necesariamente averiado",
                "B. El movimiento genera una perturbación mecánica mucho mayor que la onda fisiológica que se desea medir",
                "C. La frecuencia cardíaca desaparece durante el movimiento",
                "D. El amplificador elimina automáticamente la onda de pulso"
              ],
              answer: 1,
              explanation: "Correcto. La magnitud de la fuerza o aceleración debido al movimiento bruto es órdenes de magnitud mayor que la diminuta presión de la onda de pulso arterial. Este es el clásico problema de artefacto por movimiento mecánico en bioinstrumentación."
            }
          ]
        },
        {
          id: "clase-08",
          isEnabled: false,
          number: 8,
          title: "Instrumentación de Fuerza y Presión (Galgas)",
          duration: "4 horas",
          difficulty: "Intermedio",
          objectives: [
            "Explicar el principio de funcionamiento de las galgas extensométricas y su relación entre deformación mecánica y variación de resistencia.",
            "Analizar el efecto del factor de galga, temperatura y configuración del sensor sobre la medición.",
            "Interpretar el funcionamiento del puente de Wheatstone como circuito de acondicionamiento para pequeñas variaciones resistivas.",
            "Relacionar galgas y celdas de carga con la medición de fuerza, peso y presión.",
            "Reconocer aplicaciones biomédicas como dinamometría, análisis de presión plantar y monitorización biomecánica."
          ],
          summary: "La medición de fuerza, deformación y presión es fundamental en bioinstrumentación para cuantificar fenómenos biomecánicos y fisiológicos mediante el uso de galgas extensométricas.",
          content: `
            <h3>Breve introducción: Instrumentación para fuerza y presión</h3>
            <p>La medición de fuerza, deformación y presión es fundamental en bioinstrumentación para cuantificar fenómenos biomecánicos y fisiológicos. Una de las tecnologías clásicas para realizar estas mediciones son las galgas extensométricas, sensores resistivos capaces de convertir pequeñas deformaciones mecánicas en variaciones de resistencia eléctrica.</p>
            <p>Mediante circuitos como el puente de Wheatstone y etapas adecuadas de acondicionamiento, estas pequeñas variaciones pueden convertirse en señales eléctricas medibles y digitalizables, permitiendo desarrollar sistemas como celdas de carga, dinamómetros y plataformas o plantillas para análisis de presión plantar.</p>
            
            <h3 class="mt-4">Conceptos claves</h3>
            <div class="row g-3">
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Deformación ε</h4>
                  <p class="small text-secondary mb-0">Cambio relativo de longitud producido por un esfuerzo mecánico.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Galga extensométrica</h4>
                  <p class="small text-secondary mb-0">Sensor resistivo cuya resistencia cambia cuando se deforma.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Factor de galga K</h4>
                  <p class="small text-secondary mb-0">Determina la sensibilidad eléctrica de la galga frente a la deformación.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Coeficiente de Poisson</h4>
                  <p class="small text-secondary mb-0">Relaciona la deformación longitudinal con la transversal del material.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Puente de Wheatstone</h4>
                  <p class="small text-secondary mb-0">Convierte pequeñas variaciones de resistencia en una diferencia de voltaje medible.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Compensación térmica</h4>
                  <p class="small text-secondary mb-0">Reduce errores de medida ocasionados por cambios de temperatura.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Celda de carga</h4>
                  <p class="small text-secondary mb-0">Convierte fuerza/peso en deformación mecánica detectada mediante galgas.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Presión</h4>
                  <p class="small text-secondary mb-0">Fuerza aplicada por unidad de área: P = F / A.</p>
                </div>
              </div>
            </div>

            <h3 class="mt-4">Principio Físico</h3>
            <p>Una galga es un conductor metálico delgado cuyo valor óhmico cambia al ser estirado o comprimido por fuerzas mecánicas. La deformación unitaria \\(\\epsilon = \\Delta L / L\\) se relaciona con el cambio resistivo \\(\\Delta R / R\\) mediante el Factor de Galga (\\(K\\)):</p>
            <div class="p-3 bg-light border rounded text-center my-3" style="font-size: 1.2rem;">
              <strong>ΔR / R = K · ε</strong>
            </div>
            
            <div class="callout clinical">
              <div class="callout-icon">🔬</div>
              <div class="callout-content">
                <div class="callout-title">Caso Clínico: Plantillas de Marcha</div>
                <p>Las plantillas sensorizadas integran múltiples galgas o sensores capacitivos/resistivos de película delgada bajo la planta del pie. Miden la distribución de fuerzas durante el ciclo de marcha, ayudando a diagnosticar pie diabético, problemas de postura y optimizar plantillas ortopédicas.</p>
              </div>
            </div>
            <h3 class="mt-4">Referencias Claves</h3>
            <ul class="small text-secondary ps-3 mb-4">
              <li class="mb-2"><strong>Webster, J. G.</strong> <em>Medical Instrumentation: Application and Design.</em> Wiley. (Capítulos sobre medición de presión arterial y fuerza).</li>
              <li class="mb-2"><strong>Fraden, A.</strong> <em>Handbook of Modern Sensors: Physics, Designs, and Applications.</em> Springer. (Sección de galgas extensométricas).</li>
            </ul>
          
          `,
          presentation: "https://docs.google.com/presentation/d/e/2PACX-1vQJSQN2fIgd5cQ-Nr66iE4hwqhQI3zhgyeJc7Pl-kx1YyQMmB9ASv_fV1B6zF-7Xg/pubembed?start=false&loop=false&delayms=3000",
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
          simulator: 'strainlab_fuerza_presion.html',
          resources: [
            { name: "Instrumentación_fuerza-presion_galga.pptx", url: "./Segundo Corte/09 Clase/Instrumentación_fuerza-presion_galga.pptx", type: "pptx", size: "3.7 MB" },
            { name: "Foot Plantar Pressure Measurement System.pdf", url: "./Segundo Corte/09 Clase/Foot Plantar Pressure Measurement System.pdf", type: "pdf", size: "1.9 MB" },
            { name: "Hand grip strength as a proposed new vital.pdf", url: "./public/Hand grip strength as a proposed new vital.pdf", type: "pdf", size: "1.3 MB" },
            { name: "A review of flexible strain sensors.pdf", url: "./public/A review of flexible strain sensors.pdf", type: "pdf", size: "7.4 MB" }
          ],
          quizzes: [
            {
              question: "Pregunta 1 — Principio de funcionamiento\n\nUna galga extensométrica está adherida a una superficie que experimenta una pequeña deformación por tracción. ¿Qué variable eléctrica cambia principalmente como consecuencia de esta deformación?",
              options: [
                "A. La capacitancia",
                "B. La resistencia eléctrica",
                "C. La frecuencia de resonancia",
                "D. La inductancia"
              ],
              answer: 1,
              explanation: "¡Correcto! La deformación modifica las dimensiones del elemento conductor de la galga y, como consecuencia, cambia su resistencia eléctrica. Esta relación constituye el principio fundamental de las galgas extensométricas.",
              incorrectExplanation: "Revisa el principio de transducción. Una galga extensométrica es un sensor resistivo: convierte una deformación mecánica en una pequeña variación de resistencia eléctrica."
            },
            {
              question: "Pregunta 2 — Factor de galga\n\n¿Qué representa principalmente el factor de galga K?",
              options: [
                "A. La relación entre presión y área.",
                "B. La sensibilidad de la resistencia eléctrica frente a la deformación mecánica.",
                "C. La ganancia del amplificador de instrumentación.",
                "D. La resistencia máxima que soporta el sensor."
              ],
              answer: 1,
              explanation: "¡Muy bien! El factor de galga relaciona el cambio relativo de resistencia ΔR/R con la deformación unitaria ΔL/L. Un mayor factor implica una mayor variación relativa de resistencia para una misma deformación.",
              incorrectExplanation: "Pista: piensa en K como una medida de la sensibilidad de la galga. No representa la ganancia electrónica del circuito, sino la relación entre deformación mecánica y cambio relativo de resistencia."
            },
            {
              question: "Pregunta 3 — Puente de Wheatstone\n\n¿Por qué se utiliza frecuentemente un puente de Wheatstone con galgas extensométricas?",
              options: [
                "A. Para generar la fuerza aplicada al sensor.",
                "B. Para transformar pequeñas variaciones de resistencia en una diferencia de voltaje medible.",
                "C. Para convertir directamente una señal analógica en digital.",
                "D. Para aumentar mecánicamente la deformación de la galga."
              ],
              answer: 1,
              explanation: "¡Excelente! Las variaciones de resistencia producidas por una galga pueden ser muy pequeñas. El puente de Wheatstone permite convertirlas en una señal diferencial de voltaje que posteriormente puede amplificarse y adquirirse.",
              incorrectExplanation: "Recuerda la cadena de medición: deformación → ΔR → puente de Wheatstone → ΔV → amplificación → adquisición. El puente no realiza la conversión ADC ni genera la fuerza."
            },
            {
              question: "Pregunta 4 — Configuración del puente\n\nEn comparación con una configuración con una sola galga activa, ¿qué ventaja puede proporcionar un puente con cuatro galgas activas, dos sometidas a tracción y dos a compresión?",
              options: [
                "A. Elimina la necesidad de alimentación eléctrica.",
                "B. Permite obtener mayor sensibilidad y mejorar la linealidad.",
                "C. Convierte la galga en un sensor capacitivo.",
                "D. Evita completamente la necesidad de acondicionar la señal."
              ],
              answer: 1,
              explanation: "¡Correcto! Según la configuración presentada en clase, el uso de cuatro galgas activas permite aprovechar simultáneamente las deformaciones de tracción y compresión, obteniendo mayor sensibilidad y mejor linealidad.",
              incorrectExplanation: "Observa qué ocurre con cada brazo del puente. Cuando unas galgas aumentan su resistencia y otras la disminuyen, sus efectos contribuyen conjuntamente a incrementar la señal diferencial de salida."
            },
            {
              question: "Pregunta 5 — Temperatura\n\nUna galga permanece sin carga mecánica, pero la temperatura del entorno aumenta considerablemente. ¿Puede cambiar su resistencia?",
              options: [
                "A. No, porque solamente responde a fuerzas mecánicas.",
                "B. Sí, porque las galgas también son sensibles a cambios de temperatura.",
                "C. Solamente si está conectada a un ADC.",
                "D. Solamente cuando trabaja a compresión."
              ],
              answer: 1,
              explanation: "¡Exactamente! La temperatura puede producir cambios de resistencia que podrían interpretarse erróneamente como deformación. Por esta razón, la compensación térmica es importante en sistemas de medición con galgas.",
              incorrectExplanation: "Ten cuidado: no toda variación de resistencia necesariamente corresponde a una deformación. La presentación destaca que las galgas también son sensibles a la temperatura, por lo que este efecto debe considerarse durante la medición."
            },
            {
              question: "Pregunta 6 — Aplicación biomédica\n\nEn el laboratorio se desea construir un sistema para estudiar presión plantar utilizando varias galgas. ¿Cuál representa mejor la cadena de instrumentación propuesta?",
              options: [
                "A. Presión → galga → puente de Wheatstone → amplificación → ADC → procesamiento",
                "B. Presión → ADC → galga → amplificador → computador",
                "C. Galga → presión → ADC → puente de Wheatstone",
                "D. Presión → osciloscopio → puente → galga → ADC"
              ],
              answer: 0,
              explanation: "¡Excelente! Has identificado correctamente la cadena de adquisición. La presión genera una deformación detectable por el sensor; la pequeña variación eléctrica se acondiciona mediante el puente y la etapa de amplificación, para posteriormente digitalizarse y analizarse.",
              incorrectExplanation: "Piensa en el recorrido de la información: primero ocurre el fenómeno físico, después la transducción, luego el acondicionamiento y finalmente la adquisición digital. En la práctica propuesta, las señales acondicionadas de las galgas deben pasar por un ADC para determinar las presiones correspondientes a las diferentes regiones evaluadas."
            }
          ]
        },
        {
          id: "clase-09",
          isEnabled: false,
          number: 9,
          title: "Instrumentación de Gases",
          duration: "4 horas",
          difficulty: "Avanzado",
          objectives: [
            "Comprender los principios físicos, químicos y electrónicos involucrados en la detección de gases.",
            "Diferenciar tecnologías de sensores electroquímicos, ópticos, catalíticos y semiconductores según su principio de transducción.",
            "Relacionar la concentración de un gas con la respuesta eléctrica generada por el sensor.",
            "Interpretar curvas de sensibilidad y calibración para estimar concentraciones en ppm.",
            "Analizar la cadena completa de instrumentación: gas → sensor → transducción → acondicionamiento → ADC → procesamiento → visualización/alarma.",
            "Diseñar un sistema básico de monitoreo capaz de generar alertas según niveles configurables de concentración."
          ],
          summary: "Este tema cubre los sensores y circuitos necesarios para el monitoreo de gases en anestesia, capnografía y sistemas de ventilación mecánica en unidades de cuidados intensivos.",
          content: `
            <h3>🌬️ Breve introducción</h3>
            <p>Los sensores de gas permiten detectar y cuantificar la presencia de sustancias gaseosas mediante su interacción con un elemento sensible. Esta interacción produce cambios físicos o químicos que pueden convertirse en una señal eléctrica —resistencia, corriente o voltaje— para su posterior procesamiento.</p>
            <p>Dependiendo de la tecnología, la detección puede basarse en reacciones electroquímicas, absorción de radiación, oxidación catalítica o cambios de conductividad. La presentación destaca aplicaciones en monitoreo ambiental, seguridad industrial, calidad del aire y diagnóstico clínico.</p>

            <h3>Conceptos claves</h3>
            <div class="row g-3">
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Sensor de gas</h4>
                  <p class="small text-secondary mb-0">Dispositivo que detecta o cuantifica la presencia de un gas mediante una respuesta física o química.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Concentración</h4>
                  <p class="small text-secondary mb-0">Cantidad de un gas presente en una mezcla; frecuentemente expresada en ppm.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Sensibilidad</h4>
                  <p class="small text-secondary mb-0">Cambio de la salida del sensor frente a una variación en la concentración del gas.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Selectividad</h4>
                  <p class="small text-secondary mb-0">Capacidad del sensor para responder preferentemente al gas objetivo frente a otros gases.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Calibración</h4>
                  <p class="small text-secondary mb-0">Relación experimental entre la respuesta eléctrica del sensor y concentraciones conocidas.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Tiempo de respuesta</h4>
                  <p class="small text-secondary mb-0">Tiempo requerido para que el sensor alcance un porcentaje definido de su respuesta después de exponerse al gas.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Transducción</h4>
                  <p class="small text-secondary mb-0">Conversión de la interacción gas–sensor en una señal eléctrica medible.</p>
                </div>
              </div>
            </div>
            <h3 class="mt-4">Referencias Claves</h3>
            <ul class="small text-secondary ps-3 mb-4">
              <li class="mb-2"><strong>Enderle, J. D., & Bronzino, J. D.</strong> <em>Introduction to Biomedical Engineering.</em> Academic Press. (Sección de instrumentación respiratoria).</li>
              <li class="mb-2"><strong>Fraden, A.</strong> <em>Handbook of Modern Sensors.</em> Springer. (Sensores de gas y químicos).</li>
            </ul>
          
          `,
          presentation: "https://docs.google.com/presentation/d/e/2PACX-1vTcUuNVIbhkTYBqSj3eytYAKgJklXwz-qqnvpLrJppJRdbxZl6SzUlGQfWA0TiXdQ/pubembed?start=false&loop=false&delayms=3000",
          simulator: "gassense_lab_v2_materiales.html",
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
            { name: "Gas Sensors Based on Semiconductor Metal.pdf", type: "pdf", size: "5.2 MB" },
            { name: "Application of electronic nose.pdf", type: "pdf", size: "1.2 MB" },
            { name: "Advancements and Prospects of Electronic Nose.pdf", type: "pdf", size: "5.2 MB" }
          ],
          quizzes: [
            {
              question: "Pregunta 1 — ¿Cuál es la función fundamental de un sensor de gas dentro de un sistema de instrumentación?",
              options: [
                "A. Generar directamente una alarma sonora.",
                "B. Detectar una interacción con un gas y convertirla en una variable susceptible de ser medida.",
                "C. Incrementar la concentración del gas.",
                "D. Convertir automáticamente cualquier concentración a ppm."
              ],
              answer: 1,
              explanation: "¡Correcto! El elemento sensible interactúa con el gas y el sistema de transducción convierte esa interacción en una señal eléctrica medible.",
              incorrectExplanation: "Revisa la cadena de instrumentación. El sensor constituye la etapa inicial de detección/transducción; la visualización y las alarmas pertenecen a etapas posteriores."
            },
            {
              question: "Pregunta 2 — Un sensor presenta una respuesta elevada frente al CO pero también frente al alcohol y al H₂. ¿Qué característica está principalmente comprometida?",
              options: [
                "A. Resolución.",
                "B. Selectividad.",
                "C. Tiempo de respuesta.",
                "D. Ganancia."
              ],
              answer: 1,
              explanation: "¡Muy bien! La selectividad indica qué tan capaz es el sensor de diferenciar el gas objetivo de otras especies interferentes.",
              incorrectExplanation: "La sensibilidad indica cuánto cambia la salida, mientras que la selectividad indica qué tan específicamente responde a un determinado gas."
            },
            {
              question: "Pregunta 3 — ¿Por qué es importante utilizar la curva de calibración de un sensor MQ?",
              options: [
                "A. Para aumentar físicamente su sensibilidad.",
                "B. Para relacionar su respuesta eléctrica con la concentración del gas.",
                "C. Para reducir automáticamente la temperatura.",
                "D. Para reemplazar el ADC."
              ],
              answer: 1,
              explanation: "Exacto. La curva permite transformar una respuesta como RS/R0 en una estimación de concentración del gas.",
              incorrectExplanation: "Recuerda que el sensor entrega inicialmente una variable eléctrica, no necesariamente la concentración directamente. La calibración establece la relación entre ambas."
            },
            {
              question: "Pregunta 4 — ¿Cuál de los siguientes factores puede alterar la respuesta de un sensor de gas aun cuando la concentración permanezca constante?",
              options: [
                "A. Temperatura y humedad.",
                "B. Únicamente el ADC.",
                "C. El color del encapsulado.",
                "D. El tamaño de la pantalla LCD."
              ],
              answer: 0,
              explanation: "¡Correcto! Temperatura y humedad pueden modificar significativamente la respuesta del elemento sensible y deben considerarse durante calibración y medición.",
              incorrectExplanation: "Revisa los factores de desempeño. La presentación identifica explícitamente temperatura, humedad, interferencias, envejecimiento y calibración como factores relevantes."
            },
            {
              question: "Pregunta 5 — ¿Cuál es la secuencia más adecuada de un sistema de instrumentación para gases?",
              options: [
                "A. ADC → gas → sensor → alarma.",
                "B. Gas → sensor/transductor → acondicionamiento → ADC → procesamiento/salida.",
                "C. Gas → LCD → ADC → sensor.",
                "D. Sensor → gas → amplificador → LCD."
              ],
              answer: 1,
              explanation: "¡Excelente! Esta secuencia representa la cadena completa desde la variable química hasta la información interpretable por el usuario.",
              incorrectExplanation: "Piensa en el recorrido de la información: primero ocurre la interacción con el gas; posteriormente se genera, acondiciona, digitaliza y procesa la señal."
            },
            {
              question: "Pregunta 6 — Un sistema detecta una concentración muy elevada de un gas peligroso. Según la lógica planteada en el laboratorio, ¿cuál sería la respuesta más apropiada?",
              options: [
                "A. Únicamente mostrar el valor en pantalla.",
                "B. Encender únicamente el LED amarillo.",
                "C. Activar ventilación, LED rojo intermitente y alarma sonora prolongada.",
                "D. Desactivar el sensor."
              ],
              answer: 2,
              explanation: "¡Correcto! Corresponde al Nivel 3 — peligro alto planteado en la práctica, donde la instrumentación no solo mide sino que genera una respuesta automática.",
              incorrectExplanation: "Revisa la lógica jerárquica de alarmas: a mayor riesgo deben activarse progresivamente más mecanismos de advertencia y actuación."
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
          id: "clase-10",
          isEnabled: false,
          number: 10,
          title: "Instrumentación Optoelectrónica y Pulsioximetría",
          duration: "4 horas",
          difficulty: "Avanzado",
          objectives: [
            "Explicar los principios físicos de la instrumentación optoelectrónica y la interacción entre luz, materia y dispositivos semiconductores.",
            "Diferenciar el funcionamiento y las aplicaciones de fotodiodos, fototransistores, fotomultiplicadores y otros sensores ópticos.",
            "Relacionar longitud de onda, absorción, transmisión, reflexión y fluorescencia con la medición de variables físicas, químicas y fisiológicas.",
            "Analizar circuitos básicos de acondicionamiento para convertir pequeñas fotocorrientes en señales de voltaje medibles.",
            "Interpretar una señal fotopletismográfica (PPG), identificando sus componentes AC y DC y su relación con el pulso sanguíneo.",
            "Reconocer el principio de funcionamiento de la pulsoximetría y sus principales fuentes de error y limitaciones."
          ],
          summary: "Diseño físico de oxímetros de pulso. Circuitos de conmutación de corrientes para diodos emisores de luz infrarroja y roja, amplificación de fotodiodos transimpedancia y cálculo digital de SpO2.",
          content: `
            <div class="content-section">
              <h3>🎯 Objetivos y Enfoque Práctico</h3>
              <p>Estos objetivos se articulan directamente con el laboratorio, en el cual los estudiantes adquieren la señal óptica, la digitalizan mediante un microcontrolador y estiman la frecuencia cardíaca.</p>
            </div>

            <div class="content-section">
              <h3>💡 Breve introducción</h3>
              <p>La instrumentación optoelectrónica estudia sistemas capaces de generar, transmitir, modificar y detectar radiación electromagnética para obtener información de una variable de interés.</p>
              <p>En bioinstrumentación, la luz constituye una herramienta especialmente valiosa porque permite realizar mediciones no invasivas o mínimamente invasivas. Cuando la radiación interactúa con tejidos o sustancias puede ser absorbida, transmitida, reflejada, dispersada o reemitida, y estos cambios contienen información sobre las propiedades de la muestra.</p>
              <p>Por ello, una cadena optoelectrónica puede representarse como:</p>
              <div class="highlight-box" style="text-align: center; font-weight: bold; padding: 1rem; background: var(--bg-color-alt); border-radius: 8px; margin: 1rem 0;">
                Fuente de luz → interacción luz–materia → fotodetector → señal eléctrica → acondicionamiento → ADC/procesamiento → variable medida
              </div>
              <p>Este principio sustenta tecnologías como la fotopletismografía (PPG), pulsoximetría, espectrofotometría, colorimetría, sensores de turbidez y detectores ópticos. La presentación muestra precisamente esta transición desde el fotodiodo hasta aplicaciones biomédicas como la medición del pulso y la SpO₂.</p>
            </div>

            <div class="content-section">
              <h3>📐 Principio fundamental: interacción luz–materia y Ley de Beer–Lambert</h3>
              <p>La idea central es que la intensidad de la radiación que atraviesa un medio disminuye debido a la interacción de la luz con las sustancias presentes:</p>
              <div class="math-equation" style="text-align: center; margin: 1rem 0; font-size: 1.2em; letter-spacing: 0.05em;">
                <i>I = I<sub>0</sub> e<sup>-&epsilon; c L</sup></i>
              </div>
              <p>o, expresado como absorbancia:</p>
              <div class="math-equation" style="text-align: center; margin: 1rem 0; font-size: 1.2em; letter-spacing: 0.05em;">
                <i>A = -log<sub>10</sub> (I / I<sub>0</sub>) = &epsilon; c L</i>
              </div>
              <div class="variable-list" style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <p><strong>Donde:</strong></p>
                <ul>
                  <li><i>I<sub>0</sub></i> : intensidad incidente.</li>
                  <li><i>I</i> : intensidad transmitida.</li>
                  <li><i>&epsilon;</i> : coeficiente de absorción/extinción.</li>
                  <li><i>c</i> : concentración de la sustancia.</li>
                  <li><i>L</i> : longitud del trayecto óptico.</li>
                </ul>
              </div>
              <p><strong>¿Por qué es tan importante en bioinstrumentación?</strong></p>
              <p>Porque permite establecer conceptualmente:</p>
              <div class="highlight-box" style="text-align: center; font-weight: bold; padding: 1rem; border: 2px dashed #4a90e2; border-radius: 8px; margin: 1rem 0;">
                Cambio en una sustancia/tejido → cambio en absorción óptica → cambio en luz detectada → cambio eléctrico medible.
              </div>
              <p>En PPG, por ejemplo, las variaciones pulsátiles del volumen sanguíneo modifican periódicamente la cantidad de luz absorbida/reflejada. En pulsoximetría, además, se aprovecha que la oxihemoglobina y la desoxihemoglobina presentan diferentes características espectrales, por lo que se emplean típicamente longitudes de onda roja e infrarroja. La propia presentación introduce este principio en las diapositivas dedicadas a pulsoximetría.</p>
            </div>

            <div class="content-section">
              <h3>🔑 Conceptos clave</h3>
              <div class="row g-3">
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Optoelectrónica</h4>
                  <p class="small text-secondary mb-0">Conversión entre energía óptica y eléctrica.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Fotón</h4>
                  <p class="small text-secondary mb-0">Cuanto de energía electromagnética: \\(E=hf=hc/\\lambda\\).</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Longitud de onda (\\(\\lambda\\))</h4>
                  <p class="small text-secondary mb-0">Determina la región espectral y condiciona la interacción con la materia.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Fotodiodo</h4>
                  <p class="small text-secondary mb-0">Convierte radiación incidente en fotocorriente.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Fototransistor</h4>
                  <p class="small text-secondary mb-0">Combina fotodetección con ganancia de corriente.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Responsividad</h4>
                  <p class="small text-secondary mb-0">Relación entre corriente generada y potencia óptica incidente, normalmente A/W.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Absorción</h4>
                  <p class="small text-secondary mb-0">Parte de la energía óptica es absorbida por el medio.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Transmitancia</h4>
                  <p class="small text-secondary mb-0">Fracción de luz que atraviesa la muestra.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Reflectancia</h4>
                  <p class="small text-secondary mb-0">Fracción de luz que retorna desde la muestra.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Dispersión</h4>
                  <p class="small text-secondary mb-0">Cambio en la dirección de propagación debido a la interacción con el medio.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Fluorescencia</h4>
                  <p class="small text-secondary mb-0">Emisión óptica posterior a una excitación, generalmente a mayor \\(\\lambda\\).</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Amplificador transimpedancia</h4>
                  <p class="small text-secondary mb-0">Convierte la pequeña corriente del fotodiodo en voltaje: \\(V_o \\approx -I_F R_f\\).</p>
                </div>
              </div>
            </div>
            </div>
            <h3 class="mt-4">Referencias Claves</h3>
            <ul class="small text-secondary ps-3 mb-4">
              <li class="mb-2"><strong>Webster, J. G.</strong> <em>Design of Pulse Oximeters.</em> CRC Press, 1997.</li>
              <li class="mb-2"><strong>Tuchin, V. V.</strong> <em>Tissue Optics: Light Scattering Methods and Instruments for Medical Diagnosis.</em> SPIE Press.</li>
              <li class="mb-2"><strong>Khandpur, R. S.</strong> <em>Handbook of Biomedical Instrumentation.</em> McGraw-Hill. (Capítulo sobre instrumentos fotométricos).</li>
            </ul>
          
          `,
          presentation: "https://docs.google.com/presentation/d/e/2PACX-1vTWk9kcISauv6SzXpZ8VjuzHm7eNcWimpfjotpJ1cKU8c_zvzxjPODhAv1A7SVCSA/pubembed?start=false&loop=false&delayms=3000",
          labs: [
            {
              title: "Laboratorio 9: Fotopletismografía (PPG) y Ritmo Cardíaco Óptico",
              guide: "Lab_Pulso_Interfaz.docx",
              description: "Construcción de una pinza de pulso con un par fototransistor/LED, amplificación transimpedancia e interfaz con el ADC."
            }
          ],
          simulator: "optobio_lab.html",
          code: [],
          resources: [
            { name: "Advances and Challenges Associated.pdf", type: "pdf", size: "1.1 MB" },
            { name: "Photoplethysmography in Wearable Devices.pdf", type: "pdf", size: "2.6 MB" },
            { name: "Ninety years of pulse oximetry.pdf", type: "pdf", size: "14.4 MB" }
          ],
          quizzes: [
            {
              question: "Pregunta 1 — Del fotón a la señal eléctrica<br><br>Cuando aumenta la cantidad de luz que incide sobre un fotodiodo operando en su región apropiada, ¿qué ocurre principalmente?",
              options: [
                "A. Disminuye necesariamente la fotocorriente.",
                "B. Aumenta la fotocorriente generada.",
                "C. La longitud de onda se vuelve cero.",
                "D. El fotodiodo comienza a emitir luz."
              ],
              answer: 1,
              explanation: "El fotodiodo convierte energía óptica en una señal eléctrica. Los fotones con energía suficiente generan pares electrón-hueco y, dentro de su rango de operación, un aumento de potencia óptica produce un aumento de la fotocorriente. Este principio se explica en las diapositivas 4–6."
            },
            {
              question: "Pregunta 2 — Acondicionamiento<br><br>Un fotodiodo produce una corriente de 5μA y está conectado a un amplificador transimpedancia con Rf = 100kΩ.<br><br>¿Cuál es aproximadamente el voltaje de salida?",
              options: [
                "A. -0.05 V",
                "B. -0.5 V",
                "C. +5 V",
                "D. -50 V"
              ],
              answer: 1,
              explanation: "Vo = -If * Rf = -(5×10^-6)(100×10^3) = -0.5V. El amplificador transimpedancia convierte una corriente ópticamente generada, normalmente pequeña, en un voltaje más sencillo de adquirir mediante un ADC. La presentación introduce este circuito en la sección de acondicionamiento."
            },
            {
              question: "Pregunta 3 — ¿Qué estamos midiendo realmente?<br><br>En un sensor PPG colocado sobre el dedo, la componente pulsátil AC de la señal se relaciona principalmente con:",
              options: [
                "A. La temperatura del LED.",
                "B. Las variaciones periódicas del volumen sanguíneo arterial.",
                "C. El voltaje de alimentación del microcontrolador.",
                "D. La resistencia de la piel exclusivamente."
              ],
              answer: 1,
              explanation: "Cada ciclo cardíaco produce una variación en el volumen sanguíneo periférico que modifica la absorción/reflexión de la luz. Esa modulación genera la componente AC de la señal PPG. La componente DC representa principalmente las contribuciones ópticas basales y lentamente variables."
            },
            {
              question: "Pregunta 4 — Aplicación del laboratorio<br><br>Durante el laboratorio con el XD-58C, el estudiante obtiene una señal con picos separados aproximadamente 0,80 s.<br><br>¿Cuál sería la frecuencia cardíaca estimada?",
              options: [
                "A. 48 BPM",
                "B. 60 BPM",
                "C. 75 BPM",
                "D. 100 BPM"
              ],
              answer: 2,
              explanation: "FC = 60 / T = 60 / 0.80 = 75 BPM. La frecuencia cardíaca puede obtenerse a partir del intervalo temporal entre pulsos consecutivos. Esto conecta directamente la señal PPG adquirida mediante el sensor con el cálculo de BPM solicitado en la práctica."
            },
            {
              question: "Pregunta 5 — Pulsoximetría<br><br>¿Por qué un pulsioxímetro utiliza al menos dos longitudes de onda, típicamente roja e infrarroja?",
              options: [
                "A. Para aumentar únicamente el brillo del sensor.",
                "B. Porque la oxihemoglobina y la desoxihemoglobina presentan diferente absorción espectral.",
                "C. Porque una longitud de onda mide FC y la otra temperatura.",
                "D. Para eliminar completamente el ruido de movimiento."
              ],
              answer: 1,
              explanation: "La estimación de SpO₂ aprovecha las diferencias de absorción de HbO₂ y Hb en distintas longitudes de onda. Por ello se comparan las componentes ópticas obtenidas con luz roja e infrarroja, principio representado en las diapositivas 18–19."
            },
            {
              question: "Pregunta 6 — Pensamiento crítico<br><br>Dos estudiantes utilizan el mismo sensor PPG. Uno obtiene una señal limpia y el otro una señal con gran variabilidad, aunque ambos tienen una frecuencia cardíaca similar.<br><br>¿Cuál es la explicación más adecuada?",
              options: [
                "A. Todos los sensores PPG deben producir exactamente la misma amplitud.",
                "B. Una señal diferente implica necesariamente una patología.",
                "C. La señal puede variar por contacto, movimiento, luz ambiental, geometría óptica, perfusión y características del tejido.",
                "D. El microcontrolador siempre es responsable."
              ],
              answer: 2,
              explanation: "La medición optoelectrónica depende de toda la cadena de adquisición. Geometría LED–fotodetector, longitud de onda, contacto, movimiento, luz ambiental, perfusión y propiedades ópticas del tejido pueden modificar la señal. Estudios recientes también muestran la importancia de considerar características como la pigmentación cutánea en la evaluación de sistemas ópticos."
            }
          ]
        },
        {
          id: "clase-11",
          isEnabled: false,
          number: 11,
          title: "Bioelectricidad e Instrumentación de ECG",
          duration: "4 horas",
          difficulty: "Avanzado",
          objectives: [],
          summary: "El estándar técnico de los biopotenciales. Diseño del front-end analógico para ECG, cálculo de amplificadores de instrumentación y mitigación de voltajes de modo común usando electrodos activos.",
          content: `
            <div class="content-section">
              <h3>🎯 Objetivos de Aprendizaje</h3>
              <p>Al finalizar la clase/laboratorio, el estudiante estará en capacidad de:</p>
              <ul>
                <li>Explicar el origen y las principales características de la señal electrocardiográfica (ECG) como biopotencial.</li>
                <li>Identificar las etapas fundamentales de una cadena de adquisición de ECG: electrodos, protección, amplificación, filtrado, DRL, conversión ADC y visualización.</li>
                <li>Analizar la función del amplificador de instrumentación y del rechazo de modo común en la adquisición de biopotenciales.</li>
                <li>Reconocer las principales fuentes de ruido y artefactos presentes en una señal ECG y las estrategias utilizadas para reducirlos.</li>
                <li>Adquirir y visualizar una señal ECG mediante una tarjeta embebida y un microcontrolador.</li>
                <li>Estimar la frecuencia cardíaca a partir de la detección de complejos QRS/picos R y expresarla en BPM.</li>
                <li>Aplicar criterios básicos de seguridad eléctrica durante la adquisición de biopotenciales en una persona.</li>
              </ul>
            </div>

            <div class="content-section">
              <h3>📖 Breve introducción</h3>
              <p>El electrocardiograma (ECG) registra, mediante electrodos ubicados sobre la superficie corporal, las diferencias de potencial asociadas con la actividad eléctrica del corazón.</p>
              <p>Estas señales presentan amplitudes relativamente pequeñas y pueden verse afectadas por interferencia de red, actividad muscular, movimiento, contacto electrodo-piel y otras fuentes de ruido. Por ello, antes de ser digitalizadas necesitan una adecuada etapa de acondicionamiento analógico.</p>
              <p>Una cadena típica puede representarse como:</p>
              <div class="highlight-box" style="text-align: center; font-weight: bold; padding: 1rem; border: 2px dashed #4a90e2; border-radius: 8px; margin: 1rem 0;">
                Actividad cardíaca &rarr; Electrodos &rarr; Protección &rarr; Amplificación diferencial &rarr; Filtrado &rarr; DRL &rarr; ADC &rarr; Procesamiento &rarr; ECG + BPM
              </div>
              <p>En el laboratorio, esta arquitectura se implementa utilizando la ECG Click, un microcontrolador como Arduino o ESP32 y una interfaz de computador para visualizar el trazado ECG y calcular la frecuencia cardíaca. La guía enfatiza además que ECG Click es una plataforma de prototipado y no un dispositivo médico para uso clínico.</p>
            </div>

            <div class="content-section">
              <h3>📐 Principio general del tema</h3>
              <h4>Amplificación diferencial y rechazo de modo común</h4>
              <p>Uno de los principios fundamentales en la adquisición de biopotenciales es medir principalmente la diferencia de potencial entre dos electrodos, rechazando en lo posible las señales que aparecen simultáneamente en ambos.</p>
              <p>Una representación básica es:</p>
              <div class="math-equation" style="text-align: center; margin: 1rem 0; font-size: 1.2em; letter-spacing: 0.05em;">
                <i>V<sub>out</sub> = A<sub>d</sub> (V<sub>2</sub> &minus; V<sub>1</sub>) + A<sub>cm</sub> V<sub>cm</sub></i>
              </div>
              <div class="variable-list" style="margin-left: 1.5rem; margin-bottom: 1rem;">
                <p><strong>donde:</strong></p>
                <ul>
                  <li><i>A<sub>d</sub></i> : ganancia diferencial.</li>
                  <li><i>V<sub>2</sub> &minus; V<sub>1</sub></i> : señal diferencial de interés.</li>
                  <li><i>A<sub>cm</sub></i> : ganancia de modo común.</li>
                  <li><i>V<sub>cm</sub></i> : señal común presente en las entradas.</li>
                </ul>
              </div>
              <p>Idealmente: <i>A<sub>d</sub> &gg; A<sub>cm</sub></i></p>
              <p>Esto conduce a un parámetro fundamental:</p>
              <div class="math-equation" style="text-align: center; margin: 1rem 0; font-size: 1.2em; letter-spacing: 0.05em;">
                <i>CMRR = 20 log<sub>10</sub> (A<sub>d</sub> / A<sub>cm</sub>)</i>
              </div>
              <p>Un CMRR elevado favorece la recuperación del ECG frente a interferencias comunes presentes en los electrodos.</p>
              
              <h4>Del ECG a la frecuencia cardíaca</h4>
              <p>Una vez digitalizado el ECG, pueden detectarse los picos R de complejos QRS consecutivos. Si:</p>
              <div class="math-equation" style="text-align: center; margin: 1rem 0; font-size: 1.2em; letter-spacing: 0.05em;">
                <i>RR = t<sub>R2</sub> &minus; t<sub>R1</sub></i>
              </div>
              <p>entonces:</p>
              <div class="math-equation" style="text-align: center; margin: 1rem 0; font-size: 1.2em; letter-spacing: 0.05em;">
                <i>FC = 60 / RR</i>
              </div>
              <p>con RR expresado en segundos.</p>
              <p>Por ejemplo, para <i>RR = 0.8 s</i> se obtiene:</p>
              <div class="math-equation" style="text-align: center; margin: 1rem 0; font-size: 1.2em; letter-spacing: 0.05em;">
                <i>FC = 60 / 0.8 = 75 BPM</i>
              </div>
              <p>Esta relación conecta directamente bioinstrumentación analógica + adquisición digital + procesamiento de señales.</p>
            </div>

            <div class="content-section">
              <h3>🔑 Conceptos clave</h3>
              <div class="row g-3">
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Biopotencial</h4>
                  <p class="small text-secondary mb-0">Diferencia de potencial originada por actividad bioeléctrica y medible mediante electrodos.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">ECG</h4>
                  <p class="small text-secondary mb-0">Registro de la actividad eléctrica cardíaca desde la superficie corporal.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Electrodos</h4>
                  <p class="small text-secondary mb-0">Interfaz entre el sistema biológico y el sistema electrónico de adquisición.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Señal diferencial</h4>
                  <p class="small text-secondary mb-0">Diferencia de potencial entre las entradas de medición; contiene la información de interés.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Modo común</h4>
                  <p class="small text-secondary mb-0">Componente similar presente simultáneamente en ambas entradas.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">CMRR</h4>
                  <p class="small text-secondary mb-0">Capacidad del sistema para rechazar señales de modo común frente a la señal diferencial.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Amplificación</h4>
                  <p class="small text-secondary mb-0">Incrementa la amplitud de la señal para facilitar su adquisición y procesamiento.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Filtrado</h4>
                  <p class="small text-secondary mb-0">Atenúa componentes no deseadas preservando las componentes relevantes del ECG.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">DRL – Driven Right Leg</h4>
                  <p class="small text-secondary mb-0">Circuito utilizado para reducir la tensión de modo común presente en el paciente/sistema de medida.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">ADC</h4>
                  <p class="small text-secondary mb-0">Convierte la señal analógica acondicionada en valores digitales procesables por el microcontrolador.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Complejo QRS</h4>
                  <p class="small text-secondary mb-0">Componente característica del ECG asociada principalmente con la despolarización ventricular.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Intervalo RR</h4>
                  <p class="small text-secondary mb-0">Tiempo entre picos R consecutivos; permite calcular la frecuencia cardíaca.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Artefactos</h4>
                  <p class="small text-secondary mb-0">Alteraciones producidas por movimiento, músculos, electrodos, interferencias u otras fuentes.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Seguridad eléctrica</h4>
                  <p class="small text-secondary mb-0">Conjunto de medidas destinadas a reducir riesgos durante la conexión de instrumentación electrónica a una persona.</p>
                </div>
              </div>
            </div>
            </div>
            <h3 class="mt-4">Referencias Claves</h3>
            <ul class="small text-secondary ps-3 mb-4">
              <li class="mb-2"><strong>Malmivuo, J., & Plonsey, R.</strong> <em>Bioelectromagnetism: Principles and Applications of Bioelectric and Biomagnetic Fields.</em> Oxford University Press, 1995.</li>
              <li class="mb-2"><strong>Webster, J. G.</strong> <em>Medical Instrumentation: Application and Design.</em> Wiley. (Capítulos sobre biopotenciales, electrodos y amplificadores de ECG).</li>
              <li class="mb-2"><strong>Neuman, M. R.</strong> <em>Biopotential Electrodes.</em> En The Biomedical Engineering Handbook, CRC Press.</li>
            </ul>
          
          `,
          presentation: "https://docs.google.com/presentation/d/e/2PACX-1vQJQUlw-O498aMDSG3hj_Zrx-KjgjRbYV-DV2crblEPf13EaTJ3YKnf39VvYo2uqQ/pubembed?start=false&loop=false&delayms=3000",
          labs: [
            {
              title: "Laboratorio 10: Amplificador de Biopotenciales ECG y Circuito de Pierna Derecha",
              guide: "Lab_ECG_Click_Interfaz.docx",
              description: "Montaje completo del amplificador de instrumentación AD620, filtros pasa-altas, pasa-bajas analógicos y circuito de pierna activa."
            }
          ],
          simulator: "ecg_biolab.html",
          resources: [
            { name: "8_Instrumentación_bioelectricidad.pptx", type: "pptx", size: "4.8 MB" },
            { name: "Evaluating Dry Electrodes and Bioinstrumentation.pdf", type: "pdf", size: "3.3 MB", url: "public/Evaluating Dry Electrodes and Bioinstrumentation.pdf" },
            { name: "Recent_Advances_in_Analog_Front-End_Architectures_.pdf", type: "pdf", size: "3.3 MB", url: "public/Recent_Advances_in_Analog_Front-End_Architectures_.pdf" },
            { name: "Flexible dry electrodes for electrocardiographic.pdf", type: "pdf", size: "11.9 MB", url: "public/Flexible dry electrodes for electrocardiographic.pdf" }
          ],
          quizzes: [
            {
              question: "Pregunta 1 — Cadena de instrumentación<br><br>Un sistema adquiere ECG correctamente en los electrodos, pero la señal que llega al ADC es demasiado pequeña. ¿Qué etapa debería revisarse principalmente?",
              options: [
                "A. Amplificación",
                "B. Conversión ADC",
                "C. Interfaz gráfica",
                "D. Cálculo de BPM"
              ],
              answer: 0,
              explanation: "La señal ECG presenta amplitudes pequeñas y necesita acondicionamiento antes de ser digitalizada. Una ganancia insuficiente puede provocar que solo se utilice una pequeña parte del rango dinámico del ADC, reduciendo la calidad de la adquisición."
            },
            {
              question: "Pregunta 2 — Rechazo de interferencias<br><br>¿Por qué es deseable un CMRR elevado en un sistema de adquisición de ECG?",
              options: [
                "A. Para incrementar directamente la frecuencia cardíaca detectada.",
                "B. Para rechazar señales similares presentes simultáneamente en ambas entradas.",
                "C. Para aumentar la frecuencia de muestreo del ADC.",
                "D. Para convertir la señal analógica en digital."
              ],
              answer: 1,
              explanation: "El ECG se obtiene fundamentalmente como una señal diferencial. Muchas interferencias aparecen de manera similar en ambos electrodos. Un elevado CMRR permite atenuar estas componentes de modo común y conservar principalmente la señal diferencial de interés."
            },
            {
              question: "Pregunta 3 — Frecuencia cardíaca<br><br>En una señal ECG se detectan dos picos R consecutivos separados 0,75 s. ¿Cuál es aproximadamente la frecuencia cardíaca?",
              options: [
                "A. 45 BPM",
                "B. 60 BPM",
                "C. 80 BPM",
                "D. 120 BPM"
              ],
              answer: 2,
              explanation: "FC = 60 / RR = 60 / 0.75 = 80 BPM. La detección confiable de los picos R permite estimar la frecuencia cardíaca a partir de los intervalos RR."
            },
            {
              question: "Pregunta 4 — Artefactos<br><br>Durante el laboratorio el estudiante mueve repetidamente el brazo y la línea base del ECG comienza a desplazarse. ¿Cuál es la explicación más probable?",
              options: [
                "A. Incremento real de la amplitud eléctrica cardíaca.",
                "B. Artefacto producido por movimiento y cambios en la interfaz electrodo-piel.",
                "C. Incremento automático del CMRR.",
                "D. Mayor resolución del ADC."
              ],
              answer: 1,
              explanation: "El movimiento modifica las condiciones mecánicas y eléctricas de la interfaz electrodo-piel y puede producir cambios importantes en la línea base. Por esta razón, la adquisición de biopotenciales requiere controlar tanto las condiciones electrónicas como las condiciones experimentales."
            },
            {
              question: "Pregunta 5 — ADC<br><br>¿Qué puede ocurrir si la ganancia de la etapa analógica es excesivamente alta?",
              options: [
                "A. Siempre mejorará la señal ECG.",
                "B. La señal puede superar el rango del ADC y saturarse.",
                "C. El ADC incrementará automáticamente su resolución.",
                "D. Se eliminará completamente la interferencia de 60 Hz."
              ],
              answer: 1,
              explanation: "La ganancia debe aprovechar el rango disponible del ADC sin excederlo. Si la tensión de entrada supera el rango permitido, se produce saturación o clipping y parte de la morfología del ECG se pierde."
            },
            {
              question: "Pregunta 6 — Seguridad<br><br>Durante la adquisición del ECG en una persona, ¿cuál de las siguientes prácticas es la más adecuada para esta experiencia?",
              options: [
                "A. Alimentar directamente la ECG Click desde una fuente conectada a la red.",
                "B. Utilizar cualquier fuente mientras sea de 3 V.",
                "C. Alimentar la tarjeta mediante batería y mantener el portátil desconectado de la red durante la prueba.",
                "D. Conectar el sujeto directamente a la entrada ADC."
              ],
              answer: 2,
              explanation: "La guía especifica que la ECG Click debe alimentarse mediante una batería de 3 V y que el portátil debe permanecer desconectado de la red eléctrica durante la adquisición sobre la persona. También recalca que la tarjeta es una plataforma de prototipado y no un dispositivo médico."
            }
          ]
        },
        {
          id: "clase-12",
          isEnabled: false,
          number: 12,
          title: "Instrumentación Aplicada al Sector Agrícola y Avanzada",
          duration: "4 horas",
          difficulty: "Intermedio",
          objectives: [],
          summary: "Aplicación de los principios de instrumentación analógica y digital a otras áreas biológicas, como el monitoreo ambiental, bioinstrumentación vegetal y agrotecnología médica.",
          content: `
            <div class="content-section">
              <h3>🎯 Objetivos de Aprendizaje</h3>
              <p>Al finalizar la sesión, el estudiante estará en capacidad de:</p>
              <ul>
                <li>Comprender el papel de la instrumentación electrónica en la agricultura de precisión y su contribución al monitoreo y toma de decisiones.</li>
                <li>Identificar y comparar sensores utilizados para medir variables ambientales, del suelo y del entorno agroindustrial.</li>
                <li>Explicar los principios básicos de funcionamiento de sensores resistivos, capacitivos, ópticos, LiDAR y sensores de gases.</li>
                <li>Integrar conceptualmente sensores, sistemas embebidos y tecnologías de comunicación dentro de una arquitectura IoT agrícola.</li>
                <li>Analizar cómo los datos adquiridos pueden convertirse en información útil para optimizar riego, fertilización, monitoreo ambiental y producción agropecuaria.</li>
                <li>Reconocer el papel emergente de IoT, LoRa/LoRaWAN, Edge Computing e inteligencia artificial en la evolución hacia la Agricultura 4.0.</li>
              </ul>
            </div>

            <div class="content-section">
              <h3>💡 Breve introducción</h3>
              <p>La agricultura moderna evoluciona desde decisiones basadas principalmente en observación y experiencia hacia sistemas soportados por medición, conectividad y análisis de datos. La agricultura de precisión utiliza sensores, sistemas de posicionamiento, plataformas IoT, comunicaciones inalámbricas y herramientas de análisis para caracterizar las condiciones del cultivo, suelo, ambiente y producción en tiempo real o casi real. La instrumentación constituye el punto de partida de este proceso, al transformar variables físicas y químicas —como temperatura, humedad, pH, gases o humedad del suelo— en datos que pueden ser procesados para apoyar decisiones agrícolas más eficientes, sostenibles y automatizadas.</p>
            </div>

            <div class="content-section">
              <h3>🔑 Conceptos clave</h3>
              <div class="row g-3">
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Agricultura de precisión</h4>
                  <p class="small text-secondary mb-0">Estrategia de gestión que utiliza información espacial, temporal y contextual para optimizar las decisiones agrícolas y la utilización de recursos.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Sensor y transductor</h4>
                  <p class="small text-secondary mb-0">Dispositivo capaz de detectar una variable física o química y transformarla en una señal susceptible de ser medida y procesada.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Variables agroambientales</h4>
                  <p class="small text-secondary mb-0">Magnitudes relevantes para caracterizar el cultivo y su entorno: temperatura, humedad relativa, humedad del suelo, pH, conductividad eléctrica, radiación, gases, luminosidad, nivel de agua, entre otras. La presentación introduce varias de ellas en las diapositivas 4–8.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Sensores resistivos y capacitivos</h4>
                  <p class="small text-secondary mb-0">Los resistivos detectan variaciones de conductividad/resistencia relacionadas con las condiciones del medio; los capacitivos aprovechan cambios en la permitividad dieléctrica. Para humedad del suelo, la presentación muestra ambas alternativas en las diapositivas 14–16.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Sistemas embebidos</h4>
                  <p class="small text-secondary mb-0">Microcontroladores como Arduino o ESP32 adquieren las señales de los sensores, realizan procesamiento local y permiten interactuar con otros dispositivos.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Internet de las Cosas agrícola — Ag-IoT</h4>
                  <p class="small text-secondary mb-0">Integración de sensores, nodos embebidos, comunicaciones, plataformas y aplicaciones que permite monitorización y control distribuido de procesos agrícolas.</p>
                </div>
              </div>
            </div>
            </div>
            <h3 class="mt-4">Referencias Claves</h3>
            <ul class="small text-secondary ps-3 mb-4">
              <li class="mb-2"><strong>Miller, T., et al.</strong> <em>The IoT and AI in Agriculture: The Time Is Now—A Systematic Review of Smart Sensing Technologies.</em> Sensors, 2025.</li>
              <li class="mb-2"><strong>Mansoor, S., et al.</strong> <em>Integration of smart sensors and IOT in precision agriculture: trends, challenges and future prospectives.</em> Frontiers in Plant Science, 2025.</li>
              <li class="mb-2"><strong>Soussi, A., et al.</strong> <em>Smart Sensors and Smart Data for Precision Agriculture: A Review.</em> Sensors, 2024.</li>
            </ul>
          
          `,
          presentation: "https://docs.google.com/presentation/d/e/2PACX-1vQ820Vgts2LmFaB5r_TTFziwtRBOH2pIUUsqoD9JFzaEGdk-RDz8-uGF7w1mgWYSw/pubembed?start=false&loop=false&delayms=3000",
          labs: [
            {
              title: "Laboratorio 11: Sensor de Humedad y Conductividad en Suelo",
              guide: "ECG_Click.txt",
              description: "Monitoreo avanzado e interfaz con sensores capacitivos para evitar corrosión galvánica en la medición de humedad."
            }
          ],
          resources: [
            { name: "10_Instrumentación_agro.pptx", type: "pptx", size: "3.2 MB" },
            { name: "The IoT and AI in Agriculture.pdf", type: "pdf", size: "1.9 MB", url: "public/The IoT and AI in Agriculture.pdf" },
            { name: "Integration of smart sensors and.pdf", type: "pdf", size: "2.4 MB", url: "public/Integration of smart sensors and.pdf" },
            { name: "Smart Sensors and Smart Data for Precision Agriculture.pdf", type: "pdf", size: "2.3 MB", url: "public/Smart Sensors and Smart Data for Precision Agriculture.pdf" }
          ],
          quizzes: [
            {
              question: "Pregunta 1<br><br>Un cultivo requiere conocer continuamente la disponibilidad de agua en el suelo para optimizar el riego. ¿Qué variable debería medirse y qué tipo de sensor podría utilizarse?",
              options: [
                "Temperatura ambiental con un sensor LM35.",
                "Humedad del suelo con un sensor capacitivo adecuadamente calibrado.",
                "Conductividad eléctrica con un electrodo de pH.",
                "Humedad relativa con un sensor DHT11."
              ],
              answer: 1,
              explanation: "La humedad del suelo es una variable fundamental para establecer estrategias de riego. Los sensores capacitivos estiman cambios asociados a las propiedades dieléctricas del suelo, que varían con su contenido de agua. Sin embargo, una lectura del ADC no equivale automáticamente a un porcentaje real de humedad: la calibración es fundamental."
            },
            {
              question: "Pregunta 2<br><br>¿Por qué un sensor por sí solo no constituye un sistema IoT agrícola?",
              options: [
                "A. Porque un sensor no puede medir variables físicas.",
                "B. Porque IoT requiere además adquisición/procesamiento, comunicación y una aplicación o servicio que utilice los datos.",
                "C. Porque todos los sensores agrícolas necesitan GPS.",
                "D. Porque IoT solo funciona mediante LoRa."
              ],
              answer: 1,
              explanation: "El sensor constituye únicamente la capa de percepción. Un sistema Ag-IoT integra normalmente sensado → procesamiento → comunicación → plataforma/aplicación → decisión, tal como se representa conceptualmente en la arquitectura presentada en la diapositiva 17."
            },
            {
              question: "Pregunta 3<br><br>¿Qué ventaja puede presentar un sensor capacitivo de humedad del suelo frente a uno resistivo?",
              options: [
                "A. No requiere calibración.",
                "B. Mide directamente el volumen exacto de agua.",
                "C. Reduce problemas asociados a la corrosión de electrodos expuestos.",
                "D. Siempre tiene salida digital."
              ],
              answer: 2,
              explanation: "Los sensores resistivos dependen de la conducción eléctrica entre electrodos en contacto con el suelo y pueden sufrir corrosión y degradación. Los capacitivos determinan cambios en propiedades dieléctricas y suelen ser más apropiados para monitorización prolongada, aunque también requieren calibración."
            },
            {
              question: "Pregunta 4<br><br>Se necesitan instalar 50 sensores distribuidos en una finca extensa. Cada nodo transmite solamente temperatura y humedad cada 10 minutos y debe funcionar con batería durante largos periodos. ¿Qué tecnología sería razonable considerar?",
              options: [
                "A. HDMI",
                "B. USB",
                "C. LoRa/LoRaWAN",
                "D. Ethernet cableado a cada sensor"
              ],
              answer: 2,
              explanation: "LoRa/LoRaWAN resulta especialmente interesante cuando se necesitan largas distancias, pequeños volúmenes de datos y bajo consumo energético. No significa que sea siempre la mejor solución: cobertura, topografía, interferencias, frecuencia de transmisión y disponibilidad de gateways deben analizarse antes de seleccionar la tecnología."
            },
            {
              question: "Pregunta 5<br><br>¿Cuál de las siguientes secuencias representa mejor un sistema de agricultura inteligente?",
              options: [
                "A. Sensor → actuador",
                "B. Sensor → microcontrolador → comunicación → plataforma/análisis → decisión → actuación",
                "C. Internet → sensor → GPS",
                "D. Microcontrolador → sensor → batería"
              ],
              answer: 1,
              explanation: "La agricultura inteligente no consiste solamente en medir. Su verdadero valor aparece cuando el dato es adquirido, procesado, comunicado e interpretado para producir una decisión o acción sobre el proceso agrícola."
            },
            {
              question: "Pregunta 6 — Integración<br><br>Un sistema registra: humedad del suelo (18%), temperatura (32 °C), humedad relativa (45%), pronóstico (sin lluvia), y un umbral de cultivo de 25%.<br><br>¿Qué diferencia fundamental existiría entre un sistema de monitorización IoT y un sistema inteligente de agricultura de precisión frente a esta situación?",
              options: [
                "A. Un sistema IoT regaría inmediatamente, mientras que uno inteligente solo mostraría los datos en pantalla.",
                "B. El sistema IoT solo adquiere y transmite datos, mientras que el inteligente los interpreta para decidir si es necesario regar.",
                "C. No existe diferencia, ambos sistemas actúan igual frente a la falta de humedad.",
                "D. El sistema inteligente ignora los sensores y decide el riego basándose únicamente en el clima general."
              ],
              answer: 1,
              explanation: "Esta distinción es fundamental: tener datos no equivale a tomar decisiones inteligentes. La evolución desde instrumentación hacia Agricultura 4.0 ocurre cuando los datos provenientes de múltiples sensores se integran con modelos, reglas, IA o estrategias de control para producir decisiones contextualizadas. Las revisiones recientes precisamente muestran esta transición desde smart sensing hacia análisis mediante IA y automatización."
            }
          ]
        }
      ]
    }
  ]
};

