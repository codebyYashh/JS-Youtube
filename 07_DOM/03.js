const div = document.createElement("div")   // to create element 
console.log(div)
div.className = 'main'
div.id = Math.round(Math.random() * 10 + 1)
div.setAttribute("title" , "gen-title")
div.style.backgroundColor = "red"
div.style.padding = "12px"
// div.innerText = "Chai aur code"
const text = document.createTextNode("chai aur code")  // alternative of above line
div.appendChild(text) 

// how to attach the created element
document.body.appendChild(div)