console.log(null>0);
console.log(null == 0);
console.log(null >= 0);
//we should avoid this type of conversion
// our code should be clean

// == and =>,<=,>,< works differently
//comparision convert null to a number treating it as 0 
// that's why null >=0 true and null > 0 is false


console.log(2 ==  "2");
console.log("2" === 2); // === it is strictly equality check
// i.e. "2" === 2 will be false as one is in string and another number