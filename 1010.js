var input = require('fs').readFileSync('data/1010.txt', 'utf8');
var lines = input.split('\r\n');

const[id1, qtd1, price1] = lines[0].split(' ');
const[id2, qtd2, price2] = lines[1].split(' ');

let product1 = {
    id: parseInt(id1),
    qtd: parseInt(qtd1),
    price: parseFloat(price1)
}
let product2 = {
    id: parseInt(id2),
    qtd: parseInt(qtd2),
    price: parseFloat(price2)
}

let total = (product1.qtd * product1.price) + (product2.qtd * product2.price);
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
