function convertTemperature(){
    const celsiusInput= document.getElementById("Celsius");
    const FarhrenheitInput= document.getElementById("Farhenheit");

    if(!isNaN(celsiusInput.value)){
        const celsiusValue = parseFloat(celsiusInput.value);
        const FarhrenheitValue = (celsiusValue * 9/5)+32;

        FarhrenheitInput.value = FarhrenheitValue.toFixed(2);

        
    }else if(!isNaN(FarhrenheitInput.value)){
        const FarhrenheitValue = FarhrenheitInput.value;
        const celsiusValue = (FarhrenheitValue -32) * 5/9;
         

        celsiusInput.value = celsiusValue.toFixed(2);


    }
    else{
        alert("Please enter a valid number")
    }
}