let bossNumber = Math.floor(Math.random() * 100) + 1;
document.getElementById("coba").innerHTML = bossNumber;

function guessNumber() {
    let dogNumber = document.getElementById("dogNumber").value;

    if (bossNumber > dogNumber) {
        document.getElementById("bossText").innerHTML = "too low"
    }
    else if (bossNumber < dogNumber) {
        document.getElementById("bossText").innerHTML = "too high"
    }
    else document.getElementById("bossText").innerHTML = "right"
}