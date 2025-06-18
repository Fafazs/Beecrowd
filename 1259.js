var input = require('fs').readFileSync('data/1259.txt', 'utf8');
var lines = input.split('\r\n');


const n = Number(lines[0]);

//Separate the numbers into even and odd.

let even = [];
let odd = [];
for (let i = 1; i <= n; i++) {
    const line = lines[i].trim();   // Remove espaços em branco
    if (line === '') continue;      // Ignora linhas vazias
    const number = Number(line);    // Usa Number(), mais seguro que parseInt/parseFloat

    if (isNaN(number)) continue;    // Evita NaN na marra (opcional de segurança extra)

    if (number % 2 === 0) {
        even.push(number);
    } else {
        odd.push(number);
    }
}
//separate even into ascending order

for(let i = 1; i < even.length; i++){
    let valueI = even[i];//Get the second element of the array, the literal value of the element
    let index = i - 1;//Get the index of the first element of the array

    while(index >= 0 && even[index] > valueI){
        //if the first element is greater than the second element, swap them
        even[index+1] = even[index];
        //drecrement the index of the first element
        index--;
    }

    even[index+1] = valueI;
}

//separate odd into descending order

for(let i = odd.length - 2; i >= 0; i--){
    let valueI = odd[i];//Get the second element of the array, the literal value of the element
    let index = i + 1;//Get the index of the first element of the array
    
    while(index < odd.length && odd[index] < valueI){
        //if the first element is greater than the second element, swap them
        odd[index-1] = odd[index];
        //drecrement the index of the first element
        index++;
    }
    odd[index-1] = valueI;

}


//consoling the even and odd arrays

for(let i = 0; i < even.length; i++){
    console.log(even[i]);
}

for(let i = odd.length-1; i >= 0; i--){
    console.log(odd[i]);
}
