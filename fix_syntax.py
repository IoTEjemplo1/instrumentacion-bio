import os
import glob
import re

files_to_check = glob.glob('g:/Mi unidad/Proyectos_Antigravity/InstrumentacionB/js/components*.js') + glob.glob('g:/Mi unidad/Proyectos_Antigravity/InstrumentacionB/js/components*.mjs')

bad_block = """          let simTitle = 'Simulador de Laboratorio';
          let simDesc = '';
                    } else if (simFile === 'simulador_cargas_campo_electrico.html') {"""

good_block = """          let simTitle = 'Simulador de Laboratorio';
          let simDesc = '';
          if (simFile === 'simulador_cargas_campo_electrico.html') {"""

for filepath in files_to_check:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if bad_block in content:
        content = content.replace(bad_block, good_block)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {filepath}")
