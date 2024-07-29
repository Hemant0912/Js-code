let name = "Hemant"  // way to define string
let lastName = " Vishwakarma"

console.log(name + lastName) // now this type of syntax is not used

console.log(`Hello my name is ${name}${lastName}`); 
// this method is good to use and in modern time this method is only used

console.log(name[0]); // how to access each element of string




//------ this is another way of defining string------//
const gameName = new String('Hemantgta') // it will have multiple prototype
// to see prototype run on browser console 
console.log(gameName);
console.log(gameName.__proto__); 

console.log(gameName.toUpperCase()); // original string is not converted 
console.log(gameName.charAt(4)); // it will return value in small as copy of the string is converted above

// for more string functin visit mdn document strings js
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


