// dates are usually calculated in miliseconds 
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate)  // date is an object

// let myCreatedDate = new Date(2023,0,23);  // months start from 0 in js
// let myCreatedDate = new Date(2023,0,23,5,3);
// let myCreatedDate = new Date("2023-01-14");  // YY-MM-DD format 
let myCreatedDate = new Date("01-14-2023");  // MM-DD-YY format 
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth())
console.log(newDate.getDay())
console.log(newDate.getFullYear())

