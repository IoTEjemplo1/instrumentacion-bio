path = r'g:\Mi unidad\Proyectos_Antigravity\InstrumentacionB\public\laboratorio_virtual_filtros_activos.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

# Add CSS if not present
css_to_add = """
.info-btn { display:inline-flex; align-items:center; justify-content:center; width:18px; height:18px; border-radius:50%; background:var(--p); color:#fff; font-size:12px; font-weight:bold; cursor:help; margin-left:8px; vertical-align:middle; line-height:1; }
#global-tooltip { position:fixed; width:300px; background:var(--card); color:var(--ink); border:1px solid var(--p); border-radius:8px; padding:12px; font-size:13px; font-weight:normal; box-shadow:0 10px 25px rgba(0,0,0,0.3); opacity:0; visibility:hidden; transition:opacity 0.2s; z-index:10000; pointer-events:none; text-align:left; line-height:1.4; white-space:normal; }
#global-tooltip.visible { opacity:1; visibility:visible; }
#global-tooltip::after { content:''; position:absolute; top:50%; right:100%; margin-top:-6px; border-width:6px; border-style:solid; border-color:transparent var(--p) transparent transparent; }
#global-tooltip b { color:var(--p); }
"""
if '.info-btn' not in html:
    html = html.replace('</style>', css_to_add + '\n</style>')

replacements = [
    ('<span style="font-weight:800;color:var(--p)">Casos preconfigurados</span>', 
     '<span style="font-weight:800;color:var(--p);display:flex;align-items:center;margin-right:8px;font-size: 0.95rem;">Casos preconfigurados <div tabindex="0" class="info-btn" data-tooltip="Carga rápidamente configuraciones típicas utilizadas en instrumentación biomédica.&lt;br&gt;&lt;br&gt;Ideal para explorar ejemplos base sin necesidad de configurar los valores desde cero.">i</div></span>'),
     
    ('<h2>Diseño del filtro activo</h2>',
     '<h2 style="display:flex;align-items:center;">Diseño del filtro activo <div tabindex="0" class="info-btn" data-tooltip="Sección principal para definir la arquitectura general de tu filtro. Aquí seleccionas el tipo y el orden para establecer la respuesta en frecuencia deseada.">i</div></h2>'),
     
    ('<h3>2. Red RC</h3>',
     '<h3 style="display:flex;align-items:center;">2. Red RC <div tabindex="0" class="info-btn" data-tooltip="Ajusta los valores de las resistencias (R) y condensadores (C) que forman la etapa pasiva del filtro.&lt;br&gt;&lt;br&gt;Estos componentes son los responsables de determinar exactamente la &lt;b&gt;frecuencia de corte&lt;/b&gt;.">i</div></h3>'),
     
    ('<h3>3. Ganancia no inversora</h3>',
     '<h3 style="display:flex;align-items:center;">3. Ganancia no inversora <div tabindex="0" class="info-btn" data-tooltip="Controla el nivel de amplificación adicional que proporciona el circuito activo.&lt;br&gt;&lt;br&gt;Dado que las señales biomédicas tienen amplitudes muy pequeñas, esta etapa es crucial para llevar la señal al rango adecuado de lectura.">i</div></h3>'),
     
    ('<h3>4. Amplificador operacional</h3>',
     '<h3 style="display:flex;align-items:center;">4. Amplificador operacional <div tabindex="0" class="info-btn" data-tooltip="Define las características del componente activo del filtro.&lt;br&gt;&lt;br&gt;Permite evaluar cómo las limitaciones reales de un Op-Amp comercial (como el ancho de banda, la saturación o el slew rate) afectan el desempeño ideal del filtro.">i</div></h3>'),
     
    ('<h3>5. Señal de entrada</h3>',
     '<h3 style="display:flex;align-items:center;">5. Señal de entrada <div tabindex="0" class="info-btn" data-tooltip="Selecciona el tipo de onda que ingresarás al circuito para probarlo.&lt;br&gt;&lt;br&gt;Puedes inyectar ondas de prueba básicas o señales biomédicas simuladas para observar cómo responde la dinámica de tu circuito.">i</div></h3>'),
     
    ('<h3>6. Ruido e interferencia</h3>',
     '<h3 style="display:flex;align-items:center;">6. Ruido e interferencia <div tabindex="0" class="info-btn" data-tooltip="Simula las condiciones reales de un entorno clínico añadiendo artefactos a la señal de entrada.&lt;br&gt;&lt;br&gt;Puedes agregar ruido blanco o la típica interferencia de la red eléctrica para poner a prueba la verdadera eficacia de tu filtro.">i</div></h3>'),
     
    ('<h2>Respuesta del filtro</h2>',
     '<h2 style="display:flex;align-items:center;">Respuesta del filtro <div tabindex="0" class="info-btn" data-tooltip="Analiza gráficamente el diagrama de Bode.&lt;br&gt;&lt;br&gt;Sirve para verificar matemáticamente la ganancia y atenuación según la frecuencia de tu circuito.">i</div></h2>'),
     
    ('<h2>Dominio del tiempo</h2>',
     '<h2 style="display:flex;align-items:center;">Dominio del tiempo <div tabindex="0" class="info-btn" data-tooltip="Compara visualmente la señal de entrada ideal, frente a la ruidosa y la señal resultante tras ser filtrada por tu circuito.">i</div></h2>')
]

for old, new in replacements:
    if old in html:
        html = html.replace(old, new)
        print("Replaced:", old)
    else:
        print("Not found:", old)

# Add Javascript if not present
js_to_add = """
<div id="global-tooltip"></div>
<script>
const gt = document.getElementById('global-tooltip');
document.querySelectorAll('.info-btn').forEach(btn => {
  btn.onmouseenter = () => {
    gt.innerHTML = btn.dataset.tooltip;
    const rect = btn.getBoundingClientRect();
    // Position to the right of the button
    gt.style.left = (rect.right + 15) + 'px';
    gt.style.top = (rect.top + rect.height / 2) + 'px';
    gt.style.transform = 'translateY(-50%)';
    gt.classList.add('visible');
  };
  btn.onmouseleave = () => gt.classList.remove('visible');
  btn.onfocus = btn.onmouseenter;
  btn.onblur = btn.onmouseleave;
});
</script>
"""
if 'id="global-tooltip"' not in html:
    html = html.replace('</body>', js_to_add + '\n</body>')
    print("Added JS")

with open(path, 'w', encoding='utf-8') as f:
    f.write(html)
