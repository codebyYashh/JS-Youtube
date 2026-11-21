// for loop
// print number from 1 to 10

for (let index = 0; index < 11; index++) {
    if(index == 5){
        // console.log("5 is the best number");
    }
    // console.log(index);
}


for(let i = 0 ; i <= 10 ; i++){
    // console.log(`Outer loop value : ${i}`);
    
    for(let j = 0 ; j <= 10 ; j++){
        // console.log(`Inner loop value : ${j} and inner loop ${i}`);
        
    }
}


let myArray = ["flash" , "batman" , "superman"]
for(let index = 0 ; index < myArray.length ; index++){
    const element = myArray[index]
    // console.log(element);
}



// break and continue

for(let i = 1 ; i <= 20 ; i++){
    if(i==5){
        console.log(`Detected 5`);
        // break;   // break the loop flow and move out from the loop
        continue;  // skips one iteration and move on to next
    }
    console.log(`value of i is ${i}`);
}