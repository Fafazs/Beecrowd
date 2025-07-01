var input = require('fs').readFileSync('data/1019.txt', 'utf8');
var lines = input.split('\r\n');

//read the value of the seconds and covert into hours, minutes and seconds.

let seconds = parseInt(lines[0]);
let hours = 0;
let minutes = 0;

if(seconds >= 3600){
hours = Math.floor(seconds / 3600);
seconds = seconds % 3600;
}


if(seconds >= 60){
minutes = Math.floor(seconds / 60);
seconds = seconds % 60;
}

console.log(`${hours}:${minutes}:${seconds}`);