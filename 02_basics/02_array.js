const marvel_heros = ["thor" , "Ironman" , "spiderman"]
const dc = ["superman" , "flash" , "batman"]

// marvel_heros.push(dc)  // this dc array itself become an element in the marvel_heros array
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])
// console.log(dc)

const allheros = marvel_heros.concat(dc)
console.log(allheros)
// console.log(marvel_heros)
// the key difference between push and concat is that push changes the original array and return it while concat leaves the original array untouched and return a new modified array 
// console.log(dc)

const newheros = [...marvel_heros, ...dc]  // this ... means it spreads out the individual elements of the array and then add it in the new array 
console.log(newheros)


const anotherarray = [1,2,3,4,[4,5,6],7,[6,7,[4,5]]]
const mod_array = anotherarray.flat(Infinity)  // in bracket we provide depth upto which we want to resolve our array into indidual elements
console.log(mod_array)
 
console.log(Array.isArray("yash"))  // gives false 
console.log(Array.from("yash"))  // converts anything into an array
console.log(Array.from({name : "yash"}))  // interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))