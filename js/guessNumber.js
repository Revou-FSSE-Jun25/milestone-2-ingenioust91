import { initializeLevel } from "./utils/selectLevel.js";
initializeLevel(callBackLevel);

import {tooLow, tooHigh, right, allFalse, imgStillFalse} from "./array.js";
import {getScore} from "./utils/score.js"
import {getArray} from './utils/randomArray.js'

// Add null checks
const main = document.getElementsByTagName("main")[0];
const mainWidth = main.clientWidth;
const mainHeight = main.clientHeight;

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

    switch (true) {
        case bossNumber == dogNumber.value :
        {   line = getArray(right);
            getScore(line, "guessNumber")}
        break;

        case chance == 1 :
        {   line = getArray(allFalse);
            getScore(line, "guessNumber")}
        break;

        case dogNumber.value === "" :
        {   line = "Give me something";
            ChangeimageBoss = getArray(imgStillFalse);}
        break;
        
        case bossNumber > dogNumber.value :
        {   line = getArray(tooLow);
            ChangeimageBoss = getArray(imgStillFalse);
            chance--;
            getChance(chance);}
        break;

        default :
        {   line = getArray(tooHigh);
            ChangeimageBoss = getArray(imgStillFalse);
            chance--;
            getChance(chance);}
    }
        
    bossText.textContent = line;
    bossImage.src = ChangeimageBoss;
})

function getChance(chance){
    numberOfChance.textContent = `You have ${chance} chances left`
}

// clue.addEventListener("click", function(){
//     chance--;
//     getChance(chance);

//     //ex : bossNumber 31 -> (31/20)=1.55  1*20+1 = 21
//     const start = Math.floor(bossNumber / 20) * 20 + 1;
//     const end = start + 20;
    
//     textClue.textContent = `It’s somewhere between ${start} and ${end}.`;
//     clue.src = "./assets/telephone.png"
//     clue.style.pointerEvents = "none"; 
// })

const clueGen = clueGenerator(bossNumber);

clue.addEventListener("click", function(){
    chance--;
    getChance(chance);
    clueGen.next();
})

function* clueGenerator(bossNumber) {
    yield clue1(bossNumber);
    yield clue2(bossNumber);
    return clue3(bossNumber);
}

const clue1 = (bossNumber) => {
    const start = Math.floor(bossNumber / 20) * 20 + 1; //ex : bossNumber 31 -> (31/20)=1.55  1*20+1 = 21
    const end = start + 20;
    textClue.textContent = `It’s somewhere between ${start} and ${end}.`
}

const clue2 = (bossNumber) => {
    const oddNumber = bossNumber % 2; //ex: 77 % 2 = 38 + 1 ->odd

    if(oddNumber === 1) {
        textClue.textContent = "The boss loves odd numbers."
    } else {textClue.textContent = "The boss loves even numbers."}
    
}

const clue3 = (bossNumber) => {
    const clueNumber = bossNumber * 2;

    if(clueNumber>= 100) {
        textClue.textContent = "When doubled, it’s more than 100"
    } else {textClue.textConten = "When doubled, it’sless than 100"}
    clue.src = "./assets/telephone.png";
    clue.style.pointerEvents = "none"; 
}
