const obj = {
    js : "javascript", 
    cpp : "C++",
    rb : "ruby", 
    swift : "swift by apple"
}

for (const key in obj) {
    console.log(key);   // print keys
    console.log(obj[key]);  // prints values
}

const arr = ["js", "rb" , "py" , "java", "cpp"]
for (const index in arr) {
    console.log(index);
    console.log(arr[index]);
}

// const map = new Map()   
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")  // does not consider this as it is a duplicate value

// for (const key in map) {   // doesnt work as maps are not iterable
//     console.log(key);
// }

