import re
import subprocess
import os

filepath = 'g:/Mi unidad/Proyectos_Antigravity/InstrumentacionB/public/laboratorio_virtual_filtros_ruido.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# find all scripts
scripts = re.findall(r'<script>(.*?)</script>', content, re.DOTALL)
js = "\n".join(scripts)

with open('test_syntax.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Checking JS syntax...")
result = subprocess.run(['node', '-c', 'test_syntax.js'], capture_output=True, text=True)
print("STDOUT:", result.stdout)
print("STDERR:", result.stderr)

os.remove('test_syntax.js')
