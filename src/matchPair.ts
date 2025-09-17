import { utils, animate, stagger } from 'animejs';

const cards = utils.$('.card');
const x = stagger('3.2rem');

// Initial squares x position
utils.set(cards, { x });

const shuffle = () => animate(utils.shuffle(cards), { x });
const card = document.querySelectorAll(".card") as NodeListOf<HTMLElement>;

const flipCard = (eachCard : HTMLElement):void => {
    animate(eachCard,{
        scale: [{value:1}, {value:1.3},{value:1, delay: 250} ],
        rotateY: [{value: "+=180"}, {delay: 200}],
        easing: "easeInOutSine",
        duration: 400,
    })
}

const startGame = () => {
    shuffle()

    card.forEach(function(value : HTMLElement){
        value.addEventListener("click", function(){
            flipCard(value)})
    })
}

startGame();