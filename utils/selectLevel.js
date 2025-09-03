
let level;

function initializeLevel(callBackLevel, game){
const header = document.getElementById("headerLevel")
const span = document.createElement("span");
const div = document.createElement("div");
const div2 = document.createElement("div");
const p = document.createElement("p");
const img = document.createElement("img");
const buttonJunior = document.createElement("button");
const buttonSenior = document.createElement("button");

div.style.padding = "2%"
div.style.borderWidth = "1px"
div.style.display = "flex"
div.style.flexDirection = "column"
div.style.alignItems = "center"
div.style.justifyContent = "center"

p.style.textAlign = "center"
p.style.fontSize = "1.25rem"
p.textContent = "Select your job position"

span.style.fontSize = "1.1rem"
span.style.textAlign = "left"
span.style.lineHeight = "1.1"
span.style.padding = "1%"
span.style.border = "5px double"
span.id = "spanLevel"

img.id = "imgLevel"

switch (game) {
    case "suitGame" : 
    {   img.src = "./assets/anjing-meeting.gif"
        span.innerHTML = "<p><b>ANJING MEETING 💬</b></p><p>You find yourself in a tense meeting with representatives from another division. During the discussion, the opposing team throws random questions at you.</p><br><p>You are given three possible answers to choose from. <b>There is no absolute right or wrong answer</b> - every choice you make will be countered by the other division.</p><br><p><b>Just like in real meetings, sometimes it doesn’t matter how good your answer is, the other team always has something to say back!</b></p>"
    }break;

    case "clickerGame" :
    {   img.src = "./assets/anjing-kabur.gif"
        span.innerHTML = "<h1>ANJING KABUR 💬</h1><p>You’re racing against a tight work deadline, but your teammates are slacking off again!</p><br><p>Instead of helping, they keep dodging their responsibilities and trying to run away.</p><br><p><b>Your mission: catch and slap those runaway teammates before they escape.</b> Each time you manage to catch one, you’ll score points</p>"
    }break;
    default :
    {   img.src = "./assets/anjing-mikir.gif"
        span.innerHTML = "<h1>ANJING MIKIR 💬</h1><p>You’re facing a boss who never gives clear instructions. Your task is to guess the number by reading between the lines. Every time you make a mistake your chance will decrease and you will be scolded by the boss.</p><br><p>A phone on boss table will rings—it’s a hidden clue from your teammates.</p><p>But be careful: <b>you can only answer it once. If you pick up the phone, you’ll get the clue, but lose one guessing attempt.</b></p><br><p>It’s a battle of patience and intuition : can you read your boss’s mind before your chance runs out?</p>"
    }
}

div2.style.display = "flex"
div2.style.alignItems = "center"
div2.style.justifyContent = "center"
div2.style.gap = "5%"

buttonJunior.textContent = "Junior"
buttonJunior.id = "buttonJunior"

buttonSenior.textContent = "Senior"
buttonSenior.id = "buttonSenior"

header.appendChild(img)
header.appendChild(div)
header.appendChild(span)
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
