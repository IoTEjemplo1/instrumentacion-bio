import re
import os

files = [
    r"g:\Mi unidad\Proyectos_Antigravity\InstrumentacionB\js\courseData.js",
    r"g:\Mi unidad\Proyectos_Antigravity\InstrumentacionB\js\courseData.mjs",
    r"g:\Mi unidad\Proyectos_Antigravity\InstrumentacionB\js\courseData_temp.mjs"
]

# We want to match the end of the labs array inside clase-05 and insert the simulator field.
pattern = r'(title: "Laboratorio 4: Diseño e Implementación de Filtros Activos",\s*guide: "04 Lab_Filtros_activos\.docx",\s*description: ".*?"\s*\}\s*\]),'
replacement = r"\1,\n          simulator: 'laboratorio_virtual_filtros_activos.html',"

for filepath in files:
    if not os.path.exists(filepath):
        print(f"Skipping {filepath} (does not exist)")
        continue
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if already added to avoid duplicates
        if "simulator: 'laboratorio_virtual_filtros_activos.html'" in content:
            print(f"Simulator already present in {filepath}")
            continue
            
        new_content, count = re.subn(pattern, replacement, content, flags=re.DOTALL)
        
        if count > 0:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Successfully added simulator to {filepath}")
        else:
            print(f"Pattern not found in {filepath}. Could not add simulator.")
    except Exception as e:
        print(f"Error on {filepath}: {e}")
