let myDate = new Date() // it is an object 
console.log(myDate);                     // there are many methods
console.log(myDate.toLocaleDateString()); // these are mostly used 
console.log(myDate.toDateString());// these are some methods of date 
console.log(typeof myDate); // it will printed as an object
console.log(myDate.getDay()); 
console.log(myDate.getHours());



// -----------------How to create your own date--------------------------//

let myCreatedDate = new Date(2001,11,9)
console.log(myCreatedDate.toDateString());

console.log(myCreatedDate.toDateString("12-09-2024"));
// if we want specific format like mm/dd/yy so we can write like this
// or we can write the value 2024-12-09 in new date(in the bracket also)

myDate.toLocaleString('default', { // this is advance form of declaring date
    weekday: "long",  // for more prop like this press ctrl+space
})
console.log(myDate);