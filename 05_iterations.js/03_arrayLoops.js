// for of loop : array specific loop


const arr = [1,2,3,4,5]

for (const val of arr) {
    // console.log(val);
}

for (const val of "greetings") {
    // console.log(val);
}


// Maps

const map = new Map()   // map is a object that holds key value pairs
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  // does not consider this as it is a duplicate value

// console.log(map);

for (const key of map) {
    console.log(key);
}
for (const [key] of map) {  // by using square brackets we can print the keys only
    console.log(key);
}
for (const [key,value] of map) {  
    console.log(key, ":- ", value);
}


const obj = {
    'game1' : "NFS",
    'game2' : "Spiderman"
}

// for (const [key, value ] of obj) {      // this wont work for objects
//     console.log(key, ":- ", value);
// }

// for (const key of obj) {      // this wont work for objects
//     console.log(key);
// }
