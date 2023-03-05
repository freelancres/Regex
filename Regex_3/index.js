//Escaping, special characteres
let str = "Price: 5.1";
let reExp = /\d\.\d/;
let result = str.match(reExp); //match only with '.'

str = "function sum()";
reExp = /\w\w\w\(\)/;
result = str.match(reExp);

str = "1\\2";
reExp = /\\/;

    
result = str.match(reExp); // '\\'


// Sets and Ranges [...]

str = "Soon Ramadan is coming !!"
reExp = /Rama[dz]an/;

result = str.match(reExp); // match



str = "smallcasesANDCAPITALCASES2023_";
reExp = /[a-zA-Z0-9_]/g; // \w

result = str.match(reExp);


/**
 * \w : [a-zA-Z0-9_]
 * \d : [0-9]
 * \s : [\t\n\v\f\r ]
 */

// Excluding ranges

/**
 * [^aeoui] - any character except 'a' ,'e' ,'o' ,'u' ,'i'
 * \D : [^0-9]
 * \S : [^\s]
 */

/* Write a regex that match the below string :
   "alajaoa@gmail.com"

*/
str = "alajaoa@gmail.com";
reExp = /^[a-z]+@[a-z]+\.[a-z]+$/; 
result = str.match(reExp);


/* Write a regex that match the starnge characters on this string :
   "alajaoa@gmail.com"

*/
str = "alajaoa@gmail.com";
reExp = /[^\d\sA-Z]/gi; // [\W] , [^\w]
result = str.match(reExp);


// No need to ecap
str = "(5 + 6) -  20.55";
reExp = /[+-.()]/g;
result = str.match(reExp);

//Quantifiers:  +, *, ? and {n}

// + : one ore more same as {1,}
str = "abu ammar was born in 1962"
reExp = /[a-z]+/g;
result = str.match(reExp); // [ 'abu', 'ammar', 'was', 'born', 'in' ]


// ? means {0,1}
str = "I like color to be red" // colour
reExp = /colou?r/g; // color or colour
result = str.match(reExp); 

// * means {0,}
str = "I like colouuuur to be red"; // colour
reExp = /colou*r/g; // color or colour
result = str.match(reExp); 


// {n} , {n , n}
str = "I like colouar to be red";
reExp = /colo[a-z]{0,2}r/g; 
result = str.match(reExp); 
//console.log(result);

// Groups : (...)
str = "Gogogo, let's move on !!!";
reExp = /(go)+/i;
result = str.match(reExp);

//domain: mail.com , users.mail.com, safwan.users.mail.com

reExp = /(\w+\.)+(\w+)/i;
str = "safwan.com";
result = str.match(reExp);

/**
 * create regex for emails:
 * email : alphanumeric_@domain
 */

reExp = /(\w+)@(\w+\.)+(\w+)/i;
str = "kamal_2023@safwan.com";
result = str.match(reExp);
//console.log(result);

// Capturing named groups :

let text = "The quick brown fox jumps over the lazy dog. It barked.";
let regexNamedGroup = /(?<animal>fox|dog)/g;
let itrable = text.matchAll(regexNamedGroup);
result = [...itrable];
 
for (i = 0; i < result.length; i++){
   console.log(result[i].groups);
}
