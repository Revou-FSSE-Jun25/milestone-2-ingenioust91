import { initializeLevel } from "../utils/selectLevel.js";
initializeLevel(callBackLevel, "clickerGame");

import {getScore} from "../utils/score.js"

let timeLeft;

function callBackLevel(level) {
    if (level === "junior") {
        timeLeft = 100;
        randomPosition(1000);
    } else {
        timeLeft = 60;
        randomPosition(750);
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
let randomIntervalId;

let timerId = setInterval(function(){
    countDown.textContent = timeLeft;
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timerId);
        clearInterval(randomIntervalId);
        countDown.textContent = "TIME'S UP!";
        getScore(score, "clickerGame");
    }
},1000)

function randomPosition(timer) {
    randomIntervalId = setInterval(function(){
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