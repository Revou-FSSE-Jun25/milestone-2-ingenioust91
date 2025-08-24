let bossNumber = Math.floor(Math.random() * 100) + 1;
let bossText = document.getElementById("bossText");
let bossImage = document.getElementById("bossImage");
document.getElementById("coba").innerHTML = bossNumber;
let dogNumber = document.getElementById("dogNumber");
dogNumber.value = "";

dogNumber.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        guessNumber();
    }
})

function guessNumber() {
    const getRandomLine = (array) => {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
    }

    let line = ""
    let ChangeimageBoss;

    if (bossNumber > dogNumber.value) {
        line = getRandomLine(tooLow);
        ChangeimageBoss = getRandomLine(imgStillFalse);
    }
    else if (bossNumber < dogNumber.value) {
        line = getRandomLine(tooHigh);
        ChangeimageBoss = getRandomLine(imgStillFalse);
    }
    else {
        line = getRandomLine(right);
        ChangeimageBoss = getRandomLine(imgRight);
    }

    bossText.textContent = line;
    bossImage.src = ChangeimageBoss;
}

function validateInput() {
    let input = document.getElementById("dogNumber").value;
    let numberInput = parseInt(input.trim())

    if (isNaN(numberInput)) {
        document.getElementById("dogNumber").value = "";
    }

    if (numberInput > 100) {
        bossText.textContent = "I said between 1 to 100!";
    }
}

const tooLow = [
    "Too low! Come on, that's not complicated",
    "That’s under my number. I don't like it.",
    "Not enough. Revise your guess."
]

const tooHigh = [
    "Above my number. Don't tell me you can't handle this",
    "That’s more than what I had in mind. Try again.",
    "Nope, that’s too much. Revise it."
]

const right = [
    "Finally. I know my instructions are clear.",
    "Good. But I expect faster.",
    "OK."
]

const imgStillFalse = [
    "./assets/boss-mikir-false-1.png",
    "./assets/boss-mikir-false-2.png",
    "./assets/boss-mikir-false-3.png",
    "./assets/boss-mikir-false-4.png"
]


const imgRight = [
    "./assets/boss-mikir-right-1.png",
    "./assets/boss-mikir-right-2.png"
]
