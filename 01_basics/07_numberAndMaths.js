const score = 399;
const balance = new Number(100.899);  // prints Number:100 as it guarantees it will be a number
console.log(score);

console.log(balance);
console.log(balance.toFixed(2));  // converts number to the provided precision value

const othernumber = 123.456
console.log(othernumber.toPrecision(2));  //value inside the bracket signifies number of significant digits you want in your number .... Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
// Significant digits ka matlab hai number ke meaningful digits, decimal point ke baad ke digits nahi.

/*
toFixed()
Decimal places
Decimal ke baad kitne digits chahiye.

toPrecision()
Significant digits
Total kitne meaningful digits chahiye.
*/

// e+ means decimal ko right side shift karna.
// e- means decimal ko left side shift karna.


console.log(balance.toString().length);  // converted to string

const hundreds = 1000000
console.log(hundreds.toLocaleString())  // default system is US standards
console.log(hundreds.toLocaleString('en-IN'))  // in indian standards



// ++++++++++++++++++ Maths ++++++++++++++++++++

console.log(Math);   // this Math is an object itself and it has a lot of properties
console.log(Math.abs(-3));   // gives absolute value of a number
console.log(Math.round(4.98));  // round of number to an integer value
console.log(Math.ceil(4.2));   // gives top value 
console.log(Math.floor(4.9));   // gives lower value 
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));
console.log(Math.random());  // gives any random value between 0 and 1 (0 inclusive and 1 exclusive)

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10 )+ 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min +1)) + min)



