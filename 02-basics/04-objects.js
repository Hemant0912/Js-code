// Object Constructor
// Singleton 
//const userData = new Object() -- it is an constructor type object

const customer1 = {   // we can nest as many object in an object
    email: "Hem0000@gmail.com",
    fullName: {
        userfullname: {
            firstname: "Hemant",
            lastname: "Vishwakarma"
        }
    }
}
console.log(customer1.fullName);
console.log(customer1.fullName.userfullname.lastname); // how to access value of object in an object

//How to combine vaue of object
const obj1 = {1:"h", 2:"e"}
const obj2 = {3:"m", 4:"a"}

const obj3 = {...obj1, ...obj2} // to print use spread operator
console.log(obj3);

//how to check whwther an object is having any prop or not
console.log(customer1.hasOwnProperty('fullName')); // it gives in boolean form 







