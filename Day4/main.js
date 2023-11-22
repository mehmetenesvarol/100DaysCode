const pieceZero = document.querySelector(".piece-zero")
const pieceOne = document.querySelector(".piece-one")
const pieceTwo = document.querySelector(".piece-two")
const pieceThree = document.querySelector(".piece-three")
const pieceFour = document.querySelector(".piece-four")
const pieceFive = document.querySelector(".piece-five")
const pieceSix = document.querySelector(".piece-six")
const pieceSeven = document.querySelector(".piece-seven")
const pieceEight = document.querySelector(".piece-eight")
const finishGame = document.querySelector("#finish-image")

let imgPieces = [
    { id: 0, imgControl: true, imgId: 0, friends: 2, whoFriends: { frn1: 1, frn2: 3 } },
    { id: 1, imgControl: true, imgId: 0, friends: 3, whoFriends: { frn1: 0, frn2: 2, frn3: 4 } },
    { id: 2, imgControl: true, imgId: 0, friends: 2, whoFriends: { frn1: 1, frn2: 5 } },
    { id: 3, imgControl: true, imgId: 0, friends: 3, whoFriends: { frn1: 0, frn2: 4, frn3: 6 } },
    { id: 4, imgControl: true, imgId: 0, friends: 4, whoFriends: { frn1: 1, frn2: 3, frn3: 5, frn4: 7 } },
    { id: 5, imgControl: true, imgId: 0, friends: 3, whoFriends: { frn1: 2, frn2: 4, frn3: 8 } },
    { id: 6, imgControl: true, imgId: 0, friends: 2, whoFriends: { frn1: 3, frn2: 7 } },
    { id: 7, imgControl: true, imgId: 0, friends: 3, whoFriends: { frn1: 4, frn2: 6, frn3: 8 } },
    { id: 8, imgControl: true, imgId: 0, friends: 2, whoFriends: { frn1: 5, frn2: 7 } }
]

restart()

function restart() {
    for (let i = 0; i < imgPieces.length; i++) {
        imgPieces[i].imgId = 0
        imgPieces[i].imgControl = true
    }
    let arrThrow = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    while (true) {
        shuffleArray(arrThrow)
        if (arrThrow[8] === 9) {
            break;
        }
    }
    for (let i = 0; i < imgPieces.length; i++) {
        imgPieces[i].imgId = arrThrow[i]
    }
    imgPieces[8].imgControl = false
    getImage(arrThrow)
    pieceEight.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
    finishGame.innerHTML = ""
}


function shuffleArray(array) {
    let len = array.length,
        currentIndex;
    for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
        let randIndex = Math.floor(Math.random() * (currentIndex + 1));
        var temp = array[currentIndex];
        array[currentIndex] = array[randIndex];
        array[randIndex] = temp;
    }
}

function getImage(arrThrow) {
    pieceZero.innerHTML = `<img src="/Day4/img/AIwQ ${arrThrow[0]}.png"alt="">`
    pieceOne.innerHTML = `<img src="/Day4/img/AIwQ ${arrThrow[1]}.png"alt="">`
    pieceTwo.innerHTML = `<img src="/Day4/img/AIwQ ${arrThrow[2]}.png"alt="">`
    pieceThree.innerHTML = `<img src="/Day4/img/AIwQ ${arrThrow[3]}.png"alt="">`
    pieceFour.innerHTML = `<img src="/Day4/img/AIwQ ${arrThrow[4]}.png"alt="">`
    pieceFive.innerHTML = `<img src="/Day4/img/AIwQ ${arrThrow[5]}.png"alt="">`
    pieceSix.innerHTML = `<img src="/Day4/img/AIwQ ${arrThrow[6]}.png"alt="">`
    pieceSeven.innerHTML = `<img src="/Day4/img/AIwQ ${arrThrow[7]}.png"alt="">`
    pieceEight.innerHTML = `<img src="/Day4/img/AIwQ ${arrThrow[8]}.png"alt="">`
}

function swap(swp1, swp2) {
    let temp1, temp2;
    temp1 = imgPieces[swp1].imgId
    temp2 = imgPieces[swp2].imgId
    imgPieces[swp1].imgId = temp2
    imgPieces[swp2].imgId = temp1
    imgPieces[swp1].imgControl = false
    imgPieces[swp2].imgControl = true
}

function finishControl() {
    if (
        imgPieces[0].imgId === 1 &&
        imgPieces[1].imgId === 2 &&
        imgPieces[2].imgId === 3 &&
        imgPieces[3].imgId === 4 &&
        imgPieces[4].imgId === 5 &&
        imgPieces[5].imgId === 6 &&
        imgPieces[6].imgId === 7 &&
        imgPieces[7].imgId === 8
    ) {
        pieceEight.innerHTML = `<img src="/Day4/img/AIwQ 9.png"alt="">`
        finishGame.innerHTML = ` <img src="/Day4/img/angry.webp" style="height: 450px; width: 450px; margin: 5px;" alt="">`
        alert(`Congratulations !
        You won the game.
        Click the "restart" button to play again.`)
    }
}


function swapTwo(idf) {
    finishControl()
    if (imgPieces[idf].imgControl === true) {
        if (imgPieces[imgPieces[idf].whoFriends.frn1].imgControl === false) {
            if (idf === 0) {
                pieceZero.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
                pieceOne.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[0].imgId}.png"alt="">`
                swap(0, 1)
            } else if (idf === 2) {
                pieceTwo.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
                pieceOne.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[2].imgId}.png"alt="">`
                swap(2, 1)
            } else if (idf === 6) {
                pieceSix.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
                pieceThree.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[6].imgId}.png"alt="">`
                swap(6, 3)
            } else {
                pieceEight.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
                pieceFive.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[8].imgId}.png"alt="">`
                swap(8, 5)
            }
        } else if (imgPieces[imgPieces[idf].whoFriends.frn2].imgControl === false) {
            if (idf === 0) {
                pieceZero.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
                pieceThree.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[0].imgId}.png"alt="">`
                swap(0, 3)
            } else if (idf === 2) {
                pieceTwo.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
                pieceFive.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[2].imgId}.png"alt="">`
                swap(2, 5)
            } else if (idf === 6) {
                pieceSix.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
                pieceSeven.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[6].imgId}.png"alt="">`
                swap(6, 7)
            } else {
                pieceEight.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
                pieceSeven.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[8].imgId}.png"alt="">`
                swap(8, 7)
            }
        }
    }
}

function swapThree(idf) {
    finishControl()
    if (imgPieces[idf].imgControl === true) {
        if (imgPieces[imgPieces[idf].whoFriends.frn1].imgControl === false) {
            if (idf === 1) {
                pieceOne.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
                pieceZero.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[1].imgId}.png"alt="">`
                swap(1, 0)
            } else if (idf === 3) {
                pieceThree.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
                pieceZero.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[3].imgId}.png"alt="">`
                swap(3, 0)
            } else if (idf === 5) {
                pieceFive.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
                pieceTwo.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[5].imgId}.png"alt="">`
                swap(5, 2)
            } else {
                pieceSeven.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
                pieceFour.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[7].imgId}.png"alt="">`
                swap(7, 4)
            }
        } else if (imgPieces[imgPieces[idf].whoFriends.frn2].imgControl === false) {
            if (idf === 1) {
                pieceOne.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
                pieceTwo.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[1].imgId}.png"alt="">`
                swap(1, 2)
            } else if (idf === 3) {
                pieceThree.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
                pieceFour.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[3].imgId}.png"alt="">`
                swap(3, 4)
            } else if (idf === 5) {
                pieceFive.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
                pieceFour.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[5].imgId}.png"alt="">`
                swap(5, 4)
            } else {
                pieceSeven.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
                pieceSix.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[7].imgId}.png"alt="">`
                swap(7, 6)
            }
        } else if (imgPieces[imgPieces[idf].whoFriends.frn3].imgControl === false) {
            if (idf === 1) {
                pieceOne.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
                pieceFour.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[1].imgId}.png"alt="">`
                swap(1, 4)
            } else if (idf === 3) {
                pieceThree.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
                pieceSix.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[3].imgId}.png"alt="">`
                swap(3, 6)
            } else if (idf === 5) {
                pieceFive.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
                pieceEight.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[5].imgId}.png"alt="">`
                swap(5, 8)
            } else {
                pieceSeven.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
                pieceEight.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[7].imgId}.png"alt="">`
                swap(7, 8)
            }
        }
    }
}

function swapFour(idf) {
    finishControl()

    if (imgPieces[idf].imgControl === true) {
        if (imgPieces[imgPieces[idf].whoFriends.frn1].imgControl === false) {
            pieceFour.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
            pieceOne.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[4].imgId}.png"alt="">`
            swap(4, 1)
        } else if (imgPieces[imgPieces[idf].whoFriends.frn2].imgControl === false) {
            pieceFour.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
            pieceThree.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[4].imgId}.png"alt="">`
            swap(4, 3)
        } else if (imgPieces[imgPieces[idf].whoFriends.frn3].imgControl === false) {
            pieceFour.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
            pieceFive.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[4].imgId}.png"alt="">`
            swap(4, 5)
        } else if (imgPieces[imgPieces[idf].whoFriends.frn4].imgControl === false) {
            pieceFour.innerHTML = `<img style="display: none;" src="/Day4/img/AIwQ ${9}.png"alt="">`
            pieceSeven.innerHTML = `<img src="/Day4/img/AIwQ ${imgPieces[4].imgId}.png"alt="">`
            swap(4, 7)
        }
    }
}
