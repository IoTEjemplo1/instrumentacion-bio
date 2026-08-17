import re

filepath = 'g:/Mi unidad/Proyectos_Antigravity/InstrumentacionB/public/laboratorio_virtual_filtros_ruido.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

toolbar_text = '<div class="toolbar">'
label = '<div class="toolbar"><span style="font-weight:bold; color:var(--p); display:flex; align-items:center; margin-right:8px; font-size: 0.95rem;">Casos preconfigurados <div tabindex="0" class="info-btn" data-tooltip="Carga rápidamente escenarios de la vida real.&lt;br&gt;&lt;br&gt;Por ejemplo, &lt;b&gt;&quot;ECG + 60 Hz&quot;&lt;/b&gt; simula un electrocardiograma contaminado por la red eléctrica. El simulador auto-configurará todos los parámetros para que empieces a filtrar de inmediato.">i</div></span>'

content = content.replace(toolbar_text, label)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Toolbar tooltip added!")
