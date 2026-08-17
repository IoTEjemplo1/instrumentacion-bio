const fs = require('fs');
let code = fs.readFileSync('js/components.js', 'utf8');

// Use regex to find the exact injection spot
const badInjectionRegex = /hint: "Pequeño punto bajo los terminales de 5V\/3A, marcado con 'OC'\."\r?\n\s*\r?\n,\r?\n\s*\{\r?\n\s*level: 2, number: 13/g;
// Actually, let's just find ",\n    {\n      level: 2, number: 13"

const idx = code.indexOf(',\n    {\n      level: 2, number: 13');
if (idx !== -1) {
  const nextTrivia = code.indexOf('  const triviaQuestions = [', idx);
  const badPart = code.substring(idx, nextTrivia);
  code = code.replace(badPart, '\n  ];\n\n');
  fs.writeFileSync('js/components.js', code);
  console.log('Reverted using substring');
} else {
  // try different newline \r\n
  const idx2 = code.indexOf(',\r\n    {\r\n      level: 2, number: 13');
  if (idx2 !== -1) {
    const nextTrivia = code.indexOf('  const triviaQuestions = [', idx2);
    const badPart = code.substring(idx2, nextTrivia);
    code = code.replace(badPart, '\r\n  ];\r\n\r\n');
    fs.writeFileSync('js/components.js', code);
    console.log('Reverted using substring (windows newlines)');
  }
}
