import os
import glob

files_to_check = glob.glob('g:/Mi unidad/Proyectos_Antigravity/InstrumentacionB/js/courseData*.js') + glob.glob('g:/Mi unidad/Proyectos_Antigravity/InstrumentacionB/js/courseData*.mjs')

for filepath in files_to_check:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if the file contains simulator: "simulador_circuitos_led.html"
    if 'simulator: "simulador_circuitos_led.html"' in content:
        content = content.replace('simulator: "simulador_circuitos_led.html"', 'simulator: ["simulador_cargas_campo_electrico.html", "simulador_circuitos_led.html"]')
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")
