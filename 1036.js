var input = require('fs').readFileSync('data/1036.txt', 'utf8');
var lines = input.split('\r\n');

const data = lines[0].split(' ');
const a = parseFloat(data[0]);
const b = parseFloat(data[1]);
const c = parseFloat(data[2]);

let delta = Math.pow(b, 2) - (4 * a * c);

let r1 = (-b + Math.sqrt(delta)) / (2 * a);
let r2 = (-b - Math.sqrt(delta)) / (2 * a);

if (delta > 0 && a > 0) {
  console.log(`R1 = ${r1.toFixed(5)}`);
  console.log(`R2 = ${r2.toFixed(5)}`);
}else{
    console.log('Impossivel calcular');
}