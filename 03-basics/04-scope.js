function one() {  // this is parent function
    const userName = "Hemant"
    
    function two() { // this is child function // child function can use parent function i.e log(username)
        // but parent function cannot use child function 
        const website = "youtube"
        console.log(userName);
    }
  //  console.log(website); 
  // it is showing error for log(website) because it is getting print call outside its function i.e its scope
  // i.e outside it's block scope
    two()
}
one()


//----------INTRESTING---------------------------------//

// In JS the variable can hold values like json , function etc
// the variable are very powerful

console.log(addone(3))  // here the function will be called because it is not stored in variable
function addone(value) {
    return value + 1
}

console.log(addTwo(4)); // here the function will be not called as it is stored in the variable // error
const addTwo = function addTwo(value) {
    return value + 2
}
