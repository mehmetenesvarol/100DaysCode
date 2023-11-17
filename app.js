const button = document.querySelector("#button");
const dayText = document.querySelector("#day-text");

let day = 0;

button.addEventListener("click", dayUp);

function dayUp(day){
    console.log(day);
    day++;
}