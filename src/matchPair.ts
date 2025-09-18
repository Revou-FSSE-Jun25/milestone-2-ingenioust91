import { utils, animate, stagger } from 'animejs';

const cards = utils.$('.card');
const x = stagger('6.4rem');

// Initial squares x position
utils.set(cards, { x });

const shuffle = () => animate(utils.shuffle(cards), { x });
const card = document.querySelectorAll(".card") as NodeListOf<HTMLElement>;
const countDown = document.getElementById("countDown") as HTMLElement;
let timeLeft : number = 60;

const flipCard = (eachCard : HTMLElement):void => {
    animate(eachCard,{
    rotateY: [0,180,0], //supaya balik nutup lagi
    easing: 'easeInOutQuad',
    duration: 2000,
  });
}

const startGame = () => {
    shuffle()

    card.forEach(function(value : HTMLElement){
        value.addEventListener("click", function(){
            flipCard(value);
            
            })
    })

    let timerId = setInterval(function(){
    countDown.textContent = timeLeft.toString();
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timerId);
        countDown.textContent = "TIME'S UP!";
    }
  },1000)
}

startGame();