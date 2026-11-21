const coding = ["js", "ruby", "java","python" , "cpp"]

coding.forEach( function (element){
    // console.log(element);
})

coding.forEach( (element)=>{
    // console.log(element);
})

function printMe(item){
    // console.log(item);
}

// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item, index , arr);
})


const mycoding = [
    {
        lang : "js",
        langFile : "new.js"
    },
    {
        lang : "python",
        langFile : "py"
    },
    {
        lang : "java",
        langFile : "java"
    }
]

mycoding.forEach( (item) => {
    console.log(item.lang);
})