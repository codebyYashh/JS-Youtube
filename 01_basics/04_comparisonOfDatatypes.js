// result of comparsion operations are in boolean values 

// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// caution : while comparing the values make sure to keep the same dataypes
console.log("2" > 1);  // gives true as js automatically converts string into number
console.log("02a" > 1233); // because js tries to convers 02a into number which gives NaN , means NaN > 1233 gives false
// Any relational comparison involving NaN (>, <, >=, <=) returns false.

console.log("200" > "1000") // gives true as Because when both operands are strings, JavaScript performs lexicographical comparison (character by character), not numerical comparison.

// Lexicographical comparison means comparing two strings character by character, just like words are arranged in a dictionary.

console.log(null > 0);  // false
console.log(null < 0);  // false
console.log(null >= 0); // true
console.log(null <= 0); // true
console.log(null == 0); // true

// Why? When JavaScript performs relational comparisons between null and a number, it converts null into 0.



// null compared with null
console.log(null > null);  // false
console.log(null < null);  // false
console.log(null >= null); // true
console.log(null <= null); // true
console.log(null == null); // true
console.log(null === null); // true
// Both represent the same value, so the results make sense.


// The most interesting part: == vs ===
console.log(null == 0);  // false
console.log(null === 0); // false
console.log(null == undefined);  // true
console.log(null === undefined); // false

// Wait! Didn't we just say null becomes 0?
// Yes, but here's the catch:
// - Relational operators (>, <, >=, <=) convert null to 0 when comparing it with a number.
// - Loose equality (==) follows different conversion rules. null is only loosely equal to undefined, not 0.
// - Strict equality (===) doesn't perform type conversion.


// undefined compared with numbers
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false
// Why?
// Jab JavaScript relational comparison (>, <, >=, <=) karti hai, toh undefined numeric conversion ke through NaN ban jaata hai.

console.log(undefined == 0)  // gives false
console.log(undefined === 0)  // gives false

// undefined compared with undefined
console.log(undefined > undefined);  // false
console.log(undefined < undefined);  // false
console.log(undefined >= undefined); // false
console.log(undefined <= undefined); // false
console.log(undefined == undefined);  // true
console.log(undefined === undefined); // true
// Why? Both operands convert to NaN, and comparisons involving NaN return false.

console.log("2" == 2);  // gives true
console.log("2" === 2);  // gives false
