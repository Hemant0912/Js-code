const score = 400 // it is also a number
console.log(score);


const balance = new Number(10000) /* this is also a number but here we are defining 
that it will be a number only with some prototype which can be viewed at console
browser */  
console.log(balance);
console.log(balance.toString()); // it will be 10000 only but its type is string

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // this will convert the number in proper form i.e. 1,000,000
// for more prop of string google it 

//----------------------------------------MATHS------------------------------------------------------------//

console.log(Math); // it will be printed as object
console.log(Math.abs(-4)); // abs is absolute value // it will be printed 4
console.log(Math.round(5.77)); // it will give a round value 
console.log(Math.ceil(4.2)); // it will also round the value but take upper value
console.log(Math.floor(4.2)); // it will also round the value but take lower value
console.log(Math.max(9,22,69,1)); // return max value
console.log(Math.min(87,3,22,1)); // return min value

console.log()
// for more maths function just google or go to mdn document