var input = require('fs').readFileSync('data/1050.txt', 'utf8');
var lines = input.split('\r\n');

const ddd = lines[0];

//Read an integer number that is the code number for phone dialing
//Print the city name corresponding to the input DDD.
//Print DDD nao cadastrado if doesn't exist corresponding DDD to the typed

const dddList = {
    61: 'Brasilia',
    71: "Salvador",
    11: "Sao Paulo",
    21: "Rio de Janeiro",
    32: "Juiz de Fora",
    19: "Campinas",
    27: "Vitoria",
    31: "Belo Horizonte"
}

let itHas = false;

for(const key in dddList){
    if(ddd == key){
        console.log(dddList[ddd]);
        itHas = true;
    }
}

if(itHas === false){
    console.log(`DDD nao cadastrado`);
}
