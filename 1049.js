var input = require('fs').readFileSync('data/1049.txt', 'utf8');
var lines = input.split('\r\n');

let input1 = lines[0];
let input2 = lines[1];
let input3 = lines[2];

const animalia = {
    vertebrado: {
        ave: {
            carnivoro:"aguia",
            onivoro: "pomba"
        },
        mamifero: {
            onivoro: "homem",
            herbivoro: "vaca"
        }
    },
    invertebrado: {
        inseto: {
             hematofago: "pulga",
             herbivoro: "lagarta"
        },
        anelideo: {
             hematofago: "sanguessuga",
             onivoro:"minhoca"
        }
    }
}


console.log(animalia[input1][input2][input3]);
