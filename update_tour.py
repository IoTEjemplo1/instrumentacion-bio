import re

filepath = 'g:/Mi unidad/Proyectos_Antigravity/InstrumentacionB/public/laboratorio_virtual_filtros_ruido.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

new_tour = """const tourSteps = [
    { el: '.toolbar', title: '1. Casos Preconfigurados', text: 'Carga rápidamente escenarios comunes de señales fisiológicas reales. Por ejemplo, "ECG + 60 Hz" simula un electrocardiograma contaminado por la red eléctrica, ajustando el simulador automáticamente.' },
    { el: '.controls .section:nth-child(1)', title: '2. Tipo de Filtro', text: 'Define qué frecuencias dejar pasar y cuáles bloquear.<br>• <b>Pasabajas:</b> Permite frecuencias bajas.<br>• <b>Pasaaltas:</b> Permite frecuencias altas.<br>• <b>Pasabanda:</b> Filtra un rango específico (útil en EMG).<br>• <b>Rechazabanda (Notch):</b> Elimina una frecuencia muy específica (como 60 Hz).' },
    { el: '.controls .section:nth-child(2)', title: '3. Parámetros', text: '<b>Frecuencia característica (fc):</b> El punto donde el filtro empieza a atenuar la señal (-3 dB). Puedes calcularla ajustando componentes reales (R, C, L).<br>• <b>Factor Q:</b> En filtros pasabanda y notch, determina qué tan "estrecho" y selectivo es el filtro.' },
    { el: '.controls .section:nth-child(3)', title: '4. Señal', text: 'Configura la señal fisiológica sintética (ECG, EMG, PPG) que actuará como señal ideal pura.<br>• <b>Amplitud:</b> Voltaje de la señal.<br>• <b>Muestreo (fs):</b> Cantidad de datos capturados por segundo.' },
    { el: '.controls .section:nth-child(4)', title: '5. Fuentes de Ruido', text: 'Añade interferencias típicas a la señal ideal.<br>• <b>Ruido blanco:</b> Ruido térmico de los electrodos.<br>• <b>Interferencia de red:</b> Zumbido eléctrico de 50/60 Hz.<br>• <b>Deriva basal:</b> Cambios lentos por la respiración del paciente.<br>• <b>Artefacto de movimiento:</b> Picos bruscos irregulares.' },
    { el: '.dash > .card', title: '6. Diagrama de Bode', text: 'Muestra el comportamiento matemático de tu filtro.<br>• <b>Línea sólida (Magnitud):</b> Cuánta ganancia (dB) o atenuación se aplica a cada frecuencia.<br>• <b>Línea punteada (Fase):</b> El retraso temporal que introduce el filtro.' },
    { el: '#time', title: '7. Dominio del Tiempo', text: 'Compara visualmente la señal ideal (verde) contra la señal ruidosa (roja) y el resultado que produce tu filtro (azul).<br><b>Objetivo:</b> ¡Hacer que la línea azul se superponga lo más posible a la verde!' },
    { el: '#freq', title: '8. Dominio de la Frecuencia', text: 'Analiza el espectro (FFT) antes y después del filtro.<br>Aquí puedes ver picos claros (como el ruido de 60 Hz) y verificar gráficamente que tu filtro los haya aplastado con éxito.' },
    { el: '.compare + .metrics', title: '9. Calidad de la señal (SNR)', text: 'SNR (Relación Señal-Ruido) mide qué tan "limpia" es la señal.<br>• <b>Mejora SNR:</b> Cuántos dB de ruido lograste limpiar.<br>• <b>Distorsión:</b> Cuidado, un filtro muy agresivo eliminará el ruido, ¡pero deformará permanentemente la forma original (clínica) del ECG!' },
    { el: '.activity', title: '10. Misiones de aprendizaje', text: 'Pon a prueba tus habilidades de diseño superando estos retos técnicos. Haz clic en "Verificar" para recibir una evaluación automática de tu configuración.' }
  ];"""

content = re.sub(r'const tourSteps = \[.*?\];', new_tour, content, flags=re.DOTALL)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Tour updated!")
