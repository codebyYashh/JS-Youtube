const accoundId = 1234
let accountEmail = "yash@gmail.com "
var accountPassword = "12344"  // initially js did not know about scope so there was a problem of changing the variables globally so we prefer using let for variables 
// prefer not to use var because of issue in block scope and functional scope 

accountCity = "Jaipur"  // allowed but not preferred 

// accoundId = 2;   // not allowed as const keyword

console.log(accoundId);

accountEmail = "yash12@gmail.com"
accountPassword = "2123";
accountCity = "Mumbai"

console.table([accoundId, accountEmail , accountPassword, accountCity])

let accountState;
console.log(accountState)   // gives undefined 



