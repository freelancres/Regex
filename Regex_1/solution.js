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
