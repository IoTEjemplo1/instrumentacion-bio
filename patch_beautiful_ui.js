const fs = require('fs');

let code = fs.readFileSync('js/components.js', 'utf8');
const newOscCode = fs.readFileSync('new_osc_activity.js', 'utf8');

const functionStart = "function initOscilloscopeActivity(onAwardXp) {";
const functionStartIdx = code.indexOf(functionStart);
if (functionStartIdx === -1) {
  console.log("Could not find initOscilloscopeActivity");
  process.exit(1);
}

// The function is at the end of the file, let's just slice from functionStartIdx to the end, and replace it.
// Wait, is it the very last thing in the file? Let's check.
const endOfFileContent = code.substring(functionStartIdx);
code = code.replace(endOfFileContent, newOscCode);

fs.writeFileSync('js/components.js', code);
console.log('Beautiful UI patched into components.js');
