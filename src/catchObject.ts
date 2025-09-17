import {animate, createDraggable} from 'animejs';
createDraggable('.board.enabled', {
  y: false, container : '.container' 
});

function randomX(square : any){
  let left = square as HTMLElement
  const XPosition : number = Math.floor(Math.random() * ((window.innerWidth-100) - 100)+100)
  left.style.left = `${XPosition}px`;
  dropObject(left);
}

function dropObject(target : HTMLElement,) {
  const duration : number = Math.floor(Math.random() * (3000-1000+1)+1000);
  const containerY : number = ((window.innerHeight * 0.8)-target.clientHeight);
  animate(target,{
    translateY: [0, containerY],
    duration: duration,
    easing: "easeInQuad",
    onComplete: function(){randomX(target)}
  });
}

const countDown = document.getElementById("countDown") as HTMLElement;
const squares = document.querySelectorAll(".square") as NodeListOf<HTMLElement>;
const catcher = document.getElementById("catcher") as HTMLElement;
let rectCatcher :any;
let timeLeft : number = 60;

function startGame() {
  squares.forEach(function(square) {
  randomX(square);
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

document.addEventListener("mousemove", e => {
  rectCatcher = catcher.getBoundingClientRect(); // untuk ambil posisi realtime catcher
  // console.log("catcher:", rectCatcher.left);
  isCollide(rectCatcher.left, rectCatcher.top, rectCatcher.right, rectCatcher.bottom)
});

const isCollide = (catcherLeft:any, catcherTop:any, catcherRight:any, catcherBottom:any) => {
squares.forEach(square => {
    const rectSquare = square.getBoundingClientRect();

    const collide = !(
      catcherRight < rectSquare.left ||
      catcherLeft> rectSquare.right ||
      catcherBottom < rectSquare.top ||
      catcherTop > rectSquare.bottom
    );

    if (collide) {
      console.log("masuk");
    }
  });
}


startGame();
