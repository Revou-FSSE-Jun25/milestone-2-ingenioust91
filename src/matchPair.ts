import { utils, animate, stagger } from 'animejs';
import {getScore} from "./utils/score"

const cards = utils.$('.card');
const x = stagger('6.4rem');

// Initial squares x position
utils.set(cards, { x });

const shuffle = () => animate(utils.shuffle(cards), { x });
const card = document.querySelectorAll(".card") as NodeListOf<HTMLElement>;
const countDown = document.getElementById("countDown") as HTMLElement;
const scoreText = document.getElementById("score") as HTMLElement;
let newCard : HTMLElement
let lastCard : HTMLElement
let timeLeft : number = 60;
let score : number = 0;
let timerId : ReturnType<typeof setInterval>;

const flipCard = (eachCard : HTMLElement):void => {
    animate(eachCard,{
    rotateY: [0,180,0], //supaya balik nutup lagi
    easing: 'easeInOutQuad',
    duration: 2000,
    onComplete : ()=>{validateCard(eachCard)}
  });
  
}

const validateCard = (value : HTMLElement) => {
  newCard = value

  if (lastCard != undefined) {
    if (newCard.className === lastCard.className){
      newCard.remove();
      lastCard.remove();
      score++;
      scoreText.textContent = score.toString();
      isEnding();
    }
  }
  lastCard = newCard;
}

const isEnding = () =>{
  if (score >= 3)
  {getScore(score, "matchPair");
    clearInterval(timerId)
  }
}

const startGame = () => {
    shuffle()

    card.forEach(function(value : HTMLElement){
        value.addEventListener("click", function(){
            flipCard(value);
        })
    })

    timerId = setInterval(function(){
    countDown.textContent = timeLeft.toString();
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timerId);
        countDown.textContent = "TIME'S UP!";
        getScore(score, "matchPair");
    }
  },1000)
}

startGame();