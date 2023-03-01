/**
 * Write a function that tells you if my name is inside the 
 * text or not.
 */

const isMyNameThere = (name, text) => {
    // your code is here
    let re = new RegExp(name, 'i');
    return re.test(text);
}

let answer = isMyNameThere('Safwan', 'safwan is in Hamburg');
console.log(answer);