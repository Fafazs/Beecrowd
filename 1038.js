var input = require('fs').readFileSync('data/1038.txt', 'utf8');
var lines = input.split('\r\n');

//The input file contains two integer numbers X and Y. X is 
// the product code and Y is the quantity of this item according 
// to the above table.

const code = parseInt(lines[0].split(" ")[0]);
const quantity = parseInt(lines[0].split(" ")[1]);


const table = {
    1: ["Cachorro Quente", 4.00],
    2: ["X-Salada", 4.50],
    3: ["X-Bacon", 5.00],
    4: ["Torrada simples", 2.00],
    5: ["Refrigerante", 1.50]
}


//The output must be a message "Total: R$ " followed by the total value to be paid,
//with 2 digits after the decimal point.

const result = table[code][1] * quantity;

console.log("Total: R$ " + result.toFixed(2));