const buttonsEl = document.querySelectorAll("button")
const inputField = document.getElementById("result")

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", function(){
        const buttonValue = buttonsEl[i].textContent

        if(buttonValue === "C"){
            clearResult()
        } else if(buttonValue === "="){
            totalResult()
        } else {
            appendValue(buttonValue)
        }
    })
    
}

function clearResult(){
    inputField.value = ""
}

function totalResult(){
    inputField.value = eval(inputField.value)
}

function appendValue(buttonValue){

    inputField.value += buttonValue

}