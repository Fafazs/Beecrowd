var input = require('fs').readFileSync('data/1171.txt', 'utf8');
var lines = input.split('\r\n');

const N = parseInt(lines[0]);
const numbers = [];

for(let i = 1; i <= N; i++){
    let quantity = 1;
    const n = parseInt(lines[i]);
    numbers.push({n, quantity});
};

console.table(numbers);


