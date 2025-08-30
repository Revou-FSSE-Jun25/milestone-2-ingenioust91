
let level;

function initializeLevel(callBackLevel){

const header = document.getElementsByTagName("header")[0]
const div = document.createElement("div");
const div2 = document.createElement("div");
const p = document.createElement("p");
const buttonJunior = document.createElement("button");
const buttonSenior = document.createElement("button");

header.style.height = "100vh"
header.style.display = "flex"
header.style.flexDirection = "column"
header.style.alignItems = "center"
header.style.justifyContent = "center"

div.style.height = "30%"
div.style.width = "30%"
div.style.borderWidth = "1px"
div.style.display = "flex"
div.style.flexDirection = "column"
div.style.alignItems = "center"
div.style.justifyContent = "center"
div.style.gap = "2%"

p.style.textAlign = "center"
p.style.fontFamily = "'Inconsolata', sans-serif"
p.style.fontSize = "1.25rem"
p.textContent = "Select your job position"

div2.style.display = "flex"
div2.style.alignItems = "center"
div2.style.justifyContent = "center"
div2.style.gap = "5%"

buttonJunior.textContent = "Junior"
buttonJunior.id = "buttonJunior"

buttonSenior.textContent = "Senior"
buttonSenior.id = "buttonSenior"

header.appendChild(div)
div.appendChild(p)
div.appendChild(div2)
div2.appendChild(buttonJunior)
div2.appendChild(buttonSenior)

buttonJunior.addEventListener("click", function junior(){
    level = "junior"
    callBackLevel(level);
    document.getElementsByTagName("main")[0].style.visibility = "visible";
    header.style.display = "none";
})

buttonSenior.addEventListener("click", function senior(){
    level = "senior"
    callBackLevel(level);
    document.getElementsByTagName("main")[0].style.visibility = "visible";
    header.style.display = "none";
})
}



export {initializeLevel}
