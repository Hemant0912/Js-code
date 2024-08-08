const user = {
    userName: "Hemant",
    price:999,

    welcomeMessage: function() {
        console.log(`${this.userName} , welcome to website`);
        // this word to print data can only be used in object 
    }
}

 const name = function hemant() {
    usernaam: "Hem"
    console.log(this.username);
// this will be printed as undefined as we are using this     
}

const coffee = () => {  //   => this is arrow function  
    let user_name = "Hem"  // arrow function is represented as () => {}
    console.log(this);
}

const addTwo = (num1 , num2) => num1 + num2
// this is implicit return here we are not using {} and return 
// it is assuming that we are using {} 
// it is written in one line
// if we write {} then we have to use return if not then we don't have to use
console.log(addTwo(2,2));






