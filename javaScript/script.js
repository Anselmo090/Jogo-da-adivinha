
const screen = document.querySelector(".screen")
const screen1 = document.querySelector(".screen1")
const btnTry = document.querySelector("#btnTry") 
const btnReset = document.querySelector("#btnReset")
const randomNumber = Math.round(Math.random() * 10)
let tentativa = 1  


//Eventos 

btnTry.addEventListener("click", clickTry)
btnReset.addEventListener("click", ResetClick)
document.addEventListener("keydown", ClickEnter) // esse evento é acionado quando clicamos no enter

function clickTry(event){
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber){
        toggleSreen()
            screen1.querySelector("h2").innerText = `Voce acertou em ${tentativa} tentativas`
    }else{

        const numeroGeradoElemento = document.querySelector("#numeroGerado")
        numeroGeradoElemento.innerHTML = ` O numero era: ${randomNumber}`
        numeroGeradoElemento.style.color = 'black'
        
    }

    inputNumber.value = ""
    ++tentativa
    
}


function ResetClick(){
    toggleSreen()
}

function toggleSreen(){
    screen.classList.toggle("cb")
    screen1.classList.toggle("cb")
}

function ClickEnter(){
    if(e.key == "Enter"){
        ResetClick()
    }
}



