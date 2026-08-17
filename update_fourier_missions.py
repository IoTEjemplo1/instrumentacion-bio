import re

filepath = 'g:/Mi unidad/Proyectos_Antigravity/InstrumentacionB/public/simulador_fourier.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Hide the Marcadores Educativos
content = content.replace('<div class="section"><h3>Marcadores educativos</h3>', '<div class="section" style="display:none"><h3>Marcadores educativos</h3>')

# 2. Inject the Misiones section before the closing </aside>
missions_html = """
<div class="section activity" style="margin-top:13px;padding-top:13px">
  <h3 style="margin:0 0 8px;font-size:1rem;color:var(--p)">🧪 Misiones de aprendizaje</h3>
  <div class="challenge" style="padding:13px;border:1px solid var(--line);border-radius:13px;background:var(--card)">
    <div style="font-weight:800;color:var(--ink);margin-bottom:6px" id="missionT"></div>
    <div style="font-size:0.9rem;line-height:1.4" id="missionD"></div>
    <div style="display:grid;grid-template-columns:1fr auto;gap:8px;margin-top:12px">
      <button id="check" class="primary" style="width:100%">Verificar misión</button>
      <button id="next" class="secondary" title="Siguiente misión">▶</button>
    </div>
    <div id="feedback" style="min-height:42px;margin-top:9px;font-weight:700;font-size:0.85rem"></div>
  </div>
</div>
"""
content = content.replace('</aside>', missions_html + '</aside>')

# 3. Add the missions JS logic at the end before </script>
missions_js = """
const fourierMissions = [
  ['Misión 1 — Teorema de Nyquist (Aliasing)','Genera una onda "Senoidal" pura (solo el Componente 1 a 100 Hz). Reduce el "Muestreo" al mínimo (128 Hz). ¿Qué frecuencia falsa aparece en el espectro?<br><br><span style="color:var(--s)">💡 <b>Sugerencia:</b> El teorema de Nyquist dice que debes muestrear a más del doble de la frecuencia real. ¡128 Hz no alcanza para medir 100 Hz, engañando a la máquina!</span>'],
  ['Misión 2 — Filtrar Interferencia (ECG)','Carga la señal "ECG sintético", añade "Interferencia de red". Luego, intenta borrar el ruido sin deformar el ECG.<br><br><span style="color:var(--s)">💡 <b>Sugerencia:</b> Activa el filtro "Notch 50/60 Hz" y revisa en el espectro de la derecha cómo el gran pico contaminante desaparece.</span>'],
  ['Misión 3 — Síntesis de Onda Cuadrada','Haz clic en el botón superior "Cuadrada". Analiza sus componentes en la tabla de la derecha: ¿Qué relación tienen sus frecuencias?<br><br><span style="color:var(--s)">💡 <b>Sugerencia:</b> Una onda cuadrada se crea sumando los armónicos IMPARES (10, 30, 50 Hz...) con amplitudes decrecientes.</span>'],
  ['Misión 4 — Resolución Espectral','Pon la onda "Cuadrada" y agrega Ruido blanco a 0.5 V. Sube la "Duración" a 4 segundos. ¿Qué le pasa a la base de los picos en el espectro?<br><br><span style="color:var(--s)">💡 <b>Sugerencia:</b> A mayor tiempo grabado (Duración), mayor es la "Resolución espectral". Verás que los picos se vuelven mucho más delgados y se asoman por encima del mar de ruido.</span>']
];
let currentFMission = 0;
function updateFMission(){
  $('missionT').textContent = fourierMissions[currentFMission][0];
  $('missionD').innerHTML = fourierMissions[currentFMission][1];
  $('feedback').textContent = '';
}
$('next').onclick = () => {
  currentFMission = (currentFMission + 1) % fourierMissions.length;
  updateFMission();
};
$('check').onclick = () => {
  const m = currentFMission;
  let ok = false;
  let failMsg = '';
  
  if (m === 0) {
    ok = $('fs').value == '128' && state.comps[0].freq == 100 && state.comps[0].enabled;
    failMsg = '❌ Aún no. <b>Paso a paso:</b><br>1. Apaga Comp 2 y 3.<br>2. Comp 1: Frec = 100 Hz.<br>3. Muestreo: Baja la barra al mínimo (128 Hz).';
  } else if (m === 1) {
    ok = state.preset === 'ecg' && $('mains').checked && $('filterOn').checked && $('filterType').value === 'notch';
    failMsg = '❌ Aún no. <b>Paso a paso:</b><br>1. Clic en "ECG sintético".<br>2. Activa "Interferencia de red".<br>3. Activa "Filtro" y elige "Notch".';
  } else if (m === 2) {
    ok = state.preset === 'square';
    failMsg = '❌ Aún no. <b>Paso a paso:</b><br>Simplemente presiona el botón "Cuadrada" en el menú superior e inspecciona la tabla de picos abajo a la derecha.';
  } else if (m === 3) {
    ok = state.preset === 'square' && +$('noise').value >= 0.5 && +$('dur').value >= 4;
    failMsg = '❌ Aún no. <b>Paso a paso:</b><br>1. Clic en "Cuadrada".<br>2. Ruido blanco: sube a 0.5 V.<br>3. Duración: sube la barra a 4 s.';
  }
  
  $('feedback').style.color = ok ? 'var(--ok)' : 'var(--bad)';
  $('feedback').innerHTML = ok ? '✅ <b>¡Misión superada!</b> Excelente trabajo analizando el espectro.' : failMsg;
};
updateFMission();
"""
content = content.replace('build();update();\n</script>', 'build();update();\n' + missions_js + '\n</script>')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fourier missions added!")
