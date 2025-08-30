import { initializeLevel } from "./selectLevel.js";
initializeLevel(callBackLevel);

import {getScore} from "./score.js"

let bossNumber;
let score = 10;
const buttonGuess = document.getElementById("buttonGuess");
const bossText = document.getElementById("bossText");
const bossImage = document.getElementById("bossImage");
let dogNumber = document.getElementById("dogNumber");
const formInput = document.getElementById("formInput");
dogNumber.value = "";

function callBackLevel(level) {
    if (level === "junior") {
        bossNumber = Math.floor(Math.random() * 100) + 1;
    } else {
        bossNumber = Math.floor(Math.random() * 200) + 1;
    }

    console.log(bossNumber);
}

formGuess.addEventListener("submit", function(event) {
    event.preventDefault();
    guessNumber();
})

dogNumber.addEventListener("input", function() {
    let input = dogNumber.value;
    let numberInput = parseInt(input.trim())

    if (isNaN(numberInput)) {
        document.getElementById("dogNumber").value = "";
    }

    if (numberInput > 100 || numberInput == 0) {
        bossText.textContent = "I said between 1 to 100!";
    }
} )

buttonGuess.addEventListener("click", function() {
    const getRandomLine = (array) => {
        const index = Math.floor(Math.random() * array.length);
        return array[index];
    }

    let line;
    let ChangeimageBoss;

    if (dogNumber.value == "") {
        line = "Give me something";
        ChangeimageBoss = getRandomLine(imgStillFalse);
    }
    else if (bossNumber > dogNumber.value) {
        line = getRandomLine(tooLow);
        ChangeimageBoss = getRandomLine(imgStillFalse);
        score--;
    }
    else if (bossNumber < dogNumber.value) {
        line = getRandomLine(tooHigh);
        ChangeimageBoss = getRandomLine(imgStillFalse);
        score--;
    }
    else {
        line = getRandomLine(right);
        ChangeimageBoss = getRandomLine(imgRight);
        getScore(score, "guessNumber")
    }

    bossText.textContent = line;
    bossImage.src = ChangeimageBoss;
})


const tooLow = [
    "Too low! Come on, that's not complicated",
    "That’s under my number. I don't like it.",
    "Not enough. Revise your guess."
]

const tooHigh = [
    "Above my number. Don't tell me you can't handle this",
    "That’s more than what I had in mind. Try again.",
    "Nope, that’s too much. Revise it."
]

const right = [
    "Finally. I know my instructions are clear.",
    "Good. But I expect faster.",
    "OK."
]

const imgStillFalse = [
    "./assets/boss-mikir-false-1.png",
    "./assets/boss-mikir-false-2.png",
    "./assets/boss-mikir-false-3.png",
    "./assets/boss-mikir-false-4.png"
]


const imgRight = [
    "./assets/boss-mikir-right-1.png",
    "./assets/boss-mikir-right-2.png"
]
