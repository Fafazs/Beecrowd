var input = require('fs').readFileSync('data/1007.txt', 'utf8');
var lines = input.split('\r\n');

const a = parseInt(lines[0]);
const b = parseInt(lines[1]);
const c = parseInt(lines[2]);
const d = parseInt(lines[3]);

const diff = ((a * b) - (c * d));
console.log(`DIFERENCA = ${diff}`);