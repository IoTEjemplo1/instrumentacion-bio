/**
 * @file simulators.js
 * @description Modulo de simuladores fisiologicos interactivos basados en HTML5 Canvas.
 * Contiene la logica de animacion a 60 FPS y procesamiento de senales digitales (DSP)
 * en tiempo real para ECG, EEG, EMG y SpO2.
 * @author Antigravity Pair Programmer
 */

/**
 * Monta el simulador de Electrocardiograma (ECG) en el contenedor especificado.
 * Permite inyectar ruido e interactuar con filtros Pasa-Altas, Pasa-Bajas y Notch.
 * 
 * @param {HTMLElement} container - El elemento contenedor HTML donde se montara el simulador.
 * @returns {function(): void} Funcion de limpieza (cleanup) para detener las animaciones.
 * 
 * @example
 * const container = document.getElementById('simulator-box');
 * const cleanup = mountECGSimulator(container);
 * // Para desmontar:
 * cleanup();
 */
export function mountECGSimulator(container) {
  // Inyectar estructura HTML de controles y pantalla
  container.innerHTML = `
    <div class="card p-3 animate-fade-in d-flex flex-column gap-3">
      <h3 class="h5 m-0 text-primary">🔬 Laboratorio Virtual: Simulador de Filtrado ECG</h3>
      <p class="small text-secondary m-0">
        Este simulador recrea el proceso de adquisicion analogica de un electrocardiograma. Modifique los potenciometros de ruido y active los filtros digitales para ver la remocion en tiempo real de la deriva de linea base, el zumbido de 60Hz y el ruido muscular.
      </p>

      <!-- Pantalla del Osciloscopio -->
      <div style="background-color: #020c1b; border-radius: var(--radius-md); overflow: hidden; border: 2px solid var(--border-color); box-shadow: inset 0 0 20px rgba(0,0,0,0.8);">
        <canvas class="ecg-canvas" style="display: block; width: 100%; height: 320px;"></canvas>
      </div>

      <!-- Controles -->
      <div class="row g-4">
        <!-- Generadores de Ruido -->
        <div class="col-md-6 border-end pe-md-4 d-flex flex-column gap-3">
          <h4 class="h6 m-0 text-primary fw-bold">Generacion de Senal e Interferencias</h4>
          
          <!-- BPM -->
          <div>
            <div class="d-flex justify-content-between small mb-1">
              <span>Frecuencia Cardiaca (BPM):</span>
              <strong class="ecg-bpm-val">70</strong>
            </div>
            <input type="range" min="40" max="180" value="70" class="w-100 ecg-bpm-input">
          </div>

          <!-- Ruido 60 Hz -->
          <div>
            <div class="d-flex justify-content-between small mb-1">
              <span>Ruido de Linea Electrica (60 Hz):</span>
              <strong class="ecg-noise60-val">30%</strong>
            </div>
            <input type="range" min="0" max="10" step="0.5" value="3" class="w-100 ecg-noise60-input">
          </div>

          <!-- Ruido Muscular -->
          <div>
            <div class="d-flex justify-content-between small mb-1">
              <span>Ruido Muscular de Alta Frecuencia:</span>
              <strong class="ecg-muscle-val">20%</strong>
            </div>
            <input type="range" min="0" max="10" step="0.5" value="2" class="w-100 ecg-muscle-input">
          </div>

          <!-- Deriva de Linea Base -->
          <div>
            <div class="d-flex justify-content-between small mb-1">
              <span>Deriva de Linea Base (Respiracion):</span>
              <strong class="ecg-drift-val">30%</strong>
            </div>
            <input type="range" min="0" max="10" step="0.5" value="3" class="w-100 ecg-drift-input">
          </div>
        </div>

        <!-- Modulo de Filtros -->
        <div class="col-md-6 ps-md-4 d-flex flex-column gap-3">
          <h4 class="h6 m-0 text-primary fw-bold">Etapa de Filtrado de Biopotenciales</h4>
          
          <!-- Pasa Altas -->
          <label class="d-flex align-items-start gap-3 cursor-pointer user-select-none">
            <input type="checkbox" class="ecg-hpf-check mt-1" style="width: 18px; height: 18px; accent-color: var(--status-success);">
            <div>
              <div class="fw-bold small">Filtro Pasa-Altas (HPF: 0.5 Hz)</div>
              <div class="small text-secondary" style="font-size: 0.75rem;">Remueve derivas lentas del osciloscopio y artefactos por respiracion.</div>
            </div>
          </label>

          <!-- Filtro Notch -->
          <label class="d-flex align-items-start gap-3 cursor-pointer user-select-none">
            <input type="checkbox" class="ecg-notch-check mt-1" style="width: 18px; height: 18px; accent-color: var(--status-success);">
            <div>
              <div class="fw-bold small">Filtro Notch de Rechazo de Banda (60 Hz)</div>
              <div class="small text-secondary" style="font-size: 0.75rem;">Atenua la induccion electromagnetica de las tomas de corriente.</div>
            </div>
          </label>

          <!-- Pasa Bajas -->
          <label class="d-flex align-items-start gap-3 cursor-pointer user-select-none">
            <input type="checkbox" class="ecg-lpf-check mt-1" style="width: 18px; height: 18px; accent-color: var(--status-success);">
            <div>
              <div class="fw-bold small">Filtro Pasa-Bajas (LPF: 40 Hz)</div>
              <div class="small text-secondary" style="font-size: 0.75rem;">Elimina el ruido de alta frecuencia provocado por contracciones musculares.</div>
            </div>
          </label>

          <div class="mt-auto p-2 bg-light text-dark rounded-3 border border-secondary border-dashed small" style="font-size: 0.8rem;">
            💡 <strong>Tip de Ingenieria:</strong> Observe como, al activar unicamente el filtro Notch, se estabiliza el zumbido de alta frecuencia pero el ECG sigue balanceandose verticalmente si la Deriva de Linea Base esta activa. Se requiere el HPF para estabilizar el centro.
          </div>
        </div>
      </div>
    </div>
  `;

  // Referencias a los elementos inyectados
  const canvas = container.querySelector('.ecg-canvas');
  const ctx = canvas.getContext('2d');

  // Referencias a los inputs
  const bpmInput = container.querySelector('.ecg-bpm-input');
  const noise60Input = container.querySelector('.ecg-noise60-input');
  const muscleInput = container.querySelector('.ecg-muscle-input');
  const driftInput = container.querySelector('.ecg-drift-input');

  const hpfCheck = container.querySelector('.ecg-hpf-check');
  const notchCheck = container.querySelector('.ecg-notch-check');
  const lpfCheck = container.querySelector('.ecg-lpf-check');

  // Referencias a las etiquetas de valor
  const bpmVal = container.querySelector('.ecg-bpm-val');
  const noise60Val = container.querySelector('.ecg-noise60-val');
  const muscleVal = container.querySelector('.ecg-muscle-val');
  const driftVal = container.querySelector('.ecg-drift-val');

  // Estado del Simulador
  const state = {
    bpm: 70,
    noise60Hz: 3,
    muscleNoise: 2,
    baselineDrift: 3,
    hpf: false,
    notch: false,
    lpf: false
  };

  // Vincular eventos de actualizacion de controles
  const bindEvents = () => {
    bpmInput.addEventListener('input', (e) => {
      state.bpm = Number(e.target.value);
      bpmVal.textContent = state.bpm;
    });
    noise60Input.addEventListener('input', (e) => {
      state.noise60Hz = Number(e.target.value);
      noise60Val.textContent = `${state.noise60Hz * 10}%`;
    });
    muscleInput.addEventListener('input', (e) => {
      state.muscleNoise = Number(e.target.value);
      muscleVal.textContent = `${state.muscleNoise * 10}%`;
    });
    driftInput.addEventListener('input', (e) => {
      state.baselineDrift = Number(e.target.value);
      driftVal.textContent = `${state.baselineDrift * 10}%`;
    });

    hpfCheck.addEventListener('change', (e) => {
      state.hpf = e.target.checked;
    });
    notchCheck.addEventListener('change', (e) => {
      state.notch = e.target.checked;
    });
    lpfCheck.addEventListener('change', (e) => {
      state.lpf = e.target.checked;
    });
  };
  bindEvents();

  // Adaptar tamano del canvas
  const resizeCanvas = () => {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 320;
  };
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Buffers y filtros internos
  const bufferSize = 800;
  const rawSignal = new Array(bufferSize).fill(160);
  const filteredSignal = new Array(bufferSize).fill(160);
  
  let sampleCounter = 0;
  let lastHighPass = 160;
  let lastRaw = 160;
  
  // Variables para filtros de diferencia (IIR de 1er/2do orden)
  let y_lp1 = 160;
  let x_n1 = 160, x_n2 = 160, y_n1 = 160, y_n2 = 160;

  /**
   * Generador matematico de onda ECG sintetica.
   */
  const generateECGBase = (t, currentBpm) => {
    const fs = 250; 
    const period = (fs * 60) / currentBpm;
    const phase = t % period;
    
    let base = 0;
    
    // Onda P
    if (phase > period * 0.1 && phase < period * 0.15) {
      const pPhase = (phase - period * 0.1) / (period * 0.05);
      base += 10 * Math.sin(pPhase * Math.PI);
    }
    
    // Complejo QRS
    if (phase > period * 0.2 && phase < period * 0.21) {
      // Onda Q
      const qPhase = (phase - period * 0.2) / (period * 0.01);
      base -= 5 * Math.sin(qPhase * Math.PI);
    } else if (phase >= period * 0.21 && phase < period * 0.24) {
      // Onda R
      const rPhase = (phase - period * 0.21) / (period * 0.03);
      base += 80 * Math.sin(rPhase * Math.PI);
    } else if (phase >= period * 0.24 && phase < period * 0.26) {
      // Onda S
      const sPhase = (phase - period * 0.24) / (period * 0.02);
      base -= 20 * Math.sin(sPhase * Math.PI);
    }
    
    // Onda T
    if (phase > period * 0.35 && phase < period * 0.45) {
      const tPhase = (phase - period * 0.35) / (period * 0.1);
      base += 20 * Math.sin(tPhase * Math.PI);
    }
    
    return 160 - base; // Invertido porque Y=0 es arriba
  };

  let animationFrameId = null;

  /**
   * Bucle de animacion principal.
   */
  const draw = () => {
    const fs = 250;
    
    // Muestra base de ECG
    const ecgBase = generateECGBase(sampleCounter, state.bpm);
    
    // Adicion de ruidos
    const lineNoise = state.noise60Hz * 10 * Math.sin((2 * Math.PI * 60 * sampleCounter) / fs);
    const randomNoise = state.muscleNoise * 5 * (Math.random() - 0.5);
    const drift = state.baselineDrift * 15 * Math.sin((2 * Math.PI * 0.2 * sampleCounter) / fs);
    
    const rawSample = ecgBase + lineNoise + randomNoise + drift;
    let processedSample = rawSample;

    // 1. Filtro Pasa-Altas (HPF: 0.5Hz)
    if (state.hpf) {
      const hp = 0.985 * (lastHighPass + processedSample - lastRaw);
      lastHighPass = hp;
      lastRaw = processedSample;
      processedSample = hp + 160; // Centrar
    } else {
      lastHighPass = processedSample - 160;
      lastRaw = processedSample;
    }

    // 2. Filtro Notch (60Hz)
    if (state.notch) {
      const w0 = 2 * Math.PI * 60 / fs;
      const r = 0.92;
      const cosw0 = Math.cos(w0);
      
      const x_n = processedSample - 160;
      const y_n = x_n - 2 * cosw0 * x_n1 + x_n2 + 2 * r * cosw0 * y_n1 - r * r * y_n2;
      
      x_n2 = x_n1;
      x_n1 = x_n;
      y_n2 = y_n1;
      y_n1 = y_n;
      
      processedSample = y_n + 160;
    } else {
      x_n2 = processedSample - 160;
      x_n1 = processedSample - 160;
      y_n2 = processedSample - 160;
      y_n1 = processedSample - 160;
    }

    // 3. Filtro Pasa-Bajas (LPF: 40Hz)
    if (state.lpf) {
      processedSample = 0.15 * processedSample + 0.85 * y_lp1;
      y_lp1 = processedSample;
    } else {
      y_lp1 = processedSample;
    }

    // Guardar en buffers
    rawSignal.shift();
    rawSignal.push(rawSample);
    
    filteredSignal.shift();
    filteredSignal.push(processedSample);

    sampleCounter++;

    // Dibujar en pantalla
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Papel milimetrado
    ctx.strokeStyle = 'rgba(197, 160, 89, 0.08)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 10) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 10) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }

    ctx.strokeStyle = 'rgba(197, 160, 89, 0.2)';
    for (let x = 0; x < canvas.width; x += 50) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 50) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }

    // Trazar senal cruda (Rojo)
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.7)';
    ctx.lineWidth = 1.5;
    for (let i = 0; i < canvas.width; i++) {
      const idx = Math.floor((i / canvas.width) * bufferSize);
      if (i === 0) ctx.moveTo(i, rawSignal[idx]);
      else ctx.lineTo(i, rawSignal[idx]);
    }
    ctx.stroke();

    // Trazar senal filtrada (Azul)
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0, 168, 232, 1)';
    ctx.lineWidth = 2.5;
    for (let i = 0; i < canvas.width; i++) {
      const idx = Math.floor((i / canvas.width) * bufferSize);
      if (i === 0) ctx.moveTo(i, filteredSignal[idx]);
      else ctx.lineTo(i, filteredSignal[idx]);
    }
    ctx.stroke();

    // Leyendas
    ctx.font = '12px Inter, sans-serif';
    ctx.fillStyle = 'rgba(239, 68, 68, 1)';
    ctx.fillText('🔴 Senal Cruda (Raw)', 20, 30);
    
    ctx.fillStyle = 'rgba(0, 168, 232, 1)';
    ctx.fillText('🔵 Senal Filtrada (Filtered)', 20, 50);

    animationFrameId = requestAnimationFrame(draw);
  };
  draw();

  // Retornar funcion de limpieza
  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', resizeCanvas);
  };
}

/**
 * Monta el simulador de Electroencefalograma (EEG) y analisis espectral en el contenedor.
 * 
 * @param {HTMLElement} container - El elemento contenedor HTML.
 * @returns {function(): void} Funcion de limpieza.
 */
export function mountEEGSimulator(container) {
  container.innerHTML = `
    <div class="card p-3 animate-fade-in d-flex flex-column gap-3">
      <h3 class="h5 m-0 text-primary">🧠 Laboratorio Virtual: Oscilaciones Cerebrales y FFT (EEG)</h3>
      <p class="small text-secondary m-0">
        El Electroencefalograma es la mezcla de potenciales de campo extracelulares de millones de neuronas. Ajuste la presencia de cada banda de frecuencia e identifique como cambia la forma de la onda temporal y las componentes espectrales.
      </p>

      <!-- Pantalla del Canvas -->
      <div style="background-color: #020c1b; border-radius: var(--radius-md); overflow: hidden; border: 2px solid var(--border-color); box-shadow: inset 0 0 20px rgba(0,0,0,0.8);">
        <canvas class="eeg-canvas" style="display: block; width: 100%; height: 300px;"></canvas>
      </div>

      <!-- Deslizadores de Ondas -->
      <div class="row g-3">
        <!-- Delta -->
        <div class="col-md-4">
          <div class="p-3 rounded border border-danger-subtle d-flex flex-column gap-2" style="background-color: rgba(239,68,68,0.05);">
            <div class="d-flex justify-content-between small">
              <span class="text-danger fw-bold">🔴 Ritmo Delta (0.5 - 4 Hz):</span>
              <strong class="eeg-delta-val">2 / 10</strong>
            </div>
            <input type="range" min="0" max="10" value="2" class="w-100 eeg-delta-input">
            <div class="text-secondary" style="font-size: 0.72rem;">
              Predomina en estados de sueno profundo no-REM. Ondas de gran amplitud y baja frecuencia.
            </div>
          </div>
        </div>

        <!-- Alpha -->
        <div class="col-md-4">
          <div class="p-3 rounded border border-success-subtle d-flex flex-column gap-2" style="background-color: rgba(16,185,129,0.05);">
            <div class="d-flex justify-content-between small">
              <span class="text-success fw-bold">🟢 Ritmo Alpha (8 - 12 Hz):</span>
              <strong class="eeg-alpha-val">6 / 10</strong>
            </div>
            <input type="range" min="0" max="10" value="6" class="w-100 eeg-alpha-input">
            <div class="text-secondary" style="font-size: 0.72rem;">
              Aparece en relajacion mental, ojos cerrados y calma. Ondas ritmicas sincronizadas.
            </div>
          </div>
        </div>

        <!-- Beta -->
        <div class="col-md-4">
          <div class="p-3 rounded border border-warning-subtle d-flex flex-column gap-2" style="background-color: rgba(245,158,11,0.05);">
            <div class="d-flex justify-content-between small">
              <span class="text-warning fw-bold">🟡 Ritmo Beta (12 - 30 Hz):</span>
              <strong class="eeg-beta-val">3 / 10</strong>
            </div>
            <input type="range" min="0" max="10" value="3" class="w-100 eeg-beta-input">
            <div class="text-secondary" style="font-size: 0.72rem;">
              Asociado al pensamiento activo, concentracion y resolucion de problemas.
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const canvas = container.querySelector('.eeg-canvas');
  const ctx = canvas.getContext('2d');

  const deltaInput = container.querySelector('.eeg-delta-input');
  const alphaInput = container.querySelector('.eeg-alpha-input');
  const betaInput = container.querySelector('.eeg-beta-input');

  const deltaVal = container.querySelector('.eeg-delta-val');
  const alphaVal = container.querySelector('.eeg-alpha-val');
  const betaVal = container.querySelector('.eeg-beta-val');

  const state = { delta: 2, alpha: 6, beta: 3 };

  deltaInput.addEventListener('input', (e) => {
    state.delta = Number(e.target.value);
    deltaVal.textContent = `${state.delta} / 10`;
  });
  alphaInput.addEventListener('input', (e) => {
    state.alpha = Number(e.target.value);
    alphaVal.textContent = `${state.alpha} / 10`;
  });
  betaInput.addEventListener('input', (e) => {
    state.beta = Number(e.target.value);
    betaVal.textContent = `${state.beta} / 10`;
  });

  const resizeCanvas = () => {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 300;
  };
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const bufferSize = 400;
  const timeBuffer = new Array(bufferSize).fill(100);
  let sampleCounter = 0;
  let animationFrameId = null;

  const draw = () => {
    const fs = 150;
    
    // Generar bioseñal EEG mezclada
    const deltaSin = state.delta * 12 * Math.sin(2 * Math.PI * 2 * sampleCounter / fs);
    const alphaSin = state.alpha * 8 * Math.sin(2 * Math.PI * 10 * sampleCounter / fs);
    const betaSin = state.beta * 4 * Math.sin(2 * Math.PI * 22 * sampleCounter / fs);
    const noise = (Math.random() - 0.5) * 6;
    
    const mixedSignal = deltaSin + alphaSin + betaSin + noise;

    timeBuffer.shift();
    timeBuffer.push(100 - mixedSignal);
    sampleCounter++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Anchos proporcionales
    const timePanelWidth = Math.floor(canvas.width * 0.65);
    const freqPanelWidth = canvas.width - timePanelWidth - 20;

    // 1. PANEL TEMPORAL
    ctx.fillStyle = '#060e1b';
    ctx.fillRect(0, 0, timePanelWidth, canvas.height);
    
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.05)';
    ctx.lineWidth = 1;
    for (let x = 0; x < timePanelWidth; x += 20) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 20) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(timePanelWidth, y); ctx.stroke();
    }

    ctx.beginPath();
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1.5;
    for (let i = 0; i < timePanelWidth; i++) {
      const idx = Math.floor((i / timePanelWidth) * bufferSize);
      if (i === 0) ctx.moveTo(i, timeBuffer[idx]);
      else ctx.lineTo(i, timeBuffer[idx]);
    }
    ctx.stroke();

    ctx.font = '11px Inter, sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('Senal de EEG en el Tiempo (uV vs t)', 15, 20);

    // 2. PANEL FRECUENCIAL (FFT)
    const freqStart = timePanelWidth + 20;
    ctx.fillStyle = '#081222';
    ctx.fillRect(freqStart, 0, freqPanelWidth, canvas.height);

    ctx.fillStyle = '#94a3b8';
    ctx.fillText('Espectro de Potencia (FFT)', freqStart + 15, 20);

    // Ejes espectrales
    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.beginPath();
    ctx.moveTo(freqStart + 10, canvas.height - 30);
    ctx.lineTo(canvas.width - 10, canvas.height - 30);
    ctx.moveTo(freqStart + 10, 30);
    ctx.lineTo(freqStart + 10, canvas.height - 30);
    ctx.stroke();

    // Dibujar columnas reactivas
    const bands = [
      { label: 'Delta', value: state.delta, color: '#ef4444', x: freqStart + 30 },
      { label: 'Alpha', value: state.alpha, color: '#10b981', x: freqStart + 90 },
      { label: 'Beta', value: state.beta, color: '#f59e0b', x: freqStart + 150 }
    ];

    bands.forEach(band => {
      const fluct = (Math.random() - 0.5) * 4;
      const targetHeight = Math.max(5, (band.value * 18) + fluct);
      
      ctx.fillStyle = band.color;
      ctx.fillRect(band.x, canvas.height - 30 - targetHeight, 35, targetHeight);

      ctx.fillStyle = '#cbd5e1';
      ctx.font = '10px Inter, sans-serif';
      ctx.fillText(band.label, band.x, canvas.height - 15);
      ctx.fillText(`${Math.round(band.value * 10)}%`, band.x + 5, canvas.height - 35 - targetHeight);
    });

    animationFrameId = requestAnimationFrame(draw);
  };
  draw();

  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', resizeCanvas);
  };
}

/**
 * Monta el simulador de Electromiografia (EMG) en el contenedor.
 * Enseña la rectificacion y filtro pasa-bajas para envolvente lineal.
 * 
 * @param {HTMLElement} container - El elemento contenedor HTML.
 * @returns {function(): void} Funcion de limpieza.
 */
export function mountEMGSimulator(container) {
  container.innerHTML = `
    <div class="card p-3 animate-fade-in d-flex flex-column gap-3">
      <h3 class="h5 m-0 text-primary">💪 Laboratorio Virtual: Adquisicion de Electromiografia (EMG)</h3>
      <p class="small text-secondary m-0">
        La senal de EMG mide los potenciales electricos generados por el reclutamiento de unidades motoras musculares. Para utilizar esta senal en control de protesis o interfaces humano-maquina, se demodula calculando su envolvente lineal.
      </p>

      <!-- Pantalla Canvas -->
      <div style="background-color: #07162c; border-radius: var(--radius-md); overflow: hidden; border: 2px solid var(--border-color); box-shadow: inset 0 0 20px rgba(0,0,0,0.8);">
        <canvas class="emg-canvas" style="display: block; width: 100%; height: 320px;"></canvas>
      </div>

      <!-- Controles -->
      <div class="row g-4">
        <!-- Potenciometros -->
        <div class="col-md-6 border-end pe-md-4 d-flex flex-column gap-3">
          <h4 class="h6 m-0 text-primary fw-bold">Estimulo Mecanico</h4>
          
          <!-- Fuerza -->
          <div>
            <div class="d-flex justify-content-between small mb-1">
              <span>Fuerza de Contraccion Muscular:</span>
              <strong class="emg-force-val">20%</strong>
            </div>
            <input type="range" min="0" max="100" value="20" class="w-100 emg-force-input">
          </div>

          <!-- Constante de Suavizado -->
          <div>
            <div class="d-flex justify-content-between small mb-1">
              <span>Constante de Suavizado (LPF cutoff):</span>
              <strong class="emg-smooth-val">95%</strong>
            </div>
            <input type="range" min="80" max="99" step="0.5" value="95" class="w-100 emg-smooth-input">
          </div>
        </div>

        <!-- Opciones de Visualizacion -->
        <div class="col-md-6 ps-md-4 d-flex flex-column gap-3">
          <h4 class="h6 m-0 text-primary fw-bold">Visualizacion del Procesamiento</h4>
          
          <label class="d-flex align-items-start gap-3 cursor-pointer user-select-none">
            <input type="checkbox" checked class="emg-rect-check mt-1" style="width: 18px; height: 18px; accent-color: var(--color-secondary);">
            <div>
              <div class="fw-bold small">Mostrar Rectificacion de Onda Completa</div>
              <div class="small text-secondary" style="font-size: 0.75rem;">Toma el valor absoluto de la senal eliminando las componentes negativas.</div>
            </div>
          </label>

          <label class="d-flex align-items-start gap-3 cursor-pointer user-select-none">
            <input type="checkbox" checked class="emg-env-check mt-1" style="width: 18px; height: 18px; accent-color: var(--color-secondary);">
            <div>
              <div class="fw-bold small">Mostrar Envolvente Lineal (Filtro Pasa-Bajas)</div>
              <div class="small text-secondary" style="font-size: 0.75rem;">Aplica un filtro integrador para extraer la tendencia de fuerza de contraccion.</div>
            </div>
          </label>

          <div class="mt-auto p-2 bg-light text-dark rounded-3 border border-secondary border-dashed small" style="font-size: 0.8rem;">
            🤖 <strong>Aplicacion en Robotica:</strong> La envolvente de EMG (linea dorada) se utiliza en protesis mioelectricas. Cuando el valor cruza un umbral (ej. 40%), se envia una orden de disparo para abrir o cerrar los dedos mecanicos.
          </div>
        </div>
      </div>
    </div>
  `;

  const canvas = container.querySelector('.emg-canvas');
  const ctx = canvas.getContext('2d');

  const forceInput = container.querySelector('.emg-force-input');
  const smoothInput = container.querySelector('.emg-smooth-input');

  const rectCheck = container.querySelector('.emg-rect-check');
  const envCheck = container.querySelector('.emg-env-check');

  const forceVal = container.querySelector('.emg-force-val');
  const smoothVal = container.querySelector('.emg-smooth-val');

  const state = {
    force: 20,
    smoothingFactor: 95,
    showRectified: true,
    showEnvelope: true
  };

  forceInput.addEventListener('input', (e) => {
    state.force = Number(e.target.value);
    forceVal.textContent = `${state.force}%`;
  });
  smoothInput.addEventListener('input', (e) => {
    state.smoothingFactor = Number(e.target.value);
    smoothVal.textContent = `${state.smoothingFactor}%`;
  });

  rectCheck.addEventListener('change', (e) => {
    state.showRectified = e.target.checked;
  });
  envCheck.addEventListener('change', (e) => {
    state.showEnvelope = e.target.checked;
  });

  const resizeCanvas = () => {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 320;
  };
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const bufferSize = 800;
  const rawBuffer = new Array(bufferSize).fill(160);
  const envelopeBuffer = new Array(bufferSize).fill(160);
  
  let envSmoothed = 0;
  let animationFrameId = null;

  const draw = () => {
    // Generar EMG Cruda modulada por fuerza muscular
    const recruitmentScale = state.force / 100;
    const baseNoise = (Math.random() - 0.5) * 150 * recruitmentScale;
    const backgroundNoise = (Math.random() - 0.5) * 4;
    const emgRawSample = baseNoise + backgroundNoise;

    // 1. Rectificacion
    const rectifiedSample = Math.abs(emgRawSample);

    // 2. Filtro LPF (Envolvente)
    const alpha = state.smoothingFactor / 100;
    envSmoothed = alpha * envSmoothed + (1 - alpha) * rectifiedSample;

    rawBuffer.shift();
    rawBuffer.push(160 - emgRawSample);

    envelopeBuffer.shift();
    envelopeBuffer.push(160 - envSmoothed);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Rejilla
    ctx.strokeStyle = 'rgba(0, 59, 113, 0.05)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 15) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 15) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }

    // Linea central
    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.beginPath(); ctx.moveTo(0, 160); ctx.lineTo(canvas.width, 160); ctx.stroke();

    // Dibujar EMG Crudo (Gris)
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.7)';
    ctx.lineWidth = 1;
    for (let i = 0; i < canvas.width; i++) {
      const idx = Math.floor((i / canvas.width) * bufferSize);
      if (i === 0) ctx.moveTo(i, rawBuffer[idx]);
      else ctx.lineTo(i, rawBuffer[idx]);
    }
    ctx.stroke();

    // Dibujar Rectificado (Naranja suave)
    if (state.showRectified && state.force > 0) {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.35)';
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i++) {
        const idx = Math.floor((i / canvas.width) * bufferSize);
        const yVal = 160 - Math.abs(160 - rawBuffer[idx]);
        if (i === 0) ctx.moveTo(i, yVal);
        else ctx.lineTo(i, yVal);
      }
      ctx.stroke();
    }

    // Dibujar Envolvente (Dorado)
    if (state.showEnvelope) {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(197, 160, 89, 1)';
      ctx.lineWidth = 3;
      for (let i = 0; i < canvas.width; i++) {
        const idx = Math.floor((i / canvas.width) * bufferSize);
        if (i === 0) ctx.moveTo(i, envelopeBuffer[idx]);
        else ctx.lineTo(i, envelopeBuffer[idx]);
      }
      ctx.stroke();
    }

    // Textos
    ctx.font = '12px Inter, sans-serif';
    ctx.fillStyle = 'rgba(148, 163, 184, 1)';
    ctx.fillText('⚪ EMG Cruda (Raw Interferential)', 20, 30);
    
    if (state.showRectified) {
      ctx.fillStyle = 'rgba(245, 158, 11, 1)';
      ctx.fillText('🟠 Senal Rectificada (|Raw|)', 20, 50);
    }
    if (state.showEnvelope) {
      ctx.fillStyle = 'rgba(197, 160, 89, 1)';
      ctx.fillText('🟡 Envolvente Lineal (Demodulada)', 20, 70);
    }

    animationFrameId = requestAnimationFrame(draw);
  };
  draw();

  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', resizeCanvas);
  };
}

/**
 * Monta el simulador de Pulsioximetria (SpO2) y PPG en el contenedor.
 * Calcula el ratio R y el porcentaje de saturacion de oxigeno en tiempo real.
 * 
 * @param {HTMLElement} container - El elemento contenedor HTML.
 * @returns {function(): void} Funcion de limpieza.
 */
export function mountSpO2Simulator(container) {
  container.innerHTML = `
    <div class="card p-3 animate-fade-in d-flex flex-column gap-3">
      <h3 class="h5 m-0 text-primary">🩸 Laboratorio Virtual: Pulsioximetria Optica y Ratios (SpO2)</h3>
      <p class="small text-secondary m-0">
        La saturacion de oxigeno mide el porcentaje de hemoglobina cargada con O2. Los emisores opticos alternan luces Roja e Infrarroja a traves del lecho capilar del dedo, y la relacion de sus componentes pulsatiles (AC) y continuas (DC) determina la concentracion de SpO2.
      </p>

      <!-- Pantalla Canvas -->
      <div style="background-color: #030f1e; border-radius: var(--radius-md); overflow: hidden; border: 2px solid var(--border-color); box-shadow: inset 0 0 20px rgba(0,0,0,0.8);">
        <canvas class="spo2-canvas" style="display: block; width: 100%; height: 320px;"></canvas>
      </div>

      <!-- Potenciometros -->
      <div class="row g-4">
        <div class="col-md-6">
          <div class="d-flex justify-content-between small mb-1">
            <span>Frecuencia del Pulso Cardiaco (PR):</span>
            <strong class="text-success spo2-pr-val">72 BPM</strong>
          </div>
          <input type="range" min="40" max="160" value="72" class="w-100 spo2-pr-input">
        </div>

        <div class="col-md-6">
          <div class="d-flex justify-content-between small mb-1">
            <span>Saturacion de Oxigeno (SpO2):</span>
            <strong class="text-info spo2-val">98%</strong>
          </div>
          <input type="range" min="70" max="100" value="98" class="w-100 spo2-input">
        </div>
      </div>

      <div class="p-2 bg-light text-dark rounded-3 border border-secondary border-dashed small" style="font-size: 0.8rem;">
        💡 <strong>Principio de Beer-Lambert:</strong> Observe como, al disminuir la saturacion a niveles hipoxicos (ej. 75%), la amplitud de la senal Roja (roja) aumenta notablemente con respecto a la Infrarroja (violeta). Esto ocurre porque hay mas hemoglobina reducida (Hb) libre en sangre, la cual absorbe fuertemente la luz roja a 660nm.
      </div>
    </div>
  `;

  const canvas = container.querySelector('.spo2-canvas');
  const ctx = canvas.getContext('2d');

  const prInput = container.querySelector('.spo2-pr-input');
  const spo2Input = container.querySelector('.spo2-input');

  const prVal = container.querySelector('.spo2-pr-val');
  const spo2Val = container.querySelector('.spo2-val');

  const state = {
    pulseRate: 72,
    oxygenSat: 98
  };

  prInput.addEventListener('input', (e) => {
    state.pulseRate = Number(e.target.value);
    prVal.textContent = `${state.pulseRate} BPM`;
  });
  spo2Input.addEventListener('input', (e) => {
    state.oxygenSat = Number(e.target.value);
    spo2Val.textContent = `${state.oxygenSat}%`;
  });

  const resizeCanvas = () => {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 320;
  };
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const bufferSize = 600;
  const redBuffer = new Array(bufferSize).fill(100);
  const irBuffer = new Array(bufferSize).fill(220);

  let sampleCounter = 0;
  let animationFrameId = null;

  const draw = () => {
    const fs = 150;
    
    // Forma de onda PPG dicrota
    const period = (fs * 60) / state.pulseRate;
    const phase = sampleCounter % period;
    
    let ppgUnit = 0;
    const normPhase = phase / period;
    
    // Suma de dos gaussianas (onda sistolica y diastolica)
    ppgUnit += 0.8 * Math.exp(-Math.pow((normPhase - 0.25) / 0.1, 2));
    ppgUnit += 0.35 * Math.exp(-Math.pow((normPhase - 0.55) / 0.08, 2));

    // Ratio de Ratios (R)
    // SpO2 = 110 - 25 * R => R = (110 - SpO2) / 25
    const R = (110 - state.oxygenSat) / 25;

    const dcRed = 100;
    const dcIR = 100;
    
    const acIR = 22;
    const acRed = R * acIR * (dcRed / dcIR);

    const redSample = 90 - (dcRed + acRed * ppgUnit);
    const irSample = 210 - (dcIR + acIR * ppgUnit);

    redBuffer.shift();
    redBuffer.push(redSample);

    irBuffer.shift();
    irBuffer.push(irSample);

    sampleCounter++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Fondo
    ctx.fillStyle = '#030f1e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Rejilla
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.06)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 20) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 20) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }

    // Linea divisoria
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.beginPath(); ctx.moveTo(0, 150); ctx.lineTo(canvas.width, 150); ctx.stroke();

    // Dibujar canal Rojo (660nm)
    ctx.beginPath();
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 2;
    for (let i = 0; i < canvas.width; i++) {
      const idx = Math.floor((i / canvas.width) * bufferSize);
      if (i === 0) ctx.moveTo(i, redBuffer[idx]);
      else ctx.lineTo(i, redBuffer[idx]);
    }
    ctx.stroke();

    // Dibujar canal Infrarrojo (940nm)
    ctx.beginPath();
    ctx.strokeStyle = '#a855f7';
    ctx.lineWidth = 2;
    for (let i = 0; i < canvas.width; i++) {
      const idx = Math.floor((i / canvas.width) * bufferSize);
      if (i === 0) ctx.moveTo(i, irBuffer[idx]);
      else ctx.lineTo(i, irBuffer[idx]);
    }
    ctx.stroke();

    // Textos
    ctx.font = '11px Inter, sans-serif';
    ctx.fillStyle = '#ef4444';
    ctx.fillText(`🔴 Canal Luz Roja (660 nm) - AC/DC = ${((acRed/dcRed)*100).toFixed(2)}%`, 15, 25);
    
    ctx.fillStyle = '#a855f7';
    ctx.fillText(`🟣 Canal Luz Infrarroja (940 nm) - AC/DC = ${((acIR/dcIR)*100).toFixed(2)}%`, 15, 175);

    // Panel Digital derecho de mediciones
    ctx.fillStyle = 'rgba(2, 12, 27, 0.75)';
    ctx.fillRect(canvas.width - 150, 10, 140, 130);
    ctx.strokeStyle = 'var(--color-secondary)';
    ctx.lineWidth = 1;
    ctx.strokeRect(canvas.width - 150, 10, 140, 130);

    ctx.font = '10px Inter, sans-serif';
    ctx.fillStyle = 'var(--text-tertiary)';
    ctx.fillText('CALCULADORA SpO2', canvas.width - 140, 28);
    
    ctx.fillStyle = '#cbd5e1';
    ctx.fillText(`Ratio R: ${R.toFixed(3)}`, canvas.width - 140, 48);
    
    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 18px Inter, sans-serif';
    ctx.fillText(`PR: ${state.pulseRate} bpm`, canvas.width - 140, 80);
    
    ctx.fillStyle = '#38bdf8';
    ctx.fillText(`SpO2: ${state.oxygenSat}%`, canvas.width - 140, 115);

    animationFrameId = requestAnimationFrame(draw);
  };
  draw();

  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', resizeCanvas);
  };
}
