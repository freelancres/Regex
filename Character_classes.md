## Character classes

Consider a practical task – we have a phone number like  `"+7(903)-123-45-67"`, and we need to turn it into pure numbers:  `79031234567`.

To do so, we can find and remove anything that’s not a number. Character classes can help with that.

A  _character class_  is a special notation that matches any symbol from a certain set.

For the start, let’s explore the “digit” class. It’s written as  `\d`  and corresponds to “any single digit”.

For instance, let’s find the first digit in the phone number:

```javascript

let str =  "+7(903)-123-45-67";  
let regexp =  /\d/;  alert( str.match(regexp)  ); // 7

```


