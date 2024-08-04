function calculateCartPrice(num1) {
  return num1
}
console.log(calculateCartPrice(200, 400, 500));
// it is returning only 200 not all the value 
// for this problem we used rest operator 

function calculateCartValue(...num1) { // the ... dot is the rest operator
    return num1
  }
  console.log(calculateCartValue(200, 400, 500));


// How to pass object in a function
const user = {
    name: "Hemant",
    price: 1000
}
// passing object in function
function handleObject(anyObject) { // define anyObject or any name 
    // as we have to link with dot operator so we need an parameter
  console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}
handleObject(user)