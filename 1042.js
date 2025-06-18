var input = require('fs').readFileSync('data/1042.txt', 'utf8');
var lines = input.split('\r\n');


let valores = lines[0].split(" ");
let num1 = parseInt(valores[0]);
let num2 = parseInt(valores[1]);
let num3 = parseInt(valores[2]);

let data = [num1, num2, num3];
let dataSalva = [num1, num2, num3];


for(let i = 0;  i < data.length-1; i++){
    for(let j = 0; j < data.length-1-i; j++){
        if(data[j] > data[j+1]){
            let aux = data[j];
            data[j] = data[j+1];
            data[j+1] = aux;
        }
    }
}

for(let i = 0; i < data.length; i++){
    console.log(data[i]);
}

console.log('');

for(let i = 0; i < dataSalva.length; i++){
    console.log(dataSalva[i]);
}

