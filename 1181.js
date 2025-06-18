var input = require('fs').readFileSync('data/1181.txt', 'utf8');
var lines = input.split('\r\n');

//The first line of the input contains a simple integer L (0 ≤ L ≤ 11) indicating the line to be considered in the operation.
// The second line of the input contains a single uppercase character T ('S' or 'M') indicating the operation Sum or Average.
// Next, there are 12 lines, each containing 12 numbers with one digit after the decimal point.

const linha = parseInt(lines[0]);
const operacao = lines[1];
let matriz = [];	
index = 2;

for(let i = 0; i < 12; i++){
    matriz[i] = [];
    for(let j = 0; j < 12; j++){
        matriz[i][j] = parseFloat(lines[index++]);
    }
}

console.table(matriz);