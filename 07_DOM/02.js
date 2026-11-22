const parent = document.querySelector(".parent")
console.log(parent);
console.log(parent.children);   // gives html collection
console.log(parent.children[1].innerHTML);   

for(let i = 0 ; i < parent.children ; i++){
    console.log(parent.children[i].innerHTML);
}

parent.children[1].style.color = "orange"
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const day1 = document.querySelector(".day")
console.log(day1);
console.log(day1.parentElement);
console.log(day1.nextElementSibling);
console.log(day1.previousElementSibling);

console.log("NODES: ", parent.childNodes);  // gives every node 

