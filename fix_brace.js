const fs = require('fs');
let code = fs.readFileSync('js/components.js', 'utf8');

const badStr = "hint: \"Pequeño punto bajo los terminales de 5V/3A, marcado con 'OC'.\"\r\n\r\n  ];";
const goodStr = "hint: \"Pequeño punto bajo los terminales de 5V/3A, marcado con 'OC'.\"\r\n    }\r\n  ];";

if (code.includes(badStr)) {
  code = code.replace(badStr, goodStr);
  fs.writeFileSync('js/components.js', code);
  console.log('Fixed missing brace 1');
} else {
  const badStr2 = "hint: \"Pequeño punto bajo los terminales de 5V/3A, marcado con 'OC'.\"\n\n  ];";
  const goodStr2 = "hint: \"Pequeño punto bajo los terminales de 5V/3A, marcado con 'OC'.\"\n    }\n  ];";
  if (code.includes(badStr2)) {
    code = code.replace(badStr2, goodStr2);
    fs.writeFileSync('js/components.js', code);
    console.log('Fixed missing brace 2');
  } else {
    console.log('Could not find badStr');
  }
}
