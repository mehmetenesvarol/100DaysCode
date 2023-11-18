const button = document.querySelector("#button");
const dayText = document.querySelector("#day-text");

button.addEventListener("click", dayUp);

let day=0;

function dayUp(){
    day++;
    dayText.textContent=`DAY: ${day}`
}


