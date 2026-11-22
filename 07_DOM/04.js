function addLanguage(langName){
    const li = document.createElement("li")
    li.innerHTML = `${langName}` // here we have to traverse all the elements 
    document.querySelector(".language").appendChild(li)
};

addLanguage("python")
addLanguage("java");

function OptiAddLang(langName){
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(langName))  // here we dont have to traverse all elements 
    document.querySelector(".language").appendChild(li)
}

OptiAddLang("GoLang")


// Edit
const secLang = document.querySelector("li:nth-child(2)")
const newli = document.createElement("li")
newli.textContent = "Mojo"
secLang.replaceWith(newli)


// another edit example
const firstlang = document.querySelector("li:first-child")
firstlang.outerHTML = "<li>Typescript</li>"

// remove
const lastlang = document.querySelector("li:last-child")
lastlang.remove()