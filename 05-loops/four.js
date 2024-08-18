// for in loop
// for in loop is used when we want to print both key value

const myObj = {
    js: "JavaScript",
    cpp: "c++"
}
for (const key in myObj) {
   console.log(`${key} shortcut is for ${myObj[key]}`); // key is taken above with const that's why we are writing key
   // value is printed using (objectName[key])
}
// for object loop used for in loop
// for array loop used for of loop


// for each loop  // most used loop

const coding = ["js", "ruby", "java", "python"]
// we use .forEach and inside that we make a function with any paramater name 
coding.forEach( function (item) {
    console.log(item); 
} )
