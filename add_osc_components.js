const fs = require('fs');

let code = fs.readFileSync('js/components.js', 'utf8');

// The new 8 components
const newComponents = `,
    {
      level: 2, number: 13, id: "perilla-intensidad", name: "Perilla Multipropósito", color: "#9333ea", // Purple-600
      description: "Ajusta la intensidad luminosa del trazo y navega por menús.",
      bioApp: "Sube la intensidad si estás viendo pulsos biológicos muy rápidos que casi no se ven.",
      coords: { top: 34, left: 63, width: 6, height: 12 },
      hint: "Perilla grande solitaria a la izquierda del área de Trigger."
    },
    {
      level: 2, number: 14, id: "boton-default-setup", name: "Default Setup", color: "#b45309", // Amber-700
      description: "Restaura el osciloscopio a sus configuraciones de fábrica.",
      bioApp: "Si alguien desconfiguró el equipo y no ves nada, presiona este botón para empezar de cero.",
      coords: { top: 15, left: 86, width: 6, height: 6 },
      hint: "Bajo los botones de Run/Stop."
    },
    {
      level: 2, number: 15, id: "boton-autoscale", name: "Auto Scale", color: "#0369a1", // Sky-700
      description: "Auto-ajusta las escalas para encontrar y estabilizar la señal visible.",
      bioApp: "Útil como primer paso rápido, aunque en bioseñales ruidosas puede fallar.",
      coords: { top: 15, left: 93, width: 6, height: 6 },
      hint: "A la derecha del Default Setup."
    },
    {
      level: 2, number: 16, id: "boton-utility", name: "Menú Utility", color: "#4d7c0f", // Lime-700
      description: "Opciones del sistema (Idioma, calibración interna, I/O).",
      bioApp: "Se usa a menudo para configurar la conexión del osciloscopio al PC.",
      coords: { top: 38, left: 69, width: 5, height: 6 },
      hint: "En el bloque Tools, centro del panel."
    },
    {
      level: 3, number: 17, id: "boton-cursors", name: "Menú Cursors", color: "#be123c", // Rose-700
      description: "Líneas guía manuales para medir con precisión tiempo y voltaje.",
      bioApp: "Herramienta ideal para medir a mano la duración exacta del complejo QRS en un ECG.",
      coords: { top: 25, left: 79, width: 5, height: 6 },
      hint: "Sección Measure, botón superior izquierdo."
    },
    {
      level: 3, number: 18, id: "boton-math", name: "Funciones Matemáticas", color: "#1d4ed8", // Blue-700
      description: "Operaciones como suma, resta, integración y FFT entre canales.",
      bioApp: "Permite usar la FFT para ver las frecuencias dominantes (Hz) del temblor muscular (EMG).",
      coords: { top: 26, left: 89, width: 5, height: 6 },
      hint: "A la derecha de la sección Measure."
    },
    {
      level: 3, number: 19, id: "boton-acquire", name: "Menú Acquire", color: "#be185d", // Pink-700
      description: "Ajusta la forma en que el equipo muestrea (Promedio, Alta resolución).",
      bioApp: "El modo 'Average' reduce enormemente el ruido aleatorio en un EEG constante.",
      coords: { top: 43, left: 79, width: 5, height: 6 },
      hint: "En el bloque Waveform, lado izquierdo."
    },
    {
      level: 3, number: 20, id: "boton-save-recall", name: "Save / Recall", color: "#4338ca", // Indigo-700
      description: "Guarda o carga configuraciones y datos de ondas en la memoria USB.",
      bioApp: "Usa esto para llevarte los datos en CSV y graficarlos luego en Matlab o Python.",
      coords: { top: 49, left: 79, width: 5, height: 6 },
      hint: "En el bloque File."
    }
  ];`;

// Find the end of the componentsList array
const endOfListStr = `    }
  ];`;

if (code.includes(endOfListStr)) {
  // Replace the very last closing of the array with the new components
  // But wait, there might be multiple arrays ending like this.
  // Let's replace the one right before triviaQuestions.
  const targetStr = `    }
  ];

  const triviaQuestions = [`;
  
  if (code.includes(targetStr)) {
    code = code.replace(targetStr, newComponents + '\n\n  const triviaQuestions = [');
    fs.writeFileSync('js/components.js', code);
    console.log('8 new components added successfully.');
  } else {
    console.log("Could not find the target string to append new components.");
  }
} else {
  console.log("Could not find end of list string.");
}
