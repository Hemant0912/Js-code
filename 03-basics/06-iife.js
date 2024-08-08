// Immediately Invoked function Expressions (IIFE)

(function eathealthy() {
    // function eatHealthy is named IIFE
    console.log(`khao piyo aesh kro`);
})(); 
// this function is called , this is iife --- (whole function)()
// iife is function which get executed immediatly
// we use iife because of problem occuring because of the global scope pollution
// we need to put ; after () as we need to end the iife by ;


// we can use arrow function along with iife
( (name) => {
    // this is simple iife with no name
    console.log(`Hello your name is ${name}`);
    
}) ('Hemant')