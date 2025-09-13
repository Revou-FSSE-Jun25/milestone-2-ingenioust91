import {initializeLevel, storyLine} from "./utils/selectLevel";
const story = new storyLine("guessNumber");
story.getStoryLine();
console.log('nama', story.getStoryLine())

initializeLevel(callBackLevel);

import {tooLow, tooHigh, right, allFalse, imgStillFalse} from "./array";
import {getScore} from "./utils/score"
import {getArray} from "./utils/randomArray"

let bossNumber : number = Math.floor(Math.random() * 100) + 1;
let chance : number;

const buttonGuess = document.getElementById("buttonGuess") as HTMLButtonElement;
const bossText = document.getElementById("bossText") as HTMLElement;
const bossImage = document.getElementById("bossImage") as HTMLImageElement;
let dogNumber = document.getElementById("dogNumber") as HTMLInputElement;
const formGuess = document.getElementById("formGuess") as HTMLFormElement;
const numberOfChance = document.getElementById("numberOfChance") as HTMLElement;
const clue = document.getElementById("clue") as HTMLImageElement;
const textClue = document.getElementById("textClue") as HTMLElement;

let input : string = dogNumber.value;
let dogNumberInput : number = parseInt(input.trim());
dogNumber.value = "";

function callBackLevel(level : string):void {
    if (level === "junior") {
        chance = 10;
    } else {
        chance = 5;
    }

    getChance(chance);
    console.log(bossNumber); //testing
}

formGuess.addEventListener("submit", function(event):void {
    event.preventDefault();
})

dogNumber.addEventListener("input", function():void {
    if (isNaN(dogNumberInput)) {
        dogNumber.value = "";
    }

    if (dogNumberInput > 100 || dogNumberInput == 0) {
        bossText.textContent = "I said between 1 to 100!";
    }
} )

buttonGuess.addEventListener("click", function():void {
    let line : string;
    let ChangeimageBoss : string ="";

    switch (true) {
        case bossNumber == dogNumberInput :
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
        
        case bossNumber > dogNumberInput :
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

function getChance(chance : number):void{
    numberOfChance.textContent = `You have ${chance} chances left`
}

const clueGen:Generator<void, void, unknown> = clueGenerator(bossNumber);

clue.addEventListener("click", function():void{
    chance--;
    getChance(chance);
    clueGen.next();
})

function* clueGenerator(bossNumber : number):Generator<void, void, unknown> {
    yield clue1(bossNumber);
    yield clue2(bossNumber);
    return clue3(bossNumber);
}

const clue1 = (bossNumber : number):void => {
    const start = Math.floor(bossNumber / 20) * 20 + 1; //ex : bossNumber 31 -> (31/20)=1.55  1*20+1 = 21
    const end = start + 20;
    textClue.textContent = `It’s somewhere between ${start} and ${end}.`
}

const clue2 = (bossNumber : number):void => {
    const oddNumber = bossNumber % 2; //ex: 77 % 2 = 38 + 1 ->odd

    if(oddNumber === 1) {
        textClue.textContent = "The boss loves odd numbers."
    } else {textClue.textContent = "The boss loves even numbers."}
    
}

const clue3 = (bossNumber : number):void => {
    const clueNumber = bossNumber * 2;

    if(clueNumber>= 100) {
        textClue.textContent = "When doubled, it’s more than 100"
    } else {textClue.textContent = "When doubled, it’sless than 100"}
    clue.src = "./assets/telephone.png";
    clue.style.pointerEvents = "none"; 
}
