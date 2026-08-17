import re

filepath = 'g:/Mi unidad/Proyectos_Antigravity/InstrumentacionB/public/simulador_cargas_campo_electrico.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Layout and CSS for the Header
css_patch = """
header{padding:24px clamp(18px,4vw,54px);background:linear-gradient(135deg,#0a2e5c,#154f91);color:#fff}
header h1{margin:.25rem 0;font-size:clamp(1.8rem,3vw,2.8rem)}
header p{margin:0;max-width:980px;opacity:.92}
.app{display:grid;grid-template-columns:minmax(0,1fr) 350px;height:calc(100vh - 140px)}
"""
content = content.replace('height:100vh}', css_patch + '}')
content = content.replace('.side{', '.side{scrollbar-width:thin;')

# Add tooltip CSS
tooltip_css = """
.info-btn{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:var(--accent);color:#000;font-weight:bold;font-size:11px;cursor:help;margin-left:6px;position:relative}
"""
content = content.replace('</style>', tooltip_css + '\n</style>')

# 2. Add Header HTML
header_html = """
<header><div style="font-size:.78rem;letter-spacing:.13em;text-transform:uppercase;opacity:.8">Bioinstrumentación · Fundamentos Físicos</div><h1>⚡ Laboratorio de Cargas y Campo Eléctrico</h1><p>Construya configuraciones de cargas, mida el potencial (Voltaje) y observe la fuerza electromotriz responsable de generar corriente eléctrica.</p></header>
"""
content = content.replace('<div class="app">', header_html + '\n<div class="app">')

# 3. Update the Title inside the aside (we can just remove it since it's in the header now, or change it)
content = content.replace('<h1>⚡ Cargas y campo eléctrico</h1><div class="sub">Laboratorio virtual para bioinstrumentación y fundamentos eléctricos.</div>', '')

# 4. Add tooltips to Parameters
content = content.replace('<label>Escala de campo</label>', '<label>Escala de campo<span class="info-btn" title="Amplifica visualmente los vectores del campo para ver campos débiles con mayor claridad.">i</span></label>')
content = content.replace('<label>Velocidad de simulación</label>', '<label>Velocidad simulación<span class="info-btn" title="Qué tan rápido se mueven las cargas bajo la influencia de la fuerza eléctrica (F=qE).">i</span></label>')
content = content.replace('<label>Amortiguamiento</label>', '<label>Amortiguamiento<span class="info-btn" title="Simula fricción o resistencia. Si es alto (0.999), las cargas oscilan eternamente. Si es bajo, se detienen rápido.">i</span></label>')
content = content.replace('<label>Fijar cargas</label>', '<label>Fijar cargas<span class="info-btn" title="Congela todas las cargas en su posición actual, ideal para medir el campo o potencial estático.">i</span></label>')

# 5. Replace "Conceptos observables" with "Misiones de aprendizaje"
misiones_html = """
<div class="card" style="border-color:var(--accent)">
  <h2 style="color:var(--accent);margin-bottom:6px">🧪 Misiones de aprendizaje</h2>
  <div style="font-weight:800;color:var(--ink);margin-bottom:6px;font-size:0.95rem" id="missionT">Misión 1</div>
  <div style="font-size:0.86rem;line-height:1.4;color:var(--muted)" id="missionD">Descripción</div>
  <div class="row" style="margin-top:12px;grid-template-columns:1fr auto">
    <button id="check" class="primary" style="width:100%;padding:7px;font-size:0.9rem">Verificar misión</button>
    <button id="next" style="padding:7px 12px">▶</button>
  </div>
  <div id="feedback" style="min-height:36px;margin-top:9px;font-weight:700;font-size:0.85rem"></div>
</div>
"""
content = re.sub(r'<div class="card"><h2>Conceptos observables</h2>.*?</div></div>', misiones_html, content, flags=re.DOTALL)

# 6. Add JS logic for Misiones
misiones_js = """
// --- MISIONES DE APRENDIZAJE ---
const misiones = [
  ['Misión 1 — El origen del Voltaje', 'Coloca solo UNA carga positiva (+). Arrastra el <b>Sensor</b> lejos y cerca de ella. ¿Qué le pasa al Voltaje (Potencial)?<br><br><span style="color:var(--accent)">💡 <b>Pista:</b> Aléjate a más de 300px (verifica el valor del Sensor). Entenderás por qué el voltaje cae con la distancia.</span>'],
  ['Misión 2 — El Dipolo Eléctrico', 'El corazón humano actúa como un dipolo. Limpia la pantalla, pon una carga <b>+</b> y una <b>-</b> separadas por unos centímetros. Activa las <b>Líneas de campo</b>.<br><br><span style="color:var(--accent)">💡 <b>Pista:</b> Observa cómo la energía fluye del polo positivo al negativo.</span>'],
  ['Misión 3 — Fuerza Electromotriz', 'Activa "Fijar cargas". Pon 2 cargas <b>-</b> a la izquierda (polo negativo de una batería). Pon una carga <b>+</b> en el centro y quita "Fijar cargas".<br><br><span style="color:var(--accent)">💡 <b>Pista:</b> La repulsión empuja la carga central simulando una Corriente DC. Haz clic en ▶ Simular.</span>']
];
let currentMission = 0;
function updateMission(){
  $('missionT').textContent = misiones[currentMission][0];
  $('missionD').innerHTML = misiones[currentMission][1];
  $('feedback').textContent = '';
}
$('next').onclick = () => { currentMission = (currentMission + 1) % misiones.length; updateMission(); };
$('check').onclick = () => {
  let ok = false;
  let msg = '';
  const s = sensors[0];
  if(currentMission === 0){
    const pos = charges.filter(c => c.q > 0).length;
    const neg = charges.filter(c => c.q < 0).length;
    ok = pos === 1 && neg === 0 && s && fieldAt(s.x, s.y).v < 2.0;
    msg = '❌ Aún no. Deja solo 1 carga positiva y aleja el sensor para que el voltaje sea menor a 2.0 V.';
  } else if(currentMission === 1){
    const pos = charges.filter(c => c.q > 0).length;
    const neg = charges.filter(c => c.q < 0).length;
    ok = pos === 1 && neg === 1 && $('linesOn').checked;
    msg = '❌ Aún no. Pon exactamente una carga (+) y una (-). Y no olvides activar "Líneas de campo".';
  } else if(currentMission === 2){
    const neg = charges.filter(c => c.q < 0).length;
    ok = neg >= 2 && running;
    msg = '❌ Aún no. Pon al menos 2 cargas (-) fijas, añade otra carga, y dale click a "▶ Simular movimiento".';
  }
  
  $('feedback').style.color = ok ? 'var(--ok)' : 'var(--danger)';
  $('feedback').innerHTML = ok ? '✅ <b>¡Excelente!</b> Has comprobado este principio eléctrico.' : msg;
};
updateMission();
// ---------------------------------
"""
content = content.replace('</script>', misiones_js + '\n</script>')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Cargas simulator updated successfully!")
