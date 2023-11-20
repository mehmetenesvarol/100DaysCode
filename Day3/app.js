const dayText = document.querySelector(".day")
const hourText = document.querySelector(".hour")
const minutesText = document.querySelector(".minutes")
const secondsText = document.querySelector(".seconds")


let remainigDay = 0

function getDay(day, month, year) {

    if (month === 1) {
        remainigDay = 365 - day
    } else if (month === 2) {
        remainigDay = 334 - day
    } else if (month === 3) {
        remainigDay = 306 - day
    } else if (month === 4) {
        remainigDay = 275 - day
    } else if (month === 5) {
        remainigDay = 245 - day
    } else if (month === 6) {
        remainigDay = 214 - day
    } else if (month === 7) {
        remainigDay = 184 - day
    } else if (month === 8) {
        remainigDay = 153 - day
    } else if (month === 9) {
        remainigDay = 122 - day
    } else if (month === 10) {
        remainigDay = 92 - day
    } else if (month === 11) {
        remainigDay = 61 - day
    } else if (month === 12) {
        remainigDay = 31 - day
    }
    if ((year%4) === 0) {
        remainigDay += 1;
    }

    return remainigDay;
}

function textTime() {
    const now = new Date()
    dayText.textContent = getDay(now.getUTCDate(), now.getMonth() + 1, now.getFullYear())
    hourText.textContent = 23 - now.getHours()
    minutesText.textContent = 59 - now.getMinutes()
    secondsText.textContent = 59 - now.getSeconds()
}



setInterval(() => {
    textTime();
}, 1000);