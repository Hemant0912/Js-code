// Types of memory - Stack and Heap

// Primitive type - Stack Memory (when we use any variable we get copy of that)
// Non-Primitive type - Heap Memory (when we use object,etc then we get reference value i.e original value)

let myName = "Hemant" // it will go in stack

let anotherName = myName
anotherName = "Hem"  // Here we are changing in the copy value not in the original value

console.log(myName);
console.log(anotherName);

//------------------------------------------------------------------------------------------------//

let userOne = { // user one will be stored on stack but its value will be stored on heap
    email: "hem99@gmail.com",
    upi: "hem98765@ibl",         // user one from stack will get refernce to heap directly
    message: "Enjoy the notes", // i.e. no copy value , original value refernce
}

let userTwo = userOne // userTwo will be stored on stack
                      // value of user one will be directly refered on heap on original value of user one                     
                      
userTwo.email = "hem@google.com"
console.log(userOne.email);
console.log(userTwo.email); // both will get the same email as changes are done on the original value



