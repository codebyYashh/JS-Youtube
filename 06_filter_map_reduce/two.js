const myNums = [1,2,3,4,5,6,7,8,9,10]

const newnums = myNums.map((num )=> num + 10)   // automatically return values
// console.log(newnums);

const newNums = myNums
                    .map((num) => num * 10)
                    .map((num2)=> num2 + 1)
                    .filter((num3)=> num3 >= 40)  // this is called chaining
console.log(newNums);
