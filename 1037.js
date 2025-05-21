var input = require('fs').readFileSync('data/1037.txt', 'utf8');
var lines = input.split('\r\n');

const floatData = parseFloat(lines[0]);

/*

You must make a program that read a float-point number and print a message saying in which of following intervals
the number belongs: [0,25] (25,50], (50,75], (75,100]. If the read number is less than zero or greather than 100,
the program must print the message “Fora de intervalo” that means "Out of Interval".

*/

if (floatData >= 0 && floatData <= 25) {
    console.log("Intervalo [0,25]");
} else if (floatData > 25 && floatData <= 50) {
    console.log("Intervalo (25,50]");
} else if (floatData > 50 && floatData <= 75) {
    console.log("Intervalo (50,75]");
} else if (floatData > 75 && floatData <= 100) {
    console.log("Intervalo (75,100]");
} else {
    console.log("Fora de intervalo");
}
