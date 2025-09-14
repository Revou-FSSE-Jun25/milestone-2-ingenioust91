import {animate, createDraggable} from 'animejs';
createDraggable('.board.enabled', {
  y: false, container : '.container' 
});

function randomX(square : any){
    let left = square as HTMLElement
  const XPosition : number = Math.floor(Math.random() * ((window.innerWidth-100) - 100)+100)
  left.style.left = `${XPosition}px`;
  console.log(XPosition)
  dropObject(left);
}

function dropObject(target : HTMLElement) {
  const duration : number = Math.floor(Math.random() * (3000-1000+1)+1000);
  const containerY : number = ((window.innerHeight * 0.8)-target.clientHeight);
  animate(target,{
    translateY: [0, containerY],
    duration: duration,
    easing: "easeInQuad",
    // loop: true
    onComplete: function() {randomX(target)}
  });
}

const countDown = document.getElementById("countDown") as HTMLElement;
let timeLeft : number = 60;

function startGame() {
  const squares = document.querySelectorAll(".square");
squares.forEach(function(square) {
  randomX(square);})

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
