const fs = require('fs');
let code = fs.readFileSync('js/components.js', 'utf8');

const fnStart = code.indexOf('function initOscilloscopeActivity');
const endOfFile = code.length;

// the bad code has: 
// hint: "Fila de botones grises debajo de la pantalla."
// ,
//    }
//  ];
//
//  const triviaQuestions = [, name: "Perilla Multipropósito"

const startReplaceStr = '      hint: "Fila de botones grises debajo de la pantalla."';
const endReplaceStr = '      description: "Ajusta la intensidad luminosa del trazo y navega por menús.",';

const startIdx = code.indexOf(startReplaceStr, fnStart);
const endIdx = code.indexOf(endReplaceStr, fnStart);

if (startIdx !== -1 && endIdx !== -1) {
  const badBlock = code.substring(startIdx + startReplaceStr.length, endIdx);
  const goodBlock = `
    },
    {
      level: 2, number: 13, id: "perilla-intensidad", name: "Perilla Multipropósito", color: "#9333ea", // Purple-600
`;
  code = code.replace(badBlock, goodBlock);
  fs.writeFileSync('js/components.js', code);
  console.log('Fixed syntax and restored the 13th component.');
} else {
  console.log('Could not find bounds to fix.');
}
