const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e)  // tells the event
        console.log(e.target)  // tells which element generated the event

        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id
        }
    })
    
})