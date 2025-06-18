var input = require('fs').readFileSync('data/1008.txt', 'utf8');
var lines = input.split('\r\n');

const number = parseInt(lines[0]);
const hours = parseInt(lines[1]);
const salaryPHour = parseFloat(lines[2]);

const salary = (hours * salaryPHour);
console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${salary.toFixed(2)}`);