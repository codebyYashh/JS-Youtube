let a= 300;  // this value is independent of value inside if block
// const b = 20
// var c = 300


// everything inside if block is known as block scope and outside known as global scope
if(true){
    // these variables not applicate outside if as scope of these variables lies in this block only 
    let a = 10;
    const b = 20
    // var c = 30
    // c = 30
}

// console.log(a);  // prints 300 
// console.log(b);
// console.log(c);  // it will print 30 as c is var , its scope is global 


//  ********* 2nd level of scope *********

function one(){
    const username = "yash"
    function two(){
        const website = "youtube"
        console.log(website);
        
        console.log(username);
    }
    // console.log(website);  // gives error as outside website is not defined
    two()
}
// one()

if(true){
    const username = "yash"
    if(username == "yash"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);  // gives error
    
}

// console.log(username);  // gives error due to local scope


//   ********* interesting *********

console.log(addone(5));  // valid , execution before function definition 

function addone (num){
    return num +1
}
// addone(5)


console.log(addTwo(5))   // error Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}

// addTwo(5)