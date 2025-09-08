import { initializeLevel } from "../utils/selectLevel.js";
initializeLevel(callBackLevel);

import {tooLow, tooHigh, right, allFalse, imgStillFalse} from "./array.js";

import {getScore} from "../utils/score.js"

import {getArray} from '../utils/randomArray.js'

let bossNumber = Math.floor(Math.random() * 100) + 1;
let chance;

const buttonGuess = document.getElementById("buttonGuess");
const bossText = document.getElementById("bossText");
const bossImage = document.getElementById("bossImage");
let dogNumber = document.getElementById("dogNumber");
const formGuess = document.getElementById("formGuess");
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

    
    if(bossNumber == dogNumber.value){
        line = getArray(right);
        getScore(line, "guessNumber")
    } 
        
    if (chance == 1) {
        line = getArray(allFalse);
        getScore(line, "guessNumber")
    }


    if (dogNumber.value === "") {
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

    const start = Math.floor(bossNumber / 20) * 20 + 1;
    const end = start + 20;
    
    textClue.textContent = `It’s somewhere between ${start} and ${end}.`;
    clue.src = "./assets/telephone.png"
    clue.style.pointerEvents = "none"; 
})

