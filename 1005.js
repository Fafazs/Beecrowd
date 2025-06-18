var input = require('fs').readFileSync('data/1005.txt', 'utf8');
var lines = input.split('\r\n');

const notaA = parseFloat(lines[0]);
const notaB = parseFloat(lines[1]);

const media = (notaA * 3.5 + notaB * 7.5) / (3.5 + 7.5);

console.log(`MEDIA = ${media.toFixed(5)}`);