var input = require('fs').readFileSync('data/1002.txt', 'utf8');
var lines = input.split('\r\n');

const A = parseInt(lines[0]);
const B = parseInt(lines[1]);

const sum = A + B;
console.log(`SOMA = ${sum}`);