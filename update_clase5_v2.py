import re
import os

files = [
    r"g:\Mi unidad\Proyectos_Antigravity\InstrumentacionB\js\courseData.js",
    r"g:\Mi unidad\Proyectos_Antigravity\InstrumentacionB\js\courseData.mjs",
    r"g:\Mi unidad\Proyectos_Antigravity\InstrumentacionB\js\courseData_temp.mjs"
]

replacement = r"""          id: "clase-05",
          number: 5,
          title: "Filtros Activos",
          duration: "4 horas",
          difficulty: "Avanzado",
          objectives: [
            "Comprender el funcionamiento de los filtros activos y su diferencia respecto a los filtros pasivos.",
            "Identificar el papel de los amplificadores operacionales dentro del diseño de filtros electrónicos.",
            "Analizar la respuesta en frecuencia de filtros activos pasa bajas y pasa altas.",
            "Interpretar la ganancia, la frecuencia de corte y el comportamiento del filtro mediante diagramas de Bode.",
            "Diseñar filtros activos básicos de primer orden para aplicaciones de bioinstrumentación."
          ],
          summary: "Estudio de los filtros activos mediante el uso de amplificadores operacionales. Análisis de respuesta en frecuencia, ganancia, frecuencia de corte y diagramas de Bode para aplicaciones en bioinstrumentación.",
          content: `
            <h3>Breve introducción</h3>
            <p>En bioinstrumentación, muchas señales fisiológicas presentan amplitudes muy pequeñas y suelen estar contaminadas por ruido e interferencias. Aunque los filtros pasivos permiten atenuar componentes no deseadas, presentan limitaciones relacionadas con pérdidas de señal, impedancia y ausencia de ganancia.</p>
            <p>Los filtros activos superan estas limitaciones al incorporar amplificadores operacionales, permitiendo no solo seleccionar determinadas bandas de frecuencia, sino también amplificar la señal mientras se realiza el proceso de filtrado. Esta característica los convierte en una de las herramientas fundamentales para el acondicionamiento de señales biomédicas como ECG, EMG y EEG. La presentación desarrolla esta idea mediante ejemplos de filtros pasa bajas y pasa altas implementados con amplificadores operacionales.</p>
            
            <h3 class="mt-4">Principio (Teorema) para Filtros Activos</h3>
            <p>Un filtro activo combina una red selectiva RC con un amplificador operacional para controlar la respuesta en frecuencia del sistema.</p>
            <p>Su comportamiento está determinado por dos parámetros fundamentales:</p>
            <ul>
                <li><strong>Frecuencia de corte:</strong> <i>f<sub>c</sub> = 1 / (2πRC)</i></li>
                <li><strong>Ganancia del amplificador no inversor:</strong> <i>A<sub>F</sub> = 1 + (R<sub>1</sub> / R<sub>2</sub>)</i></li>
            </ul>
            <p>De esta manera, el filtro no solamente atenúa determinadas frecuencias, sino que también puede proporcionar ganancia sobre la banda de paso, característica que no poseen los filtros pasivos. La presentación utiliza estas expresiones para explicar el diseño tanto de filtros pasa bajas como pasa altas.</p>
            
            <h3 class="mt-4">Conceptos Claves</h3>
            <div class="row g-3 mt-3">
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Amplificador operacional (AO)</h4>
                  <p class="small text-secondary mb-0">Dispositivo electrónico de alta ganancia utilizado para amplificar la diferencia de voltaje entre dos señales de entrada.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Filtro activo</h4>
                  <p class="small text-secondary mb-0">Circuito que utiliza componentes pasivos junto con un amplificador operacional para seleccionar y amplificar determinadas bandas de frecuencia.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Frecuencia de corte (fc)</h4>
                  <p class="small text-secondary mb-0">Frecuencia que separa la banda de paso de la banda de atenuación y donde la ganancia disminuye aproximadamente 3 dB respecto al valor máximo.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Ganancia (A<sub>F</sub>)</h4>
                  <p class="small text-secondary mb-0">Relación entre el voltaje de salida y el voltaje de entrada, determinada por la configuración del amplificador operacional.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Banda de paso</h4>
                  <p class="small text-secondary mb-0">Rango de frecuencias que atraviesa el filtro con mínima atenuación y donde la señal conserva prácticamente toda su amplitud.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="card h-100 p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Diagrama de Bode</h4>
                  <p class="small text-secondary mb-0">Representación gráfica de la ganancia del filtro en función de la frecuencia, utilizada para analizar su respuesta en frecuencia.</p>
                </div>
              </div>
              <div class="col-12">
                <div class="card p-3 bg-dark-card border">
                  <h4 class="h6 text-primary fw-bold">Especificaciones del amplificador operacional</h4>
                  <p class="small text-secondary mb-0">Parámetros como Slew Rate, Gain Bandwidth (GBW), CMRR, PSRR e impedancias de entrada y salida determinan el desempeño real del filtro activo.</p>
                </div>
              </div>
            </div>

            <h3 class="mt-4">Referencias Claves</h3>
            <ul>
                <li>Sedra, A. S., & Smith, K. C. Microelectronic Circuits. 8th ed. Oxford University Press, 2020.</li>
                <li>Scherz, P., & Monk, S. Practical Electronics for Inventors. 5th ed. McGraw-Hill, 2023.</li>
                <li>Alexander, C., & Sadiku, M. Fundamentals of Electric Circuits. 7th ed. McGraw-Hill, 2021.</li>
                <li>Nilsson, J., & Riedel, S. Electric Circuits. 12th ed. Pearson, 2022.</li>
            </ul>
          `"""

pattern = r'          id: "clase-05",\s*number: 5,\s*title: "Filtros Activos",.*?content: `.*?`'

for filepath in files:
    if not os.path.exists(filepath):
        print(f"Skipping {filepath} (does not exist)")
        continue
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content, count = re.subn(pattern, replacement, content, flags=re.DOTALL)
        
        if count > 0:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Successfully updated {filepath}")
        else:
            print(f"Pattern not found in {filepath}")
    except Exception as e:
        print(f"Error on {filepath}: {e}")
