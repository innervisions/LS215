let firstName = 'Raymond'; // #1
let lastName = 'Saade';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

console.log(firstName.concat(lastName)); // #2

console.log(fullName.split(' ')); // #3

let language = 'JavaScript'; // #4
let idx = language.indexOf('S');
console.log(idx);

let charCode = language.charCodeAt(idx); // #5
console.log(charCode);

console.log(String.fromCharCode(charCode)); // #6

console.log(language.lastIndexOf('a')); // #7

let a = 'a'; // #8
let b = 'b';
console.log(a > b);
b = 'B';
console.log(a > b);

let aIndex = language.indexOf('a'); // #9
let vIndex = language.indexOf('v');
console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));

aIndex = language.indexOf('a'); // #10
vIndex = language.indexOf('v');
console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));

let fact1 = 'JavaScript is fun'; // #11
let fact2 = 'Kids like it too';
let compoundSentence = fact1 + ' and ' + fact2.toLowerCase();
console.log(compoundSentence);

console.log(fact1[0]); // #12
console.log(fact2[0]);

let pi = 22 / 7; // #13
pi = pi.toString();
console.log(pi.lastIndexOf('14'));

let boxNumber = (356).toString(); // #14
console.log(boxNumber);

boxNumber = Number.parseInt(boxNumber, 10); // #15
console.log(typeof boxNumber);
boxNumber = String(boxNumber);
console.log(typeof boxNumber);

let rlSync = require('readline-sync');
let name = rlSync.question('What is your name?: ');
if (name[name.length - 1] == '!') {
  console.log(`HELLO ${name.slice(0, name.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
