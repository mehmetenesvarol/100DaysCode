const text = {
    row1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1],
    row2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
    row3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
    row4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
    row5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1]
};

const firstRow = document.querySelectorAll(".row")[0];
const secondRow = document.querySelectorAll(".row")[1];
const thirdRow = document.querySelectorAll(".row")[2];
const fourthRow = document.querySelectorAll(".row")[3];
const fifthRow = document.querySelectorAll(".row")[4];

addDivUI();

function addDivUI() {
    addDivUIByRow(firstRow)
    addDivUIByRow(secondRow)
    addDivUIByRow(thirdRow)
    addDivUIByRow(fourthRow)
    addDivUIByRow(fifthRow)
}

function addDivUIByRow(rowElem) {
    for (let i = 0; i < 17; i++) {
        let div = document.createElement("div")
        div.className = `pixel-black`
        rowElem.appendChild(div)
    }
}

let step = 0;
const loop = 79;

setInterval(() => {
    changeSign()
}, 100);


function changeSign() {
    let temp = step;
    for (let i = 0; i < 17; i++) {
        writeFirstRow(temp, i)
        writeSecondRow(temp, i)
        writeThirdRow(temp, i)
        writeFourthRow(temp, i)
        writeFifthRow(temp, i)
        temp++;
    }
    if (temp > 96) {
        step = -1
    }
    step++;
}

function writeFirstRow(temp, i) {
    if (temp > 78){
        firstRow.children[i].className = "pixel-black"
    } else if (text.row1[temp] === 0) {
        firstRow.children[i].className = "pixel-black"
    } else {
        firstRow.children[i].className = "pixel-green"
    }
}
function writeSecondRow(temp, i) {
        if (temp > 78) {
        secondRow.children[i].className = "pixel-black"
    } else if (text.row2[temp] === 0) {
        secondRow.children[i].className = "pixel-black"
    } else {
        secondRow.children[i].className = "pixel-green"
    }
}
function writeThirdRow(temp, i) {
        if (temp > 78) {
        thirdRow.children[i].className = "pixel-black"
    } else if (text.row3[temp] === 0) {
        thirdRow.children[i].className = "pixel-black"
    } else {
        thirdRow.children[i].className = "pixel-green"
    }
}
function writeFourthRow(temp, i) {
        if (temp > 78) {
        fourthRow.children[i].className = "pixel-black"
    } else if (text.row4[temp] === 0) {
        fourthRow.children[i].className = "pixel-black"
    } else {
        fourthRow.children[i].className = "pixel-green"
    }
}
function writeFifthRow(temp, i) {
        if (temp > 78) {
        fifthRow.children[i].className = "pixel-black"
    } else if (text.row5[temp] === 0) {
        fifthRow.children[i].className = "pixel-black"
    } else {
        fifthRow.children[i].className = "pixel-green"
    }
}
