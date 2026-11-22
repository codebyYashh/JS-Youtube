// reduce
const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc ${acc} and currVal ${currVal}`);
    
//     return acc + currVal 
// },0)

const myTotal = myNums.reduce((acc, currVal) => acc + currVal ,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 999
    },
    {
        itemName : "python course",
        price : 1999
    },
    {
        itemName : "java course",
        price : 2999
    },
    {
        itemName : "data science course",
        price : 3999
    }
]

const finalPrice = shoppingCart.reduce((acc , item ) => acc + item.price,0)

console.log(finalPrice);
