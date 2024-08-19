// how to select the parent class and we can store the value also
const parent = document.querySelector('.parent')
console.log(parent);  // we can print the value also

// how to select the children of the parent class i.e sub-classes
console.log(parent.children);

// how to select the children one by one or any specific children
console.log(parent.children[0]);
console.log(parent.children[2]);

// we can also run loop to get all the value
for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML); 
}

// we can also add style using dom 
parent.children[1].style.color = "red"
console.log(parent);


// for more visit google 

