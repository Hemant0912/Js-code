const userEmail = "Hemant@google.com"

if (userEmail) {
    console.log("Got the email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthy values
// true, "0", "false", " ", [], {}, function(){} -- this is empty function

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) { 
    console.log("Object is empty");
    // how to check whether object is empty or not
}
// --------------------------------------------------------------------------------------------//

//  Nullish Coalescing Operator 
let val1;
val1 = 5 ?? 10 // this operator return the first value 
val2 = null ?? 10 // here it will not return null as null can give erroer to program
val3 = undefined ?? 15 // here it will also return 15
val4 = null ?? 10 ?? 14 // here after null it is getting 10 so 10 will be assigned
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
// ---------------------------------------------------------------------------------------------//

//Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");




