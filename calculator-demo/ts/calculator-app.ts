var readlineSync = require('readline-sync');
console.log("Welcome to my calcluator!");

let str: string = readlineSync.question('Whats your name? ');
console.log("Hello, "+str);
let n1: number = readlineSync.questionInt('number 1?');
let n2: number = readlineSync.questionInt('number 2?');

let sum: number = n1 + n2;
let diff: number = n1 - n2;
let pdt: number = n1 * n2;
let qt: number = n1 / n2;
let mod: number = n1 % n2;

console.log("sum = "+sum);
console.log("diff = "+diff);
console.log("pdt = "+pdt);
console.log("qt = "+qt);
console.log("mod = "+mod);


console.log("bye");