let dragMe = document.getElementById("drag-me");

let initialX = 0;
let initialY = 0;
let moveElement = false;

let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup"
    },
    touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend"
    },
};

let = deviceType = "";

const isTouchDevice = () => {

    try {
        document.createEvent("TouchEvent")
        deviceType = "touch"
        return true;

    } catch (e) {
        deviceType = "mouse"
        return false;
    }
};

isTouchDevice();

dragMe.addEventListener(events[deviceType].down, (e) => {

    e.preventDefault();

    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    moveElement = true;
});


dragMe.addEventListener(events[deviceType].move, (e) => {

    if (moveElement) {
        e.preventDefault();

        newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

        dragMe.style.top = dragMe.offsetTop - (initialY - newY) + "px";
        dragMe.style.left = dragMe.offsetLeft - (initialX - newX) + "px";
    };

    initialX = newX;
    initialY = newY;
});

dragMe.addEventListener(events[deviceType].up, (stopMovement = (e) => {
    moveElement = false;
}));


dragMe.addEventListener("mouseleave", stopMovement())

dragMe.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
});