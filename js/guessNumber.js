import { initializeLevel } from "../utils/selectLevel.js";
initializeLevel(callBackLevel);

import {getScore} from "../utils/score.js"

import {getArray} from '../utils/randomArray.js'

let bossNumber = Math.floor(Math.random() * 100) + 1;
let chance;
let miss = 0;

const buttonGuess = document.getElementById("buttonGuess");
const bossText = document.getElementById("bossText");
const bossImage = document.getElementById("bossImage");
let dogNumber = document.getElementById("dogNumber");
const formInput = document.getElementById("formInput");
const numberOfChance = document.getElementById("numberOfChance");
dogNumber.value = "";

function callBackLevel(level) {
    if (level === "junior") {
        chance = 10;
    } else {
        chance = 5;
    }

    getChance(chance);
    console.log(bossNumber);
}

formGuess.addEventListener("submit", function(event) {
    event.preventDefault();
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
    let line;
    let ChangeimageBoss;

    if (bossNumber == dogNumber.value || chance == 1) {
        getScore(miss, "guessNumber")
    }

    if (dogNumber.value == "") {
        line = "Give me something";
        ChangeimageBoss = getArray(imgStillFalse);
    }
    else if (bossNumber > dogNumber.value) {
        line = getArray(tooLow);
        ChangeimageBoss = getArray(imgStillFalse);
        chance--;
        miss++;
        getChance(chance);
    }
    else {
        line = getArray(tooHigh);
        ChangeimageBoss = getArray(imgStillFalse);
        chance--;
        miss++;
        getChance(chance);
    }
        
    bossText.textContent = line;
    bossImage.src = ChangeimageBoss;
})

function getChance(chance){
numberOfChance.textContent = `You have ${chance} chances left`}

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

// const right = [
//     "Finally. I know my instructions are clear.",
//     "Good. But I expect faster.",
//     "OK."
// ]

const imgStillFalse = [
    "./assets/boss-mikir-false-1.png",
    "./assets/boss-mikir-false-2.png",
    "./assets/boss-mikir-false-3.png",
    "./assets/boss-mikir-false-4.png"
]


// const imgRight = [
//     "./assets/boss-mikir-right-1.png",
//     "./assets/boss-mikir-right-2.png"
// ]
