var readlineSync = require('readline-sync');
import { Stuffy } from "../model/stuffy.class";
console.log('Welcome to the stuffy dispenser app!');
// create instances of stuffy
let s1: Stuffy = new Stuffy(1,"giraffe","blue","s",3);
let s2: Stuffy = new Stuffy(5,"lion","brown","l",4);
let s3: Stuffy = new Stuffy(9,"bear","yello","l",2);
let s4: Stuffy = new Stuffy(13,"platypus","yellow","s",2);
let s5: Stuffy = new Stuffy(19,"octopus","hot pink","xl",22);
let s6: Stuffy = new Stuffy(21,"shark","grey","l",0);

// create an array of stuffies
let stuffies: Stuffy[] = [s1,s2,s3,s4,s5,s6];

console.log('list of all stuffies:');
console.log('id\ttype\t\tcolor\tsize\tlimbs');
console.log('==\t========\t\t=====\t====\t=====');
for (let i: number = 0; i < stuffies.length; i++) {
    //console.log(stuffies[i].about());
    let stuffy: Stuffy = stuffies[i];
    console.log(stuffy.id+'\t'+stuffy.type+'\t\t'+stuffy.color+
                '\t'+stuffy.size+'\t'+stuffy.limbs);
}
// console.log(stuffies);

// prompt user for id to get
let id: number = readlineSync.questionInt('Which id would you like to get?');

// display instance of stuffy - one way
stuffies.forEach(s => {
    if (s.id==id) {
        console.log(s.about());
    }
});

// call getStuffy function
getStuffy(id);

function getStuffy(i: number): void {
    // display instance of stuffy - 2nd way
    for (let s of stuffies) {
        if (s.id==i) {
            console.log(s.about());
        }
    }
}

console.log('bye!');