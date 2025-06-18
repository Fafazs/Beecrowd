var input = require('fs').readFileSync('data/1002.txt', 'utf8');
var lines = input.split('\r\n');

const R = parseFloat(lines[0]);
const n = 3.14159;

const A = n * Math.pow(R, 2);


console.log(`A=${A.toFixed(4)}`);