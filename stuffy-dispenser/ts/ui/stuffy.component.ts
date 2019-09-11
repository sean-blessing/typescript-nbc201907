import { Stuffy } from "../model/stuffy.class";
console.log('Welcome to the stuffy dispenser app!');
// create instance of stuffy
let s1: Stuffy = new Stuffy(1,"giraffe","blue","s",3);
// display instance of stuffy
console.log(s1.about());

console.log('bye!');