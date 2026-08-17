import re
import os

files = [
    r"g:\Mi unidad\Proyectos_Antigravity\InstrumentacionB\js\courseData.js",
    r"g:\Mi unidad\Proyectos_Antigravity\InstrumentacionB\js\courseData.mjs",
    r"g:\Mi unidad\Proyectos_Antigravity\InstrumentacionB\js\courseData_temp.mjs"
]

old_presentation = r'presentation:\s*"4_Filtros_activos.pdf"'
new_presentation = r'presentation: "https://docs.google.com/presentation/d/e/2PACX-1vQ5_GMZ0sEcVnhgh-WKm0gcVnDe3ane4weBFPwSprmw3NJBVfYH_u55SClrxFTgkg/pubembed?start=false&loop=false&delayms=3000"'

for filepath in files:
    if not os.path.exists(filepath):
        print(f"Skipping {filepath} (does not exist)")
        continue
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content, count = re.subn(old_presentation, new_presentation, content)
        
        if count > 0:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Successfully updated presentation in {filepath}")
        else:
            print(f"Presentation not found in {filepath} (maybe already updated?)")
    except Exception as e:
        print(f"Error on {filepath}: {e}")
