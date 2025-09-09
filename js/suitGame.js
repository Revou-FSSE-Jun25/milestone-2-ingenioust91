const rock = document.getElementById("rock");
const scissor = document.getElementById("scissor");
const paper = document.getElementById("paper");
const imgMates = document.getElementById("imgMates");
const imgDog = document.getElementById("imgDog");
const isWin = document.getElementById("isWin");

import { initializeLevel } from "./utils/selectLevel.js";
initializeLevel(callBackLevel, "suitGame");

import {listQuestion} from "./array.js";
import {getScore} from "./utils/score.js"
import {getArray} from './utils/randomArray.js'

let idx = getArray(listQuestion);;
let compRandom;
let winCount = 0;
let gameCount = 0;
let timerLevel = 0;
let timer = 0;

function callBackLevel(level) {
    if (level === "junior") {
        timerLevel = 10;
    } else {
        timerLevel = 5;
    }
	timer = timerLevel;
}

function startGame() {
	idx = getArray(listQuestion);
	gameCount++;
	console.log("Start game ke-", gameCount);

	//reset everything
	document.getElementById("timer").textContent = `Time Left : ${timer}`
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

	document.getElementsByTagName("h1")[0].innerHTML = idx[0].quest;
	scissor.innerHTML = idx[0].user[0]
	rock.innerHTML = idx[0].user[1]
	paper.innerHTML = idx[0].user[2]

	if (gameCount > 5) {
	stopGame(); }

	return idx;
}

scissor.addEventListener("click", function() {
	const userAnswer = 0;
	scissor.style.backgroundColor = "#bbbbbb"
	document.getElementsByTagName("h1")[0].innerHTML = idx[0].userScissor[compRandom];
	findingWinner(userAnswer);
})

rock.addEventListener("click", function() {
	const userAnswer = 1;
	rock.style.backgroundColor = "#bbbbbb"
	document.getElementsByTagName("h1")[0].innerHTML = idx[0].userRock[compRandom];
	findingWinner(userAnswer);
})

paper.addEventListener("click", function() {
	const userAnswer = 2;
	paper.style.backgroundColor = "#bbbbbb"
	document.getElementsByTagName("h1")[0].innerHTML = idx[0].userPaper[compRandom];
	findingWinner(userAnswer);
})

function findingWinner (userAnswer) {
	// disable all button
	paper.style.pointerEvents = "none"; 
	rock.style.pointerEvents = "none"; 
	scissor.style.pointerEvents = "none"; 

	let result = (compRandom-userAnswer + 3) % 3;
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
		startGame();
	},4000)

	//testing
	console.log('YOU:', userAnswer)
	console.log('COMP:',compRandom)
	console.log('MENANG :',winCount)
}

function stopGame() {
	clearInterval(intervalId);
	getScore(winCount, "suitGame");
}

let intervalId = setInterval(function(){
	document.getElementById("timer").textContent = `Time Left : ${timer}`
	timer--;
	if (timer < 0) {
		timer = timerLevel;
		startGame();
	}
},1000);


