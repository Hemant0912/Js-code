const marvel_heros = ["thor", "Hulk", "IronMan"]
const dc_heros = ["Batman", " Superman"]

//marvel_heros.push(dc_heros) // this is not good method of adding an array element
//console.log(marvel_heros); // this push existing array in the array so one more array in one single array

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); // this combines all array element in one single array


const all_Heros = [...marvel_heros, ...dc_heros] // here we can join as many array elements - no limitations
console.log(allHeros); // this method is also used to join element of two array in one


//----------------------------TYPICAL SITUATION SOLUTION--------------------------------------------------------------//

const anotherArray = [1, 2, 4, [55, 7, 3], 33, 9, 0,[21, 33, [44, 999]]]
const sortArray = anotherArray.flat(Infinity)
// above func will sort the all sub arrays in one single array
// Infinity means sort all sub arrays in the arrays , we can also give the number of sub arryas
console.log(sortArray);

// how to make any string , object , number into array

console.log(Array.from("Hemant")); // String

console.log(Array.from({name: "Hemant"})); // object //Interesting
// but it will give [] o/p as it will not understand what to take
// i/p for making array whether the key or value

let marks1 = 99;
let marks2 = 88;
let marks3 = 77;

console.log(Array.of(marks1,marks2,marks3)); // it will print m1,m2,m3 value in array form

// for more to know read on mdn documents

