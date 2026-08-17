const fs = require('fs');

// 1. Update courseData.js to use .png
let courseData = fs.readFileSync('js/courseData.js', 'utf8');
courseData = courseData.replace(/osciloscopio\.jpg/g, 'osciloscopio.png');
fs.writeFileSync('js/courseData.js', courseData);
console.log('courseData.js updated to .png');

// 2. Update components.js coordinates
let components = fs.readFileSync('js/components.js', 'utf8');

// I will do targeted string replacements for the coords objects of the 12 components.

const replacements = {
  // Pantalla LCD
  "{ top: 22, left: 19, width: 44, height: 49 }": "{ top: 12, left: 5, width: 55, height: 60 }",
  // Menús de función
  "{ top: 12, left: 81, width: 11, height: 10 }": "{ top: 5, left: 86, width: 12, height: 17 }",
  // Controles horizontales
  "{ top: 11, left: 69, width: 11, height: 17 }": "{ top: 5, left: 63, width: 22, height: 18 }",
  // Controles de disparo
  "{ top: 29, left: 69, width: 9, height: 19 }": "{ top: 25, left: 63, width: 15, height: 23 }",
  // Controles verticales
  "{ top: 51, left: 69, width: 17, height: 24 }": "{ top: 49, left: 63, width: 35, height: 26 }",
  // Teclas de canal
  "{ top: 66, left: 72, width: 13, height: 7 }": "{ top: 59, left: 68, width: 12, height: 7 }",
  // Entradas de canal
  "{ top: 79, left: 65, width: 16, height: 14 }": "{ top: 78, left: 58, width: 20, height: 14 }",
  // Conector de compensación
  "{ top: 81, left: 56, width: 7, height: 8 }": "{ top: 82, left: 45, width: 9, height: 8 }",
  // Puerto USB
  "{ top: 82, left: 50, width: 5, height: 8 }": "{ top: 82, left: 37, width: 7, height: 6 }",
  // Encendido
  "{ top: 83, left: 18, width: 5, height: 8 }": "{ top: 82, left: 4, width: 5, height: 6 }",
  // Salida de generador
  "{ top: 82, left: 25, width: 6, height: 11 }": "{ top: 81, left: 12, width: 6, height: 8 }",
  // Teclas de menú rápido
  "{ top: 73, left: 19, width: 44, height: 6 }": "{ top: 74, left: 5, width: 55, height: 5 }"
};

for (const [oldCoords, newCoords] of Object.entries(replacements)) {
  if (components.includes(oldCoords)) {
    components = components.replace(oldCoords, newCoords);
  } else {
    console.log("Could not find coords: " + oldCoords);
  }
}

fs.writeFileSync('js/components.js', components);
console.log('components.js coordinates updated.');
