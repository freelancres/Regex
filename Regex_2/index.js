//flag 'u'

/** char.  Unicode   Bytes count in unicode
 * a   :  0x0061   :
 * ≈   :  0x2248   : 
 * 𝒳   :  0x1d4b3  : 2
 * 𝒴   :  0x1d4b3   : 
 * 😄   :  0x1f604   : 2
 *  */ 


// console.log('😄'.length);


let str = "A 𝒳 𝒴 ბ 😄";

/**
 * Unicode properties \p{...}
 * Letter
 * Number : Arabic , Chinese
 */

let result = str.match(/\p{L}/gu);
//console.log(result);

// Example : hexadecimal numbers
str = "number: xAF";
let regEx = /x\p{Hex_Digit}\p{Hex_Digit}/u;
result = str.match(regEx); // 'xAF'
//console.log(result);

// Example: currency

/**
 * $ , € , ¥
 * 
 * \p{Sc} : Currency_Symbol
 */

str = `Prices: $2, €1, ¥9`;
regEx = /\p{Sc}\d/gu;

result = str.match(regEx); 

// console.log(result);

// Anchors: 
// string start: ^
// string end: $
str = "Mahmoud has a little child";
// a regex tests that the str starts with Mahmoud
regEx = /^Mahmoud/;
result = regEx.test(str); // true only if it starts with Mahmoud

// regex that test if the str ends with snow
str = "Today looks it will snow !!!";
regEx = /snow$/;
result = regEx.test(str);


// Testing for a full match : ^...$

let correctInput = "12:34";
let wrongInput = "12:348";

regEx = /^\d\d:\d\d$/;

result = regEx.test(correctInput); // true
//console.log(result);

result = regEx.test(wrongInput); // false

// exercise
str = "";
regEx = /^$/;
result = regEx.test(str); // true

// flag 'm'. apply regex on multi lines

str = `1st place Talal: 505
2nd place Hashem
3rd place Zaher
`;

regEx = /^\d/gm;
result = str.match(regEx); // 1, 2, 3

/**
 * write regex to fond 1, 2, 3
 * in the below text:
 * "Pizza: 1
 * Falafel: 2
 * Burger: 3";
 */
str = `Pizza: 1
 Falafel: 2
 Burger: 3
`;

regEx = /\d$/gm;
result = str.match(regEx); // 1, 2, 3
console.log(result);