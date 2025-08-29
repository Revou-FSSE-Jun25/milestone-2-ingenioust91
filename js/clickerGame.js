import { initializeLevel } from "./selectLevel.js";
initializeLevel(callBackLevel);

let timeLeft;

function callBackLevel(level) {
    if (level === "junior") {
        timeLeft = 120;
        randomPosition(1000);
    } else {
        timeLeft = 60;
        randomPosition(500);
    }
}

let main = document.getElementsByTagName("main")[0];
const mainWidth = main.clientWidth;
const mainHeight = main.clientHeight;

let imgMates = document.createElement("img");
imgMates.style.position = "absolute";

let cursorHand = document.getElementById("cursorHand")
cursorHand.style.zIndex = 5;
imgMates.src = "./assets/mates-1.png";

document.addEventListener("mousemove", (e) => {
    cursorHand.style.left = (e.clientX - 100) + "px";
    cursorHand.style.top = (e.clientY - 70) + "px";
})

let score = 0;

const countDown = document.getElementById("countDown")

setInterval(function timerCountDown(){
    countDown.textContent = timeLeft;
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timerCountDown);
        countDown.textContent = "TIME'S UP!";
        timesUp(score);
    }
},1000)

function randomPosition(timer) {
    setInterval(function(){
    imgMates.src = "./assets/mates-1.png";
    const imgWidth = imgMates.clientWidth;
    const imgHeight = imgMates.clientHeight;

    const matesXPosition = Math.floor(Math.random() * (mainWidth - imgWidth));
    const matesYPosition = Math.floor(Math.random() * (mainHeight - imgHeight))

    imgMates.style.left = `${matesXPosition}px`;
    imgMates.style.top = `${matesYPosition}px`;

    }, timer)
}


imgMates.onload = () => {
    imgMates.style.width = "8%";
}

imgMates.addEventListener("click", function(){
    score++;
    imgMates.src = "./assets/mates-2.png";
    document.getElementById("score").innerHTML = `Score : ${score}`
});

main.appendChild(imgMates);