const form = document.querySelector("form")
    // const height = parseInt(document.querySelector("#height").value)  // this usecase will give empty value


form.addEventListener("submit", function(e){
    e.preventDefault()  // this prevents the form the submit details to the server because right now we dont want it to load on server

    const height = parseInt(document.querySelector("#height").value) 
    // .value property ka use mainly form elements ke andar user ne jo value enter ya select ki hai, usko access ya change karne ke liye hota hai.

    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    if(height < 0 || isNaN(height)){
        results.innerHTML = "Please give a valid height"
    }
    else if(weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight"
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)  // to fixed means we want value till 2 decimal number
        if(bmi <= 18.6){
            results.innerHTML = `<span>${bmi} , You are Underweight </span>`
        }else if(bmi > 18.6 && bmi <= 24.9){
            results.innerHTML = `<span>${bmi} , You are Normal Weight </span>`
        }else{
            results.innerHTML = `<span>${bmi} , You are OverWeight </span>`
        }
        
    }

})
