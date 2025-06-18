var input = require('fs').readFileSync('data/1930.txt', 'utf8');
var lines = input.split('\r\n');

//they asked you to write a program that, given the number of 
//outlets in each rule, determine the maximum number of devices 
//that can be connected to the energy in the same instant.


//The input consists of a line with four integers T1, T2, T3, T4,
//indicating the number of taken from each of the four strips (2 ≤ Ti ≤ 6).
let T1 = parseInt(lines[0].split(' ')[0]);
let T2 = parseInt(lines[0].split(' ')[1]);
let T3 = parseInt(lines[0].split(' ')[2]);
let T4 = parseInt(lines[0].split(' ')[3]);



//Your program should produce a single line containing a single integer
//indicating the maximum number of devices that can be connected to the
//energy in the same instant.

//So if you have 4 strips:
//1 goes into the wall (uses 0 sockets).
//3 are plugged into others (each loses 1).

T1 = T1 - 1;
T2 = T2 - 1;    
T3 = T3 - 1;

const sum = T1 + T2 + T3 + T4;

console.log(sum);

