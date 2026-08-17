import re

filepath = 'g:/Mi unidad/Proyectos_Antigravity/InstrumentacionB/public/simulador_cargas_campo_electrico.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the acceleration multiplier. 
# It was 0.00009, but since q is 1e-9, it should be 90000 to have a visible pixel movement.
content = content.replace('ax:qSign*f.ex*.00009', 'ax:qSign*f.ex*90000')
content = content.replace('ay:qSign*f.ey*.00009', 'ay:qSign*f.ey*90000')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Acceleration multiplier fixed!")
