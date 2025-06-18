var input = require('fs').readFileSync('data/1064.txt', 'utf8');
var lines = input.split('\r\n');

let positivos = 0;
let sum = 0;

for(let i = 0; i < lines.length; i++){
    let n = parseFloat(lines[i]);
    if(n >= 0){
        positivos++;
        sum += n;
    }
}


const result = (sum / positivos).toFixed(1);
console.log(`${positivos} valores positivos\n${result}`);

