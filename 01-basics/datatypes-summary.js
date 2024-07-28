// Primitive Data types (Call by value)
// (Call by value) - original data is not given a copied value is given so all the changes are done in the copied value

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2) // this will not be equal as symbol will give a return type which will be different it will be symbol but with diffn value

const bigNum = 72827272287263n // by applying n it is converted into bigInt

// ----------------------------------------------------------------------//

// Non-Primitive Data types i.e Reference (call by reference)

// Array, Objects, Functions

const heros = ["hemant", "shaktiman", "Thor"] // it is array


let myObj = {          // it is object 
   name : "Hemant",    // value is stored in form of key and values
    age : 22, 
}

let myFunction = function() {  // it is function 
    console.log("Hello World");
}