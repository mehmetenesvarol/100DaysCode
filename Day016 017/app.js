const hdrDark = document.getElementById("hdr-dark")
const hdrLight = document.getElementById("hdr-light")
const addDailyBtn = document.getElementById("add-daily-btn")
const startDailyBtn = document.getElementById("start-daily-btn")
const addAllBtn = document.getElementById("add-all-btn")
const startAllBtn = document.getElementById("start-all-btn")
const dailyList = document.getElementById("daily-list")
const allList = document.getElementById("all-list")
const exePage = document.getElementById("exe-page")
const exeBack = document.getElementById("exe-back")
const exePass = document.getElementById("exe-pass")
const exeİnput = document.getElementById("exe-input")
const exeWord = document.getElementById("exe-word")
const exeForm = document.getElementById("exe-form")








addDailyBtn.addEventListener("click",addDaily())

function addDaily(){
    // add to list
}

addAllBtn.addEventListener("click",addAll())

function addAll(){
    // add to list
}

function metet(x){
    console.log(x)
}

hdrDark.addEventListener("click",(()=>{
    // dark mode
}))
hdrLight.addEventListener("click",(()=>{
    // light mode
}))

const words = {
    word1: {
        word: "day",
        mean: "gün",
        status: false,
    },
    word2: {
        word: "egg",
        mean: "yumurta",
        status: false,
    },
    word3: {
        word: "apple",
        mean: "elma",
        status: false,
    },
    word4: {
        word: "man",
        mean: "adam",
        status: false,
    },
};

// localStorage.setItem("wordStorage",JSON.stringify(words))
// JSON.parse(localStorage.getItem("wordStorage"))
