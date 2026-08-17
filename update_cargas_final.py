import re

filepath = 'g:/Mi unidad/Proyectos_Antigravity/InstrumentacionB/public/simulador_cargas_campo_electrico.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add Tooltip JS and CSS
tooltip_css = """
.global-tooltip{position:fixed;background:var(--panel2);color:var(--ink);border:1px solid var(--accent);padding:10px 14px;border-radius:8px;font-size:0.85rem;max-width:280px;pointer-events:none;opacity:0;transition:opacity 0.15s ease;z-index:9999;box-shadow:0 8px 24px rgba(0,0,0,0.5);line-height:1.4}
.global-tooltip.visible{opacity:1}
"""
content = content.replace('.info-btn{', tooltip_css + '.info-btn{')

tooltip_js = """
// --- TOOLTIPS ---
const tooltip = document.createElement('div');
tooltip.className = 'global-tooltip';
document.body.appendChild(tooltip);
document.addEventListener('mouseover', (e) => {
  const target = e.target.closest('[data-tooltip]');
  if (target) {
    tooltip.innerHTML = target.getAttribute('data-tooltip');
    tooltip.classList.add('visible');
  }
});
document.addEventListener('mousemove', (e) => {
  if (tooltip.classList.contains('visible')) {
    tooltip.style.left = (e.clientX + 15) + 'px';
    tooltip.style.top = (e.clientY + 15) + 'px';
  }
});
document.addEventListener('mouseout', (e) => {
  if (e.target.closest('[data-tooltip]')) {
    tooltip.classList.remove('visible');
  }
});
"""
content = content.replace('// --- MISIONES DE APRENDIZAJE ---', tooltip_js + '\n// --- MISIONES DE APRENDIZAJE ---')

# Replace title="..." with data-tooltip="..."
content = content.replace('title="', 'data-tooltip="')

# 2. Add Fail Messages to Missions
old_check_logic = """$('check').onclick = () => {
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
};"""

new_check_logic = """$('check').onclick = () => {
  let ok = false;
  let msg = '';
  const s = sensors[0];
  if(currentMission === 0){
    const pos = charges.filter(c => c.q > 0).length;
    const neg = charges.filter(c => c.q < 0).length;
    ok = pos === 1 && neg === 0 && s && fieldAt(s.x, s.y).v < 2.0;
    msg = '❌ Aún no. <b>Paso a paso:</b><br>1. Presiona "Limpiar".<br>2. Agrega una carga (+).<br>3. Agrega un "Sensor" y arrástralo lejos de la carga hasta que la lectura "Potencial" baje de 2.0 V.';
  } else if(currentMission === 1){
    const pos = charges.filter(c => c.q > 0).length;
    const neg = charges.filter(c => c.q < 0).length;
    ok = pos === 1 && neg === 1 && $('linesOn').checked;
    msg = '❌ Aún no. <b>Paso a paso:</b><br>1. Limpia la pantalla.<br>2. Pon una carga (+).<br>3. Pon una carga (-) a unos centímetros.<br>4. Activa la casilla "Líneas de campo" en el panel derecho.';
  } else if(currentMission === 2){
    const neg = charges.filter(c => c.q < 0).length;
    ok = neg >= 2 && running;
    msg = '❌ Aún no. <b>Paso a paso:</b><br>1. Activa la casilla "Fijar cargas".<br>2. Coloca dos o tres cargas (-) a la izquierda.<br>3. Desactiva "Fijar cargas".<br>4. Pon una carga (+) en el centro y presiona el botón azul "▶ Simular movimiento".';
  }
  
  $('feedback').style.color = ok ? 'var(--ok)' : 'var(--danger)';
  $('feedback').innerHTML = ok ? '✅ <b>¡Misión superada!</b> Has comprobado este principio.' : msg;
};"""

content = content.replace(old_check_logic, new_check_logic)


# 3. Add feedback to Play Button
old_play = """$('play').onclick=()=>{running=true;$('play').classList.add('active');$('pause').classList.remove('active')};"""
new_play = """$('play').onclick=()=>{
  if($('fixedCharges').checked) {
    alert("¡Atención! Tienes activada la opción 'Fijar cargas', por lo que nada se moverá. Por favor, desmarca esa casilla en el panel lateral.");
    return;
  }
  if(charges.length <= 1) {
    alert("¡Atención! Solo tienes una carga en la pantalla. Para que exista movimiento electromagnético, necesitas al menos DOS cargas para que se atraigan o repelan (Fuerza = Masa x Aceleración).");
    return;
  }
  running=true;
  $('play').classList.add('active');
  $('pause').classList.remove('active');
};"""

content = content.replace(old_play, new_play)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updates applied successfully!")
