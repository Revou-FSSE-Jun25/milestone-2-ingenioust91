function getScore(score){

const section = document.createElement("section");
const section1 = document.createElement("section");
const div = document.createElement("div");
const div2 = document.createElement("div");
const h2 = document.createElement("h2");
const p2 = document.createElement("p");
const buttonPlayAgain = document.createElement("button");
const buttonBack = document.createElement("button");

section1.style.backgroundColor = "rgba(0,0,0,0.25)";
section1.style.position = "absolute"
section1.style.zIndex = "999"
section1.style.width = "100%"
section1.style.height = "100%"

section.style.height = "100vh"
section.style.display = "flex"
section.style.flexDirection = "column"
section.style.alignItems = "center"
section.style.justifyContent = "center"
section.style.position = "fixed"

div.style.height = "30%"
div.style.width = "30%"
div.style.borderWidth = "1px"
div.style.display = "flex"
div.style.flexDirection = "column"
div.style.alignItems = "center"
div.style.justifyContent = "center"
div.style.gap = "2%"

h2.style.textAlign = "center"
h2.style.fontFamily = "'Inconsolata', sans-serif"
h2.style.fontSize = "1.25rem"
h2.textContent = "GAME OVER! Your score :"

p2.textContent = score;
p2.style.fontSize = "2rem"
p2.style.textAlign = "center"

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
document.body.appendChild(section1);
section.appendChild(div);
div.appendChild(h2);
div.appendChild(p2);
div.appendChild(div2);
div2.appendChild(buttonPlayAgain);
div2.appendChild(buttonBack);

buttonBack.addEventListener("click", function() {
    window.location.href = "./index.html"
})

buttonBack.addEventListener("click", function() {
    window.location.href = "./clicker-game.html"
})
}

export {getScore}