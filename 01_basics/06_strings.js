const myname = "yash"
const repocount = 8;

console.log("my name is " + myname + " and my repo count is " + repocount)  // not recommended 

// another way of printing it , known as string interpolation 
console.log(`hello my name is ${myname} and my repo count is ${repocount}`)

const gamename = new String("Yash-Agrawal")   // explicitly creating string object 

// we can also access methods on primitive strings though primitives do not have any inbuilt properties , but js temporarily wraps primitive into string object run the method and discard the wrapper 

console.log(gamename[0])  // accessing the keys
console.log(gamename.__proto__)

// string methods 
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(3))
console.log(gamename.indexOf("s"))
const newstring = gamename.substring(0,4)  // negative indexes are ignored
console.log(newstring);

const anotherstring = gamename.slice(0,4) // difference here is we can give negative indexes also 
console.log(anotherstring);

// let str = "      yash    agrawal"
let str = "yash-agrawal-code"
console.log(str.trim());   // remove starting and end spaces

const url = "https://yash.com/yash%20agrawal"
console.log(url.replace('%20' , '-'));
console.log(url.includes("Yash")); 

const words = str.split('-')   // splits the string into individual elements of array based on the input
console.log(words);

console.log(typeof words);  // gives object

// strings are immutable 