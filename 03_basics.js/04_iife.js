// Immediately invoked function expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  // this syntax is known as iife , it is used to prevent interference of global variables
// this semicolon after iife is important to indicate the end of iife , without it will not execute another immediate iife


( (name) => {
    // IIFE or unnamed IIFE
    console.log(`DB connected two ${name}`)
})("yash")

// chai()