var input = require('fs').readFileSync('data/1004.txt', 'utf8');
var lines = input.split('\r\n');

const a = parseInt(lines[0]);
const b = parseInt(lines[1]);

const prod = a * b;
console.log(`PROD = ${prod}`);