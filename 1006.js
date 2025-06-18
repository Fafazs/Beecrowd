var input = require('fs').readFileSync('data/1006.txt', 'utf8');
var lines = input.split('\r\n');

const A = parseFloat(lines[0]);
const B = parseFloat(lines[1]);
const C = parseFloat(lines[2]);

const media = (A * 2 + B * 3 + C * 5) / (2 + 3 + 5);
console.log(`MEDIA = ${media.toFixed(1)}`);