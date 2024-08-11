// for loop

for(let i=0; i<10; i++) {
   const element = i;    // code written inside the {} is the block scope
   console.log(element);
}
// console.log(element) // it cannot be access outside the block scope

for (let index = 1; index <= 10; index++) { // outer loop
    console.log(`Outer loop value ${index}`);
    for(let j = 1; j <= 10; j++) {  // inner loop
        console.log(index + "*" + j + "=" + index*j); // nested loop
    }
} // it will print table from 1 to 10


//             0 value    1 value    2 value
let myArray = ["batman", "ironman", "superman"]
for (let index = 0; index <myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// break and continue

for(let h=1; h<=10; h++) {
    if (h==5) {
        console.log("5 trophy csk k pass , rcb = 0 ");
        break // after 5 no value will be printed i.e. break
    }
    console.log(h);
}

for (let l = 0; l < 10; l++) {
    if (l == 3) {
        console.log("3 ni print hoga baki sb hoga");
        continue // value leaving 3 will be printed
    }
    console.log(l);
}