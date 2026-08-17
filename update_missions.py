import re

filepath = 'g:/Mi unidad/Proyectos_Antigravity/InstrumentacionB/public/laboratorio_virtual_filtros_ruido.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

old_missions = r"const missions=\[\[\'Misión 1 — Eliminar 60 Hz\',\'Configura un rechazabanda centrado en 60 Hz\. Mejora la SNR más de 3 dB con distorsión menor a 25 %\.\'\],\[\'Misión 2 — Reducir deriva basal\',\'Activa la deriva y configura un pasaaltas con fc entre 0\.5 y 2 Hz\.\'\],\[\'Misión 3 — Reducir ruido blanco\',\'Activa ruido blanco y configura un pasabajas que mejore la SNR más de 2 dB\.\'\],\[\'Misión 4 — Seleccionar banda\',\'Configura un pasabanda centrado cerca de 30 Hz con Q entre 1 y 5\.\'\]\];"

new_missions = """const missions=[['Misión 1 — Eliminar 60 Hz','Configura un rechazabanda centrado en 60 Hz. Mejora la SNR más de 3 dB con distorsión menor a 25 %.<br><br><span style="color:var(--s)">💡 <b>Sugerencia:</b> Usa el tipo de filtro "Rechazabanda", asegúrate de inyectar ruido de "Interferencia de red" (60 Hz) y ajusta un factor Q alto (>5) para eliminar esa frecuencia sin deformar la señal principal.</span>'],['Misión 2 — Reducir deriva basal','Activa la deriva y configura un pasaaltas con fc entre 0.5 y 2 Hz.<br><br><span style="color:var(--s)">💡 <b>Sugerencia:</b> La deriva basal es una oscilación muy lenta. Selecciona "Pasaaltas" y mueve la frecuencia de corte muy abajo (ej. 1 Hz) para nivelar la señal al centro sin destruir la forma de las ondas.</span>'],['Misión 3 — Reducir ruido blanco','Activa ruido blanco y configura un pasabajas que mejore la SNR más de 2 dB.<br><br><span style="color:var(--s)">💡 <b>Sugerencia:</b> El ruido térmico oscila a muy altas frecuencias. Usa un "Pasabajas" con una frecuencia de corte por encima de la parte útil de tu señal (ej. 40 Hz) para suavizarla. Observa el diagrama de frecuencia para guiarte.</span>'],['Misión 4 — Seleccionar banda','Configura un pasabanda centrado cerca de 30 Hz con Q entre 1 y 5.<br><br><span style="color:var(--s)">💡 <b>Sugerencia:</b> El "Pasabanda" es la combinación de los dos anteriores. Modificar el Factor Q cambiará tu ancho de banda. Úsalo si solo te interesa un rango muy específico, ideal en señales musculares (EMG).</span>']];"""

content = re.sub(old_missions, new_missions, content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Missions updated with hints!")
