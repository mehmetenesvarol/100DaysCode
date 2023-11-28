const button = document.querySelector("#button");
const textWrapper = document.querySelector("#text-wrapper");
const todayText = document.querySelector("#text-today");
const slider = document.querySelector("#slider")
const sliderWrapper = document.querySelector("#slider-wrapper")
const textDayWrapper = document.querySelector("#text-day-wrapper")

let now = new Date();

let todayDay = now.getDate();
let todayMonth = now.getMonth() + 1;
let todayYear = now.getFullYear();

todayText.innerHTML = `${twoDigitNumber(todayDay)}:${twoDigitNumber(todayMonth)}:${todayYear}`

if (todayYear == 2023 && todayMonth == 11) {
    slider.value = todayDay - 17;
    dayText(todayDay - 17);
} else if (todayYear == 2023 && todayMonth == 12) {
    slider.value = todayDay + 13;
    dayText(todayDay + 13);
} else if (todayYear == 2024 && todayMonth == 1) {
    slider.value = todayDay + 44;
    dayText(todayDay + 44);
} else if (todayYear == 2023 && todayMonth == 2) {
    slider.value = todayDay + 75;
    dayText(todayDay + 75);
} else {
    slider.value = 100;
    dayText(100);
}




slider.addEventListener("input", (event) => {
    dayText(event.target.value);
    sliderValueDay(event.target.value);
});


function twoDigitNumber(number) {
    if (number < 10) {
        return `0${number}`;
    } else {
        return number;
    }
}

function sliderValueDay(slideValue) {
    let slideValueDay = parseInt(slideValue) + 17;
    if (slideValue < 14) {
        todayText.innerHTML = `${slideValueDay}:11:2023`
    } else if (slideValue < 45) {
        todayText.innerHTML = `${twoDigitNumber(slideValueDay - 30)}:12:2023`
    } else if (slideValue < 76) {
        todayText.innerHTML = `${twoDigitNumber(slideValueDay - 61)}:01:2024`
    } else {
        todayText.innerHTML = `${twoDigitNumber(slideValueDay - 92)}:02:2024`
    }
}

function dayText(day) {
    textDayWrapper.innerHTML = `<h2 id="text-day" style="
    width: ${240 + day * 4}px;
    background-color: rgb(${255 - day * 2.5}, ${day * 2.5}, 0);
    box-shadow: 0px 10px 50px rgb(${255 - day * 2.5}, ${day * 2.5}, 0);
    font-size: 47px;
    transform: translate(0%, 50%);
    ">DAY: ${successfulDay(day)}</h2>`
}

function successfulDay(day) {
    if (day >= 100) {
        return "100 SUCCESSFUL";
    } else {
        return day;
    }
}
