function initOscilloscopeActivity(onAwardXp) {
  // --- INYECTAR ESTILOS ESPECÍFICOS PARA EL OSCILOSCOPIO ---
  const oscStyleId = 'osc-beautiful-styles';
  if (!document.getElementById(oscStyleId)) {
    const styleEl = document.createElement('style');
    styleEl.id = oscStyleId;
    styleEl.textContent = `
      .osc-beautiful-card {
        background-color: white; 
        border-radius: 6px; 
        border: 1px solid #cbd5e1; 
        cursor: grab; 
        padding: 8px 12px;
        transition: transform 0.1s, box-shadow 0.1s;
      }
      .osc-beautiful-card:hover {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        transform: translateY(-1px);
      }
      .osc-beautiful-card.dragging {
        opacity: 0.5;
      }
      .osc-beautiful-card.matched {
        opacity: 0.6;
        cursor: default;
        box-shadow: none;
        transform: none;
      }
      .osc-dashed-hotspot {
        position: absolute;
        border-radius: 8px;
        border: 2px dashed rgba(255, 255, 255, 0.4);
        transition: all 0.2s ease;
        z-index: 2;
      }
      .osc-dashed-hotspot.drag-hover {
        background-color: rgba(255, 255, 255, 0.15) !important;
        border-color: rgba(255, 255, 255, 0.9) !important;
      }
      .osc-hotspot-badge {
        position: absolute;
        top: -10px;
        right: -10px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 12px;
        z-index: 5;
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transform: scale(0);
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      }
      .osc-dashed-hotspot.matched .osc-hotspot-badge {
        opacity: 1;
        transform: scale(1);
      }
    `;
    document.head.appendChild(styleEl);
  }

  // --- DATOS DE LOS 12 COMPONENTES DEL MOCKUP ---
  const componentsList = [
    {
      level: 1, number: 1, id: "pantalla-lcd", name: "Pantalla LCD", color: "#2563eb", // Azul
      description: "Display donde se grafican las formas de onda capturadas.",
      bioApp: "Aquí observarás la morfología del ECG, EEG o señales simuladas.",
      coords: { top: 22, left: 19, width: 44, height: 49 },
      hint: "La gran área oscura central."
    },
    {
      level: 1, number: 2, id: "menus-funcion", name: "Menús de función", color: "#22c55e", // Verde
      description: "Controles de ejecución (Run/Stop, Single, etc).",
      bioApp: "Útil para congelar la captura y analizar un latido específico.",
      coords: { top: 12, left: 81, width: 11, height: 10 },
      hint: "Esquina superior derecha."
    },
    {
      level: 1, number: 3, id: "controles-horizontales", name: "Controles horizontales", color: "#eab308", // Amarillo
      description: "Ajusta la base de tiempo (s/div) y posición en el eje X.",
      bioApp: "Permite ver más ciclos de la señal o hacer zoom en un solo pulso.",
      coords: { top: 11, left: 69, width: 11, height: 17 },
      hint: "Parte superior derecha, junto a los controles de ejecución."
    },
    {
      level: 1, number: 4, id: "controles-disparo", name: "Controles de disparo (Trigger)", color: "#ec4899", // Rosa
      description: "Estabiliza señales configurando un umbral de voltaje (Trigger).",
      bioApp: "Sin trigger, una onda de pulso se verá parpadeante e inestable.",
      coords: { top: 29, left: 69, width: 9, height: 19 },
      hint: "Centro-derecha, debajo de los controles horizontales."
    },
    {
      level: 2, number: 5, id: "controles-verticales", name: "Controles verticales", color: "#38bdf8", // Azul claro
      description: "Agrupa los ajustes de escala (V/div) y posición vertical.",
      bioApp: "Crucial para amplificar visualmente bioseñales muy pequeñas.",
      coords: { top: 51, left: 69, width: 17, height: 24 },
      hint: "Zona inferior derecha con las perillas principales."
    },
    {
      level: 2, number: 6, id: "teclas-canal", name: "Teclas de canal 1 y 2", color: "#4ade80", // Verde claro
      description: "Enciende o apaga el trazo de los canales en la pantalla.",
      bioApp: "Permite superponer dos bioseñales simultáneamente.",
      coords: { top: 66, left: 72, width: 13, height: 7 },
      hint: "Los botones iluminados con los números 1 (Amarillo) y 2 (Verde)."
    },
    {
      level: 2, number: 7, id: "entradas-canal", name: "Entradas de canal (1 y 2)", color: "#14b8a6", // Cian
      description: "Entradas físicas (BNC) para conectar las sondas.",
      bioApp: "Punto de conexión de los cables que vienen del paciente o protoboard.",
      coords: { top: 79, left: 65, width: 16, height: 14 },
      hint: "Conectores metálicos inferiores."
    },
    {
      level: 3, number: 8, id: "conector-comp", name: "Conector de compensación", color: "#f97316", // Naranja
      description: "Genera una onda cuadrada de calibración (1kHz).",
      bioApp: "Se usa para calibrar las sondas (10x) y asegurar medidas correctas.",
      coords: { top: 81, left: 56, width: 7, height: 8 },
      hint: "Ganchos metálicos al lado derecho del puerto USB."
    },
    {
      level: 3, number: 9, id: "puerto-usb", name: "Puerto USB (almacenamiento)", color: "#ef4444", // Rojo
      description: "Permite conectar una memoria USB para guardar capturas.",
      bioApp: "Esencial para exportar datos y hacer informes de laboratorio.",
      coords: { top: 82, left: 50, width: 5, height: 8 },
      hint: "Puerto rectangular en el borde inferior central."
    },
    {
      level: 3, number: 10, id: "encendido", name: "Encendido", color: "#84cc16", // Verde oscuro
      description: "Energiza el osciloscopio.",
      bioApp: "Encender siempre antes de conectar al paciente.",
      coords: { top: 83, left: 18, width: 5, height: 8 },
      hint: "Esquina inferior izquierda del panel frontal."
    },
    {
      level: 3, number: 11, id: "salida-gen", name: "Salida de generador de funciones", color: "#a855f7", // Morado
      description: "Salida del generador de funciones integrado (WaveGen).",
      bioApp: "Proporciona señales de estímulo si el modelo lo incluye.",
      coords: { top: 82, left: 25, width: 6, height: 11 },
      hint: "Conector BNC junto al botón de encendido."
    },
    {
      level: 3, number: 12, id: "teclas-menu", name: "Teclas de menú rápido", color: "#1e3a8a", // Azul oscuro
      description: "Botones genéricos (Softkeys) cuyas funciones cambian según el menú.",
      bioApp: "Se usan para seleccionar filtros de ruido, acoplamientos y medidas en la interfaz.",
      coords: { top: 73, left: 19, width: 44, height: 6 },
      hint: "Fila de botones grises debajo de la pantalla."
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
    { instruction: "Paso 1: Conecta la sonda al Canal 1.", target: "entradas-canal" },
    { instruction: "Paso 2: Conecta la punta de la sonda a la señal de calibración (Probe Comp).", target: "conector-comp" },
    { instruction: "Paso 3: Detén la adquisición para analizar la onda con calma.", target: "menus-funcion" }
  ];

  // DOM Elements Selection
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

  // Layout update for the cards container to match mockup
  phase1Container.innerHTML = '';
  phase1Container.innerHTML = `
    <div style="background-color: #0b1a30; border-radius: 8px 8px 0 0; padding: 12px; text-align: center; border: 1px solid #1e3a8a;">
      <h5 style="color: white; margin: 0; font-size: 0.95rem; font-weight: 700; font-family: var(--font-title);">TARJETAS DRAG & DROP</h5>
    </div>
    <div class="d-flex flex-column gap-2" id="osc-draggable-cards-bank" style="padding: 15px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; min-height: 400px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);">
    </div>
  `;
  // Re-select after overwriting
  const newCardsBank = document.getElementById('osc-draggable-cards-bank');

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
      const unmatched = componentsList.filter(c => c.level === currentLevel && !document.querySelector(\`.osc-beautiful-card[data-id="\${c.id}"].matched\`));
      if (unmatched.length > 0) {
        const randomComp = unmatched[Math.floor(Math.random() * unmatched.length)];
        const hs = document.getElementById(\`osc-hs-\${randomComp.id}\`);
        if (hs) {
          hs.style.backgroundColor = 'rgba(255,255,255,0.3)';
          setTimeout(() => hs.style.backgroundColor = 'transparent', 3000);
          showModal('Pista', \`Busca: <strong>\${randomComp.name}</strong><br>\${randomComp.hint}\`, 'info');
        }
      }
    }
  };

  hintBtn.addEventListener('click', showHint);

  // --- PHASE 1: DRAG & DROP ---
  const renderPhase1 = () => {
    newCardsBank.innerHTML = '';
    hotspotsContainer.innerHTML = '';
    matchesInCurrentLevel = 0;
    
    badge.textContent = \`Fase 1 (Nivel \${currentLevel} de 3)\`;
    title.textContent = 'Emparejamiento Visual';
    
    const currentComponents = componentsList.filter(c => c.level === currentLevel);
    
    currentComponents.forEach(comp => {
      // Hotspot
      const hs = document.createElement('div');
      hs.className = 'osc-dashed-hotspot';
      hs.id = \`osc-hs-\${comp.id}\`;
      hs.style.top = \`\${comp.coords.top}%\`;
      hs.style.left = \`\${comp.coords.left}%\`;
      hs.style.width = \`\${comp.coords.width}%\`;
      hs.style.height = \`\${comp.coords.height}%\`;
      hs.dataset.id = comp.id;
      
      const badgeEl = document.createElement('div');
      badgeEl.className = 'osc-hotspot-badge';
      badgeEl.style.backgroundColor = comp.color;
      badgeEl.textContent = comp.number;
      hs.appendChild(badgeEl);
      
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
          document.querySelectorAll('.osc-beautiful-card').forEach(c => c.classList.remove('selected-for-match'));
        }
      });
      
      // Click fallback for mobile
      hs.addEventListener('click', () => {
        if (hs.classList.contains('matched')) return;
        const selectedCard = document.querySelector('.osc-beautiful-card.selected-for-match');
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
      card.className = 'osc-beautiful-card d-flex align-items-center justify-content-between mb-2';
      card.draggable = true;
      card.dataset.id = comp.id;
      
      card.innerHTML = \`
        <div class="d-flex align-items-center gap-2">
          <div style="width: 26px; height: 26px; border-radius: 50%; background-color: \${comp.color}; color: white; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0;">
            \${comp.number}
          </div>
          <span style="color: #0f172a; font-weight: 600; font-size: 0.85rem; line-height: 1.2;">\${comp.name}</span>
        </div>
        <div style="color: #94a3b8; font-size: 1.2rem; line-height: 1; margin-left: 10px;">⋮⋮</div>
      \`;
      
      card.addEventListener('dragstart', (e) => {
        draggedCardId = comp.id;
        card.classList.add('dragging');
        document.querySelectorAll('.osc-beautiful-card').forEach(c => c.classList.remove('selected-for-match'));
      });
      card.addEventListener('dragend', () => {
        draggedCardId = null;
        card.classList.remove('dragging');
      });
      card.addEventListener('click', () => {
        if (card.classList.contains('matched')) return;
        document.querySelectorAll('.osc-beautiful-card').forEach(c => {
          c.classList.remove('selected-for-match');
          c.style.borderColor = '#cbd5e1';
        });
        card.classList.add('selected-for-match');
        card.style.borderColor = comp.color;
        draggedCardId = comp.id;
      });
      
      newCardsBank.appendChild(card);
    });
    
    // Animar entrada
    Array.from(newCardsBank.children).forEach((el, idx) => {
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
    hs.style.borderColor = comp.color;
    hs.style.backgroundColor = comp.color + '20'; // 20 hex para transparencia
    
    const card = document.querySelector(\`.osc-beautiful-card[data-id="\${comp.id}"]\`);
    card.classList.remove('selected-for-match');
    card.classList.add('matched');
    card.draggable = false;
    card.style.borderColor = '#e2e8f0';
    
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
    
    // Dibujar todas las cajas como premio visual
    hotspotsContainer.innerHTML = '';
    componentsList.forEach(comp => {
      const hs = document.createElement('div');
      hs.className = 'osc-dashed-hotspot matched';
      hs.style.top = \`\${comp.coords.top}%\`;
      hs.style.left = \`\${comp.coords.left}%\`;
      hs.style.width = \`\${comp.coords.width}%\`;
      hs.style.height = \`\${comp.coords.height}%\`;
      hs.style.borderColor = comp.color;
      hs.style.backgroundColor = comp.color + '20';
      
      const badgeEl = document.createElement('div');
      badgeEl.className = 'osc-hotspot-badge';
      badgeEl.style.backgroundColor = comp.color;
      badgeEl.textContent = comp.number;
      hs.appendChild(badgeEl);
      
      hotspotsContainer.appendChild(hs);
    });

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
    hs.className = 'osc-dashed-hotspot highlight-blue';
    hs.style.top = \`\${comp.coords.top}%\`;
    hs.style.left = \`\${comp.coords.left}%\`;
    hs.style.width = \`\${comp.coords.width}%\`;
    hs.style.height = \`\${comp.coords.height}%\`;
    hs.style.border = \`2px solid #ef4444\`;
    hs.style.pointerEvents = 'auto'; 
    
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

  startPhase1();
}
