/**
 * @file app.js
 * @description Coordinador principal y enrutador de la aplicacion de Bioinstrumentacion.
 * Administra el estado global del tema (claro/oscuro), la experiencia acumulada (XP),
 * la barra lateral dinamica y el enrutamiento basado en URL hashes.
 * @author Antigravity Pair Programmer
 */

import { courseData } from './courseData.js?v=61';
import * as components from './components.js?v=2';

// Estados globales de la aplicacion SPA
const state = {
  view: 'home', // 'home', 'labs', 'bank', 'ai', 'achievements', 'topic'
  activeTopicId: null,
  theme: localStorage.getItem('app_theme') || 'dark', // Modo oscuro por defecto
  xp: Number(localStorage.getItem('user_xp')) || 100, // Inicia con 100 XP base
  activeCleanup: null // Callback para limpiar animaciones del canvas activo
};

/**
 * Devuelve el nivel academico del estudiante segun sus puntos de experiencia.
 * 
 * @param {number} xp - Puntos de experiencia actuales.
 * @returns {string} Descripcion textual del rango/nivel del estudiante.
 */
function getStudentLevel(xp) {
  if (xp < 300) return 'Iniciado en Biomedica';
  if (xp < 700) return 'Acondicionador de Senales';
  return 'Disenador de Dispositivos Medicos';
}

/**
 * Aplica el tema activo (claro u oscuro) al elemento raiz html y lo guarda.
 */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('app_theme', state.theme);
  
  // Actualizar icono del boton de tema
  const themeBtn = document.querySelector('.theme-toggle-btn');
  if (themeBtn) {
    themeBtn.innerHTML = state.theme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
  }
}

/**
 * Modifica la experiencia acumulada del estudiante y actualiza el encabezado.
 * 
 * @param {number} amount - Cantidad de XP a anadir.
 */
function awardXp(amount) {
  state.xp += amount;
  localStorage.setItem('user_xp', state.xp);
  updateHeaderProgress();
}

/**
 * Inicializa y renderiza los elementos del encabezado (progreso de XP, breadcrumbs, tema).
 */
function renderHeader() {
  const header = document.querySelector('.main-content > header');
  if (!header) return;

  header.className = 'glass-effect d-flex justify-content-between align-items-center px-4 py-3 border-bottom';
  header.style.position = 'sticky';
  header.style.top = '0';
  header.style.zIndex = '90';

  header.innerHTML = `
    <!-- Breadcrumbs -->
    <div class="d-flex flex-column">
      <span class="small text-secondary fw-semibold text-uppercase tracking-wider breadcrumb-prefix" style="font-size:0.7rem; letter-spacing:0.05em; display: none;"></span>
      <h2 class="h6 text-primary m-0 fw-bold breadcrumb-active" style="font-family: var(--font-title);">Inicio del Curso</h2>
    </div>

    <!-- Progreso y Herramientas -->
    <div class="d-flex align-items-center gap-4">
      <!-- Barra XP -->
      <div class="d-none d-md-flex align-items-center gap-2">
        <div class="text-end">
          <div class="small fw-bold text-dark-theme-adjust" style="font-size: 0.85rem;"><span class="xp-value">${state.xp}</span> XP</div>
          <div class="small text-secondary student-level" style="font-size: 0.72rem;">${getStudentLevel(state.xp)}</div>
        </div>
        <div style="width: 120px; height: 8px; background-color: var(--border-color); border-radius: var(--radius-full); overflow: hidden;">
          <div class="xp-progress-bar" style="height: 100%; background-color: var(--color-secondary); width: ${Math.min(100, (state.xp / 1200) * 100)}%; transition: width 0.3s;"></div>
        </div>
      </div>

      <!-- Selector de Tema -->
      <button class="btn btn-sm btn-outline theme-toggle-btn" style="font-size:0.8rem; padding: 0.4rem 0.8rem;">
        ${state.theme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
      </button>
    </div>
  `;

  // Asignar clic de cambio de tema
  header.querySelector('.theme-toggle-btn').addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
  });
}

/**
 * Actualiza la visualizacion del progreso de XP en el encabezado.
 */
function updateHeaderProgress() {
  const xpVal = document.querySelector('.xp-value');
  const levelVal = document.querySelector('.student-level');
  const progressBar = document.querySelector('.xp-progress-bar');
  
  if (xpVal) xpVal.textContent = state.xp;
  if (levelVal) levelVal.textContent = getStudentLevel(state.xp);
  if (progressBar) progressBar.style.width = `${Math.min(100, (state.xp / 1200) * 100)}%`;
}

/**
 * Actualiza las migas de pan (breadcrumbs) segun la ruta activa actual.
 */
function updateBreadcrumbs() {
  const prefix = document.querySelector('.breadcrumb-prefix');
  const active = document.querySelector('.breadcrumb-active');
  
  if (!prefix || !active) return;

  if (state.view === 'home') {
    prefix.textContent = '';
    prefix.style.display = 'none';
    active.textContent = 'Inicio del Curso';
  } else if (state.view === 'labs') {
    prefix.style.display = 'block';
    prefix.textContent = 'Campus Interactivo';
    active.textContent = '🔬 Laboratorios Virtuales';
  } else if (state.view === 'bank') {
    prefix.style.display = 'block';
    prefix.textContent = 'Campus Interactivo';
    active.textContent = '📊 Banco de Senales';
  } else if (state.view === 'ai') {
    prefix.style.display = 'block';
    prefix.textContent = 'Campus Interactivo';
    active.textContent = '🧠 Playground DSP & IA';
  } else if (state.view === 'achievements') {
    prefix.style.display = 'block';
    prefix.textContent = 'Progreso';
    active.textContent = '🏆 Mis Logros';
  } else if (state.view === 'topic' && state.activeTopicId) {
    let activeTopic = null;
    let activeMod = null;
    courseData.modules.forEach(m => {
      m.topics.forEach(t => {
        if (t.id === state.activeTopicId) {
          activeTopic = t;
          activeMod = m;
        }
      });
    });

    if (activeTopic) {
      prefix.style.display = 'block';
      prefix.textContent = `Corte ${activeMod.id} • Clase ${activeTopic.number}`;
      active.textContent = activeTopic.title;
    }
  }
}

// Control local de expansion de modulos de la barra lateral
const modulesExpanded = { 1: true, 2: false, 3: false };

/**
 * Renderiza la barra lateral (Sidebar) con listados de clases y marcas de completado.
 */
function renderSidebar() {
  const sidebar = document.querySelector('aside');
  if (!sidebar) return;

  // Escanear checkboxes completados
  const completedList = [];
  courseData.modules.forEach(mod => {
    mod.topics.forEach(topic => {
      if (localStorage.getItem(`topic_completed_${topic.id}`) === 'true') {
        completedList.push(topic.id);
      }
    });
  });

  const classSensors = {
    "clase-01": { name: "Multímetro Digital", icon: "📟", tip: "Instrumento base para medir voltajes y verificar conexiones antes de medir bioseñales." },
    "clase-02": { name: "Osciloscopio", icon: "📈", tip: "Permite visualizar el comportamiento de las señales biomédicas en el dominio del tiempo." },
    "clase-03": { name: "Analizador de Espectro", icon: "📊", tip: "Aplica la FFT para descomponer una bioseñal en sus frecuencias armónicas." },
    "clase-04": { name: "Filtro RC Pasabajas", icon: "📉", tip: "Atenúa frecuencias altas, eliminando ruido eléctrico por encima de la frecuencia de corte." },
    "clase-05": { name: "Amplificador de Instrument.", icon: "🎛️", tip: "Rechaza el ruido de modo común, fundamental para extraer señales pequeñas como el ECG." },
    "clase-06": { name: "Filtro Activo Sallen-Key", icon: "⚡", tip: "Proporciona una caída abrupta en la respuesta en frecuencia sin usar inductores voluminosos." },
    "clase-07": { name: "Cristal Piezoeléctrico", icon: "💎", tip: "Convierte vibraciones mecánicas en electricidad, usado en transductores de ultrasonido." },
    "clase-08": { name: "Galga Extensométrica", icon: "⚖️", tip: "Varía su resistencia con la deformación, clave en la medición de presión arterial invasiva." },
    "clase-09": { name: "Sensor de Gas MQ", icon: "💨", tip: "Se usa en capnografía para medir la concentración de CO2 en el aire exhalado del paciente." },
    "clase-10": { name: "Fotodiodo e Infrarrojo", icon: "🩸", tip: "Permite realizar fotopletismografía (PPG) para calcular la saturación de oxígeno (SpO2)." },
    "clase-11": { name: "Electrodo Ag/AgCl", icon: "🫀", tip: "Electrodo no polarizable que minimiza artefactos de movimiento al capturar el ECG." },
    "clase-12": { name: "Sensor de Humedad", icon: "🌱", tip: "Mide la constante dieléctrica del suelo para aplicaciones de agricultura inteligente e IoT." },
    "default": { name: "Sensor Biomédico", icon: "🔬", tip: "Explora la plataforma para descubrir el funcionamiento de diversos sensores e instrumentos." }
  };
  const activeSensor = classSensors[state.activeTopicId] || classSensors["default"];

  sidebar.innerHTML = `
    <!-- Logo e Identidad -->
    <div style="padding: 1.5rem 1.25rem; border-bottom: 1px solid rgba(255, 255, 255, 0.1); display: flex; flex-direction: column; gap: 0.25rem;">
      <span style="font-size: 0.72rem; font-weight: bold; color: var(--color-secondary); letter-spacing: 0.1em; text-transform: uppercase;">
        Universidad Javeriana
      </span>
      <h2 style="font-size: 1.25rem; font-weight: 850; color: #fff; font-family: var(--font-title); margin: 0;">
        Instrumentación Biomédica
      </h2>
      <span style="font-size: 0.7rem; color: rgba(255, 255, 255, 0.5); font-weight: 500;">
        Bioingeniería
      </span>
    </div>

    <!-- Navegacion Principal -->
    <nav style="padding: 1rem 0.75rem; display: flex; flex-direction: column; gap: 1.25rem;">
      
      <!-- Enlace a Inicio -->
      <div class="d-flex flex-column">
        <a href="#/" class="btn text-start w-100 sidebar-link-item ${state.view === 'home' ? 'active' : ''}" style="background: ${state.view === 'home' ? 'var(--color-secondary)' : 'none'}; color: #fff; border-radius: var(--radius-sm); font-size: 0.92rem; padding: 0.7rem 0.9rem;">
          🏠 Inicio del Curso
        </a>
      </div>

      <!-- Plan de Contenidos -->
      <div class="d-flex flex-column gap-1">
        <h4 style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.4); padding-left: 0.75rem; font-weight: bold; margin-bottom: 0.25rem;">
          Contenidos del Curso
        </h4>

        ${courseData.modules.map(mod => {
          const isExpanded = modulesExpanded[mod.id];
          return `
            <div class="d-flex flex-column gap-1 mb-2">
              <button class="btn text-start w-100 sidebar-module-toggle d-flex justify-content-between align-items-center" data-mod-id="${mod.id}" style="background: none; color: rgba(255,255,255,0.85); font-size: 0.82rem; font-weight: bold; padding: 0.5rem 0.75rem; border-radius: var(--radius-sm);">
                <span>Corte ${mod.id}</span>
                <span style="font-size: 0.7rem;">${isExpanded ? '▼' : '►'}</span>
              </button>

              ${isExpanded ? `
                <div class="d-flex flex-column gap-1 ps-2">
                  ${mod.topics.map(topic => {
                    const isActive = state.view === 'topic' && state.activeTopicId === topic.id;
                    const isChecked = completedList.includes(topic.id);
                    const isEnabled = topic.hasOwnProperty('isEnabled') ? topic.isEnabled : true;
                    
                    if (!isEnabled) {
                      return `
                        <div class="d-flex align-items-center gap-2 rounded px-2 py-1.5" style="cursor: not-allowed; opacity: 0.5; font-size: 0.8rem; background-color: transparent; color: rgba(255, 255, 255, 0.4);">
                          <span style="font-size: 0.85rem; flex-shrink:0;">🔒</span>
                          <span class="text-truncate" style="flex:1;" title="Clase ${topic.number}: ${topic.title} (Próximamente)">Clase ${topic.number}: ${topic.title}</span>
                        </div>
                      `;
                    }
                    
                    return `
                      <div class="d-flex align-items-center gap-2 rounded px-2 py-1.5 sidebar-topic-row" data-topic-id="${topic.id}" style="cursor: pointer; font-size: 0.8rem; background-color: ${isActive ? 'rgba(197, 160, 89, 0.2)' : 'transparent'}; color: ${isActive ? 'var(--color-secondary-light)' : 'rgba(255, 255, 255, 0.75)'}; transition: all var(--transition-fast);">
                        <input type="checkbox" class="sidebar-topic-check" data-check-id="${topic.id}" ${isChecked ? 'checked' : ''} style="cursor: pointer; accent-color: var(--color-secondary); width: 14px; height: 14px; flex-shrink:0;">
                        <span class="text-truncate" style="flex:1;" title="Clase ${topic.number}: ${topic.title}">Clase ${topic.number}: ${topic.title}</span>
                      </div>
                    `;
                  }).join('')}
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>

      <!-- Sensor del Día (Reemplaza Campus Interactivo) -->
      <div class="d-flex flex-column gap-3 mt-3 px-2">
        <h4 style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.4); font-weight: bold; margin-bottom: 0;">
          Micro-Learning
        </h4>
        
        <div class="card bg-dark border-0 shadow-sm" style="border-radius: var(--radius-md); overflow: hidden; position: relative; border: 1px solid rgba(255,255,255,0.05) !important;">
          <!-- Badge -->
          <div style="position: absolute; top: 8px; left: 8px; background: rgba(0,0,0,0.6); backdrop-filter: blur(4px); padding: 3px 8px; border-radius: 12px; font-size: 0.65rem; color: #fff; font-weight: bold; border: 1px solid rgba(255,255,255,0.1); z-index: 2;">
            ⭐ Sensor del Día
          </div>
          <!-- Imagen del Sensor -->
          <div style="height: 110px; background: linear-gradient(135deg, #1e293b, #0f172a); display: flex; align-items: center; justify-content: center; position: relative;">
            <span style="font-size: 3.5rem; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.4));">${activeSensor.icon}</span>
            <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 30px; background: linear-gradient(to top, rgba(15,23,42,1), transparent);"></div>
          </div>
          <!-- Info -->
          <div class="p-3 pt-2" style="background: #0f172a;">
            <h5 style="font-size: 0.85rem; color: #f8fafc; font-weight: bold; margin-bottom: 6px;">${activeSensor.name}</h5>
            <p style="font-size: 0.72rem; color: #94a3b8; margin-bottom: 0; line-height: 1.45;">
              <strong style="color: var(--color-secondary);">¿Sabías que...?</strong> ${activeSensor.tip}
            </p>
          </div>
        </div>


      </div>
    </nav>

    <!-- Footer Sidebar -->
    <div style="margin-top: auto; padding: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.1); font-size: 0.72rem; color: rgba(255,255,255,0.4); text-align: center;">
      © ${new Date().getFullYear()} Pontificia Universidad Javeriana
    </div>
  `;

  // Asignar eventos de menu lateral
  // 1. Alternar expansion de modulos
  sidebar.querySelectorAll('.sidebar-module-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modId = Number(e.currentTarget.getAttribute('data-mod-id'));
      modulesExpanded[modId] = !modulesExpanded[modId];
      renderSidebar();
    });
  });

  // 2. Clic en las filas de clases para navegar
  sidebar.querySelectorAll('.sidebar-topic-row').forEach(row => {
    row.addEventListener('click', (e) => {
      const topicId = e.currentTarget.getAttribute('data-topic-id');
      window.location.hash = `#/topic/${topicId}`;
    });
  });

  // 3. Modificacion de checkboxes de lecciones completadas
  sidebar.querySelectorAll('.sidebar-topic-check').forEach(chk => {
    chk.addEventListener('click', (e) => {
      e.stopPropagation(); // Evitar navegacion automatica al hacer clic en el checkbox
      const tId = e.target.getAttribute('data-check-id');
      if (e.target.checked) {
        localStorage.setItem(`topic_completed_${tId}`, 'true');
      } else {
        localStorage.removeItem(`topic_completed_${tId}`);
      }
      renderSidebar();
    });
  });
}

/**
 * Enrutador por URL Hash que coordina la carga dinamica del contenido principal.
 */
function handleRouting() {
  const hash = window.location.hash;
  const mainView = document.querySelector('.content-wrapper');

  // Detener y limpiar simuladores anteriores
  if (state.activeCleanup) {
    state.activeCleanup();
    state.activeCleanup = null;
  }

  // Cerrar barra lateral en dispositivos moviles al navegar
  const asideElement = document.querySelector('aside');
  if (asideElement) asideElement.classList.remove('open');

  // Enrutamiento de URL Hash
  if (!hash || hash === '#/') {
    state.view = 'home';
    state.activeTopicId = null;
    components.renderHomeView(mainView, navigateTo);
  } else if (hash === '#/labs') {
    state.view = 'labs';
    state.activeTopicId = null;
    state.activeCleanup = components.renderVirtualLabs(mainView);
  } else if (hash === '#/bank') {
    state.view = 'bank';
    state.activeTopicId = null;
    state.activeCleanup = components.renderBiosignalBank(mainView);
  } else if (hash === '#/ai') {
    state.view = 'ai';
    state.activeTopicId = null;
    state.activeCleanup = components.renderPlaygroundAI(mainView);
  } else if (hash === '#/achievements') {
    state.view = 'achievements';
    state.activeTopicId = null;
    components.renderAchievements(mainView, state.xp);
  } else if (hash.startsWith('#/topic/')) {
    state.view = 'topic';
    state.activeTopicId = hash.replace('#/topic/', '');
    components.renderCourseContentView(mainView, state.activeTopicId, awardXp, navigateTo);
  } else {
    // Redirigir por defecto
    window.location.hash = '#/';
  }

  // Sincronizar Header y Sidebar
  updateBreadcrumbs();
  renderSidebar();
}

/**
 * Cambia la ruta activa actual actualizando el hash de la barra de direcciones.
 * 
 * @param {string} targetView - Identificador de la vista de destino.
 * @param {string|null} topicId - ID del tema academico a mostrar, si aplica.
 */
function navigateTo(targetView, topicId = null) {
  if (targetView === 'home') {
    window.location.hash = '#/';
  } else if (targetView === 'topic') {
    window.location.hash = `#/topic/${topicId}`;
  } else {
    window.location.hash = `#/${targetView}`;
  }
}

/**
 * Inicializador del Campus Virtual. Registra oyentes y prepara los contenedores.
 */
function initializeApp() {
  applyTheme();
  renderHeader();
  renderSidebar();
  
  // Escuchar cambios de hash en el navegador
  window.addEventListener('hashchange', handleRouting);
  
  // Escuchar eventos internos de actualizacion de lecciones
  window.addEventListener('topicProgressUpdated', renderSidebar);

  // Vincular boton de menu movil para expandir sidebar
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const aside = document.querySelector('aside');
      if (aside) aside.classList.toggle('open');
    });
  }

  // Ejecutar primera carga de enrutamiento
  handleRouting();
}

// Iniciar ejecucion al terminar de cargar el DOM
document.addEventListener('DOMContentLoaded', initializeApp);
