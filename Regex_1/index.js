// Regex

// Patterns and Flages

let regexp = new RegExp(/*pattern*/ "isaf", /*flags*/ "gi");

// regex lirtals:

let regex = /isaf/; // no flags
regex = /isaf/igmsuy; // with all flags


// Regex methods

// exec() , test()
let str = "We will, we will rock you";
regex = /we/gi;
let result = regex.exec(str); // 2 matches , needs loop
result = regex.test(str); // true

// String methods:
// match() , search() , replace()

result = str.match(regex); // 2 matches : [ 'We', 'we' ]
result = str.search(regex); // search finds only first match or -1
result = str.replace(regex, 'you'); //replace all matches with replaceValue


result = "I love my Mother".replace(/Mother/, "$& and My Wife"); // instert replaceValue

/************************ Character classes ************************/


// digit class : finds any single digit

/**
 * "+49 (23) 120 1548"
 * 49231201548
 */

str = "+49 (23) 120 1548";
regex = /\d/; // 4
regex = /\d/g; // global match
result = str.match(regex).join(""); // 49231201548

// \d : ("d" from digit) : 0 to 9
regex = /\D/; // +
regex = /\D/g; // 

result = str.match(regex).join(""); //'+ ()  '

//  /\w/: word charachter , alphanumeric + underscore_
str = "Hello World 2023";
regex = /\w/g;
result = str.match(regex); // finds every word charachter

// /\s/: space 
regex = /\s/g;
result = str.match(regex); // [ ' ', ' ' ]

// combination

regex = /\s\d/g;
result = str.match(regex); // [ ' 2' ]

//inverse classes : \D, \S, \W
// opposite of \d, \s, \w

// A dot is "any charachter"

str = "I love my name , and I live in Germany!";
regex = /l.ve/g;

result = str.match(regex);

// flag "s": enable dot with multi lines
str = `A
B`; // "A\nB"

regex = /A.B/;
result = str.match(regex); // null

regex = /A.B/s;
result = str.match(regex); // match 'A\nB'

// [\s\S] is dot alternative , works without s flag
regex = /A[\s\S]B/; // [] ranges will be covered later
result = str.match(regex); // match 'A\nB'


str = "1 - 5";
result = str.match(/\d - \d/); // match

console.log(result);