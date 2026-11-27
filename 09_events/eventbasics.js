// document.getElementById("owl").onclick = function(){
//     alert("owl clicked")

// }

// document.getElementById("owl").addEventListener("click",function(){
//     alert("owl clicked again")
// }, false)   // this false value is a default value so even if we dont write it it meant same only
// attachEvent()
// jQuery - on


// document.getElementById("images").addEventListener("click",function(e){  // this e is event object
//     console.log("clicked inside the ul")

// }, false) 

// what we need to study : type , timestamp , defaultPrevented 
// target, toElement , srcElement , currentTarget 
// clientX , clientY, screenX , screenY 
// altkey , ctrlkey, shiftkey , keyCode




// event propagation: works in two context , one is event bubbling and the second is event capturing...the default mode when no value is written or specifically false is written inside functions of addEventListener, it is known as event Bubbling , it means events propagate from inside to outside or from bottom to top....while other when specifically true is written , it is known as event capturing , it means events propagate from outside to inside or from top to bottom 


// Event Bubbling 
document.getElementById("images").addEventListener("click",function(e){  // this e is event object
    console.log("clicked inside the ul")
    e.stopPropagation()  // now event wont propagate
}, false) 


document.getElementById("owl").addEventListener("click",function(e){  // this e is event object
    console.log("owl clicked")

}, false) 


// Event Capturing 
// document.getElementById("images").addEventListener("click",function(e){  // this e is event object
//     console.log("clicked inside the ul")

// }, true) 


// document.getElementById("owl").addEventListener("click",function(e){  // this e is event object
//     console.log("owl clicked")

// }, true) 

document.getElementById("google").addEventListener("click", function(e){
    e.preventDefault()  // now google link wont open
}, false)



document.querySelector("#images").addEventListener("click", function(e){
    console.log(e.target.parentNode);
    if(e.target.tagName === "IMG"){
        console.log(e.target.id);
        let remove = e.target.parentNode
        remove.remove()
        // remove.parentNode.removeChild(remove)

    }
    
})