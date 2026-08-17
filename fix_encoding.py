import os

filepath = 'g:/Mi unidad/Proyectos_Antigravity/InstrumentacionB/public/laboratorio_virtual_filtros_ruido.html'
with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

replacements = {
    'Bioinstrumentacin  Clase 4': 'Bioinstrumentación · Clase 4',
    'YZs?': '🎚️',
    'Disea': 'Diseña',
    'cmo': 'cómo',
    'seales': 'señales',
    'biomǸdicas': 'biomédicas',
    'Ys?': '🚀',
    'Gua': 'Guía',
    'Simulacin': 'Simulación',
    'Diseo': 'Diseño',
    'topologa': 'topología',
    'seal': 'señal',
    'Parǭmetros': 'Parámetros',
    'caracterstica': 'característica',
    'Seal': 'Señal',
    'sintǸtico': 'sintético',
    'Duracin': 'Duración',
    'elǸctrica': 'eléctrica',
    'lnea': 'línea',
    'Visualizacin': 'Visualización',
    'DespuǸs': 'Después',
    'Fase ()': 'Fase (°)',
    'dǸc': 'déc',
    'f\'? = 1 / (2?^sLC)': 'f₀ = 1 / (2π√LC)',
    'AB = f\'? / Q': 'AB = f₀ / Q',
    'fc = 1 / (2?RC)': 'fc = 1 / (2πRC)',
    '?"': '—',
    'ǧtil': 'útil',
    'reduccin': 'reducción',
    'aǧn': 'aún',
    'misin activa': 'misión activa',
    'Misin superada': 'Misión superada',
    'quǸ': 'qué',
    'configuracin': 'configuración',
    'rǭpidamente': 'rápidamente',
    'auto-configurarǭ': 'auto-configurará',
    'especfico': 'específico',
    'ecuacin': 'ecuación',
    'fisiolgica': 'fisiológica',
    'Inyeccin': 'Inyección',
    'Aade': 'Añade',
    '-?': '●',
    'Misin': '¡Misión',
    'topologa': 'topología',
    'mo': 'ómo',
    'seal': 'señal',
    'lnea': 'línea',
    'Aade': 'Añade',
    'f?': 'f₀',
    '?RC': 'πRC',
    '?^sLC': 'π√LC',
    'Fase ()': 'Fase (°)',
    'dc': 'déc',
    '?"': '—',
    'til': 'útil',
    'reduccin': 'reducción',
    'an': 'aún',
    'misin': 'misión',
    'Misin': 'Misión',
    'qu': 'qué',
    'configuracin': 'configuración',
    'rpidamente': 'rápidamente',
    'auto-configurar': 'auto-configurará',
    'especfico': 'específico',
    'ecuacin': 'ecuación',
    'fisiolgica': 'fisiológica',
    'Inyeccin': 'Inyección',
    'Aade': 'Añade'
}

# Apply additional manual replacements for weird symbols from the previous cat
content = content.replace('Bioinstrumentacin  Clase 4', 'Bioinstrumentación · Clase 4')
content = content.replace('<h1>YZs? Laboratorio Virtual de Filtros y Ruido</h1>', '<h1>🎚️ Laboratorio Virtual de Filtros y Ruido</h1>')
content = content.replace('Disea filtros pasivos, observa su respuesta de Bode y analiza cmo modifican seales biomǸdicas contaminadas con ruido.', 'Diseña filtros pasivos, observa su respuesta de Bode y analiza cómo modifican señales biomédicas contaminadas con ruido.')
content = content.replace('Ys? Gua Paso a Paso', '🚀 Guía Paso a Paso')
content = content.replace('-? Simulacin lista', '● Simulación lista')
content = content.replace('<h2>Diseo del filtro</h2>', '<h2>Diseño del filtro</h2>')
content = content.replace('topologa, la seal', 'topología, la señal')
content = content.replace('Parǭmetros', 'Parámetros')
content = content.replace('caracterstica', 'característica')
content = content.replace('3. Seal', '3. Señal')
content = content.replace('sintǸtico', 'sintético')
content = content.replace('Duracin', 'Duración')
content = content.replace('Visualizacin', 'Visualización')
content = content.replace('DespuǸs', 'Después')
content = content.replace('Fase ()', 'Fase (°)')
content = content.replace('dB/dǸc', 'dB/déc')
content = content.replace('f\'? = 1 / (2?^sLC)', 'f₀ = 1 / (2π√LC)')
content = content.replace('f? = 1 / (2?^sLC)', 'f₀ = 1 / (2π√LC)')
content = content.replace('AB = f\'? / Q', 'AB = f₀ / Q')
content = content.replace('AB = f? / Q', 'AB = f₀ / Q')
content = content.replace('fc = 1 / (2?RC)', 'fc = 1 / (2πRC)')
content = content.replace('?"', '—')
content = content.replace('seal ǧtil', 'señal útil')
content = content.replace('reduccin', 'reducción')
content = content.replace('aǧn', 'aún')
content = content.replace('misin activa', 'misión activa')
content = content.replace('Misin superada!', '¡Misión superada!')
content = content.replace('por quǸ', 'por qué')
content = content.replace('configuracin', 'configuración')
content = content.replace('rǭpidamente', 'rápidamente')
content = content.replace('auto-configurarǭ', 'auto-configurará')
content = content.replace('especfico', 'específico')
content = content.replace('ecuacin', 'ecuación')
content = content.replace('fisiolgica', 'fisiológica')
content = content.replace('Inyeccin', 'Inyección')
content = content.replace('Aade', 'Añade')
content = content.replace('elǸctrica', 'eléctrica')
content = content.replace('lnea', 'línea')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("HTML encoding fixed!")
