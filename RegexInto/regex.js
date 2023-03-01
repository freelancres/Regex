// RegExp Object:

//let re = new RegExp('hi','i');

// regular expression - Regex litrals

let re = /hi/i;
let str = "Hi Tomasz, did you make coffee";
let result;


// Regex methods
// exec() : returns Array if found, otherwise null
result = re.exec(str);

// test(): returns true if found otherwise false
result = re.test(str);


str = `The yellow Sun is above the brown mountain;
        Hello it is Talal here`;

re = /is/i;

// String methods

// match(): returns Array if found, otherwise null
result = str.match(re);


// search() : returns the index of first match, and -1 if no match
result = str.search(re);

// replace():
/**
 * replace the first match with the replaceValue
 * returns the updated string
 * the original string doesn't change
 */
re = /Talal/i;
result = str.replace(re, 'Safwan');

// 'g' flag with exec()
re = /is/gi;
 let matches = [];
 let match = -1;
// do {
//   match = re.exec(str);
//   if (match) {
//     matches.push(match);
//   }
// } while (match != null);

// with string method : match()
result = str.match(re);

// with string method: search()
do {
  match = str.search(re); // search can't find more than one match
  if (match != -1) {
    matches.push(match);
  }
} while (match != -1);
//result = str.search(re);

//results
console.log(matches);
//console.log(result);