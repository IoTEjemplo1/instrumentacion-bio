import re

filepath = 'g:/Mi unidad/Proyectos_Antigravity/InstrumentacionB/public/laboratorio_virtual_filtros_ruido.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

old_check = r"\$\(\'check\'\)\.onclick=\(\)=>\{const m=state\.mission,s=state\.last;let ok=false;if\(m===0\).*?\'Aún no se cumplen todos los criterios\. Revisa el filtro y los indicadores\.\'\};"

new_check = """$('check').onclick=()=>{
  const m=state.mission,s=state.last;
  let ok=false;
  let failMsg='';
  if(m===0){
    ok=state.filter==='notch'&&Math.abs(+$('fc').value-60)<=2&&s.b-s.a>3&&s.dist<25;
    failMsg='❌ Aún no. <b>Paso a paso:</b><br>1. Señal: Elige ECG.<br>2. Ruido: Activa "Interferencia de red" (60 Hz).<br>3. Filtro: Elige "Rechazabanda".<br>4. Parámetros: fc = 60 Hz y Q > 5 (estrecho).';
  }
  if(m===1){
    ok=state.filter==='high'&&+$('fc').value>=.5&&+$('fc').value<=2&&$('baseOn').checked;
    failMsg='❌ Aún no. <b>Paso a paso:</b><br>1. Señal: Elige PPG.<br>2. Ruido: Activa "Deriva basal".<br>3. Filtro: Elige "Pasaaltas".<br>4. Parámetros: fc muy baja, entre 0.5 y 2.0 Hz.';
  }
  if(m===2){
    ok=state.filter==='low'&&$('whiteOn').checked&&s.b-s.a>2;
    failMsg='❌ Aún no. <b>Paso a paso:</b><br>1. Señal: Elige EMG.<br>2. Ruido: Activa "Ruido blanco".<br>3. Filtro: Elige "Pasabajas".<br>4. Parámetros: Baja el fc (ej. 40-80 Hz) hasta que la "Mejora SNR" sea mayor a +2.0 dB.';
  }
  if(m===3){
    ok=state.filter==='band'&&Math.abs(+$('fc').value-30)<=5&&+$('Q').value>=1&&+$('Q').value<=5;
    failMsg='❌ Aún no. <b>Paso a paso:</b><br>1. Señal: Elige Multisinusoidal.<br>2. Ruido: (Opcional).<br>3. Filtro: Elige "Pasabanda".<br>4. Parámetros: fc = 30 Hz y ajusta Q entre 1.0 y 5.0.';
  }
  $('feedback').className='feedback '+(ok?'ok':'bad');
  $('feedback').innerHTML=ok?'✅ <b>¡Misión superada!</b> Excelente trabajo configurando el filtro.':failMsg;
};"""

# Replace the code in a way that tolerates minification and lack of whitespace
content = re.sub(old_check, new_check.replace('\n', ''), content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Check button logic updated!")
