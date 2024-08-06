
// {} - the curly braces is the scope
// when the {} comes with the function or if-else then it is known as scope 

var c = 100 // this is global scope
let a = 200  // global scope


if (true) {  
let a =10  // the code written inside the { } is the block scope
const b = 20
var c = 30
}

// the code written outside the { } is the global scope 
// the code that we write in the global scope is available inside the block scope
// but code written inside block scope should not go outside i.e. global scope

console.log(c); // that's why we don't use var as value inside {} is printed instead of value declare at global scope
console.log(a); // here the value is printed of the global scope that's why let and const are used



