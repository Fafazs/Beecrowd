var input = require('fs').readFileSync('data/1001.txt', 'utf8');
var lines = input.split('\r\n');

const A = parseInt(lines[0]);
const B = parseInt(lines[1]);

const X = A + B;

console.log(`X = ${X}`);