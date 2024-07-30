const array = [0, 1, 2, 3, 4, 5] // 1 way of defining array
console.log(typeof array); // it will be printed as object
// js array are resizable
// js array can contain different data types
// copy operation in array makes shallow copies rather then deep copies (shallow - changes in same reference point i.e changes in original value)
//(deep copies - it do not share the same refernce point)
// for more info visit mdn doc


const myArray = new Array(2,5,99,65) // 2 way of defining array
console.log(myArray);
console.log(myArray[2]); // to visit particular element of an array

//------------------------ARRAY METHODS---------------------------------//

array.push(69) // to add element
//array.pop() // to delete element
array.unshift(11) // to add element at the starting
//array.shift() //removes value of unshift , no argument is passed
console.log(array);

console.log(myArray.includes(5)); // it will give answer in T/F 
console.log(myArray.indexOf(5)); // to get index value


// slice && splice method
console.log("A" , myArray);
console.log(myArray.slice(0,2)); // it return value from index 0 to 1 (last index not included)

console.log("B" , array);
console.log(array.splice(1,3)); // it return value from index 1 to 3 
//splice method manipulate the original value of array


// for more methods read visit mdn documents


