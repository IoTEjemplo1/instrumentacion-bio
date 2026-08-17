/**
 * @file components.js
 * @description Modulo de renderizado de componentes y vistas del campus virtual.
 * Crea e inyecta dinamicamente la interfaz HTML5 para cada vista (Inicio, Clases,
 * Laboratorios, Banco de Senales, DSP/IA y Logros) y maneja las interacciones locales.
 * @author Antigravity Pair Programmer
 */

import { courseData } from './courseData.js';
import { mountECGSimulator, mountEEGSimulator, mountEMGSimulator, mountSpO2Simulator } from './simulators.js';

/**
 * Renderiza la vista de Inicio (Landing Page) del curso.
 * 
 * @param {HTMLElement} container - Contenedor principal de la vista.
 * @param {function(string, string|null): void} onNavigate - Callback de navegacion global.
 * 
 * @example
 * renderHomeView(document.getElementById('main-view'), onNavigate);
 */
export function renderHomeView(container, onNavigate) {
  container.innerHTML = `
    <div class="animate-fade-in d-flex flex-column gap-5">
      
      <!-- Hero Section -->
      <section style="background: linear-gradient(135deg, var(--bg-sidebar) 0%, var(--color-primary) 100%); border-radius: var(--radius-lg); padding: 4rem 3rem; color: #fff; position: relative; overflow: hidden; border-bottom: 4px solid var(--color-secondary);">
        <!-- Simbolo biomédico decorativo de fondo -->
        <div style="position: absolute; right: -50px; bottom: -20px; opacity: 0.1; font-size: 18rem; user-select: none; pointer-events: none;">🫀</div>
        
        <div style="max-width: 700px; position: relative; z-index: 2;">
          <span style="font-size: 0.85rem; font-weight: bold; color: var(--color-secondary); text-transform: uppercase; letter-spacing: 0.15em;">
            Pontificia Universidad Javeriana • Bioingeniería
          </span>
          <h1 style="font-size: 3.2rem; font-weight: 850; font-family: var(--font-title); margin-top: 0.5rem; line-height: 1.1; color: #fff;">
            Instrumentación Biomédica
          </h1>
          <p style="font-size: 1.25rem; color: rgba(255,255,255,0.85); margin: 1.5rem 0 2rem 0; line-height: 1.6;">
            Plataforma interactiva para el estudio de los procesos de transducción, acondicionamiento y procesamiento de señales básicos de un sistema de bioinstrumentación, que puedan ser aplicados en el diagnóstico, tratamiento, monitoreo y manipulación de sistemas biológicos
          </p>
          
          <div class="d-flex gap-3 flex-wrap">
            <button class="btn btn-secondary start-course-btn">Comenzar Curso ➔</button>
          </div>
        </div>
      </section>

      <!-- Metricas Estadisticas -->
      <section class="row g-4">
        <div class="col-sm-6 col-lg-3">
          <div class="card text-center py-4">
            <div style="font-size: 2.5rem; font-weight: 850; color: var(--color-secondary); font-family: var(--font-title);">3</div>
            <div class="small text-secondary fw-semibold">Cortes Academicos</div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="card text-center py-4">
            <div style="font-size: 2.5rem; font-weight: 850; color: var(--color-secondary); font-family: var(--font-title);">14</div>
            <div class="small text-secondary fw-semibold">Clases Estructuradas</div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="card text-center py-4">
            <div style="font-size: 2.5rem; font-weight: 850; color: var(--color-secondary); font-family: var(--font-title);">7</div>
            <div class="small text-secondary fw-semibold">Guias de Laboratorio</div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="card text-center py-4">
            <div style="font-size: 2.5rem; font-weight: 850; color: var(--color-secondary); font-family: var(--font-title);">4</div>
            <div class="small text-secondary fw-semibold">Simuladores Interactivos</div>
          </div>
        </div>
      </section>

      <!-- Competencias y Resultados -->
      <section id="syllabus-overview" class="row g-4">
        <div class="col-md-6">
          <div class="card h-100">
            <h3 class="h5 text-primary mb-3" style="font-family: var(--font-title);">🎯 Competencias del Bioingeniero</h3>
            <p class="small text-secondary mb-3">Al finalizar este curso, el estudiante estara en capacidad de:</p>
            <ul class="small text-secondary d-flex flex-column gap-2 ps-3">
              <li>Principios físicos de bioseñales</li>
              <li>Biosensores y transductores</li>
              <li>Sistemas de acondicionamiento de bioseñales y filtros</li>
              <li>Procesamiento digital básico y visualización de bioseñales</li>
              <li>Aplicaciones de bioinstrumentación</li>
            </ul>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card h-100">
            <h3 class="h5 text-primary mb-3" style="font-family: var(--font-title);">🎓 Resultados de Aprendizaje</h3>
            <ul class="small text-secondary d-flex flex-column gap-2 ps-3 mt-4">
              <li>Describir por medio de principios físicos y modelos las bioseñales que pueden ser medidas por un sistema de bioinstrumentación</li>
              <li>Explicar el funcionamiento de biosensores y transductores de señales de temperatura, fuerza, presión, ópticas y eléctricas</li>
              <li>Diseñar e implementar la etapa de acondicionamiento de bioseñales en un sistema de bioinstrumentación</li>
              <li>Comprender las etapas de procesamiento y visualización de bioseñales para su correcta interpretación.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Cronograma Metodologico y Profesor -->
      <section class="row g-4 align-items-start">
        <div class="col-md-6">
          <div class="card h-100">
            <h3 class="h5 text-primary mb-3" style="font-family: var(--font-title);">📅 Metodología de Evaluación</h3>
            <p class="small text-secondary mb-3" style="line-height: 1.6; text-align: justify;">
              El proceso de evaluación del curso está organizado en tres cortes académicos, promoviendo un aprendizaje progresivo mediante la integración de teoría, experimentación y desarrollo de competencias prácticas. Cada corte está compuesto por tres ejes fundamentales:
            </p>
            
            <div class="mb-3">
              <div class="small fw-bold text-primary mb-1">📖 Componente Teórico</div>
              <ul class="small text-secondary ps-4 m-0">
                <li>Evaluaciones escritas.</li>
                <li>Cuestionarios de autoevaluación.</li>
                <li>Análisis y comprensión de conceptos.</li>
              </ul>
            </div>

            <div class="mb-3">
              <div class="small fw-bold text-primary mb-1">🧪 Componente Práctico</div>
              <ul class="small text-secondary ps-4 m-0">
                <li>Desarrollo de laboratorios.</li>
                <li>Uso de instrumentos biomédicos y electrónicos.</li>
                <li>Análisis e interpretación de resultados experimentales.</li>
              </ul>
            </div>

            <div>
              <div class="small fw-bold text-primary mb-1">💡 Actividades de Aprendizaje</div>
              <ul class="small text-secondary ps-4 m-0">
                <li>Talleres, simulaciones y ejercicios interactivos.</li>
                <li>Participación en clase y demás actividades propuestas.</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Profesor Coordinador -->
        <div class="col-md-6">
          <div class="card h-100" style="border-top: 4px solid var(--color-secondary);">
            <h3 class="h5 text-primary mb-3" style="font-family: var(--font-title);">👨‍🏫 Profesor</h3>
            <div class="d-flex gap-3 align-items-center mb-3">
              <div style="width: 60px; height: 60px; border-radius: 50%; overflow: hidden; border: 2px solid var(--color-secondary); display: flex; align-items: center; justify-content: center; background-color: var(--bg-sidebar);">
                <img src="./public/profesor.png" alt="Profesor" style="width: 100%; height: 100%; object-fit: cover; object-position: top;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <span style="font-size: 1.8rem; color: #fff; display: none;">PA</span>
              </div>
              <div>
                <div class="fw-bold" style="font-size: 1.1rem; color: var(--text-primary);">${courseData.professor.name}</div>
                <div class="small text-secondary">Profesor</div>
              </div>
            </div>
            <p class="small text-secondary mb-3" style="line-height: 1.6; text-align: justify;">
              <strong>Perfil:</strong> Ingeniero Biomédico de profesión, Magíster en Ingeniería Electrónica, y Estudiante de Doctorado en Ingeniería Eléctrica en la Universidad Nacional de Colombia, con una sólida experiencia en la formulación, gestión e implementación de proyectos tanto en el sector salud como en el ámbito académico. Mi trayectoria se caracteriza por un enfoque estratégico, compromiso con la excelencia y una capacidad demostrada para generar resultados significativos. Estas cualidades me han permitido contribuir de manera sustancial al avance del programa de Ingeniería Biomédica y a la generación de nuevos conocimientos en este campo interdisciplinario.
            </p>
            <div class="small border-top pt-3 text-center">
              <a href="https://www.linkedin.com/in/pedro-antonio-aya-parra-5267b8288" target="_blank" rel="noopener noreferrer" class="btn btn-sm mt-2" style="border: 1px solid var(--color-secondary); color: var(--color-secondary); border-radius: var(--radius-sm);">
                Ver perfil completo en LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQs Accordion -->
      <section class="card">
        <h3 class="h5 text-primary mb-4" style="font-family: var(--font-title);">❓ Preguntas Frecuentes</h3>
        <div class="accordion" id="faqAccordion">
          <div class="accordion-item bg-transparent border-bottom border-top-0 border-start-0 border-end-0 border-color-adjust">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button bg-transparent collapsed text-primary fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                ¿Qué aprenderé en este curso de Instrumentación Biomédica?
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
              <div class="accordion-body text-secondary small">
                Durante el curso estudiarás los principios de las bioseñales, biosensores y transductores, el acondicionamiento y filtrado de señales, el procesamiento y visualización de bioseñales, así como sus aplicaciones en sistemas de instrumentación biomédica para el diagnóstico, monitoreo y análisis de variables fisiológicas.
              </div>
            </div>
          </div>

          <div class="accordion-item bg-transparent border-bottom border-top-0 border-start-0 border-end-0 border-color-adjust">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button bg-transparent collapsed text-primary fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                ¿Cómo se desarrollan las clases y los laboratorios?
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
              <div class="accordion-body text-secondary small">
                El curso combina clases teóricas, prácticas de laboratorio y actividades de aprendizaje. Antes de cada sesión se espera una preparación previa del tema; posteriormente se desarrollan explicaciones magistrales, prácticas experimentales en equipo y actividades de trabajo independiente que fortalecen la comprensión y aplicación de los conceptos estudiados.
              </div>
            </div>
          </div>

          <div class="accordion-item bg-transparent border-bottom border-top-0 border-start-0 border-end-0 border-color-adjust">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button bg-transparent collapsed text-primary fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                ¿Cómo será evaluado mi desempeño durante el semestre?
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
              <div class="accordion-body text-secondary small">
                La evaluación integra diferentes evidencias de aprendizaje, entre ellas evaluaciones teóricas, informes y prácticas de laboratorio, quices, talleres y actividades desarrolladas durante el semestre. El objetivo es valorar tanto la comprensión conceptual como la capacidad para diseñar, implementar y analizar sistemas de bioinstrumentación.
              </div>
            </div>
          </div>

          <div class="accordion-item bg-transparent border-bottom border-top-0 border-start-0 border-end-0 border-color-adjust">
            <h2 class="accordion-header" id="headingFour">
              <button class="accordion-button bg-transparent collapsed text-primary fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                ¿Qué tipo de laboratorios realizaré?
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
              <div class="accordion-body text-secondary small">
                Durante el semestre desarrollarás laboratorios relacionados con fundamentos de señales, filtrado analógico, instrumentación para medición de temperatura, presión, sonidos cardíacos, bioseñales eléctricas y aplicaciones de monitoreo, permitiendo aplicar los conceptos en escenarios reales de la bioingeniería.
              </div>
            </div>
          </div>

          <div class="accordion-item bg-transparent border-0">
            <h2 class="accordion-header" id="headingFive">
              <button class="accordion-button bg-transparent collapsed text-primary fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                ¿Necesito conocimientos previos para tomar la asignatura?
              </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
              <div class="accordion-body text-secondary small">
                Sí. Se recomienda haber cursado previamente Electrónica Analógica y Señales y Sistemas, ya que estos conocimientos constituyen la base para comprender el funcionamiento de los sistemas de bioinstrumentación.
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bibliografia -->
      <section class="card">
        <h3 class="h5 text-primary mb-3" style="font-family: var(--font-title);">📚 Bibliografía Recomendada</h3>
        <ul class="small text-secondary d-flex flex-column gap-2 ps-3 m-0">
          <li><strong>Miguel A. Pérez G.</strong> (2014). <em>Instrumentación electrónica</em>. Paraninfo.</li>
          <li><strong>Khandpur, R. S.</strong> (2020). <em>Compendium of Biomedical Instrumentation</em>. John Wiley & Sons, Incorporated. <a href="http://ebookcentral.proquest.com/lib/bibliojaveriana-ebooks/detail.action?docID=5983633" target="_blank" rel="noopener noreferrer" style="color: var(--color-secondary); text-decoration: none;">[Enlace BiblioJaveriana]</a></li>
          <li><strong>Khandpur, R. S.</strong> (2005). <em>Biomedical instrumentation technology and applications</em>. McGraw-Hill.</li>
          <li><strong>Feher, J.</strong> (2017). <em>Quantitative Human Physiology: An Introduction</em>. Elsevier Science.</li>
          <li>Artículos científicos de bases de datos de la Universidad.</li>
        </ul>
      </section>
      
    </div>
  `;

  // Bind Click Events
  container.querySelector('.start-course-btn').addEventListener('click', () => {
    onNavigate('topic', 'clase-01');
  });
}

/**
 * Renderiza la vista de contenidos academicos con pestanas para una clase especifica.
 * 
 * @param {HTMLElement} container - Contenedor principal de la vista.
 * @param {string} topicId - Identificador de la clase (ej. 'clase-01').
 * @param {function(number): void} onAwardXp - Callback para otorgar XP.
 * @param {function(string, string|null): void} onNavigate - Callback de navegacion global.
 * 
 * @example
 * renderCourseContentView(document.getElementById('main-view'), 'clase-01', awardXp, onNavigate);
 */
export function renderCourseContentView(container, topicId, onAwardXp, onNavigate) {
  // Encontrar clase y sus adyacentes
  const allTopics = [];
  courseData.modules.forEach(m => {
    m.topics.forEach(t => {
      allTopics.push({ topic: t, mod: m });
    });
  });

  const activeIdx = allTopics.findIndex(item => item.topic.id === topicId);
  if (activeIdx === -1) {
    container.innerHTML = `
      <div class="card text-center p-5">
        <p class="text-secondary">Seleccione un tema de la barra lateral para comenzar.</p>
      </div>
    `;
    return;
  }

  const currentTopic = allTopics[activeIdx].topic;
  const currentModule = allTopics[activeIdx].mod;
  const prevTopic = activeIdx > 0 ? allTopics[activeIdx - 1].topic : null;
  const nextTopic = activeIdx < allTopics.length - 1 ? allTopics[activeIdx + 1].topic : null;

  // Registrar tema como completado automaticamente al abrirlo
  localStorage.setItem(`topic_completed_${topicId}`, 'true');
  // Disparar evento para actualizar barra lateral y header
  window.dispatchEvent(new CustomEvent('topicProgressUpdated'));

  container.innerHTML = `
    <div class="animate-fade-in d-flex flex-column gap-4">
      
      <!-- Cabecera de Clase -->
      <div>
        <div class="d-flex gap-2 flex-wrap align-items-center mb-2">
          <span class="badge badge-gold">Corte ${currentModule.id}</span>
          <span class="text-secondary">•</span>
          <span class="small text-secondary fw-semibold">⏱️ ${currentTopic.duration}</span>
          <span class="text-secondary">•</span>
          <span class="badge ${
            currentTopic.difficulty === 'Basico' || currentTopic.difficulty === 'Básico' ? 'badge-success' : 
            currentTopic.difficulty === 'Intermedio' ? 'badge-warning' : 'badge-danger'
          }">${currentTopic.difficulty}</span>
        </div>
        <h1 class="h2 text-primary m-0" style="font-family: var(--font-title);">Clase ${currentTopic.number}: ${currentTopic.title}</h1>
      </div>

      <!-- Pestanas (Tabs) -->
      <div class="nav-tabs-custom">
        <button class="nav-link-custom active" data-tab="theory">📖 Contenido</button>
        <button class="nav-link-custom" data-tab="slides">🖥️ Presentacion</button>
        <button class="nav-link-custom" data-tab="resources">📥 Descargas & Recursos</button>
        <button class="nav-link-custom" data-tab="code">🔬 Laboratorio & Codigo</button>
        <button class="nav-link-custom" data-tab="quiz">📝 Autoevaluacion</button>
      </div>

      <!-- Contenedor del Contenido de Pestana -->
      <div class="tab-content-container" style="min-height: 380px;">
        <!-- Se inyectara dinamicamente por la pestana activa -->
      </div>

      <!-- Botones de Navegacion Inferior -->
      <div class="border-top pt-4 mt-3 d-flex justify-content-between gap-3">
        ${prevTopic ? `
          <button class="btn btn-outline text-start d-flex flex-column align-items-start prev-topic-btn" style="padding: 0.6rem 1.2rem;">
            <span class="small text-secondary">◀ Tema Anterior</span>
            <span class="small fw-bold">Clase ${prevTopic.number}: ${prevTopic.title}</span>
          </button>
        ` : `<div></div>`}

        ${nextTopic ? `
          <button class="btn btn-primary text-end d-flex flex-column align-items-end next-topic-btn" style="padding: 0.6rem 1.2rem;">
            <span class="small" style="color: var(--text-primary); opacity: 0.8;">Siguiente Tema ▶</span>
            <span class="small fw-bold">Clase ${nextTopic.number}: ${nextTopic.title}</span>
          </button>
        ` : `
          <button class="btn btn-secondary text-end d-flex flex-column align-items-end finish-route-btn" style="padding: 0.6rem 1.2rem;">
            <span class="small" style="color: var(--text-primary); opacity: 0.8;">Finalizar Ruta ▶</span>
            <span class="small fw-bold">Emitir Certificado Final</span>
          </button>
        `}
      </div>
      
    </div>
  `;

  // Variables para pestana
  const tabContent = container.querySelector('.tab-content-container');
  const tabs = container.querySelectorAll('.nav-link-custom');

  // Mapear carpetas fisicas de recursos locales
  const folderPrefix = currentModule.id === 1 ? 'Primer Corte/' : currentModule.id === 2 ? 'Segundo Corte/' : 'Tercer Corte/';
  const classFolder = String(currentTopic.number).padStart(2, '0') + (currentTopic.number === 10 && currentModule.id === 3 ? ' Clase Opto/' : ' Clase/');

  // Cache de codigos firmware para clases especificas
  const arduinoCodes = {
    'clase-09': `// @file PruebaCelda.ino
// @description Lectura y calibracion de celda de carga con HX711
#include "HX711.h"

#define DOUT  3
#define CLK   2

HX711 balanza;

float factor_calibracion = 22300.0; // Ajustar segun peso patron

void setup() {
  Serial.begin(9600);
  Serial.println("Inicializando Celda de Carga...");
  balanza.begin(DOUT, CLK);
  balanza.set_scale(factor_calibracion); 
  balanza.tare(); // Puesta a cero
}

void loop() {
  Serial.print("Peso detectado: ");
  Serial.print(balanza.get_units(5), 2); // Promedio de 5 lecturas
  Serial.println(" kg");
  delay(500);
}`,

    'clase-11': ''
  };

  /**
   * Renderiza el contenido de la pestana activa.
   */
  const switchTab = (tabId) => {
    tabContent.innerHTML = '';
    
    if (tabId === 'theory') {
      tabContent.innerHTML = `
        <div class="animate-fade-in d-flex flex-column gap-3 small-text-adjust" style="line-height: 1.75; font-size: 1.02rem; color: var(--text-secondary);">
          <div class="p-3 bg-light rounded-3 border-start border-4 border-secondary small" style="font-style: italic; background-color: var(--bg-tertiary) !important;">
            <strong>Generalidades:</strong> ${currentTopic.summary}
          </div>
          ${currentTopic.objectives && currentTopic.objectives.length > 0 ? `
          <div>
            <h3 class="h6 text-primary fw-bold mb-2">Objetivos de Aprendizaje:</h3>
            <ul class="ps-3 d-flex flex-column gap-1 small">
              ${currentTopic.objectives.map(obj => `<li>${obj}</li>`).join('')}
            </ul>
          </div>
          ` : ''}
          <div class="course-theory-rich mt-2">
            ${currentTopic.content}
          </div>
        </div>
      `;
    } 
    
    else if (tabId === 'slides') {
      const pres = currentTopic.presentation;
      if (!pres) {
        tabContent.innerHTML = `<div class="card text-center p-4 text-secondary small">No hay presentacion de diapositivas vinculada para este tema.</div>`;
        return;
      }
      
      const isMulti = Array.isArray(pres);
      let activeSlideIdx = 0;

      const renderSlidesFrame = () => {
        const activeUrl = isMulti ? pres[activeSlideIdx] : pres;
        const isExternalUrl = activeUrl && (activeUrl.startsWith('http://') || activeUrl.startsWith('https://'));
        const isPdf = activeUrl && activeUrl.toLowerCase().endsWith('.pdf');
        const canEmbed = isExternalUrl || isPdf;
        
        let iframeSrc = '';
        let downloadSrc = '';
        if (isExternalUrl) {
            iframeSrc = activeUrl;
            downloadSrc = activeUrl;
        } else {
            iframeSrc = encodeURI(folderPrefix + classFolder + activeUrl);
            downloadSrc = iframeSrc;
        }

        let buttonsHTML = '';
        if (isMulti) {
          buttonsHTML = `
            <div class="d-flex gap-2 border-bottom pb-2 mb-3 flex-wrap">
              ${pres.map((_, idx) => `
                <button class="btn btn-sm slide-part-btn ${activeSlideIdx === idx ? 'btn-secondary' : 'btn-outline'}" data-slide-idx="${idx}" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;">
                  📚 Parte ${idx + 1}
                </button>
              `).join('')}
            </div>
          `;
        }

        tabContent.innerHTML = `
          <div class="animate-fade-in d-flex flex-column gap-3">
            ${buttonsHTML}
            ${canEmbed ? `
              <div style="width: 100%; height: 480px; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-md); background-color: #000;">
                <iframe src="${iframeSrc}" frameborder="0" width="100%" height="100%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" title="Presentacion"></iframe>
              </div>
            ` : `
              <div class="d-flex flex-column align-items-center justify-content-center text-center text-white" style="width: 100%; height: 450px; background-color: #0a192f; border-radius: var(--radius-md); border: 1px solid var(--border-color); padding: 2rem;">
                <span class="display-3 mb-3">🖥️</span>
                <h4 class="h5 mb-2">${activeUrl}</h4>
                <p class="small text-secondary mb-4" style="max-width: 400px;">
                  Las presentaciones en formato PowerPoint (.pptx) no se pueden visualizar embebidas directamente en el navegador.
                </p>
                <a href="${downloadSrc}" target="_blank" class="btn btn-primary px-4 py-2 fw-bold" style="border-radius: 50px;">
                  📥 Descargar para Visualizar
                </a>
              </div>
            `}
          </div>
        `;

        // Vincular eventos de sub-diapositivas
        if (isMulti) {
          tabContent.querySelectorAll('.slide-part-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
              activeSlideIdx = Number(e.currentTarget.getAttribute('data-slide-idx'));
              renderSlidesFrame();
            });
          });
        }
      };
      renderSlidesFrame();
    } 
    
    else if (tabId === 'resources') {
      const filteredResources = currentTopic.resources.filter(res => res.type !== 'pptx');
      if (filteredResources.length === 0) {
        tabContent.innerHTML = `<div class="card text-center p-4 text-secondary small">No hay lecturas o referencias anexas registradas para esta clase.</div>`;
        return;
      }

      tabContent.innerHTML = `
        <div class="animate-fade-in d-flex flex-column gap-3">
          <h3 class="h6 text-primary fw-bold m-0">Material Descargable</h3>
          <p class="small text-secondary m-0">Acceda a las referencias clave, lecturas recomendadas y articulos cientificos complementarios de esta clase.</p>
          <div class="d-flex flex-column gap-2 mt-2">
            ${filteredResources.map(res => {
              const guidePath = folderPrefix + classFolder + res.name;
              const downloadUrl = res.url || guidePath;
              return `
                <div class="card p-3 d-flex flex-row justify-content-between align-items-center flex-wrap gap-2">
                  <div class="d-flex align-items-center gap-3">
                    <span style="font-size: 2rem;">${res.type === 'pdf' ? '📕' : '📄'}</span>
                    <div>
                      <div class="fw-bold small" style="color: var(--text-primary);">${res.name}</div>
                      <div class="small text-secondary" style="font-size: 0.75rem;">Archivo ${res.type.toUpperCase()} • Tamaño: ${res.size}</div>
                    </div>
                  </div>
                  <a href="${downloadUrl}" target="_blank" class="btn btn-sm btn-outline px-3" style="font-size: 0.8rem;">Ver / Descargar</a>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    } 
    
    else if (tabId === 'code') {
      if (currentTopic.labContent) {
        tabContent.innerHTML = `
          <div class="animate-fade-in d-flex flex-column gap-3">
            ${currentTopic.labContent}
          </div>
        `;
        if (currentTopic.id === 'clase-01') {
          setTimeout(() => {
            const activateBtn = document.getElementById('btn-activate-activity');
            const activityRoot = document.getElementById('afg1022-interactive-activity-root');
            const psActivateBtn = document.getElementById('btn-activate-ps-activity');
            const psActivityRoot = document.getElementById('power-supply-interactive-activity-root');
            const oscActivateBtn = document.getElementById('btn-activate-osc-activity');
            const oscActivityRoot = document.getElementById('oscilloscope-interactive-activity-root');
            const dmmActivateBtn = document.getElementById('btn-activate-dmm-activity');
            const dmmActivityRoot = document.getElementById('dmm-interactive-activity-root');

            const hideAllActivities = () => {
              if (activityRoot) activityRoot.classList.add('d-none');
              if (activateBtn) activateBtn.parentElement.classList.remove('d-none');
              
              if (psActivityRoot) psActivityRoot.classList.add('d-none');
              if (psActivateBtn) psActivateBtn.parentElement.classList.remove('d-none');

              if (oscActivityRoot) oscActivityRoot.classList.add('d-none');
              if (oscActivateBtn) oscActivateBtn.parentElement.classList.remove('d-none');

              if (dmmActivityRoot) dmmActivityRoot.classList.add('d-none');
              if (dmmActivateBtn) dmmActivateBtn.parentElement.classList.remove('d-none');
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

            if (dmmActivateBtn && dmmActivityRoot) {
              dmmActivateBtn.addEventListener('click', () => {
                hideAllActivities();
                dmmActivityRoot.classList.remove('d-none');
                dmmActivateBtn.parentElement.classList.add('d-none');
                initDmmActivity(onAwardXp);
                setTimeout(() => dmmActivityRoot.scrollIntoView({ behavior: 'smooth' }), 100);
              });
            }
          }, 50);
        }
        return;
      }

      let labsHTML = '';
      if (currentTopic.labs && currentTopic.labs.length > 0) {
        labsHTML = `
          <div class="d-flex flex-column gap-2 mb-4">
            <h3 class="h6 text-primary fw-bold m-0">Guias de Practica de Laboratorio</h3>
            ${currentTopic.labs.map(lab => {
              const guidePath = folderPrefix + classFolder + lab.guide;
              const downloadUrl = lab.url || guidePath;
              return `
                <div class="card p-3 d-flex flex-row justify-content-between align-items-center flex-wrap gap-2">
                  <div class="d-flex align-items-center gap-3">
                    <span style="font-size: 2.2rem;">📝</span>
                    <div>
                      <div class="fw-bold small" style="color: var(--text-primary);">${lab.title}</div>
                      <div class="small text-secondary" style="font-size: 0.75rem;">Guia de Laboratorio Fisico • ${lab.guide}</div>
                    </div>
                  </div>
                  <a href="${downloadUrl}" target="_blank" class="btn btn-sm btn-outline px-3" style="font-size: 0.8rem;">Ver / Descargar Guia</a>
                </div>
              `;
            }).join('')}
          </div>
        `;
      }

      let codeHTML = '';
      if (arduinoCodes[currentTopic.id]) {
        codeHTML = `
          <div class="d-flex flex-column gap-2 mt-3">
            <div class="d-flex justify-content-end align-items-center">
              <button class="btn btn-sm btn-outline copy-code-btn" style="font-size: 0.75rem; padding: 0.25rem 0.6rem;">📋 Copiar Codigo</button>
            </div>
            <pre style="background-color: #0a192f; color: #a5b4fc; padding: 1.25rem; border-radius: var(--radius-md); overflow-x: auto; font-size: 0.82rem; font-family: monospace; border: 1px solid var(--border-color); max-height: 400px;"><code class="arduino-code-text">${arduinoCodes[currentTopic.id]}</code></pre>
          </div>
        `;
      }

      let embedsHTML = '';
      if (currentTopic.simulator) {
        const simulators = Array.isArray(currentTopic.simulator) ? currentTopic.simulator : [currentTopic.simulator];
        embedsHTML = simulators.map(simFile => {
          let simTitle = 'Simulador de Laboratorio';
          let simDesc = '';
          if (simFile === 'simulador_cargas_campo_electrico.html') {
            simTitle = 'Fundamentos Físicos: Cargas y Campo Eléctrico';
            simDesc = 'Construya configuraciones de cargas, mida el potencial (Voltaje) y observe la fuerza electromotriz (FEM) responsable de generar corriente eléctrica.';
          } else if (simFile === 'simulador_circuitos_led.html') {
            simTitle = 'Simulador de Circuitos Interactivos (Ley de Ohm, Serie y Paralelo)';
            simDesc = 'Modifique el voltaje de la fuente y los valores de resistencia. Examine la corriente y el brillo dinamico de los LEDs.';
          } else if (simFile === 'simulador_senales_dc_ac.html') {
            simTitle = 'Explorador Interactivo de Senales DC y AC';
            simDesc = 'Ajuste los niveles continuos, alternos, la frecuencia y fase de la senal, y analice sus valores RMS y promedio.';
          } else if (simFile === 'simulador_laboratorio_rlc.html') {
            simTitle = 'Laboratorio Virtual de Componentes Pasivos R, L y C';
            simDesc = 'Simule la impedancia, el desfase entre tension y corriente, diagramas fasoriales y la frecuencia de resonancia.';
          } else if (simFile === 'simulador_fourier.html') {
            simTitle = 'Laboratorio Virtual de Fourier';
            simDesc = 'Construya señales, interprete sus ejes y escalas, identifique componentes espectrales y estudie el efecto del ruido, la interferencia y los filtros.';
          } else if (simFile === 'laboratorio_virtual_filtros_ruido.html') {
            simTitle = 'Simulador Interactivo de Filtros y Ruido';
            simDesc = 'Experimente con filtros pasivos, observe la atenuación del ruido y analice el comportamiento de las bioseñales en el dominio del tiempo y frecuencia.';
          } else if (simFile === 'optobio_lab.html') {
            simTitle = 'Simulador de Instrumentación Optoelectrónica (PPG / SpO₂)';
            simDesc = 'Experimente con los fundamentos de la fotopletismografía: longitud de onda, transimpedancia y absorción de luz en los tejidos biológicos.';
          } else if (simFile.includes('musiclab.chromeexperiments.com/spectrogram')) {
            simTitle = 'Espectrograma Interactivo (Tiempo y Frecuencia)';
            simDesc = 'Visualice el contenido de frecuencias en tiempo real usando el microfono o instrumentos.';
          }

          const iframeSrc = simFile.startsWith('http') ? simFile : `./public/${simFile}?v=${Date.now()}`;
          return `
            <div class="d-flex flex-column gap-2 mt-4 pt-3 border-top">
              <h3 class="h6 text-primary fw-bold m-0">${simTitle}</h3>
              <p class="small text-secondary m-0">${simDesc}</p>
              <div style="width: 100%; height: 800px; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-color); background-color: var(--bg-secondary);">
                <iframe src="${iframeSrc}" width="100%" height="100%" style="border:none;" allow="microphone" loading="lazy"></iframe>
              </div>
            </div>
          `;
        }).join('');
      }

      tabContent.innerHTML = `
        <div class="animate-fade-in d-flex flex-column gap-3">
          ${labsHTML}
          ${codeHTML}
          ${embedsHTML}
        </div>
      `;

      // Copy Code Trigger
      if (arduinoCodes[currentTopic.id]) {
        const copyBtn = tabContent.querySelector('.copy-code-btn');
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(arduinoCodes[currentTopic.id]);
          copyBtn.textContent = '¡Copiado!';
          setTimeout(() => copyBtn.textContent = '📋 Copiar Codigo', 2000);
        });
      }
    } 
    
    else if (tabId === 'quiz') {
      renderQuizWidget(tabContent, currentTopic.quizzes, currentTopic.id, onAwardXp);
    }
  };

  // Inicializar primera pestana
  switchTab('theory');

  // Registrar clics de las pestanas
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');
      switchTab(e.currentTarget.getAttribute('data-tab'));
    });
  });

  // Vincular navegadores de pie de pagina
  if (prevTopic) {
    container.querySelector('.prev-topic-btn').addEventListener('click', () => {
      onNavigate('topic', prevTopic.id);
    });
  }
  if (nextTopic) {
    container.querySelector('.next-topic-btn').addEventListener('click', () => {
      onNavigate('topic', nextTopic.id);
    });
  } else {
    container.querySelector('.finish-route-btn').addEventListener('click', () => {
      onNavigate('achievements', null);
    });
  }
}

/**
 * Renderiza el widget de autoevaluacion (quiz) dentro de un contenedor.
 * 
 * @param {HTMLElement} container - Elemento donde se inyectara el quiz.
 * @param {Array<Object>} quiz - Listado de preguntas, opciones, respuesta correcta y explicaciones.
 * @param {string} topicId - Identificador del tema para almacenar el progreso.
 * @param {function(number): void} onComplete - Callback que reporta la XP ganada.
 */
export function renderQuizWidget(container, quiz, topicId, onComplete) {
  if (!quiz || quiz.length === 0) {
    container.innerHTML = `
      <div class="card text-center p-4 text-secondary small">
        No hay cuestionarios de autoevaluacion disponibles para esta clase.
      </div>
    `;
    return;
  }

  let currentIdx = 0;
  let score = 0;
  let selectedOpt = null;
  let submitted = false;

  const alreadyDone = !!localStorage.getItem(`quiz_completed_${topicId}`);

  const renderQuestion = () => {
    if (currentIdx >= quiz.length) {
      // Quiz finalizado
      const finalXp = Math.round((score / quiz.length) * 100);
      if (!alreadyDone) {
        localStorage.setItem(`quiz_completed_${topicId}`, 'true');
        onComplete(finalXp);
      }

      container.innerHTML = `
        <div class="card text-center p-5 animate-fade-in d-flex flex-column align-items-center gap-3">
          <span style="font-size: 3.5rem;">🏆</span>
          <h3 class="h4 text-primary m-0" style="font-family: var(--font-title);">Autoevaluacion Completada</h3>
          <p class="text-secondary small m-0">Ha obtenido <strong>${score} de ${quiz.length}</strong> respuestas correctas.</p>
          
          <div class="fw-bold px-4 py-2 rounded-pill mt-2" style="background: rgba(197, 160, 89, 0.15); color: var(--color-secondary); font-size: 1.1rem;">
            ${alreadyDone ? '¡Quiz completado previamente! (0 XP)' : `+${finalXp} XP Obtenidos`}
          </div>
        </div>
      `;
      return;
    }

    const q = quiz[currentIdx];

    container.innerHTML = `
      <div class="card p-4 animate-fade-in d-flex flex-column gap-3 mx-auto" style="max-width: 650px;">
        
        <!-- Progreso -->
        <div class="d-flex justify-content-between small text-secondary">
          <span>Pregunta ${currentIdx + 1} de ${quiz.length}</span>
          <span>Aciertos: ${score}</span>
        </div>

        <!-- Enunciado -->
        <h3 class="h5 text-primary my-2" style="font-family: var(--font-title);">${q.question.replace(/\n/g, '<br>')}</h3>

        <!-- Opciones -->
        <div class="d-flex flex-column gap-2 my-2">
          ${q.options.map((opt, i) => {
            let btnClass = 'btn-outline';
            let style = 'text-align: left; padding: 0.85rem 1.1rem;';
            
            if (selectedOpt === i && !submitted) {
              style += ' border-color: var(--color-primary); background-color: rgba(0, 59, 113, 0.05);';
            }

            if (submitted) {
              if (i === q.answer) {
                style += ' border-color: var(--status-success); background-color: rgba(16, 185, 129, 0.1); color: var(--status-success); font-weight: 600;';
              } else if (selectedOpt === i) {
                style += ' border-color: var(--status-danger); background-color: rgba(239, 68, 68, 0.1); color: var(--status-danger);';
              }
            }

            return `
              <button class="btn btn-sm ${btnClass} quiz-opt-btn" data-opt-idx="${i}" ${submitted ? 'disabled' : ''} style="${style}">
                <div class="d-flex align-items-center gap-2">
                  <span class="d-inline-flex align-items-center justify-content-center rounded-circle text-white fw-bold" style="width: 24px; height: 24px; font-size: 0.8rem; background-color: ${selectedOpt === i ? 'var(--color-secondary)' : 'var(--border-color)'};">
                    ${String.fromCharCode(65 + i)}
                  </span>
                  <span class="small">${opt}</span>
                </div>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Retroalimentacion -->
        <div class="quiz-feedback-box d-none p-3 rounded border-start border-4 small"></div>

        <!-- Boton de accion -->
        <div class="d-flex justify-content-end">
          <button class="btn btn-primary quiz-action-btn" disabled style="opacity: 0.6;">Validar Respuesta</button>
        </div>
      </div>
    `;

    const optButtons = container.querySelectorAll('.quiz-opt-btn');
    const actionBtn = container.querySelector('.quiz-action-btn');
    const feedbackBox = container.querySelector('.quiz-feedback-box');

    // Vincular clic de opciones
    optButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (submitted) return;
        selectedOpt = Number(e.currentTarget.getAttribute('data-opt-idx'));
        
        // Re-pintar circulos
        optButtons.forEach((b, idx) => {
          const circle = b.querySelector('.rounded-circle');
          if (idx === selectedOpt) {
            circle.style.backgroundColor = 'var(--color-secondary)';
            b.style.borderColor = 'var(--color-primary)';
            b.style.backgroundColor = 'rgba(0, 59, 113, 0.05)';
          } else {
            circle.style.backgroundColor = 'var(--border-color)';
            b.style.borderColor = '';
            b.style.backgroundColor = '';
          }
        });

        actionBtn.disabled = false;
        actionBtn.style.opacity = '1';
      });
    });

    // Validar o avanzar
    actionBtn.addEventListener('click', () => {
      if (!submitted) {
        // Enviar respuesta
        submitted = true;
        optButtons.forEach(btn => btn.disabled = true);
        
        const isCorrect = (selectedOpt === q.answer);
        if (isCorrect) {
          score++;
          feedbackBox.classList.remove('d-none');
          feedbackBox.style.borderColor = 'var(--status-success)';
          feedbackBox.style.backgroundColor = 'rgba(16, 185, 129, 0.05)';
          feedbackBox.innerHTML = `
            <div class="fw-bold text-success mb-1">✓ ¡Correcto!</div>
            <p class="m-0 text-secondary">${q.explanation}</p>
          `;
        } else {
          feedbackBox.classList.remove('d-none');
          feedbackBox.style.borderColor = 'var(--status-danger)';
          feedbackBox.style.backgroundColor = 'rgba(239, 68, 68, 0.05)';
          feedbackBox.innerHTML = `
            <div class="fw-bold text-danger mb-1">✗ Incorrecto</div>
            <p class="m-0 text-secondary">${q.explanation}</p>
          `;
        }

        // Marcar opcion correcta e incorrecta en los estilos finales
        optButtons.forEach((b, idx) => {
          if (idx === q.answer) {
            b.style.borderColor = 'var(--status-success)';
            b.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
            b.style.color = 'var(--status-success)';
            b.style.fontWeight = '600';
          } else if (selectedOpt === idx) {
            b.style.borderColor = 'var(--status-danger)';
            b.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
            b.style.color = 'var(--status-danger)';
          }
        });

        actionBtn.textContent = currentIdx < quiz.length - 1 ? 'Siguiente Pregunta' : 'Finalizar Autoevaluacion';
        actionBtn.className = 'btn btn-secondary quiz-action-btn';
      } else {
        // Siguiente pregunta
        currentIdx++;
        selectedOpt = null;
        submitted = false;
        renderQuestion();
      }
    });
  };

  renderQuestion();
}

/**
 * Renderiza la interfaz de Laboratorios Virtuales de Bioinstrumentacion.
 * Carga dinamicamente los simuladores activos en Canvas.
 * 
 * @param {HTMLElement} container - Contenedor principal de la vista.
 */
export function renderVirtualLabs(container) {
  container.innerHTML = `
    <div class="animate-fade-in d-flex flex-column gap-4">
      <div>
        <h1 class="h2 text-primary mb-2" style="font-family: var(--font-title);">Laboratorios Virtuales Interactivos</h1>
        <p class="text-secondary">Explore e interactue con los sistemas de acondicionamiento de biosenales reales directamente en su navegador.</p>
      </div>

      <div class="row g-4 align-items-start">
        <!-- Lista de Simuladores Activos -->
        <div class="col-lg-3 col-md-4 d-flex flex-column gap-2">
          <h3 class="small text-secondary fw-bold uppercase-spacing-adjust mb-2" style="letter-spacing:0.05em; font-size:0.75rem;">Simuladores Activos</h3>
          
          <button class="btn btn-outline text-start d-flex flex-column w-100 lab-tab-btn active" data-lab-id="ecg">
            <span class="badge badge-gold p-0 mb-1" style="font-size:0.65rem; background:none;">Biopotenciales</span>
            <span class="fw-bold small" style="color: var(--text-primary);">🫀 Filtrado de ECG</span>
          </button>
          
          <button class="btn btn-outline text-start d-flex flex-column w-100 lab-tab-btn" data-lab-id="emg">
            <span class="badge badge-gold p-0 mb-1" style="font-size:0.65rem; background:none;">Biopotenciales</span>
            <span class="fw-bold small" style="color: var(--text-primary);">💪 Envolvente de EMG</span>
          </button>

          <button class="btn btn-outline text-start d-flex flex-column w-100 lab-tab-btn" data-lab-id="eeg">
            <span class="badge badge-gold p-0 mb-1" style="font-size:0.65rem; background:none;">Biopotenciales</span>
            <span class="fw-bold small" style="color: var(--text-primary);">🧠 Ondas Cerebrales EEG</span>
          </button>

          <button class="btn btn-outline text-start d-flex flex-column w-100 lab-tab-btn" data-lab-id="spo2">
            <span class="badge badge-gold p-0 mb-1" style="font-size:0.65rem; background:none;">Optoelectronica</span>
            <span class="fw-bold small" style="color: var(--text-primary);">🩸 Pulsioximetria SpO2</span>
          </button>
        </div>

        <!-- Zona de Carga del Simulador -->
        <div class="col-lg-9 col-md-8 simulator-mount-point">
          <!-- Inyectado dinamicamente -->
        </div>
      </div>

      <!-- Proximos Laboratorios -->
      <div class="mt-4 pt-2">
        <h2 class="h4 text-primary mb-3" style="font-family: var(--font-title);">Laboratorios de Proxima Integracion</h2>
        <div class="row g-3">
          <div class="col-lg-4 col-sm-6">
            <div class="card p-3 h-100" style="opacity: 0.85;">
              <div class="d-flex justify-content-between mb-2">
                <span class="badge badge-gold" style="font-size: 0.65rem;">Temperatura</span>
                <span class="small text-secondary fw-bold" style="font-size: 0.7rem;">HARDWARE</span>
              </div>
              <h4 class="h6 fw-bold" style="color: var(--text-primary);">🌡️ Puente de Wheatstone (PT100)</h4>
              <p class="small text-secondary m-0" style="line-height:1.4;">Simula el balance y auto-calentamiento en termorresistencia de Platino.</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="card p-3 h-100" style="opacity: 0.85;">
              <div class="d-flex justify-content-between mb-2">
                <span class="badge badge-gold" style="font-size: 0.65rem;">Presion</span>
                <span class="small text-secondary fw-bold" style="font-size: 0.7rem;">HARDWARE</span>
              </div>
              <h4 class="h6 fw-bold" style="color: var(--text-primary);">🔊 Pulso Arterial Piezoelectrico</h4>
              <p class="small text-secondary m-0" style="line-height:1.4;">Simulacion del transductor de presion sanguinea y circuito de carga.</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="card p-3 h-100" style="opacity: 0.85;">
              <div class="d-flex justify-content-between mb-2">
                <span class="badge badge-gold" style="font-size: 0.65rem;">Gases</span>
                <span class="small text-secondary fw-bold" style="font-size: 0.7rem;">HARDWARE</span>
              </div>
              <h4 class="h6 fw-bold" style="color: var(--text-primary);">🌬️ Capnografia NDIR</h4>
              <p class="small text-secondary m-0" style="line-height:1.4;">Medicion de la absorcion optica de gas CO2 y modelado fisico de capnogramas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const mountPoint = container.querySelector('.simulator-mount-point');
  const buttons = container.querySelectorAll('.lab-tab-btn');

  let activeCleanup = null;

  const loadLab = (labId) => {
    // Limpiar simulador anterior
    if (activeCleanup) {
      activeCleanup();
      activeCleanup = null;
    }

    if (labId === 'ecg') {
      activeCleanup = mountECGSimulator(mountPoint);
    } else if (labId === 'eeg') {
      activeCleanup = mountEEGSimulator(mountPoint);
    } else if (labId === 'emg') {
      activeCleanup = mountEMGSimulator(mountPoint);
    } else if (labId === 'spo2') {
      activeCleanup = mountSpO2Simulator(mountPoint);
    }

    // Agregar logro por ingresar al simulador
    localStorage.setItem('achievement_badge_first-beat', 'true');
  };

  // Inicializar primer lab
  loadLab('ecg');

  // Asignar eventos de clic
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => {
        b.classList.remove('active');
        b.style.borderColor = '';
        b.style.backgroundColor = '';
      });
      e.currentTarget.classList.add('active');
      e.currentTarget.style.borderColor = 'var(--color-secondary)';
      e.currentTarget.style.backgroundColor = 'rgba(197, 160, 89, 0.12)';
      
      loadLab(e.currentTarget.getAttribute('data-lab-id'));
    });
  });

  // Retornar cleanup
  return () => {
    if (activeCleanup) activeCleanup();
  };
}

/**
 * Renderiza la interfaz del Banco de Senales Clinicas con visor interactivo en Canvas.
 * Permite filtrar senales e insertar anotaciones clinicas por coordenada.
 * 
 * @param {HTMLElement} container - Contenedor principal de la vista.
 * @returns {function(): void} Funcion de limpieza (cleanup).
 */
export function renderBiosignalBank(container) {
  const signals = [
    {
      id: 'ecg-normal',
      name: 'ECG Normal de 3 Derivaciones',
      type: 'ECG',
      source: 'PhysioNet MIT-BIH Arrhythmia Database',
      samplingRate: '360 Hz',
      description: 'Registro estandar de ritmo sinusal normal. Adecuado para caracterizar la morfologia de las ondas P, QRS y T.',
      generate: (len) => {
        const d = [];
        for (let i = 0; i < len; i++) {
          const period = 360; 
          const phase = i % period;
          let val = 0;
          if (phase > period * 0.1 && phase < period * 0.14) val += 0.15 * Math.sin(((phase - period * 0.1) / (period * 0.04)) * Math.PI); // P
          if (phase > period * 0.19 && phase < period * 0.20) val -= 0.05 * Math.sin(((phase - period * 0.19) / (period * 0.01)) * Math.PI); // Q
          if (phase >= period * 0.20 && phase < period * 0.23) val += 1.0 * Math.sin(((phase - period * 0.2) / (period * 0.03)) * Math.PI); // R
          if (phase >= period * 0.23 && phase < period * 0.25) val -= 0.25 * Math.sin(((phase - period * 0.23) / (period * 0.02)) * Math.PI); // S
          if (phase > period * 0.35 && phase < period * 0.45) val += 0.25 * Math.sin(((phase - period * 0.35) / (period * 0.1)) * Math.PI); // T
          val += 0.015 * (Math.random() - 0.5); // Ruido alta frecuencia
          val += 0.04 * Math.sin(2 * Math.PI * 0.1 * i / 360); // Deriva
          d.push(val);
        }
        return d;
      }
    },
    {
      id: 'ecg-arrhythmia',
      name: 'ECG con Contraccion Ventricular Prematura (PVC)',
      type: 'ECG',
      source: 'PhysioNet MIT-BIH Database, Reg 119',
      samplingRate: '360 Hz',
      description: 'Senales que exhiben extrasistoles ventriculares (latidos anomalos prematuros con complejo QRS ensanchado y sin onda P precedente).',
      generate: (len) => {
        const d = [];
        for (let i = 0; i < len; i++) {
          const period = 360;
          let phase = i % period;
          let val = 0;
          const latidoCiclo = Math.floor(i / period) % 3;
          if (latidoCiclo !== 1) {
            if (phase > period * 0.1 && phase < period * 0.14) val += 0.15 * Math.sin(((phase - period * 0.1) / (period * 0.04)) * Math.PI);
            if (phase >= period * 0.20 && phase < period * 0.23) val += 0.9 * Math.sin(((phase - period * 0.2) / (period * 0.03)) * Math.PI);
            if (phase > period * 0.35 && phase < period * 0.45) val += 0.25 * Math.sin(((phase - period * 0.35) / (period * 0.1)) * Math.PI);
          } else {
            phase = (i + 50) % period; // Adelantado
            if (phase >= period * 0.15 && phase < period * 0.25) val += 1.4 * Math.sin(((phase - period * 0.15) / (period * 0.1)) * Math.PI);
            if (phase >= period * 0.25 && phase < period * 0.35) val -= 0.6 * Math.sin(((phase - period * 0.25) / (period * 0.1)) * Math.PI);
          }
          val += 0.02 * (Math.random() - 0.5);
          d.push(val);
        }
        return d;
      }
    },
    {
      id: 'emg-fatigue',
      name: 'EMG de Biceps durante Fatiga Muscular',
      type: 'EMG',
      source: 'Laboratorio de Biomecanica Javeriana',
      samplingRate: '1000 Hz',
      description: 'Registro superficial de contraccion isometrica voluntaria maxima. Muestra como la amplitud de la senal aumenta a medida que las fibras se fatigan, mientras que la frecuencia media cae.',
      generate: (len) => {
        const d = [];
        for (let i = 0; i < len; i++) {
          const fatigueProgress = i / len;
          const amplitude = 0.2 + fatigueProgress * 0.4;
          const freqMultiplier = 1.0 - fatigueProgress * 0.3;
          let val = 0;
          for (let f = 0; f < 5; f++) {
            const freq = (50 + f * 40) * freqMultiplier;
            val += amplitude * 0.15 * Math.sin(2 * Math.PI * freq * i / 1000 + Math.random() * Math.PI);
          }
          val += 0.1 * (Math.random() - 0.5);
          d.push(val);
        }
        return d;
      }
    },
    {
      id: 'eeg-sleep',
      name: 'EEG de Canal C3-A2 durante Sueno N2',
      type: 'EEG',
      source: 'PhysioNet Sleep-EDF Database',
      samplingRate: '100 Hz',
      description: 'Registro que muestra husos de sueno (sleep spindles) que consisten en rafagas de ondas de 12-14 Hz y complejos K aislados de alta amplitud.',
      generate: (len) => {
        const d = [];
        for (let i = 0; i < len; i++) {
          let val = 0.2 * Math.sin(2 * Math.PI * 1.5 * i / 100);
          if (i > len * 0.3 && i < len * 0.5) {
            const spindleEnvelope = Math.sin(((i - len * 0.3) / (len * 0.2)) * Math.PI);
            val += 0.35 * spindleEnvelope * Math.sin(2 * Math.PI * 13 * i / 100);
          }
          if (i > len * 0.7 && i < len * 0.8) {
            const kPhase = (i - len * 0.7) / (len * 0.1);
            val += 0.8 * Math.sin(kPhase * 2 * Math.PI);
          }
          val += 0.05 * (Math.random() - 0.5);
          d.push(val);
        }
        return d;
      }
    }
  ];

  container.innerHTML = `
    <div class="animate-fade-in d-flex flex-column gap-4">
      <div>
        <h1 class="h2 text-primary mb-2" style="font-family: var(--font-title);">Banco de Senales Biomedicas Reales</h1>
        <p class="text-secondary">Repositorio de biosenales reales obtenidas de bases de datos clinicas y de investigacion. Analice ondas y anada anotaciones clinicas.</p>
      </div>

      <div class="row g-4">
        <!-- Selector de Registro Lateral -->
        <div class="col-lg-4 col-md-5 d-flex flex-column gap-3">
          <div class="card">
            <h3 class="h6 text-primary fw-bold mb-3">Seleccion de Registro</h3>
            <div class="d-flex flex-column gap-2 mb-3 signal-select-box">
              ${signals.map(sig => `
                <button class="btn btn-sm text-start w-100 sig-btn" data-sig-id="${sig.id}" style="padding: 0.85rem 1rem; border: 1px solid var(--border-color); background-color: var(--bg-tertiary); color: var(--text-primary);">
                  <div class="d-flex justify-content-between mb-1">
                    <span class="badge badge-info" style="font-size:0.65rem;">${sig.type}</span>
                    <span class="small text-secondary" style="font-size:0.75rem;">${sig.samplingRate}</span>
                  </div>
                  <div class="fw-bold sig-btn-name" style="font-size:0.85rem;">${sig.name}</div>
                </button>
              `).join('')}
            </div>

            <div class="border-top pt-3 text-secondary" style="font-size:0.8rem;">
              <div class="fw-bold mb-1" style="color: var(--text-primary);">Ficha Tecnica:</div>
              <p class="sig-desc mb-2"></p>
              <div class="small text-secondary">
                <strong>Origen:</strong> <span class="sig-source"></span>
              </div>
            </div>
          </div>
        </div>

        <!-- Visor Grafico Canvas -->
        <div class="col-lg-8 col-md-7 d-flex flex-column gap-2">
          <div class="card p-3 d-flex flex-column gap-3">
            
            <!-- Herramientas superior del grafico -->
            <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
              <!-- Navegadores -->
              <div class="d-flex gap-1">
                <button class="btn btn-sm btn-outline pan-left-btn" style="font-size: 0.8rem;">◀</button>
                <button class="btn btn-sm btn-outline pan-right-btn" style="font-size: 0.8rem;">▶</button>
                <button class="btn btn-sm btn-outline zoom-in-btn fw-bold" style="font-size: 0.8rem;">🔍 +</button>
                <button class="btn btn-sm btn-outline zoom-out-btn fw-bold" style="font-size: 0.8rem;">🔍 -</button>
              </div>

              <!-- Filtro selection -->
              <div class="d-flex gap-1 align-items-center">
                <span class="small text-secondary me-1" style="font-size:0.8rem;">Filtro:</span>
                <button class="btn btn-sm filter-btn active" data-filter="raw" style="font-size:0.75rem; padding: 0.3rem 0.6rem;">Original</button>
                <button class="btn btn-sm filter-btn" data-filter="bandpass" style="font-size:0.75rem; padding: 0.3rem 0.6rem;">Pasa-Banda</button>
                <button class="btn btn-sm filter-btn" data-filter="notch" style="font-size:0.75rem; padding: 0.3rem 0.6rem;">Notch</button>
              </div>
            </div>

            <!-- Contenedor Canvas -->
            <div style="position: relative; border-radius: var(--radius-md); overflow: hidden; border: 2px solid var(--border-color);">
              <canvas class="bank-canvas" style="display: block; width: 100%; height: 300px;"></canvas>
            </div>

            <!-- Modulo de anotacion clinica -->
            <div class="border-top pt-3 d-flex gap-2 align-items-center flex-wrap">
              <button class="btn btn-sm btn-primary toggle-annotation-btn" style="font-size:0.85rem; padding:0.5rem 1rem;">✍ Anadir Anotacion Clinica</button>
              
              <div class="annotation-input-box d-none flex-grow-1" style="min-width: 250px;">
                <input type="text" class="form-control form-control-sm annotation-text-input" placeholder="Escriba etiqueta (ej. Onda P, Extrasistole) y haga clic en el grafico" style="font-size:0.85rem; background-color: var(--bg-tertiary); color: var(--text-primary); border-color: var(--border-color);">
              </div>
            </div>
          </div>

          <!-- Listado de Anotaciones -->
          <div class="card p-3 annotation-list-card d-none">
            <h4 class="h6 fw-bold text-primary mb-2">Anotaciones Registradas</h4>
            <div class="d-flex gap-2 flex-wrap annotation-badge-container"></div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Referencias a los componentes de control
  const canvas = container.querySelector('.bank-canvas');
  const ctx = canvas.getContext('2d');

  const descText = container.querySelector('.sig-desc');
  const sourceText = container.querySelector('.sig-source');

  const sigButtons = container.querySelectorAll('.sig-btn');
  const panLeftBtn = container.querySelector('.pan-left-btn');
  const panRightBtn = container.querySelector('.pan-right-btn');
  const zoomInBtn = container.querySelector('.zoom-in-btn');
  const zoomOutBtn = container.querySelector('.zoom-out-btn');
  const filterBtns = container.querySelectorAll('.filter-btn');

  const toggleAnnBtn = container.querySelector('.toggle-annotation-btn');
  const annInputBox = container.querySelector('.annotation-input-box');
  const annTextInput = container.querySelector('.annotation-text-input');
  
  const annListCard = container.querySelector('.annotation-list-card');
  const annBadgeContainer = container.querySelector('.annotation-badge-container');

  // Variables de Estado Local del Visor
  let selectedSignalId = 'ecg-normal';
  let zoom = 1;
  let pan = 0;
  let filterType = 'raw';
  let annotations = [];
  let addAnnotationMode = false;
  let rawData = [];

  // Obtener la senal activa
  const getActiveSignal = () => signals.find(s => s.id === selectedSignalId);

  // Inicializar senal y anotaciones por defecto
  const initSignal = () => {
    const active = getActiveSignal();
    rawData = active.generate(3000);
    pan = 0;
    zoom = 1;
    
    descText.textContent = active.description;
    sourceText.textContent = active.source;

    // Cargar anotaciones de muestra
    if (selectedSignalId === 'ecg-normal') {
      annotations = [
        { xIdx: 210, text: 'Complejo QRS' },
        { xIdx: 41, text: 'Onda P' },
        { xIdx: 145, text: 'Onda T' }
      ];
    } else if (selectedSignalId === 'ecg-arrhythmia') {
      annotations = [
        { xIdx: 210, text: 'QRS Normal' },
        { xIdx: 520, text: 'Contraccion Prematura (PVC)' }
      ];
    } else {
      annotations = [];
    }

    renderAnnotationList();
    drawSignal();
  };

  /**
   * Renderiza el listado de anotaciones al final.
   */
  const renderAnnotationList = () => {
    if (annotations.length === 0) {
      annListCard.classList.add('d-none');
      return;
    }
    annListCard.classList.remove('d-none');
    annBadgeContainer.innerHTML = annotations.map((ann, idx) => `
      <span class="badge badge-gold" style="font-size:0.78rem; text-transform:none;">
        📌 <strong>Idx ${ann.xIdx}:</strong> ${ann.text}
      </span>
    `).join('');
  };

  /**
   * Procesa la senal usando filtros digitales simulados.
   */
  const getProcessedData = () => {
    let processed = [...rawData];
    if (filterType === 'bandpass') {
      const smoothed = new Array(rawData.length).fill(0);
      // Suavizado bilateral
      for (let i = 2; i < rawData.length - 2; i++) {
        smoothed[i] = (rawData[i-2] + rawData[i-1] + rawData[i] + rawData[i+1] + rawData[i+2]) / 5;
      }
      // Quitar drift
      const driftWindow = 120;
      for (let i = 0; i < rawData.length; i++) {
        let localSum = 0;
        let count = 0;
        for (let j = Math.max(0, i - driftWindow/2); j < Math.min(rawData.length, i + driftWindow/2); j++) {
          localSum += smoothed[j];
          count++;
        }
        processed[i] = smoothed[i] - (localSum / count);
      }
    } else if (filterType === 'notch') {
      // Remover ruido de 60Hz suave
      for (let i = 1; i < rawData.length - 1; i++) {
        processed[i] = 0.7 * rawData[i] + 0.15 * rawData[i-1] + 0.15 * rawData[i+1];
      }
    }
    return processed;
  };

  /**
   * Dibuja los datos en el canvas.
   */
  const drawSignal = () => {
    if (rawData.length === 0) return;
    const processed = getProcessedData();

    // Ventana visible por zoom
    const viewSize = Math.max(100, Math.floor(1200 / zoom));
    const startIdx = Math.min(processed.length - viewSize, Math.max(0, pan));
    const endIdx = startIdx + viewSize;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Fondo
    ctx.fillStyle = '#0a101d';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Rejilla
    ctx.strokeStyle = 'rgba(197, 160, 89, 0.08)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 25) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 25) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }

    // Linea central base
    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.beginPath(); ctx.moveTo(0, canvas.height / 2); ctx.lineTo(canvas.width, canvas.height / 2); ctx.stroke();

    // Dibujar trazo
    ctx.beginPath();
    ctx.strokeStyle = '#c5a059'; 
    ctx.lineWidth = 2.0;

    const scaleY = 100;
    const centerY = canvas.height / 2;

    for (let xPixel = 0; xPixel < canvas.width; xPixel++) {
      const dataPercent = xPixel / canvas.width;
      const dataIdx = Math.floor(startIdx + dataPercent * viewSize);
      
      if (dataIdx >= processed.length) break;
      const yVal = centerY - processed[dataIdx] * scaleY;
      
      if (xPixel === 0) ctx.moveTo(xPixel, yVal);
      else ctx.lineTo(xPixel, yVal);
    }
    ctx.stroke();

    // Dibujar marcadores de anotacion
    annotations.forEach(ann => {
      if (ann.xIdx >= startIdx && ann.xIdx <= endIdx) {
        const pct = (ann.xIdx - startIdx) / viewSize;
        const xPixel = pct * canvas.width;
        const yVal = centerY - processed[ann.xIdx] * scaleY;

        // Punto rojo
        ctx.fillStyle = '#ef4444';
        ctx.beginPath(); ctx.arc(xPixel, yVal, 6, 0, 2 * Math.PI); ctx.fill();

        // Linea vertical
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.4)';
        ctx.beginPath();
        ctx.setLineDash([3, 3]);
        ctx.moveTo(xPixel, yVal);
        ctx.lineTo(xPixel, canvas.height - 35);
        ctx.stroke();
        ctx.setLineDash([]);

        // Etiqueta
        ctx.font = '10px Inter, sans-serif';
        const txtWidth = ctx.measureText(ann.text).width;
        ctx.fillStyle = 'rgba(239, 68, 68, 0.9)';
        ctx.fillRect(xPixel - txtWidth/2 - 5, canvas.height - 30, txtWidth + 10, 18);
        ctx.fillStyle = '#ffffff';
        ctx.fillText(ann.text, xPixel - txtWidth/2, canvas.height - 17);
      }
    });

    // Barra de scroll inferior
    const scrollBarWidth = (viewSize / processed.length) * canvas.width;
    const scrollBarX = (startIdx / processed.length) * canvas.width;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.fillRect(0, canvas.height - 6, canvas.width, 6);
    ctx.fillStyle = 'var(--color-secondary)';
    ctx.fillRect(scrollBarX, canvas.height - 6, scrollBarWidth, 6);
  };

  // Re-ajustar canvas al redimensionar
  const resizeCanvas = () => {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 300;
    drawSignal();
  };
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Vincular clics de botones del listado
  const selectSignal = (sigId) => {
    selectedSignalId = sigId;
    sigButtons.forEach(btn => {
      if (btn.getAttribute('data-sig-id') === sigId) {
        btn.style.border = '2px solid var(--color-secondary)';
        btn.style.backgroundColor = 'rgba(197, 160, 89, 0.05)';
      } else {
        btn.style.border = '1px solid var(--border-color)';
        btn.style.backgroundColor = 'var(--bg-tertiary)';
      }
    });
    initSignal();
  };

  sigButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      selectSignal(e.currentTarget.getAttribute('data-sig-id'));
    });
  });

  // Zoom / Pan
  panLeftBtn.addEventListener('click', () => {
    const step = Math.floor(200 / zoom);
    pan = Math.max(0, pan - step);
    drawSignal();
  });
  panRightBtn.addEventListener('click', () => {
    const step = Math.floor(200 / zoom);
    const maxPan = rawData.length - Math.floor(1200 / zoom);
    pan = Math.min(maxPan, pan + step);
    drawSignal();
  });
  zoomInBtn.addEventListener('click', () => {
    zoom = Math.min(8, zoom + 0.5);
    drawSignal();
  });
  zoomOutBtn.addEventListener('click', () => {
    zoom = Math.max(1, zoom - 0.5);
    drawSignal();
  });

  // Filtros
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      filterType = e.currentTarget.getAttribute('data-filter');
      drawSignal();
    });
  });

  // Anotacion clinica por coordenadas del grafico
  toggleAnnBtn.addEventListener('click', () => {
    addAnnotationMode = !addAnnotationMode;
    if (addAnnotationMode) {
      toggleAnnBtn.textContent = 'Cancelar Anotacion';
      toggleAnnBtn.className = 'btn btn-sm btn-danger toggle-annotation-btn';
      annInputBox.classList.remove('d-none');
      canvas.style.cursor = 'crosshair';
    } else {
      toggleAnnBtn.textContent = '✍ Anadir Anotacion Clinica';
      toggleAnnBtn.className = 'btn btn-sm btn-primary toggle-annotation-btn';
      annInputBox.classList.add('d-none');
      canvas.style.cursor = 'default';
    }
  });

  canvas.addEventListener('click', (e) => {
    if (!addAnnotationMode) return;
    
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    
    const viewSize = Math.max(100, Math.floor(1200 / zoom));
    const startIdx = Math.min(rawData.length - viewSize, Math.max(0, pan));
    
    // Pixel -> Indice
    const clickPercent = clickX / canvas.width;
    const dataIdx = Math.floor(startIdx + clickPercent * viewSize);

    const txtVal = annTextInput.value;
    if (txtVal.trim() !== '') {
      annotations.push({ xIdx: dataIdx, text: txtVal });
      annTextInput.value = '';
      
      // Desactivar modo de insercion
      addAnnotationMode = false;
      toggleAnnBtn.textContent = '✍ Anadir Anotacion Clinica';
      toggleAnnBtn.className = 'btn btn-sm btn-primary toggle-annotation-btn';
      annInputBox.classList.add('d-none');
      canvas.style.cursor = 'default';

      renderAnnotationList();
      drawSignal();
    }
  });

  // Cargar senal inicial
  selectSignal('ecg-normal');

  return () => {
    window.removeEventListener('resize', resizeCanvas);
  };
}

/**
 * Renderiza el Playground interactivo de DSP e Inteligencia Artificial (Bode, Red Neuronal).
 * 
 * @param {HTMLElement} container - Contenedor principal de la vista.
 * @returns {function(): void} Funcion de limpieza (cleanup).
 */
export function renderPlaygroundAI(container) {
  container.innerHTML = `
    <div class="animate-fade-in d-flex flex-column gap-4">
      <div>
        <h1 class="h2 text-primary mb-2" style="font-family: var(--font-title);">Playground de Inteligencia Artificial y DSP</h1>
        <p class="text-secondary">Explore de manera visual y didactica conceptos de filtrado digital frecuencial e inteligencia artificial aplicada en dispositivos medicos.</p>
      </div>

      <div class="row g-4">
        <!-- Diseñador de Filtros DSP -->
        <div class="col-lg-6">
          <div class="card h-100 d-flex flex-column gap-3">
            <h2 class="h5 text-primary m-0" style="font-family: var(--font-title);">📈 Diseñador de Filtros Digitales (DSP)</h2>
            <p class="small text-secondary m-0">Modifique la frecuencia de corte y el orden para observar la caida de atenuacion en decibelios (dB) segun la aproximacion matematica escogida.</p>

            <div style="background-color: #060e14; border-radius: var(--radius-md); overflow: hidden;">
              <canvas class="dsp-canvas" style="display: block; width: 100%; height: 240px;"></canvas>
            </div>

            <div class="d-flex flex-column gap-3 mt-2">
              <!-- Filtro tipo -->
              <div class="d-flex gap-2">
                <button class="btn btn-sm btn-outline flex-grow-1 filter-approx-btn active" data-approx="butterworth">Butterworth</button>
                <button class="btn btn-sm btn-outline flex-grow-1 filter-approx-btn" data-approx="chebyshev">Chebyshev</button>
                <button class="btn btn-sm btn-outline flex-grow-1 filter-approx-btn" data-approx="bessel">Bessel</button>
              </div>

              <!-- Cutoff -->
              <div>
                <div class="d-flex justify-content-between small mb-1">
                  <span>Frecuencia de Corte (Fc):</span>
                  <strong class="dsp-fc-val">100 Hz</strong>
                </div>
                <input type="range" min="10" max="450" value="100" class="w-100 dsp-fc-input">
              </div>

              <!-- Order -->
              <div>
                <div class="d-flex justify-content-between small mb-1">
                  <span>Orden del Filtro (N):</span>
                  <strong class="dsp-order-val">Orden 2 (-40 dB/decada)</strong>
                </div>
                <input type="range" min="1" max="4" value="2" class="w-100 dsp-order-input">
              </div>
            </div>
          </div>
        </div>

        <!-- Clasificación TinyML de Gestos -->
        <div class="col-lg-6">
          <div class="card h-100 d-flex flex-column gap-3">
            <h2 class="h5 text-primary m-0" style="font-family: var(--font-title);">🤖 TinyML Gesture Classifier (Red Neuronal)</h2>
            <p class="small text-secondary m-0">Simula la extraccion de la amplitud media (MAV) de 3 canales musculares en el brazo y su alimentacion en una red neuronal feed-forward para clasificar gestos.</p>

            <!-- Grafico Neuronal -->
            <div class="d-flex align-items-center justify-content-around p-3 position-relative" style="height: 140px; background-color: var(--bg-tertiary); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
              <!-- Inputs Nodes -->
              <div class="d-flex flex-column gap-3">
                <div class="nn-in-node node-ch1" style="width: 14px; height: 14px; border-radius: 50%; background-color: #64748b; transition: all 0.2s;"></div>
                <div class="nn-in-node node-ch2" style="width: 14px; height: 14px; border-radius: 50%; background-color: #64748b; transition: all 0.2s;"></div>
                <div class="nn-in-node node-ch3" style="width: 14px; height: 14px; border-radius: 50%; background-color: #64748b; transition: all 0.2s;"></div>
              </div>

              <!-- Hidden Nodes -->
              <div class="d-flex flex-column gap-2">
                <div class="nn-h-node" style="width: 10px; height: 10px; border-radius: 50%; background-color: #64748b; transition: all 0.3s;"></div>
                <div class="nn-h-node" style="width: 10px; height: 10px; border-radius: 50%; background-color: #64748b; transition: all 0.3s;"></div>
                <div class="nn-h-node" style="width: 10px; height: 10px; border-radius: 50%; background-color: #64748b; transition: all 0.3s;"></div>
                <div class="nn-h-node" style="width: 10px; height: 10px; border-radius: 50%; background-color: #64748b; transition: all 0.3s;"></div>
              </div>

              <!-- Output Nodes -->
              <div class="d-flex flex-column gap-2">
                <div class="nn-out-node node-o1" style="width: 12px; height: 12px; border-radius: 50%; background-color: #64748b; transition: all 0.2s;"></div>
                <div class="nn-out-node node-o2" style="width: 12px; height: 12px; border-radius: 50%; background-color: #64748b; transition: all 0.2s;"></div>
                <div class="nn-out-node node-o3" style="width: 12px; height: 12px; border-radius: 50%; background-color: #64748b; transition: all 0.2s;"></div>
                <div class="nn-out-node node-o4" style="width: 12px; height: 12px; border-radius: 50%; background-color: #64748b; transition: all 0.2s;"></div>
              </div>

              <div class="position-absolute" style="font-size:0.68rem; color:var(--text-tertiary); bottom:5px;">Capa Entrada (3) ➔ Oculta (4) ➔ Salida (4 gestos)</div>
            </div>

            <!-- Deslizadores MAV -->
            <div class="d-flex flex-column gap-2">
              <div>
                <div class="d-flex justify-content-between small">
                  <span>Amplitud MAV Canal 1 (Flexores):</span>
                  <strong class="emg-ch1-val">10 mV</strong>
                </div>
                <input type="range" min="1" max="40" value="10" class="w-100 emg-ch1-input">
              </div>

              <div>
                <div class="d-flex justify-content-between small">
                  <span>Amplitud MAV Canal 2 (Extensores):</span>
                  <strong class="emg-ch2-val">15 mV</strong>
                </div>
                <input type="range" min="1" max="40" value="15" class="w-100 emg-ch2-input">
              </div>

              <div>
                <div class="d-flex justify-content-between small">
                  <span>Amplitud MAV Canal 3 (Braquiorradial):</span>
                  <strong class="emg-ch3-val">8 mV</strong>
                </div>
                <input type="range" min="1" max="40" value="8" class="w-100 emg-ch3-input">
              </div>
            </div>

            <!-- Inferencia Bar List -->
            <div class="border-top pt-2 d-flex flex-column gap-2 small">
              <span class="text-secondary fw-bold" style="font-size:0.75rem;">Inferencia del Clasificador (Softmax):</span>
              
              <!-- Rest -->
              <div>
                <div class="d-flex justify-content-between mb-1" style="font-size:0.78rem;">
                  <span>🛌 Reposo (Rest):</span>
                  <strong class="prob-rest-val">0%</strong>
                </div>
                <div style="height: 6px; background-color: var(--border-color); border-radius: var(--radius-full); overflow: hidden;">
                  <div class="bar-rest" style="height:100%; background-color:#10b981; width:0%; transition: width 0.2s;"></div>
                </div>
              </div>

              <!-- Fist -->
              <div>
                <div class="d-flex justify-content-between mb-1" style="font-size:0.78rem;">
                  <span>✊ Puno Cerrado (Fist):</span>
                  <strong class="prob-fist-val">0%</strong>
                </div>
                <div style="height: 6px; background-color: var(--border-color); border-radius: var(--radius-full); overflow: hidden;">
                  <div class="bar-fist" style="height:100%; background-color:#ef4444; width:0%; transition: width 0.2s;"></div>
                </div>
              </div>

              <!-- Open -->
              <div>
                <div class="d-flex justify-content-between mb-1" style="font-size:0.78rem;">
                  <span>✋ Mano Abierta (Open):</span>
                  <strong class="prob-open-val">0%</strong>
                </div>
                <div style="height: 6px; background-color: var(--border-color); border-radius: var(--radius-full); overflow: hidden;">
                  <div class="bar-open" style="height:100%; background-color:#f59e0b; width:0%; transition: width 0.2s;"></div>
                </div>
              </div>

              <!-- Wave -->
              <div>
                <div class="d-flex justify-content-between mb-1" style="font-size:0.78rem;">
                  <span>👋 Saludo (Wave):</span>
                  <strong class="prob-wave-val">0%</strong>
                </div>
                <div style="height: 6px; background-color: var(--border-color); border-radius: var(--radius-full); overflow: hidden;">
                  <div class="bar-wave" style="height:100%; background-color:#a855f7; width:0%; transition: width 0.2s;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // 1. Logica de Diseñador DSP
  const dspCanvas = container.querySelector('.dsp-canvas');
  const dspCtx = dspCanvas.getContext('2d');
  
  const approxButtons = container.querySelectorAll('.filter-approx-btn');
  const fcInput = container.querySelector('.dsp-fc-input');
  const orderInput = container.querySelector('.dsp-order-input');

  const fcVal = container.querySelector('.dsp-fc-val');
  const orderVal = container.querySelector('.dsp-order-val');

  let filterType = 'butterworth';
  let cutoffFreq = 100;
  let filterOrder = 2;

  const drawBode = () => {
    dspCtx.clearRect(0, 0, dspCanvas.width, dspCanvas.height);
    
    // Grid
    dspCtx.fillStyle = '#060e14';
    dspCtx.fillRect(0, 0, dspCanvas.width, dspCanvas.height);

    const padLeft = 45;
    const padRight = 15;
    const padTop = 20;
    const padBottom = 35;
    const plotW = dspCanvas.width - padLeft - padRight;
    const plotH = dspCanvas.height - padTop - padBottom;

    // Ejes
    dspCtx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    dspCtx.lineWidth = 1;
    dspCtx.beginPath();
    dspCtx.moveTo(padLeft, padTop);
    dspCtx.lineTo(padLeft, dspCanvas.height - padBottom);
    dspCtx.lineTo(dspCanvas.width - padRight, dspCanvas.height - padBottom);
    dspCtx.stroke();

    // Grilla horizontal de decibelios
    dspCtx.font = '9px Inter, sans-serif';
    dspCtx.fillStyle = 'rgba(255,255,255,0.4)';
    for (let db = 0; db >= -80; db -= 20) {
      const yVal = padTop + (Math.abs(db) / 80) * plotH;
      dspCtx.beginPath();
      dspCtx.strokeStyle = 'rgba(255,255,255,0.06)';
      dspCtx.moveTo(padLeft, yVal);
      dspCtx.lineTo(dspCanvas.width - padRight, yVal);
      dspCtx.stroke();
      dspCtx.fillText(`${db} dB`, 8, yVal + 3);
    }

    // Grilla vertical de frecuencias
    const maxFreq = 500;
    for (let f = 100; f <= maxFreq; f += 100) {
      const xVal = padLeft + (f / maxFreq) * plotW;
      dspCtx.beginPath();
      dspCtx.strokeStyle = 'rgba(255,255,255,0.06)';
      dspCtx.moveTo(xVal, padTop);
      dspCtx.lineTo(xVal, dspCanvas.height - padBottom);
      dspCtx.stroke();
      dspCtx.fillText(`${f} Hz`, xVal - 13, dspCanvas.height - padBottom + 14);
    }

    // Graficar Magnitud Analitica
    dspCtx.beginPath();
    dspCtx.strokeStyle = '#c5a059';
    dspCtx.lineWidth = 2.5;

    for (let x = 0; x <= plotW; x++) {
      const freq = (x / plotW) * maxFreq;
      if (freq === 0) continue;

      let mag = 1;
      if (filterType === 'butterworth') {
        mag = 1 / Math.sqrt(1 + Math.pow(freq / cutoffFreq, 2 * filterOrder));
      } else if (filterType === 'chebyshev') {
        if (freq < cutoffFreq) {
          mag = 1 - 0.08 * Math.abs(Math.sin((freq / cutoffFreq) * Math.PI * filterOrder));
        } else {
          mag = 1 / Math.sqrt(1 + Math.pow(freq / (cutoffFreq * 0.95), 2.8 * filterOrder));
        }
      } else {
        // Bessel
        mag = 1 / Math.sqrt(1 + Math.pow(freq / (cutoffFreq * 1.1), 1.5 * filterOrder));
      }

      let db = 20 * Math.log10(mag);
      if (db < -80) db = -80;

      const xPixel = padLeft + x;
      const yPixel = padTop + (Math.abs(db) / 80) * plotH;

      if (x === 0) dspCtx.moveTo(xPixel, yPixel);
      else dspCtx.lineTo(xPixel, yPixel);
    }
    dspCtx.stroke();

    // Corte vertical en Fc
    const xCut = padLeft + (cutoffFreq / maxFreq) * plotW;
    dspCtx.strokeStyle = 'rgba(239, 68, 68, 0.5)';
    dspCtx.lineWidth = 1.5;
    dspCtx.beginPath();
    dspCtx.setLineDash([4, 4]);
    dspCtx.moveTo(xCut, padTop);
    dspCtx.lineTo(xCut, dspCanvas.height - padBottom);
    dspCtx.stroke();
    dspCtx.setLineDash([]);
    dspCtx.fillStyle = '#ef4444';
    dspCtx.fillText('Fc', xCut - 5, padTop - 5);
  };

  const resizeBodeCanvas = () => {
    dspCanvas.width = dspCanvas.parentElement.clientWidth;
    dspCanvas.height = 240;
    drawBode();
  };
  resizeBodeCanvas();
  window.addEventListener('resize', resizeBodeCanvas);

  fcInput.addEventListener('input', (e) => {
    cutoffFreq = Number(e.target.value);
    fcVal.textContent = `${cutoffFreq} Hz`;
    drawBode();
  });
  orderInput.addEventListener('input', (e) => {
    filterOrder = Number(e.target.value);
    orderVal.textContent = `Orden ${filterOrder} (${filterOrder * -20} dB/decada)`;
    drawBode();
  });
  approxButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      approxButtons.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      filterType = e.currentTarget.getAttribute('data-approx');
      drawBode();
    });
  });

  // 2. Logica de Clasificador TinyML
  const ch1Input = container.querySelector('.emg-ch1-input');
  const ch2Input = container.querySelector('.emg-ch2-input');
  const ch3Input = container.querySelector('.emg-ch3-input');

  const ch1Val = container.querySelector('.emg-ch1-val');
  const ch2Val = container.querySelector('.emg-ch2-val');
  const ch3Val = container.querySelector('.emg-ch3-val');

  const inNode1 = container.querySelector('.node-ch1');
  const inNode2 = container.querySelector('.node-ch2');
  const inNode3 = container.querySelector('.node-ch3');

  const hNodes = container.querySelectorAll('.nn-h-node');

  const outNode1 = container.querySelector('.node-o1');
  const outNode2 = container.querySelector('.node-o2');
  const outNode3 = container.querySelector('.node-o3');
  const outNode4 = container.querySelector('.node-o4');

  const pRestText = container.querySelector('.prob-rest-val');
  const pFistText = container.querySelector('.prob-fist-val');
  const pOpenText = container.querySelector('.prob-open-val');
  const pWaveText = container.querySelector('.prob-wave-val');

  const barRest = container.querySelector('.bar-rest');
  const barFist = container.querySelector('.bar-fist');
  const barOpen = container.querySelector('.bar-open');
  const barWave = container.querySelector('.bar-wave');

  const updateTinyML = () => {
    const ch1 = Number(ch1Input.value);
    const ch2 = Number(ch2Input.value);
    const ch3 = Number(ch3Input.value);

    ch1Val.textContent = `${ch1} mV`;
    ch2Val.textContent = `${ch2} mV`;
    ch3Val.textContent = `${ch3} mV`;

    // Glow de nodos de entrada
    inNode1.style.backgroundColor = ch1 > 5 ? '#38bdf8' : '#64748b';
    inNode1.style.boxShadow = ch1 > 5 ? '0 0 10px #38bdf8' : 'none';

    inNode2.style.backgroundColor = ch2 > 5 ? '#38bdf8' : '#64748b';
    inNode2.style.boxShadow = ch2 > 5 ? '0 0 10px #38bdf8' : 'none';

    inNode3.style.backgroundColor = ch3 > 5 ? '#38bdf8' : '#64748b';
    inNode3.style.boxShadow = ch3 > 5 ? '0 0 10px #38bdf8' : 'none';

    const sumVal = ch1 + ch2 + ch3;
    const isNNActive = sumVal > 12;
    hNodes.forEach(n => {
      n.style.backgroundColor = isNNActive ? '#c5a059' : '#64748b';
      n.style.boxShadow = isNNActive ? '0 0 6px #c5a059' : 'none';
    });

    // Inferencia Softmax basica
    let pRest = 1.0, pFist = 0.0, pOpen = 0.0, pWave = 0.0;

    if (sumVal > 9) {
      const rRest = Math.max(0, 20 - sumVal * 0.5);
      const rFist = ch1 * 2.5;
      const rOpen = ch2 * 2.5;
      const rWave = ch3 * 2.5;

      const sumRaw = rRest + rFist + rOpen + rWave;
      if (sumRaw > 0) {
        pRest = rRest / sumRaw;
        pFist = rFist / sumRaw;
        pOpen = rOpen / sumRaw;
        pWave = rWave / sumRaw;
      }
    }

    // Actualizar barras
    const fmt = (p) => `${Math.round(p * 100)}%`;
    pRestText.textContent = fmt(pRest);
    pFistText.textContent = fmt(pFist);
    pOpenText.textContent = fmt(pOpen);
    pWaveText.textContent = fmt(pWave);

    barRest.style.width = fmt(pRest);
    barFist.style.width = fmt(pFist);
    barOpen.style.width = fmt(pOpen);
    barWave.style.width = fmt(pWave);

    // Glow de nodos de salida
    outNode1.style.backgroundColor = pRest > 0.6 ? '#10b981' : '#64748b';
    outNode1.style.boxShadow = pRest > 0.6 ? '0 0 8px #10b981' : 'none';

    outNode2.style.backgroundColor = pFist > 0.6 ? '#ef4444' : '#64748b';
    outNode2.style.boxShadow = pFist > 0.6 ? '0 0 8px #ef4444' : 'none';

    outNode3.style.backgroundColor = pOpen > 0.6 ? '#f59e0b' : '#64748b';
    outNode3.style.boxShadow = pOpen > 0.6 ? '0 0 8px #f59e0b' : 'none';

    outNode4.style.backgroundColor = pWave > 0.6 ? '#a855f7' : '#64748b';
    outNode4.style.boxShadow = pWave > 0.6 ? '0 0 8px #a855f7' : 'none';

    // Desbloquear logro de control mioelectrico si pasa umbral
    if (pFist > 0.7 || pOpen > 0.7 || pWave > 0.7) {
      localStorage.setItem('achievement_badge_emg-prosthetic', 'true');
    }
  };

  ch1Input.addEventListener('input', updateTinyML);
  ch2Input.addEventListener('input', updateTinyML);
  ch3Input.addEventListener('input', updateTinyML);

  // Inicializar inferencia y dibujo
  updateTinyML();
  drawBode();

  return () => {
    window.removeEventListener('resize', resizeBodeCanvas);
  };
}

/**
 * Renderiza el tablero de Logros e Insignias del estudiante con la opcion de imprimir el certificado.
 * 
 * @param {HTMLElement} container - Contenedor principal de la vista.
 * @param {number} xp - Puntos de experiencia globales.
 */
export function renderAchievements(container, xp) {
  const badgesList = [
    { id: 'first-beat', title: 'Primer Latido', description: 'Ingresa al simulador ECG por primera vez.', icon: '🫀', xpRequired: 100 },
    { id: 'notch-master', title: 'Mago de las Frecuencias', description: 'Activa con exito el filtro Notch para remover ruido de 60Hz.', icon: '⚡', xpRequired: 300 },
    { id: 'emg-prosthetic', title: 'Control Mioelectrico', description: 'Activa la envolvente EMG por encima del 50% de contraccion.', icon: '🦾', xpRequired: 600 },
    { id: 'digital-biomed', title: 'Medico Digital', description: 'Completa al menos 3 autoevaluaciones del curso.', icon: '🎓', xpRequired: 1000 }
  ];

  // Desbloqueo de insignias por storage o por XP
  const unlockedBadges = ['first-beat'];
  
  // Escanear quizzes resueltos
  let quizzesDone = 0;
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).startsWith('quiz_completed_')) {
      quizzesDone++;
    }
  }

  // Verificar triggers
  if (xp >= 300 || localStorage.getItem('achievement_badge_notch-master')) unlockedBadges.push('notch-master');
  if (xp >= 600 || localStorage.getItem('achievement_badge_emg-prosthetic')) unlockedBadges.push('emg-prosthetic');
  if (quizzesDone >= 3 || xp >= 1000) unlockedBadges.push('digital-biomed');

  // Registrar en storage las desbloqueadas por XP
  unlockedBadges.forEach(b => {
    localStorage.setItem(`achievement_badge_${b}`, 'true');
  });

  const levelName = xp < 300 ? 'Iniciado en Biomedica' : xp < 700 ? 'Acondicionador de Senales' : 'Disenador de Dispositivos Medicos';
  const isEligible = xp >= 800; // Requiere 800 XP para certificar

  container.innerHTML = `
    <div class="animate-fade-in d-flex flex-column gap-4">
      <div>
        <h1 class="h2 text-primary mb-2" style="font-family: var(--font-title);">Mis Logros y Certificacion</h1>
        <p class="text-secondary">Siga su avance en bioingenieria, desbloquee insignias y genere su certificado oficial interno.</p>
      </div>

      <!-- Resumen -->
      <div class="row g-4">
        <div class="col-md-6">
          <div class="card h-100 border-start border-4 border-secondary d-flex flex-column justify-content-center py-4">
            <span class="small text-secondary fw-bold uppercase-spacing-adjust mb-1" style="font-size:0.75rem;">EXPERIENCIA TOTAL ACUMULADA</span>
            <div class="d-flex align-items-baseline gap-2">
              <span class="display-3 fw-bold text-primary" style="font-family: var(--font-title);">${xp}</span>
              <span class="fw-bold text-secondary">XP</span>
            </div>
            <div class="small text-secondary mt-2">Nivel actual: <strong>${levelName}</strong></div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card h-100 d-flex flex-column justify-content-center py-4">
            <span class="small text-secondary fw-bold uppercase-spacing-adjust mb-2" style="font-size:0.75rem;">INSIGNIAS DESBLOQUEADAS</span>
            <div class="d-flex gap-3" style="font-size: 2.2rem;">
              ${badgesList.map(b => {
                const isUnlocked = unlockedBadges.includes(b.id);
                return `<span title="${b.title}: ${b.description}" style="filter: ${isUnlocked ? 'none' : 'grayscale(1)'}; opacity: ${isUnlocked ? '1' : '0.22'}; cursor: help;">${b.icon}</span>`;
              }).join('')}
            </div>
            <div class="small text-secondary mt-2">Ha desbloqueado <strong>${unlockedBadges.length} de ${badgesList.length}</strong> insignias del campus.</div>
          </div>
        </div>
      </div>

      <!-- Detalle Insignias -->
      <div>
        <h2 class="h5 text-primary mb-3" style="font-family: var(--font-title);">Detalle de Insignias</h2>
        <div class="row g-3">
          ${badgesList.map(b => {
            const isUnlocked = unlockedBadges.includes(b.id);
            return `
              <div class="col-md-3 col-sm-6">
                <div class="card text-center p-3 h-100 d-flex flex-column align-items-center gap-2" style="border-color: ${isUnlocked ? 'var(--color-secondary)' : 'var(--border-color)'}; background-color: ${isUnlocked ? 'var(--bg-secondary)' : 'rgba(0,0,0,0.015)'}; opacity: ${isUnlocked ? '1' : '0.75'};">
                  <div style="font-size: 2.8rem;">${b.icon}</div>
                  <h4 class="h6 fw-bold m-0" style="color: var(--text-primary);">${b.title}</h4>
                  <p class="text-secondary m-0" style="font-size:0.75rem; line-height:1.4;">${b.description}</p>
                  <div class="badge mt-2 ${isUnlocked ? 'badge-success' : 'badge-danger'}">
                    ${isUnlocked ? 'Desbloqueado' : `Requiere ${b.xpRequired} XP`}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Certificado -->
      <div class="card p-4 d-flex flex-column gap-3 mt-2">
        <h2 class="h4 text-primary m-0" style="font-family: var(--font-title);">🎓 Generacion de Certificado del Curso</h2>
        
        ${!isEligible ? `
          <div class="p-3 rounded border-start border-4 border-danger small text-secondary" style="background-color: rgba(239, 68, 68, 0.05);">
            ⚠️ <strong>Requisito no cumplido:</strong> Necesita acumular al menos <strong>800 XP</strong> completando autoevaluaciones y actividades del curso para poder generar su certificado (Tiene ${xp} XP).
          </div>
        ` : `
          <div class="d-flex flex-column gap-3">
            <p class="small text-secondary m-0">¡Felicitaciones! Cumple con los requisitos de progreso minimo. Ingrese sus datos para emitir su diploma digital imprimible.</p>
            
            <form class="row g-3 align-items-end cert-form">
              <div class="col-md-5">
                <label class="form-label small fw-bold">Nombre Completo:</label>
                <input type="text" class="form-control form-control-sm cert-name-input" placeholder="Ej. Pedro Antonio Sarmiento" required style="background-color: var(--bg-tertiary); color: var(--text-primary); border-color: var(--border-color);">
              </div>
              <div class="col-md-4">
                <label class="form-label small fw-bold">Codigo Universitario:</label>
                <input type="text" class="form-control form-control-sm cert-code-input" placeholder="Ej. 202610542" required style="background-color: var(--bg-tertiary); color: var(--text-primary); border-color: var(--border-color);">
              </div>
              <div class="col-md-3">
                <button type="submit" class="btn btn-sm btn-secondary w-100" style="padding: 0.55rem;">Emitir Diploma</button>
              </div>
            </form>

            <!-- Diploma a renderizar -->
            <div class="diploma-view-box d-none"></div>
          </div>
        `}
      </div>
    </div>
  `;

  if (isEligible) {
    const form = container.querySelector('.cert-form');
    const nameInput = container.querySelector('.cert-name-input');
    const codeInput = container.querySelector('.cert-code-input');
    const diplomaBox = container.querySelector('.diploma-view-box');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const sName = nameInput.value;
      const sCode = codeInput.value;

      diplomaBox.classList.remove('d-none');
      diplomaBox.innerHTML = `
        <div class="printable-certificate animate-fade-in text-center mx-auto" style="margin-top: 2rem; padding: 2.5rem; background-color: #fff; color: #002244; border: 10px double #c5a059; border-radius: var(--radius-md); box-shadow: var(--shadow-lg); max-width: 800px; font-family: Georgia, serif;">
          <div style="font-family: var(--font-title); font-weight: 850; font-size: 1.3rem; color: #003b71; letter-spacing: 0.05em;">
            PONTIFICIA UNIVERSIDAD JAVERIANA
          </div>
          <div style="font-size: 0.9rem; color: #c5a059; font-weight: bold; letter-spacing: 0.15em; margin-top: 0.25rem;">
            DEPARTAMENTO DE INGENIERIA BIOMEDICA
          </div>
          
          <div style="font-size: 1.1rem; margin: 2rem 0 1rem 0; font-style: italic; color: #555;">
            Certifica a:
          </div>
          
          <h2 style="font-size: 2.2rem; color: #002244; border-bottom: 2px solid #e9ecef; display: inline-block; padding-bottom: 0.25rem; margin-bottom: 1rem; font-style: normal; font-family: var(--font-title); font-weight: 700;">
            ${sName}
          </h2>
          
          <p style="font-size: 1.05rem; line-height: 1.8; max-width: 600px; margin: 0 auto; color: #333;">
            Por haber aprobado satisfactoriamente el curso virtual e inmersivo de 
            <br />
            <strong style="color: #003b71; font-size: 1.25rem;">Bioinstrumentacion Medica Avanzada</strong>
            <br />
            con un registro estudiantil de codigo <strong>${sCode}</strong> y habiendo culminado los modulos correspondientes a biopotenciales, transductores y filtrado dinamico.
          </p>

          <div class="d-flex justify-content-around align-items-end" style="margin-top: 3.5rem;">
            <div class="d-flex flex-column align-items-center">
              <div style="font-size: 1.2rem; border-bottom: 1px solid #777; width: 160px; padding-bottom: 0.25rem; color: #003b71; font-family: 'Brush Script MT', cursive, serif;">
                Dr. Pedro Antonio
              </div>
              <div style="font-size: 0.72rem; color: #777; margin-top: 0.25rem;">Profesor Coordinador del Curso</div>
            </div>
            <div class="d-flex flex-column align-items-center">
              <div style="border-bottom: 1px solid #777; width: 160px; padding-bottom: 0.25rem; color: #003b71; font-size: 0.85rem; font-weight: bold;">
                ${new Date().toLocaleDateString('es-CO')}
              </div>
              <div style="font-size: 0.72rem; color: #777; margin-top: 0.25rem;">Fecha de Emision</div>
            </div>
          </div>
          
          <button class="btn btn-primary print-cert-btn" style="margin-top: 2.5rem; font-size:0.85rem; padding:0.5rem 1.2rem;">🖨️ Imprimir / Guardar PDF</button>
        </div>
      `;

      diplomaBox.querySelector('.print-cert-btn').addEventListener('click', () => {
        window.print();
      });
    });
  }
}

/**
 * Inicializa la actividad interactiva del Generador de Funciones AFG1022.
 * Administra las 3 fases: emparejamiento (hotspots), trivia (aplicaciones) y reto de configuración virtual.
 * 
 * @param {Function} onAwardXp - Callback para otorgar puntos de experiencia (XP) al estudiante.
 */
function initGeneratorActivity(onAwardXp) {
  // 1. Inyectar Estilos Específicos de la Actividad
  const styleId = 'afg1022-activity-styles';
  if (!document.getElementById(styleId)) {
    const styleEl = document.createElement('style');
    styleEl.id = styleId;
    styleEl.innerHTML = `
      .draggable-card {
        background-color: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-sm);
        padding: 0.5rem 0.75rem;
        font-size: 0.78rem;
        font-weight: 600;
        color: var(--text-primary);
        cursor: grab;
        user-select: none;
        transition: all 0.2s ease;
        box-shadow: 0 2px 4px rgba(0,0,0,0.15);
      }
      .draggable-card:hover {
        background-color: var(--bg-tertiary);
        border-color: var(--primary-color);
        box-shadow: 0 4px 8px rgba(99, 102, 241, 0.2);
        transform: translateY(-1px);
      }
      .draggable-card:active {
        cursor: grabbing;
      }
      .draggable-card.dragging {
        opacity: 0.4;
        background-color: rgba(99, 102, 241, 0.1);
        border-color: var(--primary-color);
      }
      .draggable-card.selected-for-match {
        background-color: rgba(99, 102, 241, 0.2) !important;
        border-color: var(--primary-color) !important;
        box-shadow: 0 0 10px rgba(99, 102, 241, 0.4);
      }
      .draggable-card.matched {
        opacity: 0.5;
        cursor: default;
        pointer-events: none;
        background-color: rgba(16, 185, 129, 0.05) !important;
        border-color: rgba(16, 185, 129, 0.3) !important;
        color: #10b981 !important;
      }
      
      .hotspot-overlay {
        position: absolute;
        box-sizing: border-box;
        border-radius: 4px;
        border: 2px dashed rgba(255, 255, 255, 0.25);
        background-color: rgba(255, 255, 255, 0.02);
        transition: all 0.25s ease;
        cursor: pointer;
        z-index: 5;
      }
      .hotspot-overlay:hover, .hotspot-overlay.drag-hover {
        border-color: var(--primary-color);
        background-color: rgba(99, 102, 241, 0.15);
        box-shadow: 0 0 12px rgba(99, 102, 241, 0.4);
      }
      .hotspot-overlay.matched {
        border-color: #10b981 !important;
        background-color: rgba(16, 185, 129, 0.15) !important;
        cursor: default;
      }
      .hotspot-overlay.pulsing-hint {
        animation: pulse-hint-anim 1.5s infinite alternate;
      }
      @keyframes pulse-hint-anim {
        from {
          border-color: rgba(245, 158, 11, 0.4);
          background-color: rgba(245, 158, 11, 0.05);
        }
        to {
          border-color: #f59e0b;
          background-color: rgba(245, 158, 11, 0.25);
          box-shadow: 0 0 15px rgba(245, 158, 11, 0.4);
        }
      }
      .hotspot-overlay.highlight-blue {
        animation: pulse-blue-anim 1.5s infinite alternate;
        pointer-events: none;
      }
      @keyframes pulse-blue-anim {
        from {
          border-color: rgba(59, 130, 246, 0.4);
          background-color: rgba(59, 130, 246, 0.05);
        }
        to {
          border-color: #3b82f6;
          background-color: rgba(59, 130, 246, 0.25);
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
        }
      }
      .hotspot-overlay.active-interactive {
        border-color: #f59e0b !important;
        background-color: rgba(245, 158, 11, 0.05);
        cursor: pointer;
        animation: pulse-orange-anim 1.5s infinite alternate;
        z-index: 15;
      }
      @keyframes pulse-orange-anim {
        from { border-color: rgba(245, 158, 11, 0.4); }
        to { border-color: #f59e0b; box-shadow: 0 0 10px rgba(245, 158, 11, 0.4); }
      }

      .hotspot-indicator {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: rgba(15, 23, 42, 0.85);
        color: var(--text-primary);
        border: 1px solid rgba(255,255,255,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.65rem;
        font-weight: bold;
        pointer-events: none;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      }
      .matched .hotspot-indicator {
        background-color: #10b981;
        color: white;
        border-color: #10b981;
      }
      
      .trivia-option-btn {
        text-align: left;
        width: 100%;
        padding: 0.65rem 0.85rem;
        font-size: 0.8rem;
        background-color: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-sm);
        color: var(--text-primary);
        transition: all 0.2s ease;
        cursor: pointer;
      }
      .trivia-option-btn:hover:not(:disabled) {
        background-color: var(--bg-tertiary);
        border-color: var(--primary-color);
      }
      .trivia-option-btn.correct {
        background-color: rgba(16, 185, 129, 0.15) !important;
        border-color: #10b981 !important;
        color: #10b981 !important;
        font-weight: bold;
      }
      .trivia-option-btn.incorrect {
        background-color: rgba(239, 68, 68, 0.15) !important;
        border-color: #ef4444 !important;
        color: #ef4444 !important;
      }
    `;
    document.head.appendChild(styleEl);
  }

  // 2. Definición de Datos de los Componentes
  const componentsList = [
    {
      id: "pantalla-lcd",
      name: "Pantalla LCD",
      description: "Pantalla a color de 3.5 pulgadas. Muestra los parámetros de amplitud, frecuencia, offset, fase y la forma de onda activa.",
      bioApp: "Crucial para previsualizar la morfología de la señal simulada antes de inyectarla.",
      coords: { top: 22, left: 9.5, width: 40.5, height: 55 },
      color: "#1651aa"
    },
    {
      id: "teclas-softkey",
      name: "Teclas Softkey",
      description: "Teclas dinámicas laterales que cambian según el menú seleccionado.",
      bioApp: "Usadas para cambiar escalas de voltios a milivoltios al emular bioseñales.",
      coords: { top: 27, left: 51, width: 4, height: 42 },
      color: "#54b76a"
    },
    {
      id: "teclas-forma-onda",
      name: "Teclas de forma de onda",
      description: "Botones para ondas estándar (Sine, Square, Ramp, Pulse, Arb, Noise).",
      bioApp: "La senoidal evalúa filtros y el ruido emula interferencia electromagnética.",
      coords: { top: 81, left: 16, width: 34, height: 9 },
      color: "#f59e0b"
    },
    {
      id: "encendido",
      name: "Encendido",
      description: "Botón principal (POWER) para encender o apagar.",
      bioApp: "Regla de oro: siempre apaga el equipo antes de modificar circuitos.",
      coords: { top: 82.5, left: 7.5, width: 5.5, height: 9 },
      color: "#ea4858"
    },
    {
      id: "teclado-numerico",
      name: "Teclado numérico",
      description: "Permite ingresar valores numéricos exactos de frecuencia y voltaje.",
      bioApp: "Para establecer frecuencias cardíacas exactas rápidamente (ej. 1 Hz = 60 lpm).",
      coords: { top: 22.5, left: 59.5, width: 14.5, height: 33 },
      color: "#5b21b6"
    },
    {
      id: "perilla-ajuste",
      name: "Perilla de ajuste",
      description: "Dial para incrementar o decrementar valores continuamente.",
      bioApp: "Útil para buscar manualmente frecuencias de resonancia en filtros.",
      coords: { top: 23, left: 80, width: 7, height: 16.5 },
      color: "#3b82f6"
    },
    {
      id: "teclas-navegacion",
      name: "Teclas de navegación",
      description: "Desplazan el cursor para editar diferentes magnitudes del parámetro.",
      bioApp: "Para cambios sutiles en simulaciones muy específicas.",
      coords: { top: 43.5, left: 78, width: 8.5, height: 8 },
      color: "#10b981"
    },
    {
      id: "botones-funcion",
      name: "Botones de función",
      description: "Menús del sistema, configuración (Utility) y ayuda (Help).",
      bioApp: "En Utility se configura impedancia High Z para equipararla a amplificadores.",
      coords: { top: 20, left: 90.5, width: 6.5, height: 29 },
      color: "#fbbf24"
    },
    {
      id: "salida-ch1",
      name: "Salida Channel 1 (Out1)",
      description: "Conector BNC del primer canal con su botón de activación On/Off.",
      bioApp: "Punto principal de inyección de señal al circuito de acondicionamiento.",
      coords: { top: 60.5, left: 63, width: 8.5, height: 22 },
      color: "#f43f5e"
    },
    {
      id: "salida-ch2",
      name: "Salida Channel 2 (Out2)",
      description: "Conector BNC del segundo canal con su botón de activación On/Off.",
      bioApp: "Para inyectar señales complementarias en amplificadores diferenciales.",
      coords: { top: 60.5, left: 78.5, width: 8.5, height: 22 },
      color: "#8b5cf6"
    },
    {
      id: "puerto-usb",
      name: "Puerto USB",
      description: "Puerto para cargar archivos de formas de onda (.csv).",
      bioApp: "Carga datos reales como los de bases de datos biomédicas.",
      coords: { top: 78.5, left: 52, width: 3.5, height: 11.5 },
      color: "#0ea5e9"
    }
  ];

  // 3. Definición de Preguntas de la Fase 2 (Trivia)
  const triviaQuestions = [
    {
      targetId: "puerto-usb",
      question: "¿Qué función cumple el puerto USB frontal en un laboratorio de bioinstrumentación?",
      options: [
        "Cargar bases de datos de señales fisiológicas reales (como arritmias de PhysioNet) para reproducirlas como estímulos eléctricos analógicos.",
        "Alimentar computadoras o cargar teléfonos móviles en el laboratorio.",
        "Conectar un teclado o mouse externo para operar el generador.",
        "Descargar actualizaciones del firmware del osciloscopio."
      ],
      answer: 0,
      explanation: "El puerto USB frontal es crucial en bioinstrumentación para cargar archivos de datos (.csv, .txt) con bioseñales reales grabadas y reproducirlas eléctricamente a través del generador."
    },
    {
      targetId: "botones-utility",
      question: "En el menú 'Utility' puedes cambiar la impedancia de carga a 'High Z'. ¿Por qué es crucial esto al probar circuitos de acondicionamiento?",
      options: [
        "Para que el generador consuma menos corriente y no se recaliente en experimentos prolongados.",
        "Para evitar atenuaciones, ya que los amplificadores médicos tienen alta impedancia de entrada y esperan una lectura sin el divisor resistivo de 50 Î©.",
        "Para proteger el generador de posibles descargas estáticas del paciente.",
        "Para aumentar la frecuencia máxima del generador hasta 100 MHz."
      ],
      answer: 1,
      explanation: "Configurar la salida en 'High Z' (Alta Impedancia) asegura que la amplitud mostrada en la pantalla del generador coincida exactamente con la entregada a la entrada del amplificador médico."
    },
    {
      targetId: "teclas-forma-onda",
      question: "¿Cuál es el propósito principal de inyectar una señal de tipo 'Ruido' (Noise) en una etapa de amplificación de ECG?",
      options: [
        "Calibrar la velocidad de barrido del osciloscopio en el eje horizontal.",
        "Comprobar si el amplificador de instrumentación se quema con picos altos de tensión.",
        "Verificar si los electrodos Ag/AgCl están bien conectados.",
        "Probar la capacidad del filtro del amplificador para rechazar interferencias y recuperar la bioseñal."
      ],
      answer: 3,
      explanation: "El ruido permite emular el entorno electromagnético hostil de un hospital y verificar la efectividad de los filtros analógicos para restaurar señales débiles como el ECG."
    },
    {
      targetId: "seleccion-canal",
      question: "¿Para qué sirve el botón 'Both' al configurar señales de prueba para un amplificador diferencial?",
      options: [
        "Para sincronizar frecuencia, fase y amplitud en ambos canales, facilitando la evaluación del CMRR (Rechazo en Modo Común).",
        "Para duplicar el voltaje de salida máximo de un solo canal.",
        "Para encender la pantalla LCD y los botones al mismo tiempo.",
        "Para medir la corriente total que consume la protoboard."
      ],
      answer: 0,
      explanation: "Sincronizar ambos canales con 'Both' es la forma estándar de inyectar la misma señal (modo común) en los electrodos positivo y negativo de un amplificador de instrumentación para medir su CMRR."
    }
  ];

  // 4. Definición de los Pasos de la Fase 3 (Reto de Configuración)
  const challengeSteps = [
    {
      instruction: "<strong>Paso 1:</strong> Selecciona la forma de onda requerida presionando el botón físico <strong>Sine</strong> en el panel frontal.",
      targetId: "teclas-forma-onda",
      hint: "Busca la fila horizontal de botones con iconos de onda debajo de la pantalla y pulsa el botón 'Sine' (el primero).",
      action: "sine"
    },
    {
      instruction: "<strong>Paso 2:</strong> Activa la edición de Frecuencia presionando la <strong>primera tecla Softkey</strong> lateral (junto a 'Frequency' en pantalla).",
      targetId: "botones-softkey",
      hint: "Pulsa el primer botón blanco de la columna vertical al lado derecho de la pantalla LCD.",
      action: "select-freq"
    },
    {
      instruction: "<strong>Paso 3:</strong> Ingresa el valor numérico <strong>'1'</strong> utilizando el teclado numérico central.",
      targetId: "teclado-numerico",
      hint: "Presiona el botón negro '1' en la rejilla central de números.",
      action: "press-1"
    },
    {
      instruction: "<strong>Paso 4:</strong> Selecciona la unidad <strong>'kHz'</strong> presionando la primera tecla Softkey lateral.",
      targetId: "botones-softkey",
      hint: "Pulsa el primer botón Softkey vertical al lado derecho de la pantalla LCD para confirmar kHz.",
      action: "confirm-khz"
    },
    {
      instruction: "<strong>Paso 5:</strong> Activa la edición de Amplitud presionando la <strong>segunda tecla Softkey</strong> lateral (junto a 'Amplitude' en pantalla).",
      targetId: "botones-softkey",
      hint: "Pulsa el segundo botón blanco vertical de la columna lateral.",
      action: "select-amp"
    },
    {
      instruction: "<strong>Paso 6:</strong> Ingresa el valor numérico <strong>'2'</strong> utilizando el teclado numérico central.",
      targetId: "teclado-numerico",
      hint: "Presiona el botón negro '2' en la rejilla central de números.",
      action: "press-2"
    },
    {
      instruction: "<strong>Paso 7:</strong> Confirma la unidad <strong>'Vpp'</strong> presionando la primera tecla Softkey lateral.",
      targetId: "botones-softkey",
      hint: "Pulsa el primer botón Softkey vertical (que actúa como Vpp) para confirmar.",
      action: "confirm-vpp"
    },
    {
      instruction: "<strong>Paso 8:</strong> Enciende la salida del Canal 1 pulsando el botón <strong>On/Off (Out1)</strong> en la sección BNC.",
      targetId: "salidas-bnc",
      hint: "Presiona el botón On/Off con borde amarillo (Out1) justo encima del conector coaxial izquierdo.",
      action: "turn-on-ch1"
    }
  ];

  // 5. Variables de Estado de la Actividad
  let currentPhase = 1; // 1: Hotspots matching, 2: Trivia MCQ, 3: Virtual challenge
  let phaseScore = 0;
  let correctMatches = 0;
  const totalHotspots = componentsList.length;
  let selectedDraggableId = null; // Para emparejamiento por click
  let activeHintIndex = 0;
  let activeHintTimer = null;

  // Estado del generador virtual (Fase 3)
  let ch1State = 'OFF';
  let currentWave = 'None';
  let freqVal = '-------';
  let ampVal = '-------';
  let paramSelected = 'none';
  let softkeyLabels = ['', '', '', '', ''];
  let currentChallengeStep = 0;

  // Nodos DOM
  const wrapper = document.getElementById('afg1022-interactive-activity-root');
  if (!wrapper) return;

  const scoreCounter = document.getElementById('score-counter');
  const activePhaseBadge = document.getElementById('active-phase-badge');
  const activePhaseTitle = document.getElementById('active-phase-title');
  const hintButton = document.getElementById('hint-button');
  const progressBar = document.getElementById('activity-progress-bar');
  const progressPercent = document.getElementById('progress-percent');
  const cardsBank = document.getElementById('draggable-cards-bank');
  const hotspotsContainer = document.getElementById('hotspots-overlay-container');
  const leftPanel = document.getElementById('left-control-panel');
  const phase1Container = document.getElementById('phase-1-cards-container');
  const phase2Container = document.getElementById('phase-2-trivia-container');
  const phase3Container = document.getElementById('phase-3-challenge-container');
  const lcdScreen = document.getElementById('lcd-virtual-screen');

  // Nodos Modal
  const modalBackdrop = document.getElementById('info-modal-backdrop');
  const modalTitle = document.getElementById('info-modal-title');
  const modalBody = document.getElementById('info-modal-body');
  const modalCloseBtn = document.getElementById('info-modal-close-btn');
  const modalIcon = document.getElementById('info-modal-icon');

  // 6. Funciones Auxiliares
  const updateProgress = () => {
    let progress = 0;
    if (currentPhase === 1) {
      progress = Math.round((correctMatches / totalHotspots) * 40); // 0% a 40%
    } else if (currentPhase === 2) {
      progress = 40 + Math.round((phaseScore / triviaQuestions.length) * 30); // 40% a 70%
    } else if (currentPhase === 3) {
      progress = 70 + Math.round((currentChallengeStep / challengeSteps.length) * 30); // 70% a 100%
    }
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute('aria-valuenow', progress);
    progressPercent.textContent = `${progress}%`;
  };

  const showCustomModal = (title, body, isSuccess = true) => {
    modalTitle.textContent = title;
    modalBody.innerHTML = body;
    modalIcon.textContent = isSuccess ? '✅' : '❌';
    modalTitle.style.color = isSuccess ? '#10b981' : '#ef4444';
    document.getElementById('info-modal-content').style.borderColor = isSuccess ? '#10b981' : '#ef4444';
    modalBackdrop.classList.remove('d-none');
  };

  modalCloseBtn.addEventListener('click', () => {
    modalBackdrop.classList.add('d-none');
    // Si la fase 1 se completó tras cerrar este modal
    if (currentPhase === 1 && correctMatches === totalHotspots) {
      startPhase2();
    }
  });

  // 7. INICIALIZACIÓN DE FASE 1: Emparejamiento por Hotspots
  const startPhase1 = () => {
    currentPhase = 1;
    correctMatches = 0;
    phaseScore = 0;
    activePhaseBadge.textContent = 'Fase 1 de 3';
    activePhaseTitle.textContent = 'Reconocimiento por Hotspots';
    scoreCounter.textContent = '0';
    updateProgress();

    // Rellenar banco de tarjetas sin mezclar (para mantener la numeración)
    cardsBank.innerHTML = '';
    componentsList.forEach((comp, index) => {
      const card = document.createElement('div');
      card.className = 'draggable-card d-flex align-items-center bg-white border shadow-sm p-2 mb-1';
      card.draggable = true;
      card.id = `card-${comp.id}`;
      card.dataset.compId = comp.id;
      card.style.borderRadius = '6px';
      card.style.cursor = 'grab';
      card.style.transition = 'transform 0.2s, box-shadow 0.2s';
      card.style.borderColor = '#e5e7eb';
      
      card.innerHTML = `
        <div class="rounded-circle d-flex justify-content-center align-items-center text-white me-2 shadow-sm" style="width: 20px; height: 20px; font-size: 0.7rem; font-weight: bold; background-color: ${comp.color}; flex-shrink: 0;">
          ${index + 1}
        </div>
        <div class="fw-bold flex-grow-1" style="font-size: 0.75rem; color: var(--text-primary) !important; line-height: 1;">
          ${comp.name}
        </div>
        <div class="text-muted opacity-50 d-flex flex-wrap align-items-center justify-content-center" style="width: 10px; height: 15px; gap: 2px;">
          <div style="width: 3px; height: 3px; border-radius: 50%; background: currentColor;"></div>
          <div style="width: 3px; height: 3px; border-radius: 50%; background: currentColor;"></div>
          <div style="width: 3px; height: 3px; border-radius: 50%; background: currentColor;"></div>
          <div style="width: 3px; height: 3px; border-radius: 50%; background: currentColor;"></div>
          <div style="width: 3px; height: 3px; border-radius: 50%; background: currentColor;"></div>
          <div style="width: 3px; height: 3px; border-radius: 50%; background: currentColor;"></div>
        </div>
      `;

      // Eventos Drag & Drop
      card.addEventListener('dragstart', (e) => {
        card.classList.add('dragging');
        card.style.opacity = '0.5';
        e.dataTransfer.setData('text/plain', comp.id);
      });
      card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
        card.style.opacity = '1';
      });

      // Evento Click para móviles/táctil alternativo
      card.addEventListener('click', () => {
        document.querySelectorAll('.draggable-card').forEach(c => {
          c.classList.remove('selected-for-match');
          c.style.transform = 'scale(1)';
          c.style.boxShadow = 'none';
        });
        if (selectedDraggableId === comp.id) {
          selectedDraggableId = null;
        } else {
          selectedDraggableId = comp.id;
          card.classList.add('selected-for-match');
          card.style.transform = 'scale(1.02)';
          card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        }
      });

      cardsBank.appendChild(card);
    });

    // Rellenar Hotspots sobre la imagen
    hotspotsContainer.innerHTML = '';
    componentsList.forEach((comp, index) => {
      const hotspot = document.createElement('div');
      hotspot.className = 'hotspot-overlay';
      hotspot.id = `hotspot-${comp.id}`;
      hotspot.style.top = `${comp.coords.top}%`;
      hotspot.style.left = `${comp.coords.left}%`;
      hotspot.style.width = `${comp.coords.width}%`;
      hotspot.style.height = `${comp.coords.height}%`;
      hotspot.style.position = 'absolute';
      hotspot.style.border = `2px dashed rgba(255, 255, 255, 0.45)`;
      hotspot.style.borderRadius = '8px';
      hotspot.style.backgroundColor = 'rgba(255,255,255,0.0)';
      hotspot.style.transition = 'all 0.2s';
      hotspot.style.boxSizing = 'border-box';
      hotspot.style.cursor = 'pointer';

      const indicator = document.createElement('div');
      indicator.className = 'hotspot-indicator rounded-circle d-flex justify-content-center align-items-center text-white shadow-sm';
      indicator.innerHTML = `?`;
      indicator.style.position = 'absolute';
      indicator.style.width = '24px';
      indicator.style.height = '24px';
      indicator.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
      indicator.style.backdropFilter = 'blur(2px)';
      indicator.style.color = '#ffffff';
      indicator.style.fontWeight = 'bold';
      indicator.style.fontSize = '0.85rem';
      indicator.style.top = '50%';
      indicator.style.left = '50%';
      indicator.style.transform = 'translate(-50%, -50%)';
      indicator.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
      
      hotspot.appendChild(indicator);

      // Eventos Drag
      hotspot.addEventListener('dragover', (e) => {
        e.preventDefault();
        hotspot.style.backgroundColor = 'rgba(255,255,255,0.25)';
        hotspot.style.transform = 'scale(1.02)';
      });
      hotspot.addEventListener('dragleave', () => {
        hotspot.style.backgroundColor = 'rgba(255,255,255,0.0)';
        hotspot.style.transform = 'scale(1)';
      });
      hotspot.addEventListener('drop', (e) => {
        e.preventDefault();
        hotspot.style.backgroundColor = 'rgba(255,255,255,0.0)';
        hotspot.style.transform = 'scale(1)';
        const droppedId = e.dataTransfer.getData('text/plain');
        checkMatch(droppedId, comp.id);
      });

      // Evento Click
      hotspot.addEventListener('click', () => {
        if (selectedDraggableId) {
          checkMatch(selectedDraggableId, comp.id);
          selectedDraggableId = null;
          document.querySelectorAll('.draggable-card').forEach(c => {
            c.classList.remove('selected-for-match');
            c.style.transform = 'scale(1)';
            c.style.boxShadow = 'none';
          });
        } else {
          showTempHintFor(comp);
        }
      });

      hotspotsContainer.appendChild(hotspot);
    });
  };

  const showTempHintFor = (comp) => {
    const el = document.getElementById(`hotspot-${comp.id}`);
    if (el) {
      el.classList.add('pulsing-hint');
      setTimeout(() => el.classList.remove('pulsing-hint'), 2000);
    }
  };

  const checkMatch = (cardId, hotspotId) => {
    if (cardId === hotspotId) {
      correctMatches++;
      scoreCounter.textContent = correctMatches;
      updateProgress();

      // Fijar tarjeta y hotspot
      const cardEl = document.getElementById(`card-${cardId}`);
      if (cardEl) {
        cardEl.classList.add('matched');
        cardEl.draggable = false;
        cardEl.style.opacity = '0.6';
      }

      const compData = componentsList.find(c => c.id === cardId);
      const hotspotEl = document.getElementById(`hotspot-${hotspotId}`);
      if (hotspotEl) {
        hotspotEl.classList.add('matched');
        hotspotEl.style.border = `2px solid ${compData.color}`;
        hotspotEl.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        const indicator = hotspotEl.querySelector('.hotspot-indicator');
        indicator.innerHTML = `✓`;
        indicator.style.backgroundColor = compData.color;
        indicator.style.backdropFilter = 'none';
      }

      // Buscar datos de la descripción
      const modalBodyText = `
        <p class="mb-3"><strong>Función Técnica:</strong><br>${compData.description}</p>
        <div class="p-2.5 rounded bg-indigo-dark-5 border border-indigo-light-1" style="background-color: rgba(99, 102, 241, 0.08); border: 1px solid rgba(99, 102, 241, 0.2); padding: 10px; border-radius: var(--radius-sm);">
          <strong class="text-primary small" style="color: #60a5fa;">💡 Aplicación en Bioinstrumentación:</strong>
          <p class="m-0 mt-1 small" style="font-size: 0.78rem; line-height: 1.4;">${compData.bioApp}</p>
        </div>
      `;
      showCustomModal(compData.name, modalBodyText, true);
    } else {
      // Incorrecto
      const cardEl = document.getElementById(`card-${cardId}`);
      if (cardEl) {
        cardEl.style.transform = 'translateX(10px)';
        cardEl.style.borderColor = '#ef4444';
        setTimeout(() => {
          cardEl.style.transform = 'none';
          cardEl.style.borderColor = 'var(--border-color)';
        }, 300);
      }
    }
  };

  // Pistas de Fase 1
  hintButton.addEventListener('click', () => {
    if (currentPhase === 1) {
      // Encontrar primer hotspot no completado
      const nextUnmatched = componentsList.find(c => {
        const hs = document.getElementById(`hotspot-${c.id}`);
        return hs && !hs.classList.contains('matched');
      });
      if (nextUnmatched) {
        // Resaltar hotspot correspondiente
        const hsEl = document.getElementById(`hotspot-${nextUnmatched.id}`);
        if (hsEl) {
          hsEl.classList.add('pulsing-hint');
          setTimeout(() => hsEl.classList.remove('pulsing-hint'), 3000);
          showCustomModal("Pista del Instructor", `<p class="m-0">${nextUnmatched.hint}</p>`, true);
        }
      }
    } else if (currentPhase === 2) {
      const q = triviaQuestions[phaseScore];
      showCustomModal("Ayuda de la Pregunta", `<p class="m-0">${q.explanation}</p>`, true);
    } else if (currentPhase === 3) {
      const step = challengeSteps[currentChallengeStep];
      const hsEl = document.getElementById(`hotspot-${step.targetId}`);
      if (hsEl) {
        hsEl.classList.add('pulsing-hint');
        setTimeout(() => hsEl.classList.remove('pulsing-hint'), 3000);
      }
      showCustomModal("Ayuda del Desafío", `<p class="m-0">${step.hint}</p>`, true);
    }
  });

  // 8. INICIALIZACIÓN DE FASE 2: Trivia de Aplicaciones
  const startPhase2 = () => {
    currentPhase = 2;
    phaseScore = 0;
    activePhaseBadge.textContent = 'Fase 2 de 3';
    activePhaseTitle.textContent = 'Trivia de Aplicaciones Clínicas';
    scoreCounter.textContent = '0';
    updateProgress();

    phase1Container.classList.add('d-none');
    phase2Container.classList.remove('d-none');
    phase3Container.classList.add('d-none');

    // Desactivar hotspots como marcadores de Fase 1 y limpiar resaltados
    document.querySelectorAll('.hotspot-overlay').forEach(el => {
      el.className = 'hotspot-overlay'; // Remueve matched
      el.innerHTML = ''; // Remueve indicadores
    });

    renderTriviaQuestion();
  };

  const renderTriviaQuestion = () => {
    if (phaseScore >= triviaQuestions.length) {
      showCustomModal("Fase 2 Completada", "<p>¡Excelente trabajo teórico! Has respondido a todos los retos de aplicación de instrumentación médica. Procedamos a la Fase 3 del entrenamiento práctico.</p>", true);
      startPhase3();
      return;
    }

    const q = triviaQuestions[phaseScore];
    
    // Resaltar hotspot objetivo en azul
    document.querySelectorAll('.hotspot-overlay').forEach(el => el.classList.remove('highlight-blue'));
    const targetHs = document.getElementById(`hotspot-${q.targetId}`);
    if (targetHs) {
      targetHs.classList.add('highlight-blue');
    }

    phase2Container.innerHTML = `
      <div class="d-flex flex-column gap-3">
        <div class="badge bg-primary text-light align-self-start" style="font-size:0.7rem; padding: 4px 8px;">Pregunta ${phaseScore + 1} de ${triviaQuestions.length}</div>
        <h4 class="h6 fw-bold text-light-theme-adjust m-0" style="font-size: 0.9rem; line-height: 1.4;">${q.question}</h4>
        <div class="d-flex flex-column gap-2" id="trivia-options-box">
          ${q.options.map((opt, idx) => `
            <button class="trivia-option-btn" data-idx="${idx}">${opt}</button>
          `).join('')}
        </div>
      </div>
    `;

    const btns = phase2Container.querySelectorAll('.trivia-option-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedIdx = Number(btn.dataset.idx);
        btns.forEach(b => b.disabled = true);

        if (selectedIdx === q.answer) {
          btn.classList.add('correct');
          scoreCounter.textContent = phaseScore + 1;
          setTimeout(() => {
            phaseScore++;
            updateProgress();
            renderTriviaQuestion();
          }, 1500);
        } else {
          btn.classList.add('incorrect');
          // Resaltar correcta
          btns[q.answer].classList.add('correct');
          setTimeout(() => {
            phaseScore++;
            updateProgress();
            renderTriviaQuestion();
          }, 2500);
        }
      });
    });
  };

  // 9. INICIALIZACIÓN DE FASE 3: Desafío Práctico Físico-Virtual
  const startPhase3 = () => {
    currentPhase = 3;
    currentChallengeStep = 0;
    activePhaseBadge.textContent = 'Fase 3 de 3';
    activePhaseTitle.textContent = 'Reto de Simulación de Parámetros';
    scoreCounter.textContent = '0';
    updateProgress();

    phase1Container.classList.add('d-none');
    phase2Container.classList.add('d-none');
    phase3Container.classList.remove('d-none');
    lcdScreen.classList.remove('d-none');

    // Inicializar pantalla del generador
    ch1State = 'OFF';
    currentWave = 'None';
    freqVal = '-------';
    ampVal = '-------';
    paramSelected = 'none';
    softkeyLabels = ['Waveform', 'Parameter', 'Units', 'Select', 'Cancel'];
    updateLcdDisplay();

    // Limpiar hotspots y prepararlos para clics interactivos
    document.querySelectorAll('.hotspot-overlay').forEach(el => {
      el.className = 'hotspot-overlay';
      el.innerHTML = '';
    });

    renderChallengeStep();
  };

  const updateLcdDisplay = () => {
    lcdScreen.innerHTML = `
      <div style="border-bottom: 1px solid #10b981; padding-bottom: 3px; margin-bottom: 5px; font-weight: bold; display: flex; justify-content: space-between; font-size: 0.6rem;">
        <span style="color: ${ch1State === 'ON' ? '#10b981' : '#94a3b8'};">CH1: ${ch1State}</span>
        <span>High Z</span>
      </div>
      <div style="font-size: 0.65rem; display: flex; flex-direction: column; gap: 3px;">
        <div><strong>Wave:</strong> <span style="color:#60a5fa;">${currentWave}</span></div>
        <div style="padding: 1px 3px; border-radius: 2px; ${paramSelected === 'freq' ? 'background: #065f46; color: #64ffda;' : ''}">
          <strong>Freq:</strong> ${freqVal}
        </div>
        <div style="padding: 1px 3px; border-radius: 2px; ${paramSelected === 'amp' ? 'background: #065f46; color: #64ffda;' : ''}">
          <strong>Amp:</strong> ${ampVal}
        </div>
        <div><strong>Offset:</strong> 0.000 Vdc</div>
        <div><strong>Phase:</strong> 0.0°</div>
      </div>
      <!-- Softkeys overlays -->
      <div style="position: absolute; right: 2px; top: 18px; display: flex; flex-direction: column; gap: 6px; font-size: 0.52rem; text-align: right; border-left: 1px solid rgba(16,185,129,0.3); padding-left: 4px; height: calc(100% - 20px); justify-content: space-around;">
        ${softkeyLabels.map(lbl => `<div style="color: #64ffda; font-weight:bold; height: 12px; overflow:hidden;">${lbl}</div>`).join('')}
      </div>
    `;
  };

  const renderChallengeStep = () => {
    if (currentChallengeStep >= challengeSteps.length) {
      // Completado con Éxito
      updateProgress();
      
      // Otorgar puntos de experiencia
      if (onAwardXp) {
        onAwardXp(150);
      }

      showCustomModal(
        "¡Desafío Completado!",
        `
          <p>Has configurado correctamente el generador de funciones para simular una señal de prueba cardíaca:</p>
          <ul class="small mb-3 text-secondary">
            <li><strong>Tipo de Onda:</strong> Senoidal</li>
            <li><strong>Frecuencia:</strong> 1.000 kHz (72 lpm emulado)</li>
            <li><strong>Amplitud:</strong> 2.000 Vpp (biopotencial amplificado)</li>
            <li><strong>Estado de Salida:</strong> CH1 Habilitado</li>
          </ul>
          <div class="alert alert-success py-2 px-3 text-center fw-bold" style="background-color: rgba(16,185,129,0.1); color: #10b981; border: 0;">
            🏆 ¡Has ganado +150 XP de Instrumentación!
          </div>
        `,
        true
      );

      // Desactivar interacciones
      document.querySelectorAll('.hotspot-overlay').forEach(el => {
        el.className = 'hotspot-overlay';
        el.style.pointerEvents = 'none';
      });

      phase3Container.innerHTML = `
        <div class="card p-3 border border-success text-center bg-indigo-dark-5" style="background-color: rgba(16, 185, 129, 0.05);">
          <span style="font-size: 2.2rem;">🏆</span>
          <h4 class="h6 fw-bold text-success mt-2">¡Entrenamiento Completado!</h4>
          <p class="small text-secondary m-0 mt-1">Has dominado satisfactoriamente el funcionamiento físico del Generador Tektronix AFG1022.</p>
          <button class="btn btn-sm btn-outline mt-3 w-100" id="reset-activity-btn">Reiniciar Entrenamiento</button>
        </div>
      `;

      document.getElementById('reset-activity-btn').addEventListener('click', () => {
        lcdScreen.classList.add('d-none');
        phase1Container.classList.remove('d-none');
        phase2Container.classList.add('d-none');
        phase3Container.classList.add('d-none');
        startPhase1();
      });

      return;
    }

    const step = challengeSteps[currentChallengeStep];
    phase3Container.innerHTML = `
      <div class="d-flex flex-column gap-2">
        <div class="badge bg-gold text-dark align-self-start" style="font-size:0.68rem; font-weight:700; padding: 4px 8px;">Paso ${currentChallengeStep + 1} de ${challengeSteps.length}</div>
        <p class="small text-light-theme-adjust m-0" style="font-size:0.82rem; line-height: 1.45;">${step.instruction}</p>
      </div>
    `;

    // Resaltar hotspot objetivo
    document.querySelectorAll('.hotspot-overlay').forEach(el => {
      el.className = 'hotspot-overlay';
    });

    const activeHs = document.getElementById(`hotspot-${step.targetId}`);
    if (activeHs) {
      activeHs.classList.add('active-interactive');
      
      // Remover listener previo y configurar nuevo listener
      const newHs = activeHs.cloneNode(true);
      activeHs.parentNode.replaceChild(newHs, activeHs);

      newHs.addEventListener('click', () => {
        // Registrar acierto
        handleChallengeAction(step.action);
      });
    }
  };

  const handleChallengeAction = (action) => {
    if (action === "sine") {
      currentWave = "Sine";
      freqVal = "5.00000000kHz";
      ampVal = "5.000 Vpp";
      softkeyLabels = ['Frequency', 'Amplitude', 'Offset', 'Phase', 'Output'];
      currentChallengeStep++;
    } 
    else if (action === "select-freq") {
      paramSelected = 'freq';
      freqVal = "[ _ ] kHz";
      softkeyLabels = ['kHz', 'Hz', 'mHz', 'uHz', 'Cancel'];
      currentChallengeStep++;
    } 
    else if (action === "press-1") {
      freqVal = "[ 1_ ] kHz";
      currentChallengeStep++;
    } 
    else if (action === "confirm-khz") {
      paramSelected = 'none';
      freqVal = "1.00000000kHz";
      softkeyLabels = ['Frequency', 'Amplitude', 'Offset', 'Phase', 'Output'];
      currentChallengeStep++;
    } 
    else if (action === "select-amp") {
      paramSelected = 'amp';
      ampVal = "[ _ ] V";
      softkeyLabels = ['Vpp', 'mVpp', 'Vrms', 'dBm', 'Cancel'];
      currentChallengeStep++;
    } 
    else if (action === "press-2") {
      ampVal = "[ 2_ ] V";
      currentChallengeStep++;
    } 
    else if (action === "confirm-vpp") {
      paramSelected = 'none';
      ampVal = "2.000 Vpp";
      softkeyLabels = ['Frequency', 'Amplitude', 'Offset', 'Phase', 'Output'];
      currentChallengeStep++;
    } 
    else if (action === "turn-on-ch1") {
      ch1State = 'ON';
      currentChallengeStep++;
    }

    scoreCounter.textContent = currentChallengeStep;
    updateProgress();
    updateLcdDisplay();
    renderChallengeStep();
  };

  // Iniciar la Fase 1
  startPhase1();
}

function initPowerSupplyActivity(onAwardXp) {
  // 1. Inyectar Estilos Específicos de la Actividad
  const styleId = 'afg1022-activity-styles';
  if (!document.getElementById(styleId)) {
    const styleEl = document.createElement('style');
    styleEl.id = styleId;
    styleEl.innerHTML = `
      .draggable-card {
        background-color: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-sm);
        padding: 0.5rem 0.75rem;
        font-size: 0.78rem;
        font-weight: 600;
        color: var(--text-primary);
        cursor: grab;
        user-select: none;
        transition: all 0.2s ease;
        box-shadow: 0 2px 4px rgba(0,0,0,0.15);
      }
      .draggable-card:hover {
        background-color: var(--bg-tertiary);
        border-color: var(--primary-color);
        box-shadow: 0 4px 8px rgba(99, 102, 241, 0.2);
        transform: translateY(-1px);
      }
      .draggable-card:active {
        cursor: grabbing;
      }
      .draggable-card.dragging {
        opacity: 0.4;
        background-color: rgba(99, 102, 241, 0.1);
        border-color: var(--primary-color);
      }
      .draggable-card.selected-for-match {
        background-color: rgba(99, 102, 241, 0.2) !important;
        border-color: var(--primary-color) !important;
        box-shadow: 0 0 10px rgba(99, 102, 241, 0.4);
      }
      .draggable-card.matched {
        opacity: 0.5;
        cursor: default;
        pointer-events: none;
        background-color: rgba(16, 185, 129, 0.05) !important;
        border-color: rgba(16, 185, 129, 0.3) !important;
        color: #10b981 !important;
      }
      
      .hotspot-overlay {
        position: absolute;
        box-sizing: border-box;
        border-radius: 4px;
        border: 2px dashed rgba(255, 255, 255, 0.25);
        background-color: rgba(255, 255, 255, 0.02);
        transition: all 0.25s ease;
        cursor: pointer;
        z-index: 5;
      }
      .hotspot-overlay:hover, .hotspot-overlay.drag-hover {
        border-color: var(--primary-color);
        background-color: rgba(99, 102, 241, 0.15);
        box-shadow: 0 0 12px rgba(99, 102, 241, 0.4);
      }
      .hotspot-overlay.matched {
        border-color: #10b981 !important;
        background-color: rgba(16, 185, 129, 0.15) !important;
        cursor: default;
      }
      .hotspot-overlay.pulsing-hint {
        animation: pulse-hint-anim 1.5s infinite alternate;
      }
      @keyframes pulse-hint-anim {
        from {
          border-color: rgba(245, 158, 11, 0.4);
          background-color: rgba(245, 158, 11, 0.05);
        }
        to {
          border-color: #f59e0b;
          background-color: rgba(245, 158, 11, 0.25);
          box-shadow: 0 0 15px rgba(245, 158, 11, 0.4);
        }
      }
      .hotspot-overlay.highlight-blue {
        animation: pulse-blue-anim 1.5s infinite alternate;
        pointer-events: none;
      }
      @keyframes pulse-blue-anim {
        from {
          border-color: rgba(59, 130, 246, 0.4);
          background-color: rgba(59, 130, 246, 0.05);
        }
        to {
          border-color: #3b82f6;
          background-color: rgba(59, 130, 246, 0.25);
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
        }
      }
      .hotspot-overlay.active-interactive {
        border-color: #f59e0b !important;
        background-color: rgba(245, 158, 11, 0.05);
        cursor: pointer;
        animation: pulse-orange-anim 1.5s infinite alternate;
        z-index: 15;
      }
      @keyframes pulse-orange-anim {
        from { border-color: rgba(245, 158, 11, 0.4); }
        to { border-color: #f59e0b; box-shadow: 0 0 10px rgba(245, 158, 11, 0.4); }
      }

      .hotspot-indicator {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: rgba(15, 23, 42, 0.85);
        color: var(--text-primary);
        border: 1px solid rgba(255,255,255,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.65rem;
        font-weight: bold;
        pointer-events: none;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      }
      .matched .hotspot-indicator {
        background-color: #10b981;
        color: white;
        border-color: #10b981;
      }
      
      .trivia-option-btn {
        text-align: left;
        width: 100%;
        padding: 0.65rem 0.85rem;
        font-size: 0.8rem;
        background-color: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-sm);
        color: var(--text-primary);
        transition: all 0.2s ease;
        cursor: pointer;
      }
      .trivia-option-btn:hover:not(:disabled) {
        background-color: var(--bg-tertiary);
        border-color: var(--primary-color);
      }
      .trivia-option-btn.correct {
        background-color: rgba(16, 185, 129, 0.15) !important;
        border-color: #10b981 !important;
        color: #10b981 !important;
        font-weight: bold;
      }
      .trivia-option-btn.incorrect {
        background-color: rgba(239, 68, 68, 0.15) !important;
        border-color: #ef4444 !important;
        color: #ef4444 !important;
      }
    `;
    document.head.appendChild(styleEl);
  }


  // 1. Data Definitions
  const componentsList = [
    // NIVEL 1: Identificación General
    {
      level: 1,
      id: "encendido",
      name: "Interruptor de encendido",
      description: "Botón principal (POWER) para energizar todo el equipo.",
      bioApp: "Regla de oro en bioinstrumentación: siempre apaga la fuente antes de modificar el cableado del paciente o los componentes del circuito.",
      coords: { top: 70, left: 66, width: 8, height: 12 },
      hint: "Botón grande en la esquina inferior derecha.",
      color: "#ea4858"
    },
    {
      level: 1,
      id: "panel-visualizacion",
      name: "Panel de visualización",
      description: "Pantallas digitales que muestran el voltaje (V) y la corriente (A) entregada.",
      bioApp: "Permite monitorear el consumo de corriente de tu circuito amplificador; un consumo elevado (> 100mA) suele indicar un cortocircuito.",
      coords: { top: 9, left: 10, width: 75, height: 27 },
      hint: "El bloque oscuro en la mitad superior del equipo.",
      color: "#1651aa"
    },
    {
      level: 1,
      id: "canal-master",
      name: "Canal MASTER",
      description: "Canal principal (derecho) de la fuente dual, independiente o maestro en modos combinados.",
      bioApp: "Suele usarse para generar el voltaje positivo (+Vcc, ej. +15V) para alimentar la etapa de amplificación analógica.",
      coords: { top: 38, left: 46, width: 30, height: 25 },
      hint: "Agrupa las perillas de la zona central-derecha bajo la etiqueta MASTER.",
      color: "#f59e0b"
    },
    {
      level: 1,
      id: "canal-slave",
      name: "Canal SLAVE",
      description: "Canal secundario (izquierdo) de la fuente dual.",
      bioApp: "En modo Tracking Serie, sigue al maestro para generar voltajes negativos simétricos (-Vee, ej. -15V) necesarios para amplificadores operacionales.",
      coords: { top: 38, left: 12, width: 30, height: 25 },
      hint: "Agrupa las perillas de la zona central-izquierda bajo la etiqueta SLAVE.",
      color: "#54b76a"
    },
    {
      level: 1,
      id: "salida-fija",
      name: "Salida fija de 5 V / 3 A",
      description: "Bornes independientes que entregan un voltaje constante de 5V y hasta 3 Amperios.",
      bioApp: "Ideal para alimentar la etapa digital (Microcontrolador, ADC) sin riesgo de sobrevoltaje, separándola de la etapa analógica.",
      coords: { top: 71, left: 49, width: 11, height: 14 },
      hint: "Conectores adicionales a la derecha de los canales principales, marcados como 5V/3A.",
      color: "#5b21b6"
    },
    {
      level: 1,
      id: "boton-output",
      name: "Botón de activación de salida",
      description: "Botón (OUTPUT) que habilita o deshabilita la entrega de energía a los bornes sin apagar la fuente.",
      bioApp: "Permite ajustar voltajes de forma segura sin energizar accidentalmente el circuito biomédico durante la configuración.",
      coords: { top: 66, left: 9, width: 5, height: 8 },
      hint: "Pequeño botón gris en el extremo inferior izquierdo.",
      color: "#3b82f6"
    },

    // NIVEL 2: Controles y Modos
    {
      level: 2,
      id: "ctrl-corriente-master",
      name: "Control de corriente del canal maestro",
      description: "Perilla que ajusta el límite de corriente máxima que puede entregar el canal derecho.",
      bioApp: "Se usa para proteger los chips costosos de instrumentación; si hay un corto, la corriente no superará este límite.",
      coords: { top: 42, left: 46, width: 12, height: 20 },
      hint: "Perilla izquierda dentro del bloque MASTER.",
      color: "#10b981"
    },
    {
      level: 2,
      id: "ctrl-voltaje-master",
      name: "Control de voltaje del canal maestro",
      description: "Perilla que ajusta el voltaje de salida del canal derecho.",
      bioApp: "Configura el nivel de +Vcc requerido por las hojas de datos de los amplificadores (usualmente +5V a +15V).",
      coords: { top: 42, left: 61, width: 12, height: 20 },
      hint: "Perilla derecha dentro del bloque MASTER.",
      color: "#fbbf24"
    },
    {
      level: 2,
      id: "ctrl-corriente-slave",
      name: "Control de corriente del canal esclavo",
      description: "Perilla que ajusta el límite de corriente máxima que puede entregar el canal izquierdo.",
      bioApp: "Al igual que el master, previene el daño térmico de los componentes analógicos.",
      coords: { top: 42, left: 14, width: 12, height: 20 },
      hint: "Perilla izquierda dentro del bloque SLAVE.",
      color: "#f43f5e"
    },
    {
      level: 2,
      id: "ctrl-voltaje-slave",
      name: "Control de voltaje del canal esclavo",
      description: "Perilla que ajusta el voltaje de salida del canal izquierdo (solo en modo independiente).",
      bioApp: "En modo independiente, puede usarse para generar un voltaje de referencia distinto al +Vcc principal.",
      coords: { top: 42, left: 29, width: 12, height: 20 },
      hint: "Perilla derecha dentro del bloque SLAVE.",
      color: "#8b5cf6"
    },
    {
      level: 2,
      id: "selector-modo",
      name: "Selector de modo de operación",
      description: "Botones grises centrales que cambian la interconexión interna de los canales.",
      bioApp: "Fundamentales para crear fuentes simétricas al presionar los botones adecuados para el modo Serie.",
      coords: { top: 51, left: 41, width: 8, height: 7 },
      hint: "Los dos pequeños botones grises en el centro de la fuente.",
      color: "#0ea5e9"
    },
    {
      level: 2,
      id: "modos-texto",
      name: "Modos NORMAL, SERIES y PARALLEL",
      description: "Indicadores gráficos de cómo pulsar los selectores para cada modo.",
      bioApp: "Te guían visualmente para configurar la fuente dual como una fuente simétrica (Serie) para amplificadores de biopotenciales.",
      coords: { top: 43, left: 39, width: 11, height: 7 },
      hint: "Texto y símbolos impresos justo arriba de los selectores centrales.",
      color: "#d946ef"
    },
    {
      level: 2,
      id: "indicadores-cv-cc",
      name: "Indicadores CV y CC",
      description: "LEDs dentro del panel que indican si la fuente opera en Voltaje Constante (CV) o Corriente Constante (CC).",
      bioApp: "En uso normal de bioinstrumentación siempre debe estar en CV (verde). Si cambia a CC (rojo), significa que el circuito superó el límite de corriente (posible corto).",
      coords: { top: 31, left: 13, width: 68, height: 5 },
      hint: "Pequeñas etiquetas 'CV' y 'CC' debajo de los números rojos en el panel oscuro.",
      color: "#ec4899"
    },

    // NIVEL 3: Terminales e Indicadores
    {
      level: 3,
      id: "terminales-master",
      name: "Terminales del canal maestro",
      description: "Conectores banana (+, GND, -) correspondientes al canal derecho.",
      bioApp: "De aquí se extrae la energía principal (+Vcc) hacia la línea roja de la protoboard.",
      coords: { top: 73, left: 32, width: 15, height: 10 },
      hint: "El bloque central de tres conectores (azul, amarillo, rojo).",
      color: "#f59e0b"
    },
    {
      level: 3,
      id: "terminales-slave",
      name: "Terminales del canal esclavo",
      description: "Conectores banana (+, GND, -) correspondientes al canal izquierdo.",
      bioApp: "En modo Serie, de aquí se extrae la energía negativa (-Vee) hacia la línea azul de la protoboard.",
      coords: { top: 73, left: 14, width: 15, height: 10 },
      hint: "El bloque izquierdo de tres conectores (azul, amarillo, rojo).",
      color: "#54b76a"
    },
    {
      level: 3,
      id: "terminal-positivo",
      name: "Terminal positivo",
      description: "Borne de color rojo que entrega el potencial positivo respecto al borne azul.",
      bioApp: "Usado para alimentar el pin V+ (ej. pin 7 de un OpAmp genérico).",
      coords: { top: 73, left: 24, width: 5, height: 10 },
      hint: "Selecciona cualquiera de los conectores de color ROJO.",
      color: "#ea4858"
    },
    {
      level: 3,
      id: "terminal-negativo",
      name: "Terminal negativo",
      description: "Borne de color azul que sirve como referencia 0V en modo normal, o entrega voltaje negativo en modo serie.",
      bioApp: "Usado para alimentar el pin V- (ej. pin 4 de un OpAmp genérico).",
      coords: { top: 73, left: 14, width: 5, height: 10 },
      hint: "Selecciona cualquiera de los conectores de color AZUL.",
      color: "#3b82f6"
    },
    {
      level: 3,
      id: "terminal-tierra",
      name: "Terminal de tierra",
      description: "Borne amarillo/verde conectado directamente al chasis metálico y a la tierra física del edificio.",
      bioApp: "Crucial para derivar corrientes de fuga y proteger al paciente de descargas (seguridad eléctrica).",
      coords: { top: 73, left: 19, width: 5, height: 10 },
      hint: "Selecciona cualquiera de los conectores de color AMARILLO/VERDE.",
      color: "#10b981"
    },
    {
      level: 3,
      id: "indicador-output",
      name: "Indicador de salida activa",
      description: "LED rojo que se enciende cuando los terminales están energizados.",
      bioApp: "Aviso visual de que tu circuito biomédico está recibiendo voltaje. ¡No toques cables expuestos si está encendido!",
      coords: { top: 62, left: 9, width: 4, height: 4 },
      hint: "Pequeño punto sobre el botón OUTPUT.",
      color: "#f43f5e"
    },
    {
      level: 3,
      id: "indicador-oc",
      name: "Indicador de sobrecorriente",
      description: "LED (Over Current) que alerta si el consumo de la salida fija de 5V excede los 3 Amperios.",
      bioApp: "Si estás alimentando motores o luces junto con la etapa digital y este LED enciende, significa que has sobrecargado la fuente.",
      coords: { top: 68, left: 51, width: 4, height: 4 },
      hint: "Pequeño punto bajo los terminales de 5V/3A, marcado con 'OC'.",
      color: "#fbbf24"
    }
  ];

  const triviaQuestions = [
    {
      targetId: "modos-texto",
      question: "¿Por qué es tan importante el modo 'Serie' (Tracking) al probar un amplificador de instrumentación (ej. AD620)?",
      options: [
        "Porque aumenta el voltaje hasta 60V, necesario para bioseñales.",
        "Porque permite conectar el canal maestro y esclavo internamente, facilitando la creación de una fuente dual (+Vcc, GND, -Vee) requerida por el amplificador.",
        "Porque disminuye el ruido electromagnético de 60 Hz.",
        "Porque evita que la protoboard se queme al limitar la corriente automáticamente a cero."
      ],
      answer: 1,
      explanation: "El modo Serie conecta el polo positivo del Esclavo con el negativo del Maestro internamente, creando una referencia central (GND virtual) ideal para fuentes simétricas (+15V y -15V)."
    },
    {
      targetId: "salida-fija",
      question: "¿Qué utilidad específica tiene la salida fija de 5V en un diseño de bioinstrumentación mixto?",
      options: [
        "Calibrar los electrodos Ag/AgCl del paciente.",
        "Generar la señal portadora para telemetría.",
        "Alimentar los amplificadores operacionales de la etapa analógica.",
        "Alimentar de forma independiente y segura la etapa digital (microcontroladores como Arduino o ESP32)."
      ],
      answer: 3,
      explanation: "Los microcontroladores operan a voltajes fijos (3.3V o 5V). Usar esta salida dedicada previene daños catastróficos por ajustes accidentales de voltaje en las perillas principales."
    },
    {
      targetId: "indicadores-cv-cc",
      question: "Al energizar tu circuito de ECG, notas que el indicador 'CC' (rojo) se enciende y el voltaje en el panel cae drásticamente. ¿Qué significa esto?",
      options: [
        "Que el amplificador está funcionando perfectamente y filtrando el ruido.",
        "Que hay un cortocircuito en la protoboard y la fuente está operando en Corriente Constante (limitando el voltaje para protegerse).",
        "Que los electrodos están desconectados del paciente.",
        "Que se deben girar las perillas al máximo para compensar la caída."
      ],
      answer: 1,
      explanation: "El encendido del LED CC (Constant Current) indica que el circuito intentó jalar más corriente del límite configurado, lo cual es señal típica de un cortocircuito. ¡Apaga inmediatamente la fuente!"
    }
  ];

  const challengeSteps = [
    {
      instruction: "<strong>Paso 1:</strong> Es hora de simular el uso real. Enciende la fuente presionando el <strong>Interruptor de encendido</strong>.",
      targetId: "encendido",
      hint: "Presiona el botón gris grande (POWER).",
      action: "power-on"
    },
    {
      instruction: "<strong>Paso 2:</strong> Vas a alimentar un Arduino. Usa las perillas para ajustar el voltaje a 5V en el <strong>Control de voltaje del canal maestro</strong>.",
      targetId: "ctrl-voltaje-master",
      hint: "Toca la perilla derecha de la zona MASTER.",
      action: "adj-master"
    },
    {
      instruction: "<strong>Paso 3:</strong> Ahora, conecta tu cable rojo al <strong>Terminal positivo</strong> del canal maestro.",
      targetId: "terminal-positivo",
      hint: "Toca el conector rojo del bloque central.",
      action: "connect-red"
    },
    {
      instruction: "<strong>Paso 4:</strong> Conecta el cable azul al <strong>Terminal negativo</strong> del canal maestro para cerrar el circuito.",
      targetId: "terminal-negativo",
      hint: "Toca el conector azul del bloque central (al lado izquierdo del bloque MASTER).",
      action: "connect-blue"
    },
    {
      instruction: "<strong>Paso 5:</strong> Todo el cableado está listo. Presiona el <strong>Botón de activación de salida</strong> para enviar energía a la protoboard.",
      targetId: "boton-output",
      hint: "Presiona el pequeño botón OUTPUT a la izquierda.",
      action: "activate-output"
    }
  ];

  // Logic Variables
  const root = document.getElementById('power-supply-interactive-activity-root');
  if (!root) return;

  const phase1Container = document.getElementById('ps-phase-1-cards-container');
  const phase2Container = document.getElementById('ps-phase-2-trivia-container');
  const phase3Container = document.getElementById('ps-phase-3-challenge-container');
  const progressBar = document.getElementById('ps-activity-progress-bar');
  const progressText = document.getElementById('ps-progress-percent');
  const activePhaseBadge = document.getElementById('ps-active-phase-badge');
  const activePhaseTitle = document.getElementById('ps-active-phase-title');
  const scoreCounter = document.getElementById('ps-score-counter');
  const hintBtn = document.getElementById('ps-hint-button');
  const overlayContainer = document.getElementById('ps-hotspots-overlay-container');
  const cardsBank = document.getElementById('ps-draggable-cards-bank');

  // Modals
  const infoModalBackdrop = document.getElementById('ps-info-modal-backdrop');
  const infoModalTitle = document.getElementById('ps-info-modal-title');
  const infoModalBody = document.getElementById('ps-info-modal-body');
  const infoModalCloseBtn = document.getElementById('ps-info-modal-close-btn');

  let currentLevel = 1;
  let matchesInLevel = 0;
  let totalMatchesOverall = 0;
  
  let currentPhase = 1;
  let triviaIndex = 0;
  let currentChallengeStep = 0;
  let selectedDraggableId = null;

  function updateProgress() {
    let totalSteps = componentsList.length + triviaQuestions.length + challengeSteps.length;
    let current = totalMatchesOverall + triviaIndex + currentChallengeStep;
    let pct = Math.round((current / totalSteps) * 100);
    progressBar.style.width = pct + '%';
    progressText.textContent = pct + '%';
  }

  // Render Phase 1 (Drag & Drop) by Level
  function startPhase1Level(level) {
    currentLevel = level;
    matchesInLevel = 0;
    activePhaseBadge.textContent = "Fase 1 (Nivel " + level + " de 3)";
    activePhaseTitle.textContent = "Reconocimiento de Componentes";
    
    overlayContainer.innerHTML = '';
    cardsBank.innerHTML = '';

    const compsInLevel = componentsList.filter(c => c.level === level);
    const shuffledCards = [...compsInLevel].sort(() => Math.random() - 0.5);

    compsInLevel.forEach((comp, index) => {
      // Create Hotspot
      const hotspot = document.createElement('div');
      hotspot.className = 'hotspot-overlay ps-hotspot';
      hotspot.dataset.id = comp.id;
      hotspot.style.top = comp.coords.top + '%';
      hotspot.style.left = comp.coords.left + '%';
      hotspot.style.width = comp.coords.width + '%';
      hotspot.style.height = comp.coords.height + '%';
      hotspot.style.position = 'absolute';
      hotspot.style.border = `2px dashed rgba(255, 255, 255, 0.45)`;
      hotspot.style.borderRadius = '8px';
      hotspot.style.backgroundColor = 'rgba(255,255,255,0.0)';
      hotspot.style.transition = 'all 0.2s';
      hotspot.style.boxSizing = 'border-box';
      hotspot.style.cursor = 'pointer';
      
      const indicator = document.createElement('div');
      indicator.className = 'hotspot-indicator rounded-circle d-flex justify-content-center align-items-center text-white shadow-sm';
      indicator.innerHTML = `?`;
      indicator.style.position = 'absolute';
      indicator.style.width = '24px';
      indicator.style.height = '24px';
      indicator.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
      indicator.style.backdropFilter = 'blur(2px)';
      indicator.style.color = '#ffffff';
      indicator.style.fontWeight = 'bold';
      indicator.style.fontSize = '0.85rem';
      indicator.style.top = '50%';
      indicator.style.left = '50%';
      indicator.style.transform = 'translate(-50%, -50%)';
      indicator.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';

      hotspot.appendChild(indicator);

      hotspot.addEventListener('dragover', e => { 
        e.preventDefault(); 
        hotspot.style.backgroundColor = 'rgba(255,255,255,0.25)';
        hotspot.style.transform = 'scale(1.02)';
      });
      hotspot.addEventListener('dragleave', e => { 
        hotspot.style.backgroundColor = 'rgba(255,255,255,0.0)';
        hotspot.style.transform = 'scale(1)';
      });
      hotspot.addEventListener('drop', e => {
        e.preventDefault();
        hotspot.style.backgroundColor = 'rgba(255,255,255,0.0)';
        hotspot.style.transform = 'scale(1)';
        const cardId = e.dataTransfer.getData('text/plain');
        handleMatchAttempt(cardId, comp.id, hotspot, compsInLevel.length);
      });

      hotspot.addEventListener('click', () => {
        if (selectedDraggableId && !hotspot.classList.contains('matched')) {
          handleMatchAttempt(selectedDraggableId, comp.id, hotspot, compsInLevel.length);
        }
      });

      overlayContainer.appendChild(hotspot);
    });

    shuffledCards.forEach((comp, index) => {
      const card = document.createElement('div');
      card.className = 'draggable-card d-flex align-items-center bg-white border shadow-sm p-2 mb-1';
      card.draggable = true;
      card.dataset.id = comp.id;
      card.style.borderRadius = '6px';
      card.style.cursor = 'grab';
      card.style.transition = 'transform 0.2s, box-shadow 0.2s';
      card.style.borderColor = '#e5e7eb';
      
      card.innerHTML = `
        <div class="fw-bold flex-grow-1" style="font-size: 0.75rem; color: var(--text-primary) !important; line-height: 1;">
          ${comp.name}
        </div>
        <div class="text-muted opacity-50 d-flex flex-wrap align-items-center justify-content-center" style="width: 10px; height: 15px; gap: 2px;">
          <div style="width: 3px; height: 3px; border-radius: 50%; background: currentColor;"></div>
          <div style="width: 3px; height: 3px; border-radius: 50%; background: currentColor;"></div>
          <div style="width: 3px; height: 3px; border-radius: 50%; background: currentColor;"></div>
          <div style="width: 3px; height: 3px; border-radius: 50%; background: currentColor;"></div>
          <div style="width: 3px; height: 3px; border-radius: 50%; background: currentColor;"></div>
          <div style="width: 3px; height: 3px; border-radius: 50%; background: currentColor;"></div>
        </div>
      `;

      card.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', comp.id);
        card.classList.add('dragging');
        card.style.opacity = '0.5';
      });
      card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
        card.style.opacity = '1';
      });

      card.addEventListener('click', () => {
        if (card.classList.contains('matched')) return;
        document.querySelectorAll('.draggable-card').forEach(c => {
          c.classList.remove('selected-for-match');
          c.style.transform = 'scale(1)';
          c.style.boxShadow = 'none';
        });
        card.classList.add('selected-for-match');
        card.style.transform = 'scale(1.02)';
        card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        selectedDraggableId = comp.id;
      });

      cardsBank.appendChild(card);
    });

    hintBtn.onclick = () => {
      const unmatchedCards = Array.from(cardsBank.children).filter(c => !c.classList.contains('matched'));
      if (unmatchedCards.length > 0) {
        const id = unmatchedCards[0].dataset.id;
        const comp = compsInLevel.find(c => c.id === id);
        alert('Pista para ' + comp.name + ': ' + comp.hint);
        const hotspot = document.querySelector(`.ps-hotspot[data-id="${id}"]`);
        if (hotspot) {
          hotspot.classList.add('pulsing-hint');
          setTimeout(() => hotspot.classList.remove('pulsing-hint'), 3000);
        }
      }
    };
  }

  function handleMatchAttempt(cardId, hotspotId, hotspotEl, levelTotal) {
    if (cardId === hotspotId) {
      matchesInLevel++;
      totalMatchesOverall++;
      const card = document.querySelector(`.draggable-card[data-id="${cardId}"]`);
      if (card) {
        card.classList.remove('selected-for-match');
        card.classList.add('matched');
        card.draggable = false;
      }
      
      const comp = componentsList.find(c => c.id === hotspotId);
      
      hotspotEl.classList.add('matched');
      hotspotEl.style.border = `2px solid ${comp.color}`;
      hotspotEl.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
      const ind = hotspotEl.querySelector('.hotspot-indicator');
      if (ind) {
        ind.innerHTML = '✓';
        ind.style.backgroundColor = comp.color;
        ind.style.backdropFilter = 'none';
      }
      selectedDraggableId = null;
      
      infoModalTitle.textContent = "¡Emparejamiento Correcto!";
      infoModalTitle.style.color = "#10b981";
      infoModalBody.innerHTML = `<p><strong>${comp.name}</strong></p><p>${comp.description}</p><div class="p-2 mt-2 rounded" style="background-color:rgba(16,185,129,0.1); border-left:3px solid #10b981;"><strong>Aplicación Bio:</strong> ${comp.bioApp}</div>`;
      infoModalBackdrop.classList.remove('d-none');
      
      scoreCounter.textContent = totalMatchesOverall;
      updateProgress();

      infoModalCloseBtn.onclick = () => {
        infoModalBackdrop.classList.add('d-none');
        
        if (matchesInLevel === levelTotal) {
          if (currentLevel < 3) {
            // Avanzar al siguiente sub-nivel
            startPhase1Level(currentLevel + 1);
          } else {
            // Fin de la Fase 1
            if (onAwardXp) onAwardXp(15);
            startPhase2();
          }
        }
      };

    } else {
      hotspotEl.style.borderColor = "#ef4444";
      hotspotEl.style.backgroundColor = "rgba(239, 68, 68, 0.2)";
      setTimeout(() => {
        hotspotEl.style.borderColor = "";
        hotspotEl.style.backgroundColor = "";
      }, 500);
      selectedDraggableId = null;
      document.querySelectorAll('.draggable-card').forEach(c => c.classList.remove('selected-for-match'));
    }
  }

  // Phase 2 (Trivia)
  function startPhase2() {
    currentPhase = 2;
    activePhaseBadge.textContent = "Fase 2 de 3";
    activePhaseTitle.textContent = "Trivia de Casos Reales";
    scoreCounter.textContent = triviaIndex;
    
    phase1Container.classList.add('d-none');
    phase2Container.classList.remove('d-none');
    
    // Dejar los hotspots visibles para referencia de las preguntas
    overlayContainer.innerHTML = '';
    componentsList.filter(c => c.level === 2 || c.level === 3 || c.level === 1).forEach(comp => {
      const h = document.createElement('div');
      h.className = 'hotspot-overlay ps-hotspot';
      h.dataset.id = comp.id;
      h.style.top = comp.coords.top + '%';
      h.style.left = comp.coords.left + '%';
      h.style.width = comp.coords.width + '%';
      h.style.height = comp.coords.height + '%';
      h.style.borderColor = 'transparent';
      h.style.backgroundColor = 'transparent';
      overlayContainer.appendChild(h);
    });

    renderTrivia();
  }

  function renderTrivia() {
    if (triviaIndex >= triviaQuestions.length) {
      if (onAwardXp) onAwardXp(15);
      startPhase3();
      return;
    }

    const q = triviaQuestions[triviaIndex];
    
    document.querySelectorAll('.ps-hotspot').forEach(h => h.classList.remove('highlight-blue'));
    const targetHotspot = document.querySelector(`.ps-hotspot[data-id="${q.targetId}"]`);
    if (targetHotspot) targetHotspot.classList.add('highlight-blue');

    let optionsHTML = '';
    q.options.forEach((opt, idx) => {
      optionsHTML += `<button class="trivia-option-btn mb-2" data-idx="${idx}">${String.fromCharCode(65+idx)}. ${opt}</button>`;
    });

    phase2Container.innerHTML = `
      <div class="alert alert-primary py-2 px-3 small border-0 mb-1" style="background-color: rgba(59, 130, 246, 0.1); color: #60a5fa;">
        🔍 <strong>Pregunta ${triviaIndex + 1} de ${triviaQuestions.length}</strong>: Observa el componente resaltado en azul.
      </div>
      <p class="fw-bold mb-3" style="font-size: 0.9rem;">${q.question}</p>
      <div class="d-flex flex-column" id="ps-trivia-options-container">${optionsHTML}</div>
    `;

    hintBtn.onclick = () => alert("Analiza el componente iluminado en azul sobre la fuente...");

    const btns = phase2Container.querySelectorAll('.trivia-option-btn');
    btns.forEach(btn => {
      btn.onclick = () => {
        btns.forEach(b => b.disabled = true);
        const selected = parseInt(btn.dataset.idx);
        if (selected === q.answer) {
          btn.classList.add('correct');
          setTimeout(() => {
            infoModalTitle.textContent = "¡Respuesta Correcta!";
            infoModalTitle.style.color = "#10b981";
            infoModalBody.innerHTML = `<p>${q.explanation}</p>`;
            infoModalBackdrop.classList.remove('d-none');
            infoModalCloseBtn.onclick = () => {
              infoModalBackdrop.classList.add('d-none');
              triviaIndex++;
              scoreCounter.textContent = triviaIndex;
              updateProgress();
              renderTrivia();
            };
          }, 500);
        } else {
          btn.classList.add('incorrect');
          btns[q.answer].classList.add('correct');
          setTimeout(() => {
            btns.forEach(b => { b.disabled = false; b.classList.remove('correct', 'incorrect'); });
          }, 1500);
        }
      };
    });
  }

  // Phase 3 (Challenge)
  function startPhase3() {
    currentPhase = 3;
    activePhaseBadge.textContent = "Fase 3 de 3";
    activePhaseTitle.textContent = "Reto de Configuración Práctica";
    scoreCounter.textContent = currentChallengeStep;

    phase2Container.classList.add('d-none');
    phase3Container.classList.remove('d-none');
    
    document.querySelectorAll('.ps-hotspot').forEach(h => {
      h.classList.remove('highlight-blue');
    });

    renderChallengeStep();
  }

  function renderChallengeStep() {
    if (currentChallengeStep >= challengeSteps.length) {
      phase3Container.innerHTML = `
        <div class="text-center p-4">
          <span class="fs-1 d-block mb-3">🏆</span>
          <h4 class="text-success fw-bold">¡Práctica Completada!</h4>
          <p class="small text-secondary mb-3">Has dominado la identificación de los 20 componentes clave de la Fuente Dual PeakTech 6145 y completado la configuración básica de forma segura.</p>
          <div class="badge text-dark px-3 py-2 fw-bold" style="background-color: #f59e0b; font-size: 1.1rem;">+25 XP Ganados</div>
        </div>
      `;
      document.querySelectorAll('.ps-hotspot').forEach(h => h.classList.remove('active-interactive'));
      if (onAwardXp) onAwardXp(25);
      return;
    }

    const step = challengeSteps[currentChallengeStep];
    
    phase3Container.innerHTML = `
      <div class="alert alert-warning py-2 px-3 small border-0 mb-1" style="background-color: rgba(245, 158, 11, 0.1); color: #f59e0b;">
        ⚡ <strong>Paso ${currentChallengeStep + 1} de ${challengeSteps.length}</strong>
      </div>
      <p class="mb-3" style="font-size: 0.9rem;">${step.instruction}</p>
    `;

    hintBtn.onclick = () => alert(step.hint);

    document.querySelectorAll('.ps-hotspot').forEach(h => {
      h.classList.remove('active-interactive');
      h.onclick = null;
    });

    const activeHotspot = document.querySelector(`.ps-hotspot[data-id="${step.targetId}"]`);
    if (activeHotspot) {
      activeHotspot.classList.add('active-interactive');
      activeHotspot.onclick = () => {
        currentChallengeStep++;
        scoreCounter.textContent = currentChallengeStep;
        updateProgress();
        renderChallengeStep();
      };
    }
  }

  // Init
  startPhase1Level(1);
}


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
      coords: { top: 12, left: 5, width: 55, height: 60 },
      hint: "La gran área oscura central."
    },
    {
      level: 1, number: 2, id: "menus-funcion", name: "Menús de función", color: "#22c55e", // Verde
      description: "Controles de ejecución (Run/Stop, Single, etc).",
      bioApp: "Útil para congelar la captura y analizar un latido específico.",
      coords: { top: 5, left: 86, width: 12, height: 17 },
      hint: "Esquina superior derecha."
    },
    {
      level: 1, number: 3, id: "controles-horizontales", name: "Controles horizontales", color: "#eab308", // Amarillo
      description: "Ajusta la base de tiempo (s/div) y posición en el eje X.",
      bioApp: "Permite ver más ciclos de la señal o hacer zoom en un solo pulso.",
      coords: { top: 5, left: 63, width: 22, height: 18 },
      hint: "Parte superior derecha, junto a los controles de ejecución."
    },
    {
      level: 1, number: 4, id: "controles-disparo", name: "Controles de disparo (Trigger)", color: "#ec4899", // Rosa
      description: "Estabiliza señales configurando un umbral de voltaje (Trigger).",
      bioApp: "Sin trigger, una onda de pulso se verá parpadeante e inestable.",
      coords: { top: 25, left: 63, width: 15, height: 23 },
      hint: "Centro-derecha, debajo de los controles horizontales."
    },
    {
      level: 2, number: 5, id: "controles-verticales", name: "Controles verticales", color: "#38bdf8", // Azul claro
      description: "Agrupa los ajustes de escala (V/div) y posición vertical.",
      bioApp: "Crucial para amplificar visualmente bioseñales muy pequeñas.",
      coords: { top: 49, left: 63, width: 35, height: 26 },
      hint: "Zona inferior derecha con las perillas principales."
    },
    {
      level: 2, number: 6, id: "teclas-canal", name: "Teclas de canal 1 y 2", color: "#4ade80", // Verde claro
      description: "Enciende o apaga el trazo de los canales en la pantalla.",
      bioApp: "Permite superponer dos bioseñales simultáneamente.",
      coords: { top: 59, left: 68, width: 12, height: 7 },
      hint: "Los botones iluminados con los números 1 (Amarillo) y 2 (Verde)."
    },
    {
      level: 2, number: 7, id: "entradas-canal", name: "Entradas de canal (1 y 2)", color: "#14b8a6", // Cian
      description: "Entradas físicas (BNC) para conectar las sondas.",
      bioApp: "Punto de conexión de los cables que vienen del paciente o protoboard.",
      coords: { top: 78, left: 58, width: 20, height: 14 },
      hint: "Conectores metálicos inferiores."
    },
    {
      level: 3, number: 8, id: "conector-comp", name: "Conector de compensación", color: "#f97316", // Naranja
      description: "Genera una onda cuadrada de calibración (1kHz).",
      bioApp: "Se usa para calibrar las sondas (10x) y asegurar medidas correctas.",
      coords: { top: 82, left: 45, width: 9, height: 8 },
      hint: "Ganchos metálicos al lado derecho del puerto USB."
    },
    {
      level: 3, number: 9, id: "puerto-usb", name: "Puerto USB (almacenamiento)", color: "#ef4444", // Rojo
      description: "Permite conectar una memoria USB para guardar capturas.",
      bioApp: "Esencial para exportar datos y hacer informes de laboratorio.",
      coords: { top: 82, left: 37, width: 7, height: 6 },
      hint: "Puerto rectangular en el borde inferior central."
    },
    {
      level: 3, number: 10, id: "encendido", name: "Encendido", color: "#84cc16", // Verde oscuro
      description: "Energiza el osciloscopio.",
      bioApp: "Encender siempre antes de conectar al paciente.",
      coords: { top: 82, left: 4, width: 5, height: 6 },
      hint: "Esquina inferior izquierda del panel frontal."
    },
    {
      level: 3, number: 11, id: "salida-gen", name: "Salida de generador de funciones", color: "#a855f7", // Morado
      description: "Salida del generador de funciones integrado (WaveGen).",
      bioApp: "Proporciona señales de estímulo si el modelo lo incluye.",
      coords: { top: 81, left: 12, width: 6, height: 8 },
      hint: "Conector BNC junto al botón de encendido."
    },
    {
      level: 3, number: 12, id: "teclas-menu", name: "Teclas de menú rápido", color: "#1e3a8a", // Azul oscuro
      description: "Botones genéricos (Softkeys) cuyas funciones cambian según el menú.",
      bioApp: "Se usan para seleccionar filtros de ruido, acoplamientos y medidas en la interfaz.",
      coords: { top: 74, left: 5, width: 55, height: 5 },
      hint: "Fila de botones grises debajo de la pantalla."
    },
    {
      level: 2, number: 13, id: "perilla-intensidad", name: "Perilla Multipropósito", color: "#9333ea", // Purple-600
      description: "Ajusta la intensidad luminosa del trazo y navega por menús.",
      bioApp: "Sube la intensidad si estás viendo pulsos biológicos muy rápidos que casi no se ven.",
      coords: { top: 34, left: 63, width: 6, height: 12 },
      hint: "Perilla grande solitaria a la izquierda del área de Trigger."
    },
    {
      level: 2, number: 14, id: "boton-default-setup", name: "Default Setup", color: "#b45309", // Amber-700
      description: "Restaura el osciloscopio a sus configuraciones de fábrica.",
      bioApp: "Si alguien desconfiguró el equipo y no ves nada, presiona este botón para empezar de cero.",
      coords: { top: 15, left: 86, width: 6, height: 6 },
      hint: "Bajo los botones de Run/Stop."
    },
    {
      level: 2, number: 15, id: "boton-autoscale", name: "Auto Scale", color: "#0369a1", // Sky-700
      description: "Auto-ajusta las escalas para encontrar y estabilizar la señal visible.",
      bioApp: "Útil como primer paso rápido, aunque en bioseñales ruidosas puede fallar.",
      coords: { top: 15, left: 93, width: 6, height: 6 },
      hint: "A la derecha del Default Setup."
    },
    {
      level: 2, number: 16, id: "boton-utility", name: "Menú Utility", color: "#4d7c0f", // Lime-700
      description: "Opciones del sistema (Idioma, calibración interna, I/O).",
      bioApp: "Se usa a menudo para configurar la conexión del osciloscopio al PC.",
      coords: { top: 38, left: 69, width: 5, height: 6 },
      hint: "En el bloque Tools, centro del panel."
    },
    {
      level: 3, number: 17, id: "boton-cursors", name: "Menú Cursors", color: "#be123c", // Rose-700
      description: "Líneas guía manuales para medir con precisión tiempo y voltaje.",
      bioApp: "Herramienta ideal para medir a mano la duración exacta del complejo QRS en un ECG.",
      coords: { top: 25, left: 79, width: 5, height: 6 },
      hint: "Sección Measure, botón superior izquierdo."
    },
    {
      level: 3, number: 18, id: "boton-math", name: "Funciones Matemáticas", color: "#1d4ed8", // Blue-700
      description: "Operaciones como suma, resta, integración y FFT entre canales.",
      bioApp: "Permite usar la FFT para ver las frecuencias dominantes (Hz) del temblor muscular (EMG).",
      coords: { top: 26, left: 89, width: 5, height: 6 },
      hint: "A la derecha de la sección Measure."
    },
    {
      level: 3, number: 19, id: "boton-acquire", name: "Menú Acquire", color: "#be185d", // Pink-700
      description: "Ajusta la forma en que el equipo muestrea (Promedio, Alta resolución).",
      bioApp: "El modo 'Average' reduce enormemente el ruido aleatorio en un EEG constante.",
      coords: { top: 43, left: 79, width: 5, height: 6 },
      hint: "En el bloque Waveform, lado izquierdo."
    },
    {
      level: 3, number: 20, id: "boton-save-recall", name: "Save / Recall", color: "#4338ca", // Indigo-700
      description: "Guarda o carga configuraciones y datos de ondas en la memoria USB.",
      bioApp: "Usa esto para llevarte los datos en CSV y graficarlos luego en Matlab o Python.",
      coords: { top: 49, left: 79, width: 5, height: 6 },
      hint: "En el bloque File."
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
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${progress}%`;
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
      const unmatched = componentsList.filter(c => c.level === currentLevel && !document.querySelector(`.osc-beautiful-card[data-id="${c.id}"].matched`));
      if (unmatched.length > 0) {
        const randomComp = unmatched[Math.floor(Math.random() * unmatched.length)];
        const hs = document.getElementById(`osc-hs-${randomComp.id}`);
        if (hs) {
          hs.style.backgroundColor = 'rgba(255,255,255,0.3)';
          setTimeout(() => hs.style.backgroundColor = 'transparent', 3000);
          showModal('Pista', `Busca: <strong>${randomComp.name}</strong><br>${randomComp.hint}`, 'info');
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
    
    badge.textContent = `Fase 1 (Nivel ${currentLevel} de 3)`;
    title.textContent = 'Emparejamiento Visual';
    
    const currentComponents = componentsList.filter(c => c.level === currentLevel);
    
    currentComponents.forEach(comp => {
      // Hotspot
      const hs = document.createElement('div');
      hs.className = 'osc-dashed-hotspot';
      hs.id = `osc-hs-${comp.id}`;
      hs.style.top = `${comp.coords.top}%`;
      hs.style.left = `${comp.coords.left}%`;
      hs.style.width = `${comp.coords.width}%`;
      hs.style.height = `${comp.coords.height}%`;
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
      
      card.innerHTML = `
        <div class="d-flex align-items-center gap-2">
          <div style="width: 26px; height: 26px; border-radius: 50%; background-color: ${comp.color}; color: white; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; flex-shrink: 0;">
            ${comp.number}
          </div>
          <span style="color: #0f172a; font-weight: 600; font-size: 0.85rem; line-height: 1.2;">${comp.name}</span>
        </div>
        <div style="color: #94a3b8; font-size: 1.2rem; line-height: 1; margin-left: 10px;">⋮⋮</div>
      `;
      
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
    
    const card = document.querySelector(`.osc-beautiful-card[data-id="${comp.id}"]`);
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
      `<strong class="text-white fs-6">${comp.name}</strong><br><br>${comp.description}<br><br><div class="p-2 mt-2 rounded" style="background-color: rgba(16, 185, 129, 0.1); border-left: 3px solid #10b981;">💡 <strong>Aplicación en Bioinstrumentación:</strong> <span class="text-light-theme-adjust">${comp.bioApp}</span></div>`,
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
      hs.style.top = `${comp.coords.top}%`;
      hs.style.left = `${comp.coords.left}%`;
      hs.style.width = `${comp.coords.width}%`;
      hs.style.height = `${comp.coords.height}%`;
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
    scoreCounter.parentElement.innerHTML = `🎯 Aciertos Trivia: <span class="text-warning fw-bold" id="osc-score-counter">0/3</span>`;
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
    
    phase2Container.innerHTML = `
      <div class="alert alert-warning py-2 px-3 small border-0 mb-2" style="background-color: rgba(245, 158, 11, 0.1); color: var(--text-primary);">
        🤔 <strong>Pregunta ${currentTriviaIndex + 1} de ${triviaQuestions.length}:</strong> Selecciona la respuesta correcta basándote en lo que aprendiste.
      </div>
      <div class="card bg-dark-card border-warning p-3">
        <p class="fw-semibold mb-3" style="color: var(--text-primary); font-size: 0.9rem;">${q.q.replace(/\\n/g, '<br>')}</p>
        <div class="d-flex flex-column gap-2" id="osc-trivia-options"></div>
      </div>
    `;
    
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
      document.getElementById('osc-score-counter').textContent = `${triviaScore}/3`;
    } else {
      btnElement.classList.add('incorrect');
      btns[correctIndex].classList.add('correct');
    }
    
    setTimeout(() => {
      showModal(
        isCorrect ? '¡Correcto!' : 'Respuesta Incorrecta',
        `${explanation}`,
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
    document.getElementById('osc-score-counter').parentElement.innerHTML = `🔥 Pasos Completados: <span class="text-danger fw-bold" id="osc-score-counter">0/${challengeSteps.length}</span>`;
    
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
    
    phase3Container.innerHTML = `
      <div class="alert alert-danger py-2 px-3 small border-0 mb-2" style="background-color: rgba(239, 68, 68, 0.1); color: var(--text-primary);">
        ⚙️ <strong>Reto Práctico:</strong> Ejecuta la siguiente acción haciendo clic en la zona correcta del osciloscopio.
      </div>
      <div class="card bg-dark-card border-danger p-3 text-center">
        <h4 class="h5 text-danger fw-bold mb-2">Paso ${currentChallengeStep + 1}</h4>
        <p class="mb-0" style="color: var(--text-primary);">${step.instruction}</p>
      </div>
    `;
    
    hotspotsContainer.innerHTML = '';
    const comp = componentsList.find(c => c.id === step.target);
    
    const hs = document.createElement('div');
    hs.className = 'osc-dashed-hotspot highlight-blue';
    hs.style.top = `${comp.coords.top}%`;
    hs.style.left = `${comp.coords.left}%`;
    hs.style.width = `${comp.coords.width}%`;
    hs.style.height = `${comp.coords.height}%`;
    hs.style.border = `2px solid #ef4444`;
    hs.style.pointerEvents = 'auto'; 
    
    hs.addEventListener('click', () => {
      hs.style.pointerEvents = 'none';
      hs.classList.remove('highlight-blue');
      hs.style.backgroundColor = 'rgba(16, 185, 129, 0.4)';
      hs.style.borderColor = '#10b981';
      
      currentChallengeStep++;
      document.getElementById('osc-score-counter').textContent = `${currentChallengeStep}/${challengeSteps.length}`;
      updateProgress();
      
      setTimeout(() => {
        renderChallengeStep();
      }, 500);
    });
    
    hotspotsContainer.appendChild(hs);
  };

  startPhase1();
}
export function initDmmActivity(onAwardXp) {
  
  if (!document.getElementById('dmm-activity-styles')) {
    const styleEl = document.createElement('style');
    styleEl.id = 'dmm-activity-styles';
    styleEl.innerHTML = `
      .dmm-draggable-card { background-color: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 0.75rem; cursor: grab; display: flex; align-items: center; gap: 0.75rem; transition: all 0.2s ease; }
      .dmm-draggable-card:active { cursor: grabbing; }
      .dmm-draggable-card.dragging { opacity: 0.6; transform: scale(0.98); border-color: #3b82f6; }
      .dmm-draggable-card.matched-card { opacity: 0.5; background-color: var(--bg-tertiary); pointer-events: none; }
      .dmm-card-icon { width: 24px; height: 24px; border-radius: 50%; background-color: var(--bg-tertiary); display: flex; align-items: center; justify-content: center; font-size: 0.7rem; border: 1px solid var(--border-color); }
      .dmm-dashed-hotspot { position: absolute; border: 2px dashed rgba(255, 255, 255, 0.4); border-radius: var(--radius-sm); transition: all 0.2s ease; z-index: 10; background-color: rgba(255,255,255,0.05); }
      .show-hints .dmm-dashed-hotspot:not(.matched) { border-color: #3b82f6; background-color: rgba(59, 130, 246, 0.2); animation: pulse-blue 1.5s infinite; }
      .dmm-dashed-hotspot.matched { border-style: solid; border-width: 2px; }
      .dmm-hotspot-badge { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 22px; height: 22px; border-radius: 50%; background-color: rgba(15, 23, 42, 0.85); color: var(--text-primary); border: 1px solid rgba(255,255,255,0.4); display: flex; align-items: center; justify-content: center; font-size: 0.65rem; font-weight: bold; pointer-events: none; box-shadow: 0 2px 4px rgba(0,0,0,0.3); }
      .matched .dmm-hotspot-badge { color: white; }
    `;
    document.head.appendChild(styleEl);
  }
const root = document.getElementById('dmm-interactive-activity-root');
  if (!root) return;
  
  const phase1Container = document.getElementById('dmm-phase-1-cards-container');
  const phase2Container = document.getElementById('dmm-phase-2-trivia-container');
  const phase3Container = document.getElementById('dmm-phase-3-challenge-container');
  const cardsBank = document.getElementById('dmm-draggable-cards-bank');
  const hotspotsContainer = document.getElementById('dmm-hotspots-overlay-container');
  const progressBar = document.getElementById('dmm-activity-progress-bar');
  const progressText = document.getElementById('dmm-progress-percent');
  const scoreCounter = document.getElementById('dmm-score-counter');
  const badge = document.getElementById('dmm-active-phase-badge');
  const title = document.getElementById('dmm-active-phase-title');
  const hintBtn = document.getElementById('dmm-hint-button');
  
  const modalBackdrop = document.getElementById('dmm-info-modal-backdrop');
  const modalContent = document.getElementById('dmm-info-modal-content');
  const modalIcon = document.getElementById('dmm-info-modal-icon');
  const modalTitle = document.getElementById('dmm-info-modal-title');
  const modalBody = document.getElementById('dmm-info-modal-body');
  const modalCloseBtn = document.getElementById('dmm-info-modal-close-btn');

  let currentPhase = 1;
  let phase1Score = 0;
  let triviaScore = 0;
  let currentTriviaIndex = 0;
  let currentChallengeStep = 0;

  const componentsList = [
    {
      id: "pantalla-dmm",
      name: "Pantalla OLED / LCD",
      description: "Muestra la lectura principal de 5½ dígitos, la función activa y la escala de la medición.",
      color: "#3b82f6",
      coords: { top: 10, left: 7, width: 68, height: 44 },
      number: "1"
    },
    {
      id: "encendido-dmm",
      name: "Botón de Encendido",
      description: "Enciende y apaga el equipo. Se ubica típicamente en la esquina inferior izquierda.",
      color: "#ef4444",
      coords: { top: 60, left: 9, width: 7, height: 23 },
      number: "2"
    },
    {
      id: "teclado-medicion",
      name: "Teclado de Medición",
      description: "Botones para seleccionar el modo (DCV, ACV, DCI, ACI, Ohm, Continuidad).",
      color: "#10b981",
      coords: { top: 56, left: 18, width: 27, height: 27 },
      number: "3"
    },
    {
      id: "teclado-funciones",
      name: "Teclas de Configuración",
      description: "Botones para Shift, Null, Auto-rango, y navegación por el menú.",
      color: "#f59e0b",
      coords: { top: 56, left: 47, width: 26, height: 27 },
      number: "4"
    },
    {
      id: "terminales-voltaje",
      name: "Terminales V/Ω/Diode",
      description: "Terminales de entrada para medición de voltaje, resistencia y prueba de diodos (Rojo y Negro).",
      color: "#8b5cf6",
      coords: { top: 22, left: 75, width: 22, height: 42 },
      number: "5"
    },
    {
      id: "terminales-corriente",
      name: "Terminales de Corriente",
      description: "Conectores específicos para medir corriente (10A y 100mA). Requieren que el circuito esté en serie.",
      color: "#ec4899",
      coords: { top: 66, left: 75, width: 22, height: 16 },
      number: "6"
    }
  ];

  const triviaQuestions = [
    {
      q: "¿En qué configuración debes conectar el multímetro para medir el voltaje de un componente?",
      options: [
        "En serie con el componente",
        "En paralelo con el componente",
        "Sin conectar el borne común (COM)",
        "No importa la configuración"
      ],
      correct: 1,
      explanation: "El voltaje se mide siempre en paralelo para evaluar la diferencia de potencial entre dos puntos sin interrumpir el circuito."
    },
    {
      q: "¿Qué precaución es indispensable antes de medir resistencia en un circuito?",
      options: [
        "Desconectar la fuente de alimentación del circuito",
        "Configurar el multímetro en el rango más bajo",
        "Cortocircuitar las puntas",
        "Aplicar una pequeña corriente de prueba"
      ],
      correct: 0,
      explanation: "Nunca se debe medir resistencia en un circuito energizado. Esto dañaría el multímetro internamente."
    },
    {
      q: "¿Cómo se debe conectar el multímetro para medir corriente continua (DCI)?",
      options: [
        "En paralelo con la fuente",
        "En paralelo con la carga",
        "En serie, abriendo el circuito e intercalando el multímetro",
        "Directamente a la toma de corriente"
      ],
      correct: 2,
      explanation: "Para medir corriente, los electrones deben atravesar el multímetro, por lo que este debe formar parte del camino (en serie)."
    }
  ];

  const challengeSteps = [
    { instruction: "1. Enciende el Multímetro.", target: "encendido-dmm" },
    { instruction: "2. Selecciona la función de Medición de Voltaje Continuo (DCV).", target: "teclado-medicion" },
    { instruction: "3. Conecta las puntas a los terminales correctos para leer el voltaje.", target: "terminales-voltaje" }
  ];

  const updateProgress = () => {
    let totalSteps = componentsList.length + triviaQuestions.length + challengeSteps.length;
    let completedSteps = phase1Score + triviaScore + currentChallengeStep;
    
    // Si la fase 2 está activa, añade los puntos de fase 1 para que la barra no baje
    if (currentPhase === 2) completedSteps = componentsList.length + triviaScore;
    // Si la fase 3 está activa, añade los de fase 1 y fase 2
    if (currentPhase === 3) completedSteps = componentsList.length + triviaQuestions.length + currentChallengeStep;

    const pct = Math.round((completedSteps / totalSteps) * 100);
    progressBar.style.width = `${pct}%`;
    progressText.textContent = `${pct}%`;
  };

  const showModal = (titleTxt, bodyTxt, type = 'success', onCloseCallback = null) => {
    modalTitle.textContent = titleTxt;
    modalBody.innerHTML = bodyTxt;
    
    if (type === 'success') {
      modalIcon.textContent = '✅';
      modalTitle.style.color = '#10b981';
      modalContent.style.borderColor = '#10b981';
      modalCloseBtn.style.backgroundColor = '#10b981';
    } else if (type === 'info') {
      modalIcon.textContent = 'ℹ️';
      modalTitle.style.color = '#3b82f6';
      modalContent.style.borderColor = '#3b82f6';
      modalCloseBtn.style.backgroundColor = '#3b82f6';
    } else if (type === 'warning') {
      modalIcon.textContent = '🏆';
      modalTitle.style.color = '#f59e0b';
      modalContent.style.borderColor = '#f59e0b';
      modalCloseBtn.style.backgroundColor = '#f59e0b';
      modalCloseBtn.style.color = '#000';
    }

    modalBackdrop.classList.remove('d-none');
    
    const closeHandler = () => {
      modalBackdrop.classList.add('d-none');
      modalCloseBtn.removeEventListener('click', closeHandler);
      if (onCloseCallback) onCloseCallback();
    };
    modalCloseBtn.addEventListener('click', closeHandler);
  };

  // --- PHASE 1: HOTSPOTS ---
  const startPhase1 = () => {
    currentPhase = 1;
    cardsBank.innerHTML = '';
    hotspotsContainer.innerHTML = '';
    phase1Score = 0;
    scoreCounter.textContent = '0/' + componentsList.length;
    updateProgress();

    const shuffled = [...componentsList].sort(() => Math.random() - 0.5);

    shuffled.forEach(comp => {
      const card = document.createElement('div');
      card.className = 'dmm-draggable-card shadow-sm';
      card.draggable = true;
      card.dataset.id = comp.id;
      
      const icon = document.createElement('div');
      icon.className = 'dmm-card-icon';
      icon.innerHTML = '<span class="text-secondary fw-bold">?</span>';
      
      const text = document.createElement('span');
      text.className = 'fw-semibold small'; text.style.color = 'var(--text-primary)';
      text.textContent = comp.name;

      card.appendChild(icon);
      card.appendChild(text);

      card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', comp.id);
        card.classList.add('dragging');
        hotspotsContainer.classList.add('show-hints');
      });

      card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
        hotspotsContainer.classList.remove('show-hints');
      });

      cardsBank.appendChild(card);
    });

    componentsList.forEach(comp => {
      const hs = document.createElement('div');
      hs.className = 'dmm-dashed-hotspot';
      hs.dataset.id = comp.id;
      hs.style.top = `${comp.coords.top}%`;
      hs.style.left = `${comp.coords.left}%`;
      hs.style.width = `${comp.coords.width}%`;
      hs.style.height = `${comp.coords.height}%`;

      const badgeEl = document.createElement('div');
      badgeEl.className = 'dmm-hotspot-badge text-dark';
      badgeEl.textContent = '?';
      hs.appendChild(badgeEl);

      hs.addEventListener('dragover', e => e.preventDefault());
      hs.addEventListener('drop', e => {
        e.preventDefault();
        const draggedId = e.dataTransfer.getData('text/plain');
        if (draggedId === comp.id) {
          handleCorrectMatch(comp, hs);
        }
      });
      
      hotspotsContainer.appendChild(hs);
    });
    
    if (hintBtn) {
      hintBtn.onclick = () => {
        hotspotsContainer.classList.add('show-hints');
        setTimeout(() => hotspotsContainer.classList.remove('show-hints'), 2000);
      };
    }
  };

  const handleCorrectMatch = (comp, hsElement) => {
    const card = document.querySelector(`.dmm-draggable-card[data-id="${comp.id}"]`);
    if (card) {
      card.classList.add('matched-card');
      card.draggable = false;
      const icon = card.querySelector('.dmm-card-icon');
      icon.innerHTML = '<span class="text-white fw-bold">✓</span>';
      icon.style.backgroundColor = comp.color;
      icon.style.borderColor = comp.color;
    }

    hsElement.classList.add('matched');
    hsElement.style.borderColor = comp.color;
    hsElement.style.backgroundColor = comp.color + '20';
    const badgeEl = hsElement.querySelector('.dmm-hotspot-badge');
    badgeEl.textContent = comp.number;
    badgeEl.style.backgroundColor = comp.color;
    badgeEl.style.color = '#fff';

    phase1Score++;
    scoreCounter.textContent = `${phase1Score}/${componentsList.length}`;
    updateProgress();

    showModal(`¡Correcto! ${comp.name}`, comp.description, 'success', () => {
      if (phase1Score >= componentsList.length) {
        setTimeout(startPhase2, 500);
      }
    });
  };

  // --- PHASE 2: TRIVIA ---
  const startPhase2 = () => {
    currentPhase = 2;
    phase1Container.classList.add('d-none');
    phase2Container.classList.remove('d-none');
    
    hotspotsContainer.innerHTML = '';
    componentsList.forEach(comp => {
      const hs = document.createElement('div');
      hs.className = 'dmm-dashed-hotspot matched';
      hs.style.top = `${comp.coords.top}%`;
      hs.style.left = `${comp.coords.left}%`;
      hs.style.width = `${comp.coords.width}%`;
      hs.style.height = `${comp.coords.height}%`;
      hs.style.borderColor = comp.color;
      hs.style.backgroundColor = comp.color + '20';
      
      const badgeEl = document.createElement('div');
      badgeEl.className = 'dmm-hotspot-badge text-white';
      badgeEl.style.backgroundColor = comp.color;
      badgeEl.textContent = comp.number;
      hs.appendChild(badgeEl);
      
      hotspotsContainer.appendChild(hs);
    });

    badge.className = 'badge bg-warning text-dark fs-7';
    badge.textContent = 'Fase 2 de 3';
    title.textContent = 'Modo de Conexión';
    scoreCounter.parentElement.innerHTML = `🎯 Aciertos Trivia: <span class="text-warning fw-bold" id="dmm-score-counter">0/3</span>`;
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
    
    phase2Container.innerHTML = `
      <div class="alert alert-warning py-2 px-3 small border-0 mb-2" style="background-color: rgba(245, 158, 11, 0.1); color: var(--text-primary);">
        🤔 <strong>Pregunta ${currentTriviaIndex + 1} de ${triviaQuestions.length}:</strong>
      </div>
      <div class="card bg-dark-card border-warning p-3">
        <p class="fw-semibold mb-3" style="color: var(--text-primary); font-size: 0.9rem;">${q.q}</p>
        <div class="d-flex flex-column gap-2" id="dmm-trivia-options"></div>
      </div>
    `;
    
    const optsContainer = document.getElementById('dmm-trivia-options');
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
    const btns = document.querySelectorAll('#dmm-trivia-options .trivia-option-btn');
    btns.forEach(b => b.disabled = true);
    
    if (isCorrect) {
      btnElement.classList.add('correct');
      triviaScore++;
      document.getElementById('dmm-score-counter').textContent = `${triviaScore}/3`;
    } else {
      btnElement.classList.add('incorrect');
      btns[correctIndex].classList.add('correct');
    }
    
    setTimeout(() => {
      showModal(
        isCorrect ? '¡Correcto!' : 'Respuesta Incorrecta',
        `${explanation}`,
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
    currentPhase = 3;
    phase2Container.classList.add('d-none');
    phase3Container.classList.remove('d-none');
    
    badge.className = 'badge bg-danger fs-7';
    badge.textContent = 'Fase 3 de 3';
    title.textContent = 'Reto Físico';
    document.getElementById('dmm-score-counter').parentElement.innerHTML = `🔥 Pasos Completados: <span class="text-danger fw-bold" id="dmm-score-counter">0/${challengeSteps.length}</span>`;
    
    currentChallengeStep = 0;
    updateProgress();
    renderChallengeStep();
  };

  const renderChallengeStep = () => {
    if (currentChallengeStep >= challengeSteps.length) {
      updateProgress();
      showModal(
        '¡Laboratorio Completado!',
        'Has demostrado conocer el uso seguro del multímetro y los principios de medición.',
        'warning',
        () => {
          if (onAwardXp) onAwardXp(150, 'Dominio del Multímetro Digital');
        }
      );
      return;
    }
    
    const step = challengeSteps[currentChallengeStep];
    
    phase3Container.innerHTML = `
      <div class="alert alert-danger py-2 px-3 small border-0 mb-2" style="background-color: rgba(239, 68, 68, 0.1); color: var(--text-primary);">
        ⚙️ <strong>Reto Práctico:</strong> Ejecuta la siguiente acción haciendo clic en la zona correcta del multímetro.
      </div>
      <div class="card bg-dark-card border-danger p-3 text-center">
        <h4 class="h5 text-danger fw-bold mb-2">Paso ${currentChallengeStep + 1}</h4>
        <p class="mb-0" style="color: var(--text-primary);">${step.instruction}</p>
      </div>
    `;
    
    hotspotsContainer.innerHTML = '';
    const comp = componentsList.find(c => c.id === step.target);
    
    const hs = document.createElement('div');
    hs.className = 'dmm-dashed-hotspot highlight-blue';
    hs.style.top = `${comp.coords.top}%`;
    hs.style.left = `${comp.coords.left}%`;
    hs.style.width = `${comp.coords.width}%`;
    hs.style.height = `${comp.coords.height}%`;
    hs.style.border = `2px solid #ef4444`;
    hs.style.pointerEvents = 'auto'; 
    
    hs.addEventListener('click', () => {
      hs.style.pointerEvents = 'none';
      hs.classList.remove('highlight-blue');
      hs.style.backgroundColor = 'rgba(16, 185, 129, 0.4)';
      hs.style.borderColor = '#10b981';
      
      currentChallengeStep++;
      document.getElementById('dmm-score-counter').textContent = `${currentChallengeStep}/${challengeSteps.length}`;
      updateProgress();
      
      setTimeout(() => {
        renderChallengeStep();
      }, 500);
    });
    
    hotspotsContainer.appendChild(hs);
  };

  startPhase1();
}
