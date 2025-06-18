// 1087 top area
var input = require('fs').readFileSync('data/1087.txt', 'utf8');
var lines = input.split('\r\n');

const op = lines[0].trim();

let matriz = [];	
let index = 1;

for(let i = 0; i < 12; i++){
    matriz[i] = [];
    for(let j = 0; j < 12; j++){
        matriz[i][j] = parseFloat(lines[index++]);
    }
}

let sum = 0;
let count = 0;

for(let linha = 0; linha <= 4; linha++){
    for(let coluna = linha + 1; coluna < 11 - linha; coluna++){
        sum += matriz[linha][coluna];
        count++;
    }
}

if(op == 'S'){
    console.log(sum.toFixed(1));
    return;
}else if(op == 'M'){
    console.log((sum/count).toFixed(1));
    return;
}else{
    console.log('Invalid Operation');
    return;
}
