function hamburgerOpen() {
    let checkBurger = document.getElementById("navMobile");

    if (checkBurger.style.display == "none") {
        document.getElementById("navMobile").style.display = "block";
    } else {
        document.getElementById("navMobile").style.display = "none";
    }
    
}

let clickCount=0;

function anjingJump() {
    const anjingJ = document.getElementById("anjingJumpImage");
  
    //reset animation
    anjingJ.src = "./assets/anjing-lompat-2.gif";
    anjingJ.style.animation = "none";      
    anjingJ.offsetHeight; //trigger reflow
    anjingJ.style.animation = "anjingJump 0.5s";

    clickCount++;
    //check if clickCount 3, change image and restart clickCount
    if (clickCount == 3) {
        anjingJ.src = "./assets/anjing-lompat-1.png";
        clickCount = 0;
    }
}

function anjingStressed() {
    const anjingS = document.getElementById("anjingWorkImage");

    anjingS.src = "./assets/anjing-kerja-2.png"

    clickCount++;
    //check if clickCount 2, turn image back
    if (clickCount == 2) {
        anjingS.src = "./assets/anjing-kerja-1.png";
        clickCount = 0;
    }
}

const buttonPlayNow = document.getElementById("buttonPlayNow");
