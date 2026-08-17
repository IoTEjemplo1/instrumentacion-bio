const fs = require('fs');
let code = fs.readFileSync('js/components.js', 'utf8');

// The issue is that the tool literally wrote \` instead of ` inside the file
// I will replace all occurrences of \` with `
code = code.replace(/\\\\\\\`/g, '`');
code = code.replace(/\\\\`/g, '`');
code = code.replace(/\\\`/g, '`');
// Same for \${
code = code.replace(/\\\\\\\$/g, '$');
code = code.replace(/\\\\\\$/g, '$');
code = code.replace(/\\\$/g, '$');

fs.writeFileSync('js/components.js', code);
console.log('Fixed syntax in components.js');
