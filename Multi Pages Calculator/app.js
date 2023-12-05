
function plus() {
    let plused = parseFloat(document.getElementById("plused-1").value) + parseFloat(document.getElementById("plused-2").value)
    let number1 = document.getElementById("plused-1").value
    let number2 = document.getElementById("plused-2").value
    addStorage(number1, number2, plused, "fa-plus")
}
function minus() {
    let minused = parseFloat(document.getElementById("minused-1").value) - parseFloat(document.getElementById("minused-2").value)
    let number1 = document.getElementById("minused-1").value
    let number2 = document.getElementById("minused-2").value
    addStorage(number1, number2, minused, "fa-minus")
}
function times() {
    let timesed = parseFloat(document.getElementById("timesed-1").value) * parseFloat(document.getElementById("timesed-2").value)
    let number1 = document.getElementById("timesed-1").value
    let number2 = document.getElementById("timesed-2").value
    addStorage(number1, number2, timesed, "fa-xmark")
}
function divide() {
    let divided = parseFloat(document.getElementById("divided-1").value)  / parseFloat(document.getElementById("divided-2").value) 
    let number1 = document.getElementById("divided-1").value
    let number2 = document.getElementById("divided-2").value
    addStorage(number1, number2, divided, "fa-divide")
}

function addStorage(num1, num2, res, typ) {
    sessionStorage.setItem("process1", num1);
    sessionStorage.setItem("process2", num2);
    sessionStorage.setItem("result", res);
    sessionStorage.setItem("type", typ);
}

function resulted() {
    document.getElementById("res-num-1").textContent = sessionStorage.getItem("process1")
    document.getElementById("res-num-2").textContent = sessionStorage.getItem("process2")
    document.getElementById("res-num-3").textContent = sessionStorage.getItem("result")
    document.getElementById("res-icon").className = `fa-solid fa-xl fa-icon ${sessionStorage.getItem("type")}`
    document.getElementById("res-text").style = "color: rgb(2, 241, 2);"
    document.getElementById("res-text").textContent ="Result :"
    document.getElementById("res-for").textContent ="Reflesh The Pages For New Process"
    sessionStorage.clear()
}