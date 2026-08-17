const fs = require('fs');

const quizzes = `quizzes: [
            {
              question: "Pregunta 1\\n\\nDurante el diseño de un sistema para adquirir una señal ECG se desea eliminar el ruido de alta frecuencia sin afectar el contenido principal de la señal.\\n\\n¿Qué filtro sería el más adecuado?",
              options: [
                "A. Pasaaltas",
                "B. Pasabajas",
                "C. Pasabanda",
                "D. Rechazabanda"
              ],
              answer: 1,
              explanation: "El filtro pasabajas permite conservar las componentes de baja frecuencia mientras atenúa las componentes de alta frecuencia presentes como ruido."
            },
            {
              question: "Pregunta 2\\n\\nEn un filtro RC pasabajas, la frecuencia de corte corresponde al punto donde:",
              options: [
                "A. El voltaje de salida es igual al voltaje de entrada.",
                "B. El voltaje de salida alcanza el 70,7 % de su valor máximo.",
                "C. La corriente vale cero.",
                "D. La resistencia deja de conducir."
              ],
              answer: 1,
              explanation: "La frecuencia de corte también se conoce como frecuencia de −3 dB."
            },
            {
              question: "Pregunta 3\\n\\n¿Qué ocurre con la reactancia capacitiva (XC) cuando aumenta la frecuencia?",
              options: [
                "A. Aumenta.",
                "B. Disminuye.",
                "C. Permanece constante.",
                "D. Se hace igual a la resistencia."
              ],
              answer: 1,
              explanation: "La reactancia capacitiva es inversamente proporcional a la frecuencia."
            },
            {
              question: "Pregunta 4\\n\\nEn un circuito RLC serie, la resonancia ocurre cuando:",
              options: [
                "A. XL es mayor que XC.",
                "B. XC es mayor que XL.",
                "C. XL = XC.",
                "D. R = XL."
              ],
              answer: 2,
              explanation: "En resonancia las reactancias inductiva y capacitiva se cancelan y el circuito se comporta como puramente resistivo."
            },
            {
              question: "Pregunta 5\\n\\n¿Por qué los ingenieros utilizan una escala en decibeles (dB) para analizar filtros?",
              options: [
                "A. Porque convierte cualquier señal en una onda sinusoidal.",
                "B. Porque facilita representar ganancias y atenuaciones mediante una escala logarítmica.",
                "C. Porque elimina la necesidad de medir voltaje.",
                "D. Porque únicamente sirve para señales de audio."
              ],
              answer: 1,
              explanation: "Los decibeles simplifican el análisis de múltiples etapas de amplificación y de la respuesta en frecuencia de los filtros."
            },
            {
              question: "Pregunta 6\\n\\nUn filtro rechazabanda resulta especialmente útil para:",
              options: [
                "A. Amplificar todas las frecuencias.",
                "B. Eliminar únicamente una banda específica de frecuencias.",
                "C. Dejar pasar únicamente frecuencias muy altas.",
                "D. Convertir señales analógicas en digitales."
              ],
              answer: 1,
              explanation: "Este tipo de filtro es ampliamente utilizado para eliminar interferencias específicas, por ejemplo, el ruido de la red eléctrica de 50 o 60 Hz."
            },
            {
              question: "Pregunta 7\\n\\nDurante el procesamiento de una señal ECG aparece una interferencia de 60 Hz proveniente de la red eléctrica.\\n\\n¿Cuál de las siguientes soluciones sería la más apropiada?",
              options: [
                "A. Utilizar un filtro pasabajas con frecuencia de corte de 5 Hz.",
                "B. Aplicar un filtro rechazabanda centrado en 60 Hz.",
                "C. Utilizar únicamente un amplificador operacional.",
                "D. Incrementar la amplitud de la señal."
              ],
              answer: 1,
              explanation: "El filtro notch o rechazabanda permite eliminar selectivamente la interferencia de la red eléctrica preservando el resto de la señal fisiológica."
            }
          ]`;

function updateFile(file) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Find the block for clase-04
    const idIndex = content.indexOf('id: "clase-04"');
    if (idIndex === -1) {
        console.error("clase-04 not found in", file);
        return;
    }
    
    // Find the quizzes block inside clase-04
    const quizzesStart = content.indexOf('quizzes: [', idIndex);
    if (quizzesStart === -1) {
        console.error("quizzes not found in clase-04 in", file);
        return;
    }
    
    // Find the end of the quizzes array. It's an array of objects.
    let braceCount = 0;
    let bracketCount = 0;
    let inArray = false;
    let quizzesEnd = -1;
    
    for (let i = quizzesStart + 8; i < content.length; i++) {
        if (content[i] === '[') {
            bracketCount++;
            inArray = true;
        } else if (content[i] === ']') {
            bracketCount--;
            if (inArray && bracketCount === 0) {
                quizzesEnd = i + 1;
                break;
            }
        }
    }
    
    if (quizzesEnd === -1) {
        console.error("Could not find end of quizzes array in", file);
        return;
    }
    
    const newContent = content.substring(0, quizzesStart) + quizzes + content.substring(quizzesEnd);
    fs.writeFileSync(file, newContent, 'utf8');
    console.log("Updated", file);
}

updateFile('js/courseData.js');
updateFile('js/courseData.mjs');
