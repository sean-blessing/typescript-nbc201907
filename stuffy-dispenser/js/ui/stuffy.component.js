"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require('readline-sync');
var stuffy_class_1 = require("../model/stuffy.class");
console.log('Welcome to the stuffy dispenser app!');
// create instances of stuffy
var s1 = new stuffy_class_1.Stuffy(1, "giraffe", "blue", "s", 3);
var s2 = new stuffy_class_1.Stuffy(5, "lion", "brown", "l", 4);
var s3 = new stuffy_class_1.Stuffy(9, "bear", "yello", "l", 2);
var s4 = new stuffy_class_1.Stuffy(13, "platypus", "yellow", "s", 2);
var s5 = new stuffy_class_1.Stuffy(19, "octopus", "hot pink", "xl", 22);
var s6 = new stuffy_class_1.Stuffy(21, "shark", "grey", "l", 0);
// create an array of stuffies
var stuffies = [s1, s2, s3, s4, s5, s6];
console.log('list of all stuffies:');
console.log('id\ttype\t\tcolor\tsize\tlimbs');
console.log('==\t========\t\t=====\t====\t=====');
for (var i = 0; i < stuffies.length; i++) {
    //console.log(stuffies[i].about());
    var stuffy = stuffies[i];
    console.log(stuffy.id + '\t' + stuffy.type + '\t\t' + stuffy.color +
        '\t' + stuffy.size + '\t' + stuffy.limbs);
}
// console.log(stuffies);
// prompt user for id to get
var id = readlineSync.questionInt('Which id would you like to get?');
// display instance of stuffy - one way
stuffies.forEach(function (s) {
    if (s.id == id) {
        console.log(s.about());
    }
});
// call getStuffy function
getStuffy(id);
function getStuffy(i) {
    // display instance of stuffy - 2nd way
    for (var _i = 0, stuffies_1 = stuffies; _i < stuffies_1.length; _i++) {
        var s = stuffies_1[_i];
        if (s.id == i) {
            console.log(s.about());
        }
    }
}
console.log('bye!');
