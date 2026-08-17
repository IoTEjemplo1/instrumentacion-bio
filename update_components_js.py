import os
import glob
import re

files_to_check = glob.glob('g:/Mi unidad/Proyectos_Antigravity/InstrumentacionB/js/components*.js') + glob.glob('g:/Mi unidad/Proyectos_Antigravity/InstrumentacionB/js/components*.mjs')

injection = """          } else if (simFile === 'simulador_cargas_campo_electrico.html') {
            simTitle = 'Fundamentos Físicos: Cargas y Campo Eléctrico';
            simDesc = 'Construya configuraciones de cargas, mida el potencial (Voltaje) y observe la fuerza electromotriz (FEM) responsable de generar corriente eléctrica.';
"""

for filepath in files_to_check:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if "simFile === 'simulador_cargas_campo_electrico.html'" not in content:
        # We find the place to inject
        if "if (simFile === 'simulador_circuitos_led.html') {" in content:
            content = content.replace("if (simFile === 'simulador_circuitos_led.html') {", injection + "          } else if (simFile === 'simulador_circuitos_led.html') {")
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {filepath}")
