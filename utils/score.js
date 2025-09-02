function getScore(score, game){

const section = document.createElement("section");
const forBackground = document.createElement("section");
const div = document.createElement("div");
const div2 = document.createElement("div");
const h2 = document.createElement("h2");
const p2 = document.createElement("p");
const buttonPlayAgain = document.createElement("button");
const buttonBack = document.createElement("button");

forBackground.style.backgroundColor = "rgba(0,0,0,0.25)";
forBackground.style.position = "fixed"
forBackground.style.zIndex = "999"
forBackground.style.width = "100%"
forBackground.style.height = "100%"
forBackground.style.top = "0"
forBackground.style.left = "0"

section.style.height = "100%"
section.style.width = "100%"
section.style.display = "flex"
section.style.flexDirection = "column"
section.style.alignItems = "center"
section.style.justifyContent = "center"
section.style.position = "absolute"

div.style.padding = "5%"
div.style.borderWidth = "1px"
div.style.backgroundColor = "white"
div.style.display = "flex"
div.style.flexDirection = "column"
div.style.alignItems = "center"
div.style.justifyContent = "center"
div.style.gap = "2%"

h2.style.textAlign = "center"
h2.style.fontFamily = "'Inconsolata', sans-serif"
h2.style.fontSize = "1.25rem"

p2.style.fontSize = "2rem"
p2.style.textAlign = "center"

switch (game) {
        case "clickerGame" :
        {   h2.textContent = "GAME OVER! You've chase "
            p2.textContent = `${score} teammates`;
        }
        break;
        case "guessNumber" :
        {   h2.textContent = "GAME OVER! You have already wasted"
            p2.textContent = `${score} chances`;
        }
        break;
    }

div2.style.display = "flex"
div2.style.alignItems = "center"
div2.style.justifyContent = "center"
div2.style.gap = "5%"
div2.style.width = "100%"

buttonPlayAgain.textContent = "Play Again"
buttonPlayAgain.id = "buttonPlayAgain"
buttonBack.id = "buttonBack"
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
    }
    
})

}
export {getScore}