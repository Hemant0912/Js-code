// for of loop
// in for of loop we don't need any increment and updation
const arr = [1, 2, 3, 4, 5]

for (const element of arr) {
    console.log(element);
}

let greetings = "Hemant"
for (const msg of greetings) {
    console.log(`Each char is ${msg}`) 
}
//-----------------------------------------------------------------//

//Map  // map is an object that holds key-value pairs and remembers the original insertion order of the keys

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United States Of America")

for (const [key, value] of map) {  // we are writing [key, value] in bracket as it is format to access both
    console.log(key, ":-" ,value); 
}

//-----------------------------------------------------------------------//


