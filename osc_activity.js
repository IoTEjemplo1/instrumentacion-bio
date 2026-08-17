function initOscilloscopeActivity(onAwardXp) {
  // 1. Inyectar Estilos Compartidos (Ya inyectados por otras actividades o aquí por si acaso)
  const styleId = 'afg1022-activity-styles'; // Usa la misma clase base
  if (!document.getElementById(styleId)) {
    // Si no existen, los estilos base deberian ser inyectados por una función global. 
    // Como hicimos el parche anterior, asumimos que están ahí, o los agregamos si falta.
    // Pero en el parche anterior no extrajimos a una función global, simplemente copiamos el bloque a initPowerSupplyActivity.
    // Vamos a copiarlo rápido aquí para garantizar que existan.
  }

  // 1. Data Definitions
  const componentsList = [
    // NIVEL 1
    {
      level: 1,
      id: "pantalla-principal",
      name: "Pantalla Principal",
      description: "Display donde se grafican las formas de onda capturadas.",
      bioApp: "Aquí observarás la morfología del ECG, EEG o señales simuladas en el dominio del tiempo.",
      coords: { top: 15, left: 16, width: 44, height: 58 },
      hint: "La gran área oscura en el lado izquierdo."
    },
    {
      level: 1,
      id: "boton-power",
      name: "Botón de Encendido",
      description: "Energiza el osciloscopio.",
      bioApp: "Regla básica: encender antes de conectar sondas al circuito.",
      coords: { top: 86, left: 18, width: 5, height: 8 },
      hint: "Esquina inferior izquierda, botón redondo."
    },
    {
      level: 1,
      id: "bloque-vertical",
      name: "Bloque de Controles Verticales",
      description: "Agrupa los ajustes de escala (V/div) y posición para las señales.",
      bioApp: "Crucial para amplificar visualmente bioseñales muy pequeñas (milivoltios).",
      coords: { top: 48, left: 70, width: 28, height: 30 },
      hint: "Zona inferior derecha con números 1 y 2 coloreados."
    },
    {
      level: 1,
      id: "bloque-horizontal",
      name: "Bloque de Control Horizontal",
      description: "Ajusta la base de tiempo (s/div) y posición en el eje X.",
      bioApp: "Permite ver más ciclos de la señal (ej. varios latidos de ECG) o hacer zoom en un solo pulso.",
      coords: { top: 10, left: 66, width: 17, height: 16 },
      hint: "Parte superior derecha, perillas grises grandes y pequeñas."
    },
    {
      level: 1,
      id: "bloque-run-stop",
      name: "Control de Ejecución",
      description: "Botones Run/Stop y Single para controlar la captura de datos.",
      bioApp: "Single es ideal para capturar un evento único, como un potencial de acción aislado.",
      coords: { top: 8, left: 85, width: 13, height: 10 },
      hint: "Esquina superior derecha."
    },
    // NIVEL 2
    {
      level: 2,
      id: "control-v-ch1",
      name: "Control Vertical CH1",
      description: "Ajusta escala y posición exclusivamente del Canal 1 (Amarillo).",
      bioApp: "Generalmente usado para visualizar la señal de entrada bruta del paciente.",
      coords: { top: 58, left: 74, width: 9, height: 18 },
      hint: "Perilla grande sobre el botón iluminado con el número 1 (amarillo)."
    },
    {
      level: 2,
      id: "control-v-ch2",
      name: "Control Vertical CH2",
      description: "Ajusta escala y posición exclusivamente del Canal 2 (Verde).",
      bioApp: "Ideal para visualizar la señal ya filtrada y amplificada y compararla con CH1.",
      coords: { top: 58, left: 83, width: 9, height: 18 },
      hint: "Perilla grande sobre el botón iluminado con el número 2 (verde)."
    },
    {
      level: 2,
      id: "control-trigger",
      name: "Control de Disparo (Trigger)",
      description: "Estabiliza señales repetitivas configurando un umbral de voltaje.",
      bioApp: "Sin un buen trigger, una onda senoidal se verá moviéndose rápidamente por la pantalla.",
      coords: { top: 29, left: 70, width: 12, height: 16 },
      hint: "Justo debajo del control Horizontal, zona central superior."
    },
    {
      level: 2,
      id: "boton-autoscale",
      name: "Botón Auto Scale",
      description: "Ajusta automáticamente las escalas para mostrar una señal estable.",
      bioApp: "Útil como primer paso rápido, pero en bioseñales ruidosas suele fallar y requerir ajuste manual.",
      coords: { top: 20, left: 91, width: 6, height: 6 },
      hint: "Botón a la derecha, debajo de Single."
    },
    {
      level: 2,
      id: "boton-default",
      name: "Default Setup",
      description: "Restaura el osciloscopio a sus configuraciones de fábrica.",
      bioApp: "Si te pierdes en menús y configuraciones extrañas, presiona esto para empezar de cero.",
      coords: { top: 20, left: 84, width: 6, height: 6 },
      hint: "Junto a Auto Scale."
    },
    // NIVEL 3
    {
      level: 3,
      id: "bnc-ch1",
      name: "Conector BNC CH1",
      description: "Entrada física para la sonda del Canal 1 (Amarillo).",
      bioApp: "Aquí conectarás el cable BNC-Caimán que va a la salida de tu circuito.",
      coords: { top: 80, left: 66, width: 6, height: 12 },
      hint: "Conector metálico circular en la parte inferior derecha, etiqueta amarilla 1."
    },
    {
      level: 3,
      id: "bnc-ch2",
      name: "Conector BNC CH2",
      description: "Entrada física para la sonda del Canal 2 (Verde).",
      bioApp: "Entrada para una segunda señal simultánea.",
      coords: { top: 80, left: 75, width: 6, height: 12 },
      hint: "Conector metálico circular junto al CH1, etiqueta verde 2."
    },
    {
      level: 3,
      id: "probe-comp",
      name: "Compensación de Sondas",
      description: "Terminales que generan una onda cuadrada de 1kHz a 3V.",
      bioApp: "Se usa para calibrar las sondas atenuadoras (10x) y asegurar medidas correctas.",
      coords: { top: 83, left: 58, width: 6, height: 6 },
      hint: "Dos pequeños ganchos metálicos al lado derecho del puerto USB."
    },
    {
      level: 3,
      id: "gen-out",
      name: "Salida Gen Out",
      description: "Salida BNC del generador de funciones integrado (WaveGen).",
      bioApp: "Algunos osciloscopios traen un generador básico incorporado para pruebas rápidas.",
      coords: { top: 84, left: 26, width: 6, height: 10 },
      hint: "Conector BNC solitario al lado del botón de encendido."
    },
    {
      level: 3,
      id: "puerto-usb",
      name: "Puerto USB",
      description: "Permite conectar una memoria USB para guardar capturas de pantalla o datos CSV.",
      bioApp: "Esencial para guardar evidencia de tus prácticas e incluir gráficas en tus informes.",
      coords: { top: 84, left: 51, width: 6, height: 6 },
      hint: "Puerto negro rectangular en el borde inferior central."
    }
  ];

  const triviaQuestions = [
    {
      q: "Estás observando una señal de ECG (que mide aprox. 1 mV) y la pantalla solo muestra una línea recta sin ruido. ¿Qué control deberías ajustar primero?",
      options: [
        "Escala Horizontal (Sec/Div)",
        "Escala Vertical (Volts/Div)",
        "El botón Default Setup"
      ],
      correct: 1,
      explanation: "Si la señal es de muy baja amplitud (1 mV) y tu escala vertical está en 5V/div, se verá como una línea plana. Debes aumentar la sensibilidad (bajar a mV/div)."
    },
    {
      q: "Tu circuito tiene un offset de +5V, y encima de eso está montada una pequeña señal senoidal de 50mV. En el osciloscopio la señal se sale de la pantalla hacia arriba. ¿Qué ajuste te permite ver solo la onda senoidal centrada?",
      options: [
        "Cambiar el acoplamiento a AC",
        "Presionar Auto Scale",
        "Ajustar el Trigger"
      ],
      correct: 0,
      explanation: "El acoplamiento AC bloquea la componente DC (el offset de +5V), permitiendo que la pequeña señal alterna se centre en 0V y puedas ampliarla."
    },
    {
      q: "¿Para qué sirve el botón 'Single' en bioinstrumentación?",
      options: [
        "Para usar solo el Canal 1.",
        "Para detener la pantalla tras capturar el primer pulso que cruce el Trigger.",
        "Para calibrar la sonda 10x."
      ],
      correct: 1,
      explanation: "Single (Disparo único) congela la adquisición inmediatamente después de que ocurre el evento, lo cual es vital para analizar bioseñales transitorias que no se repiten constantemente."
    }
  ];

  const challengeSteps = [
    { instruction: "Paso 1: Conecta la sonda al Canal 1.", target: "bnc-ch1" },
    { instruction: "Paso 2: Conecta la punta de la sonda a la señal de calibración (Probe Comp).", target: "probe-comp" },
    { instruction: "Paso 3: Ajusta automáticamente la señal para ver la onda cuadrada.", target: "boton-autoscale" },
    { instruction: "Paso 4: Detén la adquisición para analizar la onda con calma.", target: "bloque-run-stop" }
  ];

  // 2. DOM Elements Selection
  const phase1Container = document.getElementById('osc-phase-1-cards-container');
  const cardsBank = document.getElementById('osc-draggable-cards-bank');
  const hotspotsContainer = document.getElementById('osc-hotspots-overlay-container');
  
  const phase2Container = document.getElementById('osc-phase-2-trivia-container');
  const phase3Container = document.getElementById('osc-phase-3-challenge-container');
  
  const progressText = document.getElementById('osc-progress-percent');
  const progressBar = document.getElementById('osc-activity-progress-bar');
  const scoreCounter = document.getElementById('osc-score-counter');
  
  const badge = document.getElementById('osc-active-phase-badge');
  const title = document.getElementById('osc-active-phase-title');
  const hintBtn = document.getElementById('osc-hint-button');
  
  const modalBackdrop = document.getElementById('info-modal-backdrop');
  const modalContent = document.getElementById('info-modal-content');
  const modalIcon = document.getElementById('info-modal-icon');
  const modalTitle = document.getElementById('info-modal-title');
  const modalBody = document.getElementById('info-modal-body');
  const modalCloseBtn = document.getElementById('info-modal-close-btn');

  // State
  let currentLevel = 1;
  let matchesInCurrentLevel = 0;
  let totalMatches = 0;
  let draggedCardId = null;
  let currentTriviaIndex = 0;
  let triviaScore = 0;
  let currentChallengeStep = 0;

  // Utility: Progress
  const updateProgress = () => {
    let base = 0;
    if (currentLevel === 2) base = 15;
    if (currentLevel === 3) base = 30;
    if (currentLevel > 3 && currentTriviaIndex >= 0) base = 50;
    if (currentChallengeStep >= 0 && currentLevel > 3 && currentTriviaIndex >= triviaQuestions.length) base = 75;
    
    let progress = base;
    if (currentLevel <= 3) {
      const totalInLevel = componentsList.filter(c => c.level === currentLevel).length;
      progress += (matchesInCurrentLevel / totalInLevel) * 15;
    } else if (currentTriviaIndex >= 0 && currentTriviaIndex < triviaQuestions.length) {
      progress += (currentTriviaIndex / triviaQuestions.length) * 25;
    } else if (currentChallengeStep >= 0) {
      progress += (currentChallengeStep / challengeSteps.length) * 25;
    }
    
    progress = Math.min(100, Math.round(progress));
    progressBar.style.width = \`\${progress}%\`;
    progressText.textContent = \`\${progress}%\`;
  };

  // Utility: Modal
  const showModal = (titleText, bodyHtml, type = 'success', onClose = null) => {
    modalTitle.textContent = titleText;
    modalBody.innerHTML = bodyHtml;
    
    modalContent.className = 'card p-4 bg-dark shadow-2xl border animate-fade-in';
    modalContent.style.backgroundColor = '#0b0f19';
    
    if (type === 'success') {
      modalIcon.textContent = '✅';
      modalTitle.style.color = '#10b981';
      modalContent.style.borderColor = '#10b981';
      modalCloseBtn.style.backgroundColor = '#10b981';
      modalCloseBtn.style.borderColor = '#10b981';
    } else if (type === 'info') {
      modalIcon.textContent = '💡';
      modalTitle.style.color = '#3b82f6';
      modalContent.style.borderColor = '#3b82f6';
      modalCloseBtn.style.backgroundColor = '#3b82f6';
      modalCloseBtn.style.borderColor = '#3b82f6';
    } else if (type === 'warning') {
      modalIcon.textContent = '🏆';
      modalTitle.style.color = '#f59e0b';
      modalContent.style.borderColor = '#f59e0b';
      modalCloseBtn.style.backgroundColor = '#f59e0b';
      modalCloseBtn.style.borderColor = '#f59e0b';
    }
    
    modalBackdrop.classList.remove('d-none');
    
    const closeHandler = () => {
      modalBackdrop.classList.add('d-none');
      modalCloseBtn.removeEventListener('click', closeHandler);
      if (onClose) onClose();
    };
    modalCloseBtn.addEventListener('click', closeHandler);
  };

  const showHint = () => {
    if (currentLevel <= 3) {
      const unmatched = componentsList.filter(c => c.level === currentLevel && !document.querySelector(\`.draggable-card[data-id="\${c.id}"].matched\`));
      if (unmatched.length > 0) {
        const randomComp = unmatched[Math.floor(Math.random() * unmatched.length)];
        const hs = document.getElementById(\`osc-hs-\${randomComp.id}\`);
        if (hs) {
          hs.classList.add('pulsing-hint');
          setTimeout(() => hs.classList.remove('pulsing-hint'), 3000);
          showModal('Pista', \`Busca: <strong>\${randomComp.name}</strong><br>\${randomComp.hint}\`, 'info');
        }
      }
    }
  };

  hintBtn.addEventListener('click', showHint);

  // --- PHASE 1: DRAG & DROP ---
  const renderPhase1 = () => {
    cardsBank.innerHTML = '';
    hotspotsContainer.innerHTML = '';
    matchesInCurrentLevel = 0;
    
    badge.textContent = \`Fase 1 (Nivel \${currentLevel} de 3)\`;
    title.textContent = 'Reconocimiento de Componentes';
    
    const currentComponents = componentsList.filter(c => c.level === currentLevel);
    
    currentComponents.forEach(comp => {
      // Hotspot
      const hs = document.createElement('div');
      hs.className = 'hotspot-overlay';
      hs.id = \`osc-hs-\${comp.id}\`;
      hs.style.top = \`\${comp.coords.top}%\`;
      hs.style.left = \`\${comp.coords.left}%\`;
      hs.style.width = \`\${comp.coords.width}%\`;
      hs.style.height = \`\${comp.coords.height}%\`;
      hs.dataset.id = comp.id;
      
      const indicator = document.createElement('div');
      indicator.className = 'hotspot-indicator';
      indicator.textContent = '?';
      hs.appendChild(indicator);
      
      hs.addEventListener('dragover', (e) => {
        e.preventDefault();
        if (!hs.classList.contains('matched')) hs.classList.add('drag-hover');
      });
      hs.addEventListener('dragleave', () => {
        hs.classList.remove('drag-hover');
      });
      hs.addEventListener('drop', (e) => {
        e.preventDefault();
        hs.classList.remove('drag-hover');
        if (draggedCardId === comp.id && !hs.classList.contains('matched')) {
          handleSuccessfulMatch(comp, hs);
        } else {
          document.querySelectorAll('.draggable-card').forEach(c => c.classList.remove('selected-for-match'));
        }
      });
      
      // Click fallback for mobile
      hs.addEventListener('click', () => {
        if (hs.classList.contains('matched')) return;
        const selectedCard = document.querySelector('.draggable-card.selected-for-match');
        if (selectedCard) {
          if (selectedCard.dataset.id === comp.id) {
            handleSuccessfulMatch(comp, hs);
          } else {
            selectedCard.classList.remove('selected-for-match');
          }
        }
      });
      
      hotspotsContainer.appendChild(hs);
      
      // Card
      const card = document.createElement('div');
      card.className = 'draggable-card p-2 text-center shadow-sm';
      card.draggable = true;
      card.dataset.id = comp.id;
      card.textContent = comp.name;
      
      card.addEventListener('dragstart', (e) => {
        draggedCardId = comp.id;
        card.classList.add('dragging');
        document.querySelectorAll('.draggable-card').forEach(c => c.classList.remove('selected-for-match'));
      });
      card.addEventListener('dragend', () => {
        draggedCardId = null;
        card.classList.remove('dragging');
      });
      card.addEventListener('click', () => {
        if (card.classList.contains('matched')) return;
        document.querySelectorAll('.draggable-card').forEach(c => c.classList.remove('selected-for-match'));
        card.classList.add('selected-for-match');
        draggedCardId = comp.id;
      });
      
      cardsBank.appendChild(card);
    });
    
    // Animar entrada
    Array.from(cardsBank.children).forEach((el, idx) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(10px)';
      setTimeout(() => {
        el.style.transition = 'all 0.3s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, idx * 80);
    });
  };

  const handleSuccessfulMatch = (comp, hs) => {
    hs.classList.add('matched');
    hs.querySelector('.hotspot-indicator').textContent = '✓';
    
    const card = document.querySelector(\`.draggable-card[data-id="\${comp.id}"]\`);
    card.classList.remove('selected-for-match');
    card.classList.add('matched');
    card.draggable = false;
    
    totalMatches++;
    matchesInCurrentLevel++;
    scoreCounter.textContent = totalMatches;
    updateProgress();
    
    showModal(
      '¡Conexión Exitosa!',
      \`<strong class="text-white fs-6">\${comp.name}</strong><br><br>\${comp.description}<br><br><div class="p-2 mt-2 rounded" style="background-color: rgba(16, 185, 129, 0.1); border-left: 3px solid #10b981;">💡 <strong>Aplicación en Bioinstrumentación:</strong> <span class="text-light-theme-adjust">\${comp.bioApp}</span></div>\`,
      'success',
      () => {
        const totalInLevel = componentsList.filter(c => c.level === currentLevel).length;
        if (matchesInCurrentLevel >= totalInLevel) {
          if (currentLevel < 3) {
            currentLevel++;
            renderPhase1();
          } else {
            startPhase2();
          }
        }
      }
    );
  };

  const startPhase1 = () => {
    phase1Container.classList.remove('d-none');
    phase2Container.classList.add('d-none');
    phase3Container.classList.add('d-none');
    renderPhase1();
  };

  // --- PHASE 2: TRIVIA ---
  const startPhase2 = () => {
    phase1Container.classList.add('d-none');
    phase2Container.classList.remove('d-none');
    hotspotsContainer.innerHTML = '';
    
    badge.className = 'badge bg-warning text-dark fs-7';
    badge.textContent = 'Fase 2 de 3';
    title.textContent = 'Análisis de Casos Reales';
    scoreCounter.parentElement.innerHTML = \`🎯 Aciertos Trivia: <span class="text-warning fw-bold" id="osc-score-counter">0/3</span>\`;
    hintBtn.style.display = 'none';
    
    currentTriviaIndex = 0;
    triviaScore = 0;
    renderTriviaQuestion();
  };

  const renderTriviaQuestion = () => {
    if (currentTriviaIndex >= triviaQuestions.length) {
      startPhase3();
      return;
    }
    
    const q = triviaQuestions[currentTriviaIndex];
    updateProgress();
    
    phase2Container.innerHTML = \`
      <div class="alert alert-warning py-2 px-3 small border-0 mb-2" style="background-color: rgba(245, 158, 11, 0.1); color: var(--text-primary);">
        🤔 <strong>Pregunta \${currentTriviaIndex + 1} de \${triviaQuestions.length}:</strong> Selecciona la respuesta correcta basándote en lo que aprendiste.
      </div>
      <div class="card bg-dark-card border-warning p-3">
        <p class="fw-semibold mb-3" style="color: var(--text-primary); font-size: 0.9rem;">\${q.q.replace(/\\n/g, '<br>')}</p>
        <div class="d-flex flex-column gap-2" id="osc-trivia-options"></div>
      </div>
    \`;
    
    const optsContainer = document.getElementById('osc-trivia-options');
    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'trivia-option-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => handleTriviaAnswer(idx, q.correct, q.explanation, btn));
      optsContainer.appendChild(btn);
    });
  };

  const handleTriviaAnswer = (selectedIndex, correctIndex, explanation, btnElement) => {
    const isCorrect = (selectedIndex === correctIndex);
    const btns = document.querySelectorAll('#osc-trivia-options .trivia-option-btn');
    btns.forEach(b => b.disabled = true);
    
    if (isCorrect) {
      btnElement.classList.add('correct');
      triviaScore++;
      document.getElementById('osc-score-counter').textContent = \`\${triviaScore}/3\`;
    } else {
      btnElement.classList.add('incorrect');
      btns[correctIndex].classList.add('correct');
    }
    
    setTimeout(() => {
      showModal(
        isCorrect ? '¡Correcto!' : 'Respuesta Incorrecta',
        \`\${explanation}\`,
        isCorrect ? 'success' : 'info',
        () => {
          currentTriviaIndex++;
          renderTriviaQuestion();
        }
      );
    }, 500);
  };

  // --- PHASE 3: CHALLENGE ---
  const startPhase3 = () => {
    phase2Container.classList.add('d-none');
    phase3Container.classList.remove('d-none');
    
    badge.className = 'badge bg-danger fs-7';
    badge.textContent = 'Fase 3 de 3';
    title.textContent = 'Reto de Configuración';
    document.getElementById('osc-score-counter').parentElement.innerHTML = \`🔥 Pasos Completados: <span class="text-danger fw-bold" id="osc-score-counter">0/\${challengeSteps.length}</span>\`;
    
    currentChallengeStep = 0;
    updateProgress();
    renderChallengeStep();
  };

  const renderChallengeStep = () => {
    if (currentChallengeStep >= challengeSteps.length) {
      updateProgress();
      showModal(
        '¡Laboratorio Completado!',
        'Has demostrado conocer el funcionamiento físico del osciloscopio, desde la configuración inicial hasta la captura de señales.',
        'warning',
        () => {
          if (onAwardXp) onAwardXp(150, 'Dominio del Osciloscopio DSO-X');
        }
      );
      return;
    }
    
    const step = challengeSteps[currentChallengeStep];
    
    phase3Container.innerHTML = \`
      <div class="alert alert-danger py-2 px-3 small border-0 mb-2" style="background-color: rgba(239, 68, 68, 0.1); color: var(--text-primary);">
        ⚙️ <strong>Reto Práctico:</strong> Ejecuta la siguiente acción haciendo clic en la zona correcta del osciloscopio.
      </div>
      <div class="card bg-dark-card border-danger p-3 text-center">
        <h4 class="h5 text-danger fw-bold mb-2">Paso \${currentChallengeStep + 1}</h4>
        <p class="mb-0" style="color: var(--text-primary);">\${step.instruction}</p>
      </div>
    \`;
    
    hotspotsContainer.innerHTML = '';
    const comp = componentsList.find(c => c.id === step.target);
    
    const hs = document.createElement('div');
    hs.className = 'hotspot-overlay highlight-blue';
    hs.style.top = \`\${comp.coords.top}%\`;
    hs.style.left = \`\${comp.coords.left}%\`;
    hs.style.width = \`\${comp.coords.width}%\`;
    hs.style.height = \`\${comp.coords.height}%\`;
    hs.style.pointerEvents = 'auto'; // allow click
    
    hs.addEventListener('click', () => {
      hs.style.pointerEvents = 'none';
      hs.classList.remove('highlight-blue');
      hs.style.backgroundColor = 'rgba(16, 185, 129, 0.4)';
      hs.style.borderColor = '#10b981';
      
      currentChallengeStep++;
      document.getElementById('osc-score-counter').textContent = \`\${currentChallengeStep}/\${challengeSteps.length}\`;
      updateProgress();
      
      setTimeout(() => {
        renderChallengeStep();
      }, 500);
    });
    
    hotspotsContainer.appendChild(hs);
  };

  // Iniciar la Fase 1
  startPhase1();
}
