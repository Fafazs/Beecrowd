var input = require('fs').readFileSync('data/1018.txt', 'utf8');
var lines = input.split('\r\n');

let data = lines[0];
const notas = [100,50,20,10,5,2,1];

console.log(data);
for(let i = 0; i < notas.length; i++){
    let nota = notas[i];
    let qtd = parseInt(data/nota);
    console.log(`${qtd} nota(s) de R$ ${nota},00`);
    data = data - (nota*qtd);
}