let score = 75

console.log(typeof score) // used to check type of data

let run = "87" // it is int but written in "" it will be string considered
let valueInNumber = Number(run) // how to convert one data into another data
console.log(typeof valueInNumber);

console.log(valueInNumber); // by this we can see whether the number converted is number only or not

// 33 after conversion it will be 33
// "33abc" after conversion it will be NaN(not a number)
// "true" after conversion it will be 1
// "false" after conversion it will be 0
// "undefined" after conversion it will be NaN
// "null" after conversion it will be 0

let isLogged = 1;
let valueCheck = Boolean(isLogged)
console.log(valueCheck);