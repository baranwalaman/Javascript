const form = document.querySelector("form")
console.log(form);

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.getElementById('height').value)
    const weight = parseInt(document.getElementById('weight').value)
    const results = parseInt(document.querySelector('results'))

    if(height === "" || height < 0 || isNaN(height)){
        results.innerHTML = `Please enter a valid height ${height}`;
    }
    else if(weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid weight ${weight}`;
    }
    else{
        bmi = (weight/(height*height)/10000).toFixed(2);
        results.innerHTML = bmi
    }
})