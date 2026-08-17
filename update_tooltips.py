import re

filepath = 'g:/Mi unidad/Proyectos_Antigravity/InstrumentacionB/public/laboratorio_virtual_filtros_ruido.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add CSS
css = """
.info-btn { display:inline-flex; align-items:center; justify-content:center; width:18px; height:18px; border-radius:50%; background:var(--p); color:#fff; font-size:12px; font-weight:bold; cursor:help; margin-left:8px; position:relative; vertical-align:middle; line-height:1; }
.info-balloon { position:absolute; bottom:120%; left:50%; transform:translateX(-50%); width:280px; background:var(--card); color:var(--ink); border:1px solid var(--p); border-radius:8px; padding:12px; font-size:13px; font-weight:normal; box-shadow:0 10px 25px rgba(0,0,0,0.3); opacity:0; visibility:hidden; transition:all 0.2s; z-index:10000; pointer-events:none; text-align:left; line-height:1.4; white-space:normal; }
.info-btn:hover .info-balloon, .info-btn:focus .info-balloon { opacity:1; visibility:visible; bottom:140%; }
.info-balloon::after { content:''; position:absolute; top:100%; left:50%; margin-left:-6px; border-width:6px; border-style:solid; border-color:var(--p) transparent transparent transparent; }
.info-balloon b { color:var(--p); }
"""
content = content.replace('</style>', css + '\n</style>')

# 2. Add tooltips to HTML
replacements = {
    '<h3>1. Tipo de filtro</h3>': '<h3>1. Tipo de filtro <div tabindex="0" class="info-btn">i<div class="info-balloon">Define qué frecuencias dejar pasar y cuáles bloquear.<br><br>• <b>Pasabajas:</b> Permite frecuencias bajas.<br>• <b>Pasaaltas:</b> Permite frecuencias altas.<br>• <b>Pasabanda:</b> Filtra un rango específico (útil en EMG).<br>• <b>Rechazabanda (Notch):</b> Elimina una frecuencia muy específica (como 60 Hz).</div></div></h3>',
    
    '<h3>2. Parámetros</h3>': '<h3>2. Parámetros <div tabindex="0" class="info-btn">i<div class="info-balloon"><b>Frecuencia característica (fc):</b> El punto donde el filtro empieza a atenuar la señal (-3 dB). Puedes calcularla ajustando componentes reales (R, C, L).<br><br>• <b>Factor Q:</b> En filtros pasabanda y notch, determina qué tan "estrecho" y selectivo es el filtro.</div></div></h3>',
    
    '<h3>3. Señal</h3>': '<h3>3. Señal <div tabindex="0" class="info-btn">i<div class="info-balloon">Configura la señal fisiológica sintética (ECG, EMG, PPG) que actuará como señal ideal pura.<br><br>• <b>Amplitud:</b> Voltaje de la señal.<br>• <b>Muestreo (fs):</b> Cantidad de datos capturados por segundo.</div></div></h3>',
    
    '<h3>4. Ruido</h3>': '<h3>4. Ruido <div tabindex="0" class="info-btn">i<div class="info-balloon">Añade interferencias típicas a la señal ideal.<br><br>• <b>Ruido blanco:</b> Ruido térmico de los electrodos.<br>• <b>Interferencia de red:</b> Zumbido eléctrico de 50/60 Hz.<br>• <b>Deriva basal:</b> Cambios lentos por la respiración del paciente.<br>• <b>Artefacto de movimiento:</b> Picos bruscos irregulares.</div></div></h3>',
    
    '<h2>Respuesta del filtro (Bode)</h2>': '<h2>Respuesta del filtro (Bode) <div tabindex="0" class="info-btn">i<div class="info-balloon">Muestra el comportamiento matemático de tu filtro.<br><br>• <b>Línea sólida (Magnitud):</b> Cuánta ganancia (dB) o atenuación se aplica a cada frecuencia.<br>• <b>Línea punteada (Fase):</b> El retraso temporal que introduce el filtro.</div></div></h2>',
    
    '<h2>Dominio del tiempo</h2>': '<h2>Dominio del tiempo <div tabindex="0" class="info-btn">i<div class="info-balloon">Compara visualmente la señal ideal (verde) contra la señal ruidosa (roja) y el resultado que produce tu filtro (azul).<br><br><b>Objetivo:</b> ¡Hacer que la línea azul se superponga lo más posible a la verde!</div></div></h2>',
    
    '<h2>Dominio de la frecuencia</h2>': '<h2>Dominio de la frecuencia <div tabindex="0" class="info-btn">i<div class="info-balloon">Analiza el espectro (FFT) antes y después del filtro.<br><br>Aquí puedes ver picos claros (como el ruido de 60 Hz) y verificar gráficamente que tu filtro los haya aplastado con éxito.</div></div></h2>',
    
    '<h2>Calidad de la señal</h2>': '<h2>Calidad de la señal <div tabindex="0" class="info-btn">i<div class="info-balloon">SNR (Relación Señal-Ruido) mide qué tan "limpia" es la señal.<br><br>• <b>Mejora SNR:</b> Cuántos dB de ruido lograste limpiar.<br>• <b>Distorsión:</b> Cuidado, un filtro muy agresivo eliminará el ruido, ¡pero deformará permanentemente la forma original (clínica) del ECG!</div></div></h2>'
}

for old, new in replacements.items():
    content = content.replace(old, new)

# 3. Remove Tour Button
content = re.sub(r'<button class="primary" id="tourBtn"[^>]*>.*?</button>', '', content)

# 4. Remove Tour HTML elements
content = re.sub(r'<div id="tour-overlay" class="tour-overlay"></div>\s*<div id="tour-card" class="tour-card">.*?</div>', '', content, flags=re.DOTALL)

# 5. Remove Tour JS logic
content = re.sub(r'const tourSteps = \[.*?\];\s*let currentTourStep = 0;\s*function positionTourCard\(\) \{.*?\}\s*function showTourStep\(index\) \{.*?\}\s*function startTour\(\) \{.*?\}\s*function endTour\(\) \{.*?\}\s*\$\(\'tourBtn\'\)\.addEventListener.*?positionTourCard\(\); \} \);', '', content, flags=re.DOTALL)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Tooltips added!")
