// basic syntax of switch statement 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3
const month = "march"
switch(month){
    // case 1 : 
    case "jan" : 
        console.log("January");
        break; 

    // case 2 : 
    case "feb" : 
        console.log("Feburary");
        break;

    // case 3 : 
    case "march" : 
        console.log("March");
        break;

    // case 4 : 
    case "april" : 
        console.log("April");
        break;
        
    default:
        console.log("default case executed");
        break;
}

