import {initializeLevel, storyLine} from "./utils/selectLevel";
const story = new storyLine("clickerGame");
story.getStoryLine();

initializeLevel(callBackLevel);

import {getScore} from "./utils/score"

let timeLeft : number = 0;

function callBackLevel(level:string):void {
    if (level === "junior") {
        timeLeft = 100;
        randomPosition(1000);
    } else {
        timeLeft = 60;
        randomPosition(750);
    }
    startGame();
}
// Add null checks
const main = document.getElementsByTagName("main")[0] as HTMLElement;
const mainWidth = main.clientWidth;
const mainHeight = main.clientHeight;

const scoreText = document.getElementById("score") as HTMLElement;

const imgMates = document.createElement("img") as HTMLImageElement;
imgMates.style.position = "absolute";
imgMates.src = "./assets/mates-1.png";

const cursorHand = document.getElementById("cursorHand") as HTMLImageElement;
cursorHand.style.zIndex = "5";
//agar gambar cursorhand mengikuti pointer mouse
document.addEventListener("mousemove", (e) => {
    cursorHand.style.left = (e.clientX - 100) + "px";
    cursorHand.style.top = (e.clientY - 70) + "px";
})

let score : number = 0;
const countDown = document.getElementById("countDown") as HTMLElement;
let randomIntervalId : ReturnType<typeof setInterval>;

function startGame() {
let timerId = setInterval(function(){
    countDown.textContent = timeLeft.toString();
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timerId);
        clearInterval(randomIntervalId);
        countDown.textContent = "TIME'S UP!";
        getScore(score, "clickerGame");
    }
},1000)
}

const randomPosition = (timer : number):void => {
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

imgMates.onload = ():void => {
    imgMates.style.width = "8%";
}

imgMates.addEventListener("click", function():void{
    score++;
    imgMates.src = "./assets/mates-2.png";
    scoreText.innerHTML = `Score : ${score}`
});

main.appendChild(imgMates);