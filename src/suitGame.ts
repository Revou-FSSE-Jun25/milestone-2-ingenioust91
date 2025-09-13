const rock = document.getElementById("rock") as HTMLElement;
const scissor = document.getElementById("scissor") as HTMLElement;;
const paper = document.getElementById("paper") as HTMLElement;;
const imgMates = document.getElementById("imgMates") as HTMLImageElement;
const imgDog = document.getElementById("imgDog") as HTMLImageElement;
const isWin = document.getElementById("isWin") as HTMLElement;
const timerText = document.getElementById("timer") as HTMLElement;
const h1 = document.getElementsByTagName("h1")[0] as HTMLElement;

import {initializeLevel, storyLine} from "./utils/selectLevel";
const story = new storyLine("suitGame");
story.getStoryLine();

initializeLevel(callBackLevel);

import {listQuestion} from "./array";
import {getScore} from "./utils/score"
import {getArray} from "./utils/randomArray"

let idx = getArray(listQuestion);
let compRandom : number;
let winCount : number = 0;
let gameCount : number = 0;
let timerLevel : number = 0;
let timer : number = 0;
let intervalId : any;

function callBackLevel(level : string):void {
    if (level === "junior") {
        timerLevel = 10;
    } else {
        timerLevel = 5;
    }
	timer = timerLevel;

	startGame();
	startInterval();
}

function startGame():number {
	idx = getArray(listQuestion);
	gameCount++;
	console.log("Start game ke-", gameCount);

	//reset everything
	timerText.textContent = `Time Left : ${timer}`
	isWin.textContent = "";
	imgMates.src = "./assets/mates-ask.png";
	imgDog.src = "./assets/anjing-kerja-1.png";
	paper.style.pointerEvents = "auto"; 
	rock.style.pointerEvents = "auto"; 
	scissor.style.pointerEvents = "auto"; 
	paper.style.backgroundColor = "white";
	rock.style.backgroundColor = "white";
	scissor.style.backgroundColor = "white";

	compRandom = Math.floor(Math.random() * 3);
	h1.innerHTML = idx[0].quest;
	scissor.innerHTML = idx[0].user[0]
	rock.innerHTML = idx[0].user[1]
	paper.innerHTML = idx[0].user[2]

	if (gameCount > 5) {
	stopGame(); }

	return idx;
}

scissor.addEventListener("click", function():void {
	const userAnswer : number = 0;
	scissor.style.backgroundColor = "#bbbbbb"
	h1.innerHTML = idx[0].userScissor[compRandom];
	findingWinner(userAnswer);
})

rock.addEventListener("click", function():void {
	const userAnswer : number  = 1;
	rock.style.backgroundColor = "#bbbbbb"
	h1.innerHTML = idx[0].userRock[compRandom];
	findingWinner(userAnswer);
})

paper.addEventListener("click", function():void {
	const userAnswer : number  = 2;
	paper.style.backgroundColor = "#bbbbbb"
	h1.innerHTML = idx[0].userPaper[compRandom];
	findingWinner(userAnswer);
})

function findingWinner (userAnswer : number):void {
	// disable all button
	paper.style.pointerEvents = "none"; 
	rock.style.pointerEvents = "none"; 
	scissor.style.pointerEvents = "none"; 

	let result : number = (compRandom-userAnswer + 3) % 3;
	switch (result) {
		case 0 :
		{	isWin.textContent = "DRAW";
			imgMates.src = "./assets/mates-draw.png";
			imgDog.src = "./assets/anjing-draw.png";}
		break;
		case 1 :
		{	isWin.textContent = "You Lose!";
			imgMates.src = "./assets/mates-win.png";
			imgDog.src = "./assets/anjing-kerja-2.png";}
		break;
		default :
		{	isWin.textContent = "You Win!";
			imgMates.src = "./assets/mates-lose.png";
			imgDog.src = "./assets/anjing-win.png";
			winCount++;}
	}

	clearInterval(intervalId);

	setTimeout (function(){
		timer = timerLevel;
		startInterval();
		startGame();
	},4000)

	//testing
	console.log('YOU:', userAnswer)
	console.log('COMP:',compRandom)
	console.log('MENANG :',winCount)
}

function stopGame():void {
	clearInterval(intervalId);
	getScore(winCount, "suitGame");
}

function startInterval():void {
	intervalId = setInterval(function():void {
	timerText.textContent = `Time Left : ${timer}`
	timer--;
	if (timer < 0) {
		timer = timerLevel;
		startGame();
	}
},1000);
}




