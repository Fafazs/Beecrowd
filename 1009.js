var input = require('fs').readFileSync('data/1009.txt', 'utf8');
var lines = input.split('\r\n');

const nome = String(lines[0]);
const salary = parseFloat(lines[1]);
const sales = parseFloat(lines[2]);

const total = salary + (sales * 0.15);

console.log(`TOTAL = R$ ${total.toFixed(2)}`);