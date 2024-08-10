// if
// == it checks whether two operation are equal or not e.g. - 2==2 , 9==9
// === it check equal or not and also check the data type 
if (2 == "2") {
console.log("it will check only value not it's type");
}

if (2 === "2") {
    console.log("it will also check the data type i.e. int and string");
    // it will not printed as int and string type are not equal
}
//--------------------------------------------------------------------------------------------------------------//
const temp = 10
if (temp > 4) {
    console.log("it is winter"); // this statement should be executed in block scope not global scope inside {}
} else {
    console.log("it is summer");
}
//------------------------------------------------------------------------//
let balance = 1000
if (balance < 500) {
    console.log("amount is low");  // to check multiple conditions
} else if(balance < 600) {
    console.log("amount is medium");
} else {
    console.log("amount is 1000");
}
//---------------------------------------------------------------------------//
const userCard = true
const userIdCard = true
if (userCard && userIdCard ) { // both value should be true in && operator 
    console.log("You can enter");
} else {
    console.log("You acnnot enter , jao ghr salary gya aaj ka");
}
//-----------------------------------------------------------------------------------//
const id = true
const photo = false
if (id || photo) { // in OR operator one value should be correct id OR photo
    console.log("you can go");
} else {
    console.log("you cannot go");
}
//-----------------------------------------------------------------------------------------//
const month = 3

switch (month) {
    case 1:   // shift + alt + down arrow will copy value from case 1 to break
        console.log("January"); 
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("no matches ");
        break;
}



