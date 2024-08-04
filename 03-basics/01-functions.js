// function is like a piece of package of code which we want to use

// creating a function
function sayMyName() {
    console.log("HEMANT");
}

sayMyName() // when we apply () then only the function gets executed
// when we do not apply () then we are only telling it's refernce

function addTwoNo(num1 , num2) { // it is parameter
    console.log(num1+num2);
}
addTwoNo(9,9) // it is argument as we are passing the value

// stoting value in $ and using if statement 
function loginUserMsg(username) {
    if (username === undefined) {  // if no username is passed 
        console.log("No username"); 
        return       
    }
    return `${username} just logged in`
}
console.log(loginUserMsg("Hem")) // if we will not pass any value then it will show undefined
