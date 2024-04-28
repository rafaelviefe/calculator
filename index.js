const display = document.getElementById("display")

const appendToDisplay = function(input){display.value += input}

const clearDisplay = function(){display.value = ""}

const calculate = function(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error"
    }
}