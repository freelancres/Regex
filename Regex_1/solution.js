/**
 * Write a function validates the area code
 * of a phone number
 * correct areas codes : [23, 40, 60]
 * area code alway starts after fisrt space
 * and ends before second space
 * e.g. +49 40 152 1668
 * 
 * example:
 * 
 * validateCode('+49 40 152 1668') --> 'correct'
 * validateCode('+43 77 152 1668') --> 'wrong'
 * 
 */

// Nour Solutions
const validateCode2 = (number) => {
  let regEx = /\s\d\d\s/;
  let result = number.match(regEx);
  return result == 23 || result == 40 || result == 60;
};

/**
 * Write a  regex using charachter classes,
 *  that match ' HTML5' in the below sentence:
 * "I learned HTML5 at Alsahabah Mosque !!!"
 */

regEx = /\s\w\w\w\w\d/;
let str = "I learned HTML5 at Alsahabah Mosque !!!";
result = str.match(regEx);
// console.log(result);


/**
 * Write a regex ,
 *  that match all occurneces of 'CSS4' in the below sentence:
 * "CSS4 , CS-4 , CS 4 , XML4"
 */

regEx = /CS.4/g;
str = "CSS4 , CS-4 , CS 4 ";
result = str.match(regEx);

console.log(result);