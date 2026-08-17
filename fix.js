const fs = require('fs');
let code = fs.readFileSync('js/components.js', 'utf8');
code = code.replace(/\\`/g, '`');
code = code.replace(/\\\${/g, '${');
fs.writeFileSync('js/components.js', code);
console.log('Fixed components.js');
