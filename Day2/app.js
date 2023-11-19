const input = document.querySelector("#input")
const calculatorWrapper = document.querySelector("#calculator-wrapper")
const p = document.querySelector("#p")
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const times = document.querySelector(".times")
const divided = document.querySelector(".divided")
const equal = document.querySelector("#equal")

plus.setAttribute('disabled', ``)
minus.setAttribute('disabled', ``)
times.setAttribute('disabled', ``)
divided.setAttribute('disabled', ``)

function calcClicked(number) {
    input.value += number
    plus.removeAttribute('disabled');
    minus.removeAttribute('disabled');
    times.removeAttribute('disabled');
    divided.removeAttribute('disabled');
    equal.removeAttribute('disabled');
}

function calcClear() {
    input.value = ""
    p.textContent = ""
    plus.removeAttribute('disabled');
    minus.removeAttribute('disabled');
    times.removeAttribute('disabled');
    divided.removeAttribute('disabled');
}

function backSpace() {
    let arr = Array.from(input.value);
    arr.pop()
    input.value = arr.toString().replaceAll(',', '')
}

function operation(opt) {
    p.textContent = input.value + opt
    input.value = ""
    plus.setAttribute('disabled', ``)
    minus.setAttribute('disabled', ``)
    times.setAttribute('disabled', ``)
    divided.setAttribute('disabled', ``)
    equal.setAttribute('disabled', ``)

}

let arr2 = []
let operator = ""
let firstNumber, secondNumber

function result() {
    if (p.textContent === "") {

    } else {
        arr2 = Array.from(p.textContent)
        operator = arr2.pop();
        firstNumber = parseInt(arr2.toString().replaceAll(',', ''))
        secondNumber = parseInt(input.value)
        if (operator === "+") {
            calcClear()
            input.value = firstNumber + secondNumber
        } else if (operator === "-") {
            calcClear()
            input.value = firstNumber - secondNumber
        } else if (operator === "*") {
            calcClear()            
            input.value = firstNumber * secondNumber
        } else {
            calcClear()            
            input.value = firstNumber / secondNumber
        }
    }
}