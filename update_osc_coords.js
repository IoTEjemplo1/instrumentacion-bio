const fs = require('fs');

let code = fs.readFileSync('js/components.js', 'utf8');

const startMarker = "  const componentsList = [";
// We need to find the specific componentsList inside initOscilloscopeActivity
const functionStart = "function initOscilloscopeActivity(onAwardXp) {";
const functionStartIdx = code.indexOf(functionStart);
if (functionStartIdx === -1) {
  console.log("Could not find initOscilloscopeActivity");
  process.exit(1);
}

const listStartIdx = code.indexOf(startMarker, functionStartIdx);
const listEndMarker = "  ];\n\n  const triviaQuestions";
const listEndIdx = code.indexOf(listEndMarker, listStartIdx) + 4; // Include the "  ];"

if (listStartIdx === -1 || listEndIdx < listStartIdx) {
  console.log("Could not find componentsList bounds");
  process.exit(1);
}

const newComponentsList = `  const componentsList = [
    // NIVEL 1
    {
      level: 1, id: "pantalla-principal", name: "Pantalla Principal",
      description: "Display donde se grafican las formas de onda capturadas.",
      bioApp: "Aquí observarás la morfología del ECG, EEG o señales simuladas.",
      coords: { top: 18, left: 17, width: 46, height: 54 },
      hint: "La gran área oscura en el lado izquierdo del equipo."
    },
    {
      level: 1, id: "boton-power", name: "Botón de Encendido",
      description: "Energiza el osciloscopio.",
      bioApp: "Regla básica: encender antes de conectar sondas al paciente o circuito.",
      coords: { top: 83, left: 18, width: 5, height: 8 },
      hint: "Esquina inferior izquierda del panel frontal."
    },
    {
      level: 1, id: "bloque-horizontal", name: "Bloque Horizontal",
      description: "Ajusta la base de tiempo (s/div) y posición en el eje X.",
      bioApp: "Permite ver más ciclos de la señal o hacer zoom en un solo pulso.",
      coords: { top: 10, left: 68, width: 14, height: 18 },
      hint: "Parte superior derecha, perillas para controlar el tiempo."
    },
    {
      level: 1, id: "bloque-vertical", name: "Bloque Vertical",
      description: "Agrupa los ajustes de escala (V/div) y posición para las señales.",
      bioApp: "Crucial para amplificar visualmente bioseñales muy pequeñas (milivoltios).",
      coords: { top: 52, left: 69, width: 18, height: 26 },
      hint: "Zona inferior derecha con las perillas sobre los números 1 y 2."
    },
    {
      level: 1, id: "bloque-run-stop", name: "Control de Ejecución",
      description: "Botones Run/Stop y Single para controlar la captura de datos.",
      bioApp: "Útil para congelar la captura y analizar un latido específico.",
      coords: { top: 9, left: 83, width: 10, height: 12 },
      hint: "Esquina superior derecha."
    },
    {
      level: 1, id: "softkeys", name: "Botones de Menú (Softkeys)",
      description: "Botones genéricos cuyas funciones cambian según el menú en pantalla.",
      bioApp: "Se usan para seleccionar filtros de ruido, acoplamientos y medidas.",
      coords: { top: 73, left: 18, width: 45, height: 7 },
      hint: "Fila de botones grises rectangulares justo debajo de la pantalla."
    },
    
    // NIVEL 2
    {
      level: 2, id: "control-v-ch1", name: "Escala Vertical CH1",
      description: "Ajusta escala de voltaje exclusivamente del Canal 1 (Amarillo).",
      bioApp: "Generalmente usado para visualizar la señal de entrada bruta.",
      coords: { top: 53, left: 72, width: 6, height: 12 },
      hint: "Perilla grande sobre el botón iluminado amarillo."
    },
    {
      level: 2, id: "control-v-ch2", name: "Escala Vertical CH2",
      description: "Ajusta escala de voltaje exclusivamente del Canal 2 (Verde).",
      bioApp: "Ideal para visualizar la señal filtrada y compararla con CH1.",
      coords: { top: 53, left: 81, width: 6, height: 12 },
      hint: "Perilla grande sobre el botón iluminado verde."
    },
    {
      level: 2, id: "boton-ch1", name: "Activación CH1",
      description: "Enciende o apaga el trazo del Canal 1 en la pantalla.",
      bioApp: "Apagar los canales sin uso reduce el ruido visual en la pantalla.",
      coords: { top: 66, left: 72, width: 4, height: 7 },
      hint: "Botón pequeño con el número 1 (Amarillo)."
    },
    {
      level: 2, id: "boton-ch2", name: "Activación CH2",
      description: "Enciende o apaga el trazo del Canal 2 en la pantalla.",
      bioApp: "Permite superponer dos bioseñales simultáneamente.",
      coords: { top: 66, left: 81, width: 4, height: 7 },
      hint: "Botón pequeño con el número 2 (Verde)."
    },
    {
      level: 2, id: "control-trigger", name: "Sección de Disparo",
      description: "Estabiliza señales configurando un umbral de voltaje (Trigger).",
      bioApp: "Sin trigger, una onda de pulso se verá parpadeante e inestable.",
      coords: { top: 29, left: 68, width: 11, height: 17 },
      hint: "Debajo del control Horizontal. Tiene la perilla 'Level'."
    },
    {
      level: 2, id: "perilla-multiporposito", name: "Perilla Multipropósito",
      description: "Perilla de selección de menús e intensidad de trazo.",
      bioApp: "Se usa para navegar por los menús de medición y cursores.",
      coords: { top: 40, left: 64, width: 5, height: 8 },
      hint: "Perilla solitaria a la izquierda de la sección vertical."
    },

    // NIVEL 3
    {
      level: 3, id: "boton-measure", name: "Menú Measure",
      description: "Despliega mediciones automáticas (Vpp, Vrms, Frecuencia, etc).",
      bioApp: "Acelera el cálculo de la frecuencia cardíaca a partir de un ECG.",
      coords: { top: 27, left: 80, width: 4.5, height: 6 },
      hint: "Botón en el centro-derecha, sección 'Measure'."
    },
    {
      level: 3, id: "boton-cursors", name: "Menú Cursors",
      description: "Activa líneas guía manuales para medir tiempo y voltaje.",
      bioApp: "Ideal para medir la duración de un complejo QRS.",
      coords: { top: 34, left: 80, width: 4.5, height: 6 },
      hint: "Debajo del botón Measure."
    },
    {
      level: 3, id: "boton-autoscale", name: "Botón Auto Scale",
      description: "Ajusta automáticamente las escalas para mostrar una señal.",
      bioApp: "Útil como primer paso, pero puede fallar con bioseñales ruidosas.",
      coords: { top: 20, left: 89, width: 4.5, height: 6 },
      hint: "Botón aislado en el área superior derecha, abajo de Single."
    },
    {
      level: 3, id: "bnc-ch1", name: "Entrada BNC CH1",
      description: "Entrada física para la sonda del Canal 1.",
      bioApp: "Punto de conexión de los cables que vienen de tu protoboard.",
      coords: { top: 79, left: 65, width: 6, height: 11 },
      hint: "Conector metálico inferior, etiqueta amarilla."
    },
    {
      level: 3, id: "bnc-ch2", name: "Entrada BNC CH2",
      description: "Entrada física para la sonda del Canal 2.",
      bioApp: "Entrada para una segunda señal simultánea.",
      coords: { top: 79, left: 74, width: 6, height: 11 },
      hint: "Conector metálico inferior, etiqueta verde."
    },
    {
      level: 3, id: "probe-comp", name: "Compensación de Sondas",
      description: "Terminales que generan una onda cuadrada de 1kHz a 3V.",
      bioApp: "Se usa para calibrar las sondas (10x) y asegurar medidas correctas.",
      coords: { top: 82, left: 57, width: 4, height: 7 },
      hint: "Dos pequeños ganchos metálicos al lado derecho del puerto USB."
    },
    {
      level: 3, id: "gen-out", name: "Salida Gen Out",
      description: "Salida del generador de funciones integrado (WaveGen).",
      bioApp: "Proporciona señales de estímulo si el modelo lo incluye.",
      coords: { top: 83, left: 26, width: 5, height: 9 },
      hint: "Conector BNC junto al botón de encendido."
    },
    {
      level: 3, id: "puerto-usb", name: "Puerto USB",
      description: "Permite conectar una memoria USB para guardar capturas.",
      bioApp: "Esencial para exportar datos y hacer informes de laboratorio.",
      coords: { top: 84, left: 49, width: 6, height: 6 },
      hint: "Puerto negro rectangular en el borde inferior central."
    }
  ];`;

const oldListStr = code.substring(listStartIdx, listEndIdx);
code = code.replace(oldListStr, newComponentsList);

fs.writeFileSync('js/components.js', code);
console.log('Oscilloscope components updated');
