const fs = require('fs');
let code = fs.readFileSync('js/components.js', 'utf8');

// I accidentally appended the new 8 components into the Power Supply activity.
// Let's find the bad injection.
const startSearch = 'hint: "Pequeño punto bajo los terminales de 5V/3A, marcado con \'OC\'."\n    }\n,\n    {\n      level: 2, number: 13';
const startIdx = code.indexOf(startSearch);
if (startIdx !== -1) {
  // Found it. 
  const endSearch = '  const triviaQuestions = [';
  const nextTriviaIdx = code.indexOf(endSearch, startIdx);
  const badBlock = code.substring(startIdx, nextTriviaIdx);
  
  const replacement = 'hint: "Pequeño punto bajo los terminales de 5V/3A, marcado con \'OC\'."\n    }\n  ];\n\n';
  
  code = code.replace(badBlock, replacement);
  fs.writeFileSync('js/components.js', code);
  console.log('Reverted successfully.');
} else {
  console.log('Could not find bad block.');
}
