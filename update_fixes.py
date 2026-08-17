import re

filepath = 'g:/Mi unidad/Proyectos_Antigravity/InstrumentacionB/public/laboratorio_virtual_filtros_ruido.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update the mission function to use innerHTML
old_mission_fn = "function mission(){[$('missionT').textContent,$('missionD').textContent]=missions[state.mission]}"
new_mission_fn = "function mission(){$('missionT').textContent=missions[state.mission][0];$('missionD').innerHTML=missions[state.mission][1];}"
content = content.replace(old_mission_fn, new_mission_fn)

# 2. Update the EMG signal in src() to be more realistic (band-limited noise with contraction envelope)
old_emg = "if(type==='emg')return(.55*Math.sin(2*Math.PI*35*t)+.3*Math.sin(2*Math.PI*70*t)+.15*Math.sin(2*Math.PI*110*t))*(.65+.35*Math.sin(2*Math.PI*.7*t));"
new_emg = "if(type==='emg'){let m=0;for(let i=1;i<=12;i++)m+=(1/Math.sqrt(i))*Math.sin(2*Math.PI*(25+i*17)*t+(i*i));const env=Math.pow(Math.max(0,Math.sin(2*Math.PI*0.5*t)),2);return 0.15*m*(0.1+env);}"
content = content.replace(old_emg, new_emg)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated mission rendering and EMG signal!")
