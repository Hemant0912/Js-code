// There are two ways to declare object - Literals and Constructor
// When we declare object in literals then there is no singleton
// but when we declare object using Constructor then it will be singleton

const mySym = Symbol("Key1") // declaring symbol to use in object literals

//object literals // it is non singleton object
const jsUser = {
    name: "Hemant",
    [mySym]: "mykey1", // symbol can not accessed using "." and write it in [] 
    "fullName": "Hemant Vishwakarma", // this value cannot be accessed using "."
    age: 22,
    location: "Varanasi",
    email: "Hem09@google.com",
    isLoggedin: true,
    lastLogin: ["Mon", "Tue", "Sun"]
}

console.log(jsUser.name); // one way to print
console.log(jsUser["location"]); // secondway to print 

console.log(jsUser["fullName"]); // this can be accessed using [] method
console.log(jsUser[mySym]); // symbol can be accessed using . but it's type will be string
// so use [] so it's type will symbol only

// how to change object value
jsUser.age = 23;
console.log(jsUser["age"]);

// we can freeze the object value so that it cannot be changed
//Object.freeze(location)

//How to add function in object
jsUser.greeting = function() { // to run function we should not have freeze 
    console.log("Hello Coder");
}
console.log(jsUser.greeting());

// to access any object use "." then [] , as [] will be use only at specific condition


//how to refer same object in the function
jsUser.greetingTwo = function() {
    console.log(`Hello, ${this.name}`);
}
console.log(jsUser.greetingTwo());

        





