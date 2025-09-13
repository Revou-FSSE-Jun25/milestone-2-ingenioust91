function getScore(score : number | string, game : string):void{

const section = document.createElement("section") as HTMLElement;
const forBackground = document.createElement("section") as HTMLElement;
const div = document.createElement("div") as HTMLElement;
const div2 = document.createElement("div") as HTMLElement;
const h2 = document.createElement("h2") as HTMLElement;
const p2 = document.createElement("p") as HTMLElement;
const buttonPlayAgain = document.createElement("button") as HTMLButtonElement;
const buttonBack = document.createElement("button") as HTMLButtonElement;

forBackground.classList.add("scoreBackground");
section.classList.add("scoreSection");
section.classList.add("flexColumn");
div.classList.add("scoreDiv");
div.classList.add("flexColumn");
h2.classList.add("scoreH2");
p2.classList.add("scoreP2");

div2.classList.add("scoreDiv2");

buttonPlayAgain.textContent = "Play Again"
buttonPlayAgain.classList.add("buttonStyle")
buttonBack.classList.add("buttonStyle")
buttonBack.textContent = "Back to Homepage"

document.body.appendChild(section);
document.body.appendChild(forBackground);
forBackground.appendChild(section)
section.appendChild(div);
div.appendChild(h2);
div.appendChild(p2);
div.appendChild(div2);
div2.appendChild(buttonPlayAgain);
div2.appendChild(buttonBack);

switch (game) {
        case "clickerGame" :
        {   h2.textContent = "GAME OVER! You've chase "
            p2.textContent = `${score} teammates`;
        }
        break;
        case "guessNumber" :
        {   h2.textContent = "GAME OVER!"
            p2.textContent = `${score}`;
        }
        break;
        default :
        {   h2.textContent = "GAME OVER! You've win"
            p2.textContent = `${score} arguments`;
        }
    }

buttonBack.addEventListener("click", function() {
    window.location.href = "/index.html"
})


buttonPlayAgain.addEventListener("click", function() {
    switch (game) {
        case "clickerGame" :
        {window.location.href = "clicker-game.html"}
        break;
        case "guessNumber" :
        {window.location.href = "guess-number.html"}
        break;
        default : {window.location.href = "suit-game.html"}
    }
    
})

}

export {getScore}