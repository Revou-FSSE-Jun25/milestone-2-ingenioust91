import { initializeLevel } from "../utils/selectLevel.js";
initializeLevel(callBackLevel);

import {getScore} from "../utils/score.js"

import {getArray} from '../utils/randomArray.js'

let bossNumber = Math.floor(Math.random() * 100) + 1;
let chance;

const buttonGuess = document.getElementById("buttonGuess");
const bossText = document.getElementById("bossText");
const bossImage = document.getElementById("bossImage");
let dogNumber = document.getElementById("dogNumber");
const formInput = document.getElementById("formInput");
const numberOfChance = document.getElementById("numberOfChance");
const clue = document.getElementById("clue");
const textClue = document.getElementById("textClue");
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
        if(bossNumber == dogNumber.value){
            line = getArray(right);
            getScore(line, "guessNumber")
        } else {
            line = getArray(allFalse);
            getScore(line, "guessNumber")
        }
    }

    if (dogNumber.value == "") {
        line = "Give me something";
        ChangeimageBoss = getArray(imgStillFalse);
    }
    else if (bossNumber > dogNumber.value) {
        line = getArray(tooLow);
        ChangeimageBoss = getArray(imgStillFalse);
        chance--;
        getChance(chance);
    }
    else {
        line = getArray(tooHigh);
        ChangeimageBoss = getArray(imgStillFalse);
        chance--;
        getChance(chance);
    }
        
    bossText.textContent = line;
    bossImage.src = ChangeimageBoss;
})

function getChance(chance){
    numberOfChance.textContent = `You have ${chance} chances left`
}

clue.addEventListener("click", function(){
    chance--;
    getChance(chance);
    switch (true) {
        case (bossNumber >= 1 && bossNumber <= 20) :
        {textClue.textContent = "It’s somewhere between 1 and 20."}
        break;     
        case (bossNumber >= 21 && bossNumber <= 40) :
        {textClue.textContent = "It’s somewhere between 21 and 40."}
        break;
        case (bossNumber >= 41 && bossNumber <= 60) :
        {textClue.textContent = "It’s somewhere between 41 and 60."}
        break;  
        case (bossNumber >= 61 && bossNumber <= 80) :
        {textClue.textContent = "It’s somewhere between 61 and 80."}
        break; 
        case (bossNumber >= 81 && bossNumber <= 100) :
        {textClue.textContent = "It’s somewhere between 81 and 100."}
        break; 
        default : {textClue.textContent = "Just guess.... a number"}
    }
    clue.src = "./assets/telephone.png"
    clue.style.pointerEvents = "none"; 
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
    "OK. Do Better next time."
]

const allFalse = [
    "You can’t handle something this simple?",
    "Do I have to do everything myself?",
    "Can you even do this job or not?"
]

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
