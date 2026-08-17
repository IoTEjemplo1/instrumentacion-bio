import re

filepath = 'g:/Mi unidad/Proyectos_Antigravity/InstrumentacionB/public/laboratorio_virtual_filtros_ruido.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the buttons with versions that include the info-btn span inside them
replacements = {
    '<button class="primary" id="preECG">ECG + 60 Hz</button>': 
    '<button class="primary" id="preECG" style="display:inline-flex;align-items:center;gap:6px;">ECG + 60 Hz <span class="info-btn" data-tooltip="<b>Electrocardiograma</b> (actividad eléctrica del corazón) contaminado por el zumbido de la red eléctrica a 60 Hz.<br><br>Ideal para practicar con filtros Rechazabanda (Notch).">i</span></button>',
    
    '<button id="preEMG">EMG + ruido</button>': 
    '<button id="preEMG" style="display:inline-flex;align-items:center;gap:6px;">EMG + ruido <span class="info-btn" data-tooltip="<b>Electromiograma</b> (actividad eléctrica de los músculos) contaminado con ruido térmico aleatorio (ruido blanco).<br><br>Ideal para practicar con filtros Pasabanda o Pasabajas.">i</span></button>',
    
    '<button id="prePPG">PPG + movimiento</button>': 
    '<button id="prePPG" style="display:inline-flex;align-items:center;gap:6px;">PPG + movimiento <span class="info-btn" data-tooltip="<b>Fotopletismograma</b> (pulso óptico para medir oxígeno) afectado por la respiración lenta y movimientos del paciente (deriva basal).<br><br>Ideal para practicar con filtros Pasaaltas.">i</span></button>',
    
    '<button id="preMulti">Multisinusoidal</button>': 
    '<button id="preMulti" style="display:inline-flex;align-items:center;gap:6px;">Multisinusoidal <span class="info-btn" data-tooltip="<b>Señal Sintética</b> que mezcla matemáticamente 3 frecuencias puras (10, 30 y 70 Hz).<br><br>Ideal para entender de forma teórica cómo un filtro afecta a frecuencias exactas individuales.">i</span></button>'
}

# The HTML is currently minified, so it might have newlines inside the tags in some places. 
# But the buttons are fairly simple. We can use regex or straight replace.
for old, new in replacements.items():
    # Make it resilient to newlines inside the tags (like between + and ruido)
    old_regex = old.replace(' ', r'\s*').replace('+', r'\+')
    content = re.sub(old_regex, new, content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Button tooltips added!")
