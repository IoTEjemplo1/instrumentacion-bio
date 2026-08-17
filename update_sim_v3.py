import os

filepath = r"g:\Mi unidad\Proyectos_Antigravity\InstrumentacionB\public\laboratorio_virtual_filtros_activos.html"

try:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update Top Buttons
    old_toolbar = """  <span style="font-weight:800;color:var(--p);display:flex;align-items:center;margin-right:8px;font-size: 0.95rem;">Casos preconfigurados <div tabindex="0" class="info-btn" data-tooltip="Carga rápidamente configuraciones típicas utilizadas en instrumentación biomédica.&lt;br&gt;&lt;br&gt;Ideal para explorar ejemplos base sin necesidad de configurar los valores desde cero.">i</div></span>
  <button class="primary" id="preECG">ECG + 60 Hz</button>
  <button id="preLow">Pasabajas con ganancia</button>
  <button id="preHigh">Pasaaltas con ganancia</button>
  <button id="preSaturation">Saturación del AO</button>"""
    new_toolbar = """  <span style="font-weight:800;color:var(--p);display:flex;align-items:center;margin-right:8px;font-size: 0.95rem;">Casos preconfigurados <div tabindex="0" class="info-btn" data-tooltip="Carga rápidamente configuraciones típicas para mitigar ruido en instrumentación biomédica.">i</div></span>
  <button class="primary" id="preTraffic">Tráfico (Pasa altas)</button>
  <button id="preElec">Electromagnético (Pasa bajas)</button>
  <button id="preBand">Aislar Señal (Pasa banda)</button>
  <button id="pre60Hz">Interferencia Eléctrica</button>"""
    content = content.replace(old_toolbar, new_toolbar)

    # 2. Add Bandpass chip
    content = content.replace(
        '<button class="chip" data-filter="high">Pasaaltas</button>',
        '<button class="chip" data-filter="high">Pasaaltas</button>\n      <button class="chip" data-filter="band">Pasabanda</button>'
    )

    # 3. Modify ECG option
    content = content.replace(
        '<option value="ecg">ECG sintético</option>',
        '<option value="ecg">ECG (Physionet)</option>'
    )

    # 4. Modify Noise Section
    old_noise = """    <h3 style="display:flex;align-items:center;">6. Ruido e interferencia <div tabindex="0" class="info-btn" data-tooltip="Simula las condiciones reales de un entorno clínico añadiendo artefactos a la señal de entrada.&lt;br&gt;&lt;br&gt;Puedes agregar ruido blanco o la típica interferencia de la red eléctrica para poner a prueba la verdadera eficacia de tu filtro.">i</div></h3>
    <label><input id="whiteOn" type="checkbox"> Ruido blanco</label>
    <div class="row"><label>Nivel</label><span class="value" id="whiteV"></span></div>
    <input id="white" type="range" min="0" max="1" step="0.02" value="0.1">
    <label><input id="mainsOn" type="checkbox" checked> Interferencia de red</label>
    <select id="mainsF"><option value="50">50 Hz</option><option value="60" selected>60 Hz</option></select>
    <div class="row"><label>Nivel de red</label><span class="value" id="mainsV"></span></div>
    <input id="mainsA" type="range" min="0" max="1" step="0.02" value="0.2">"""
    new_noise = """    <h3 style="display:flex;align-items:center;">6. Ruido Ambiental <div tabindex="0" class="info-btn" data-tooltip="Simula condiciones reales añadiendo artefactos ambientales a la señal.">i</div></h3>
    <select id="noiseType">
      <option value="none">Sin ruido</option>
      <option value="traffic">Ruido de tráfico (Motores/Baja frec.)</option>
      <option value="nature">Ruido rosa/blanco (Natural)</option>
      <option value="voices">Voces de fondo (Media frec.)</option>
      <option value="electric" selected>Equipos eléctricos (60Hz armónicos)</option>
      <option value="emg">Ruido electromagnético (Alta frec.)</option>
    </select>
    <div class="row"><label>Intensidad del Ruido</label><span class="value" id="noiseLevelV"></span></div>
    <input id="noiseLevel" type="range" min="0" max="1" step="0.02" value="0.2">"""
    content = content.replace(old_noise, new_noise)

    # 5. Modify JS variable updates
    content = content.replace(
        "$('fsV').textContent=$('fs').value+' Hz';$('durV').textContent=$('dur').value+' s';$('whiteV').textContent=(+$('white').value).toFixed(2)+' V';$('mainsV').textContent=(+$('mainsA').value).toFixed(2)+' V';$('orderV').textContent=$('order').value;",
        "$('fsV').textContent=$('fs').value+' Hz';$('durV').textContent=$('dur').value+' s';$('noiseLevelV').textContent=(+$('noiseLevel').value).toFixed(2);$('orderV').textContent=$('order').value;"
    )

    # 6. Modify event listeners array
    old_events = "['order','R','C','fc','link','R1','R2','gbw','sr','vplus','vminus','realLimits','source','amp','fin','fs','dur','whiteOn','white','mainsOn','mainsF','mainsA','showInput','showIdeal','showReal','showPhase','markers']"
    new_events = "['order','R','C','fc','link','R1','R2','gbw','sr','vplus','vminus','realLimits','source','amp','fin','fs','dur','noiseType','noiseLevel','showInput','showIdeal','showReal','showPhase','markers']"
    content = content.replace(old_events, new_events)

    # 7. Modify signals function
    old_signals = """function signals(){
 const fs=+$('fs').value,dur=+$('dur').value,n=Math.min(pow2(fs*dur),8192),t=new Array(n),clean=new Float64Array(n),input=new Float64Array(n);
 for(let k=0;k<n;k++){
   t[k]=k/fs;let s=source(t[k]),y=s;clean[k]=s;
   if($('whiteOn').checked)y+=+$('white').value*randn();
   if($('mainsOn').checked)y+=+$('mainsA').value*Math.sin(2*Math.PI*+$('mainsF').value*t[k]);
   input[k]=y;
 }
 return{fs,n,t,clean,input};
}"""
    new_signals = """function signals(){
 const fs=+$('fs').value,dur=+$('dur').value,n=Math.min(pow2(fs*dur),8192),t=new Array(n),clean=new Float64Array(n),input=new Float64Array(n);
 const noiseType = $('noiseType').value;
 const noiseLvl = +$('noiseLevel').value;
 
 let b0=0,b1=0,b2=0,b3=0,b4=0,b5=0,b6=0;
 
 for(let k=0;k<n;k++){
   t[k]=k/fs;
   let s=source(t[k]), y=s;
   clean[k]=s;
   
   if(noiseType !== 'none' && noiseLvl > 0) {
      let noise = 0;
      let white = randn();
      
      if(noiseType === 'traffic') {
         b0 = 0.99 * b0 + 0.01 * white;
         noise = b0 * 5;
      }
      else if(noiseType === 'nature') {
         b0 = 0.99886 * b0 + white * 0.0555179;
         b1 = 0.99332 * b1 + white * 0.0750759;
         b2 = 0.96900 * b2 + white * 0.1538520;
         b3 = 0.86650 * b3 + white * 0.3104856;
         b4 = 0.55000 * b4 + white * 0.5329522;
         b5 = -0.7616 * b5 - white * 0.0168980;
         noise = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.2;
         b6 = white * 0.115926;
      }
      else if(noiseType === 'voices') {
         let env = Math.sin(2*Math.PI*2*t[k]) * Math.sin(2*Math.PI*0.5*t[k]);
         noise = white * (0.3 + 0.7 * Math.abs(env)) * Math.sin(2*Math.PI*800*t[k] + 5*white);
      }
      else if(noiseType === 'electric') {
         noise = Math.sin(2*Math.PI*60*t[k]) + 0.4*Math.sin(2*Math.PI*120*t[k]) + 0.2*Math.sin(2*Math.PI*180*t[k]);
      }
      else if(noiseType === 'emg') {
         b0 = 0.8 * b0 + white; 
         noise = (white - b0*0.5) * 1.5; 
      }
      
      y += noise * noiseLvl;
   }
   input[k]=y;
 }
 return{fs,n,t,clean,input};
}"""
    content = content.replace(old_signals, new_signals)

    # 8. Modify Hideal function
    old_hideal = """function Hideal(f){
 const o=+$('order').value,w=f/(fc()||1e-12),A=gain();
 if(state.filter==='low')return{m:A/Math.sqrt(1+w**(2*o)),p:-o*Math.atan(w)};
 return{m:f===0?0:A*w**o/Math.sqrt(1+w**(2*o)),p:o*(Math.PI/2-Math.atan(w))};
}"""
    new_hideal = """function Hideal(f){
 const o=+$('order').value,w=f/(fc()||1e-12),A=gain();
 if(state.filter==='low')return{m:A/Math.sqrt(1+w**(2*o)),p:-o*Math.atan(w)};
 else if(state.filter==='high')return{m:f===0?0:A*w**o/Math.sqrt(1+w**(2*o)),p:o*(Math.PI/2-Math.atan(w))};
 else { 
    const Q = 1.0;
    const den = Math.sqrt(1 + Q*Q*Math.pow(w - 1/w, 2));
    const m = f===0?0:(A / den);
    const p = Math.PI/2 - Math.atan(Q*(w - 1/w));
    return {m: Math.pow(m/A, o)*A, p: p*o};
 }
}"""
    content = content.replace(old_hideal, new_hideal)

    # 9. Modify Circuit function SVG
    old_svg = """ const low=state.filter==='low';
 return `<svg viewBox="0 0 620 210">
 <style>.t{font:15px system-ui;fill:${ink}}.sm{font:12px system-ui;fill:${ink}}
.info-btn { display:inline-flex; align-items:center; justify-content:center; width:18px; height:18px; border-radius:50%; background:var(--p); color:#fff; font-size:12px; font-weight:bold; cursor:help; margin-left:8px; vertical-align:middle; line-height:1; }
#global-tooltip { position:fixed; width:300px; background:var(--card); color:var(--ink); border:1px solid var(--p); border-radius:8px; padding:12px; font-size:13px; font-weight:normal; box-shadow:0 10px 25px rgba(0,0,0,0.3); opacity:0; visibility:hidden; transition:opacity 0.2s; z-index:10000; pointer-events:none; text-align:left; line-height:1.4; white-space:normal; }
#global-tooltip.visible { opacity:1; visibility:visible; }
#global-tooltip::after { content:''; position:absolute; top:50%; right:100%; margin-top:-6px; border-width:6px; border-style:solid; border-color:transparent var(--p) transparent transparent; }
#global-tooltip b { color:var(--p); }

</style>
 <path d="M20 95 H100" ${w}/>
 ${low?`<path d="M100 95 l12 -15 l18 30 l18 -30 l18 30 l18 -15 H255" ${w}/><path d="M255 95 V125 M235 125 H275 M235 138 H275 M255 138 V185 H20" ${w}/><text x="140" y="68" class="t">R</text><text x="285" y="150" class="t">C</text>`
 :`<path d="M100 70 V120 M120 70 V120 M120 95 H255" ${w}/><path d="M255 95 V115 l-15 12 l30 18 l-30 18 l15 12 V185 H20" ${w}/><text x="98" y="55" class="t">C</text><text x="280" y="150" class="t">R</text>`}"""

    new_svg = """ const isLow = state.filter === 'low';
 const isBand = state.filter === 'band';
 let passiveStage = '';
 if (isLow) {
   passiveStage = `<path d="M100 95 l12 -15 l18 30 l18 -30 l18 30 l18 -15 H255" ${w}/><path d="M255 95 V125 M235 125 H275 M235 138 H275 M255 138 V185 H20" ${w}/><text x="140" y="68" class="t">R</text><text x="285" y="150" class="t">C</text>`;
 } else if (isBand) {
   passiveStage = `<rect x="120" y="70" width="100" height="50" rx="5" fill="none" stroke="${p}" stroke-width="2"/><text x="145" y="100" class="t">Red RC</text><text x="135" y="115" class="sm">Pasa Banda</text><path d="M100 95 H120" ${w}/><path d="M220 95 H255" ${w}/>`;
 } else {
   passiveStage = `<path d="M100 70 V120 M120 70 V120 M120 95 H255" ${w}/><path d="M255 95 V115 l-15 12 l30 18 l-30 18 l15 12 V185 H20" ${w}/><text x="98" y="55" class="t">C</text><text x="280" y="150" class="t">R</text>`;
 }
 return `<svg viewBox="0 0 620 210">
 <style>.t{font:15px system-ui;fill:${ink}}.sm{font:12px system-ui;fill:${ink}}</style>
 <path d="M20 95 H100" ${w}/>
 ${passiveStage}`
    content = content.replace(old_svg, new_svg)

    # 10. Update buttons logic
    old_buttons = """$('preECG').onclick=()=>{$('source').value='ecg';$('amp').value=.5;$('mainsOn').checked=true;$('mainsF').value=60;$('mainsA').value=.2;$('R1').value=1000;$('R2').value=9000;setFilter('low');$('fc').value=40;$('opamp').value='lm358';syncOpamp();update()};
$('preLow').onclick=()=>{$('source').value='multi';$('fin').value=10;$('R1').value=1000;$('R2').value=4000;setFilter('low');$('fc').value=40;update()};
$('preHigh').onclick=()=>{$('source').value='sine';$('fin').value=10;$('R1').value=10000;$('R2').value=10000;setFilter('high');$('fc').value=1;update()};
$('preSaturation').onclick=()=>{$('source').value='sine';$('amp').value=1;$('fin').value=50;$('R1').value=1000;$('R2').value=19000;$('opamp').value='lm358';syncOpamp();setFilter('low');$('fc').value=200;update()};"""
    
    new_buttons = """$('preTraffic').onclick=()=>{$('source').value='ecg';$('amp').value=0.5;$('noiseType').value='traffic';$('noiseLevel').value=0.4;$('R1').value=1000;$('R2').value=1000;setFilter('high');$('fc').value=5;$('opamp').value='lm358';syncOpamp();update()};
$('preElec').onclick=()=>{$('source').value='sine';$('amp').value=1;$('fin').value=10;$('noiseType').value='emg';$('noiseLevel').value=0.3;$('R1').value=1000;$('R2').value=1000;setFilter('low');$('fc').value=40;$('opamp').value='lm358';syncOpamp();update()};
$('preBand').onclick=()=>{$('source').value='sine';$('amp').value=1;$('fin').value=60;$('noiseType').value='voices';$('noiseLevel').value=0.6;$('R1').value=1000;$('R2').value=9000;setFilter('band');$('fc').value=60;$('opamp').value='lm358';syncOpamp();update()};
$('pre60Hz').onclick=()=>{$('source').value='ecg';$('amp').value=0.5;$('noiseType').value='electric';$('noiseLevel').value=0.25;$('R1').value=1000;$('R2').value=1000;setFilter('low');$('fc').value=30;$('opamp').value='ideal';syncOpamp();update()};"""
    content = content.replace(old_buttons, new_buttons)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("Simulator updated successfully.")

except Exception as e:
    print(f"Error updating simulator: {e}")
