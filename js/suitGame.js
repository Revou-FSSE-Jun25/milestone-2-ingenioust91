//index 0: scissor 1:rock 2:paper
const question1 = [{
    quest: 'Aku pikir bolanya di tim kakak.',

    user:[
	'Enggak, bolanya jelas ada di timmu.',
	'Mari kita review bareng-bareng.',
	'Kami coba ambil dulu bolanya.',
    ],

    userScissor :[
	'Kita catat dulu biar manager yang decide.',
	'Setelah di-mapping, bolanya ada di tim kakak.',
	'Ternyata memang di tim kami'
	],

    userRock :[
	'Ternyata memang di tim kami.',
	'Setuju, review bareng aja.',
	'Kenapa review lagi, waktunya udah mepet.'
	],

    userPaper :[
	'Bagus, memang itu bagian timmu.',
	'Maaf, setelah direview bolanya ada di tim kami.',
	'Kita mapping dulu siapa yang pegang bola sebenarnya.'
	],
}]

const question2 = [{
    quest: 'Agak jauh ya dari last discussion.',

    user:[
	'Discussion kemarin nggak relevan lagi.',
	'Ga terlalu jauh, kita bisa tarik benang merahnya.',
	'Benar, jauh dari last discussion.',
    ],

    userScissor :[
	'Kita tarik benang merahnya aja biar nyambung.',
	'Discussion kemarin sudah final, jangan di-skip.',
	'Betul juga.'
	],

    userRock :[
	'Benar, memang ada benang merahnya.',
	'Aku ikutin benang merahmu.',
	'Nah kan, ternyata tidak ada benang merahnya.'
	],

    userPaper :[
	'Nah, kan. Discussion kemarin jadi nggak ada gunanya.',
	'Maaf, discussion kemarin ternyata gak relevan lagi.',
	'Kita tarik benang merahnya aja biar nyambung.'
	],
}]


const question3 = [{
    quest: 'Nah, itu bottleneck-nya dimana ya, kak?',

    user:[
	'Kita coba review bareng.',
	'Bottleneck jelas di timmu, bukan di kami.',
	'Sepertinya ada di tim kami.',
    ],

    userScissor :[
	'Kita sama-sama lagi review juga.',
	'Nah kan, setelah direview memang ada ditimmu.',
	'Maaf, setelah direview ternyata ada di tim kami.'
	],

    userRock :[
	'I see, mungkin timku perlu re-adjust timeline lagi.',
	'Kita catat dulu biar manager yang decide.',
	'Tapi setelah dicek root causenya ada di timmu nih, kak.'
	],

    userPaper :[
	'Exactly, segera diselesaikan ya.',
	'Maaf, setelah direview ternyata ada di tim kami.',
	'Ternyata ada bagian tim kami juga nih, kita aligned sama sama ya.'
	],
}]


const question4 = [{
    quest: 'As I mentioned before on the call yesterday ya, kak.',

    user:[
	'Gak ada yang confirm kemarin',
	'Yes, sudah kita note juga kemarin.',
	'Oke, mungkin miss dari kami.',
    ],

    userScissor :[
	'Kita sama-sama miss kemarin ya, kak. Coba recheck bareng.',
	'Wait, di minutes kemarin udah ada loh.',
	'Maaf kak, ternyata miss dari kami.'
	],

    userRock :[
	'Oke noted, berarti ada alignment gap di timku ya.',
	'Oke, berarti kita aligned ya.',
	'Kalau gitu timmu catatannya beda nih, kak. Coba align ulang aja.'
	],

    userPaper :[
	'Lain kali tolong di recheck sebelum meeting ya kak.',
	'Maaf ternyata memang belum dimention kemarin ya, kak',
	'Kita sama-sama miss kemarin ya, kak. Coba recheck bareng.'
	],
}]

const listQuestion = [question1, question2, question3, question4]

const rock = document.getElementById("rock");
const scissor = document.getElementById("scissor");
const paper = document.getElementById("paper");
const imgMates = document.getElementById("imgMates");
const imgDog = document.getElementById("imgDog");
const isWin = document.getElementById("isWin");
const buttonNext = document.getElementById("buttonNext");

let idx;
let compRandom;
let winCount = 0;

import {getArray} from '../utils/randomArray.js'

buttonNext.addEventListener("click", function() {
	winCount = winCount;
	startGame();
});

function startGame() {
	imgMates.src = "./assets/mates-ask.png";
	imgDog.src = "./assets/anjing-kerja-1.png";
	idx = getArray(listQuestion);
	compRandom = Math.floor(Math.random() * 3);

	document.getElementsByTagName("h1")[0].innerHTML = idx[0].quest;
	scissor.innerHTML = idx[0].user[0]
	rock.innerHTML = idx[0].user[1]
	paper.innerHTML = idx[0].user[2]

	return idx;
}

scissor.addEventListener("click", function() {
	const userAnswer = 0;
	document.getElementsByTagName("h1")[0].innerHTML = idx[0].userScissor[compRandom];
	findingWinner(userAnswer);
})

rock.addEventListener("click", function() {
	const userAnswer = 1;
	document.getElementsByTagName("h1")[0].innerHTML = idx[0].userRock[compRandom];
	findingWinner(userAnswer);
})

paper.addEventListener("click", function() {
	const userAnswer = 2;
	document.getElementsByTagName("h1")[0].innerHTML = idx[0].userPaper[compRandom];
	findingWinner(userAnswer);
})

function findingWinner (userAnswer) {
	if (compRandom === userAnswer) {
		isWin.textContent = "DRAW";
		imgMates.src = "./assets/mates-draw.png";
	} else if ((compRandom-userAnswer + 3) % 3 === 1){
		isWin.textContent = "You Lose!";
		imgMates.src = "./assets/mates-win.png";
		imgDog.src = "./assets/anjing-kerja-2.png";
		winCount--;
	} else {
		isWin.textContent = "You Win!";
		imgMates.src = "./assets/mates-lose.png";
		winCount++;
	}

	//testing
	console.log('YOU:', userAnswer)
	console.log('COMP:',compRandom)
	console.log(winCount)
}


startGame();