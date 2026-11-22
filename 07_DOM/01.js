document.getElementById("title")
document.getElementById("title").id  // gives "title"
document.getElementById("title").class   // gives undefined
document.getElementById("title").className  // gives "heading"
document.getElementById("title").getAttribute('id')   // gives value of the attribute
document.getElementById("title").getAttribute('class') 
document.getElementById("title").setAttribute('class', "test") // set class as "test"

const title = document.getElementById("title")
title.style.backgroundColor = 'green'
title.style.padding = '20px'
title.style.borderRadius = "15px"

title.textContent  // gives "DOM learning on chai aur code"
title.innerHTML   // gives "DOM learning on chai aur code"
title.innerText   // gives "DOM learning on chai aur code"

// whats the difference between textContent, innerHTML, innerText
// textContent gives the actual content that is written in your html file , innerText gives only that content which is visible on your web page and innerHTML gives the complete html as it is inside that element 
// Therefore innerHTML supports html tags also while innerText and textContent do not support html tags 


document.getElementsByClassName("heading")  // gives html collection
document.querySelector('h1')  // gives only first element that satisfies the query
document.querySelector('#title')  
document.querySelector('.heading')  
document.querySelector('input[type = "password]')  
document.querySelector('p:first-child')  

const myul = document.querySelector("ul")
const turnGreen = myul.querySelector("li") // selects first li 
turnGreen.style.backgroundColor = "green"
turnGreen.style.padding = "10px"
turnGreen.innerText = "five"


const tempLiList = document.querySelectorAll('li')  // gives nodelist
// tempLiList.style.color = "red"  // invalid as it gives node list , it is not targeting any particular element 
tempLiList[0].style.color = "red"  // valid as element is specified

const myh1 = document.querySelectorAll("h1")
myh1[0].style.color = "pink"

tempLiList.forEach(function (li){
    li.style.backgroundColor = 'blue'
})



const tempClassList = document.getElementsByClassName('list-item')
// tempClassList.forEach(function (element) {   // does not work as html collection does not has foreach functionality
//     console.log(element);
// })

// how can we convert html collection to an array 
const myconvertedArr = Array.from(tempClassList)
myconvertedArr.forEach(function(element) {
    element.style.color = "orange"
})