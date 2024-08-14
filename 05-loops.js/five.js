// filter   

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const nums = array.filter( (num) => num > 4 )
// in filter we will get a call back function // (num) - we can write whatever name we want
// and we give a condition (this is filter) num>4
console.log(nums);

// a good code + example of filter 

const books = [
    {title: 'B1', genre: 'gaming', publish:2000},
    {title: 'B2', genre: 'studying', publish:2001},
    {title: 'B3', genre: 'basketball', publish:2001},
    {title: 'B4', genre: 'cricket', publish:2005},
]

let print = books.filter( (bks) => bks.genre === 'basketball')
print = books.filter( (bks) => {return bks.publish > '2000'})
// here we are writing return bks.publish as we have given the condition in scope {} so we will need return
console.log(print);

