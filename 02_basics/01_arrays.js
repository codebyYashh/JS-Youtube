// array
// const myArr = [1,2,3,4,5,true, "yash"]  // elements in array can be of different types
const myArr = [1,2,3,4,5]  // array in js are resizable

console.log(myArr[1]);   // indexing start from 0

// concept of shallow copy and deep copy, shallow copy means when copy and original object share same reference and vice versa in deep copy 

const myHeros = ["shaktiman","naagraj"]
const myArr2 = new Array(1,2,3,4,5)  // another way to define array
console.log(myArr2)
console.log(myArr.length)

//Array methods
myArr.push(8)  // returns the length of new array
myArr.push(7)
console.log(myArr)
myArr.pop()


myArr.unshift(9)   // inserts the element at the beginning, drawback is we need to shift all the values 

myArr.shift()  // removes the element from the beginning , drawback is we need to shift all elements behind by one place

console.log(myArr.includes(8));    // check if particular element is present in array
  
console.log(myArr.indexOf(8))  // returns the index of element 

const newArr = myArr.join()
console.log(newArr)   // converts array values into string
console.log(typeof newArr) 
console.log(myArr)


// slice and splice 
console.log("A" , myArr)
const myn1 = myArr.slice(1,3)  // 3 is exclusive
console.log(myn1)
console.log("B" , myArr)

const myn2 = myArr.splice(1,3);  // 3 is inclusive
console.log(myn2)
console.log("C",myArr)  // original array get modified
