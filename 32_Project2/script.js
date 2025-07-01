const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const res=document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        res.innerHTML= "Please give a valid height"
    }
    if(weight === '' || weight < 0 || isNaN(weight)){
        res.innerHTML= "Please give a valid weight"
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        if(bmi<18.6){
            res.innerHTML=`<span>${bmi}</span> <br> <h3>Under Weight </h3>`
        }
        else if(bmi>18.6 && bmi<24.9){
            res.innerHTML=`<span>${bmi}</span> <br><h3>Normal Weight </h3>`
        }
        else{
            res.innerHTML=`<span>${bmi}</span> <br><h3>Overweight </h3>`
        }
    }
})