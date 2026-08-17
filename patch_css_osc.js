const fs = require('fs');

let code = fs.readFileSync('js/components.js', 'utf8');

const startMarker = "const styleId = 'afg1022-activity-styles';";
const endMarker = "    document.head.appendChild(styleEl);\n  }";
const startIdx = code.indexOf(startMarker);
const endIdx = code.indexOf(endMarker) + endMarker.length;
const cssBlock = code.substring(startIdx, endIdx);

const oscTargetStart = "const styleId = 'afg1022-activity-styles'; // Usa la misma clase base";
const oscTargetEnd = "    // Vamos a copiarlo rápido aquí para garantizar que existan.\n  }";
const oscTargetIdxStart = code.lastIndexOf(oscTargetStart);
const oscTargetIdxEnd = code.lastIndexOf(oscTargetEnd) + oscTargetEnd.length;
const stringToReplace = code.substring(oscTargetIdxStart, oscTargetIdxEnd);

code = code.replace(stringToReplace, cssBlock);
fs.writeFileSync('js/components.js', code);
console.log('Patched CSS into Oscilloscope');
