var input = require('fs').readFileSync('data/1041.txt', 'utf8');
var lines = input.split('\r\n');

const data = lines[0].split(' ');
const x = parseFloat(data[0]);
const y = parseFloat(data[1]);

switch(true){
    case x > 0 && y > 0:
        return console.log('Q1');
    case x < 0 && y > 0:
        return console.log('Q2');
    case x < 0 && y < 0:
        return console.log('Q3');
    case x > 0 && y < 0:
        return console.log('Q4');
    case x === 0 && y === 0:
        return console.log('Origem');
    case x === 0 && y !== 0:
        return console.log('Eixo Y');
    case x !== 0 && y === 0:
        return console.log('Eixo X');
    default:
        return console.log('Erro');
}


