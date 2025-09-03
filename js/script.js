const hamburgerOpen = () => {
    let checkBurger = document.getElementById("navMobile");

    if (checkBurger.style.display == "none") {
        document.getElementById("navMobile").style.display = "block";
    } else {
        document.getElementById("navMobile").style.display = "none";
    }
    
}

let clickCount=0;

const dogJump = () => {
    const dogJ = document.getElementById("dogJumpImage");
  
    //reset animation
    dogJ.src = "./assets/anjing-lompat-2.gif";
    dogJ.style.animation = "none";      
    dogJ.offsetHeight; //trigger reflow
    dogJ.style.animation = "anjingJump 0.5s";

    clickCount++;
    //check if clickCount 3, change image and restart clickCount
    if (clickCount == 3) {
        dogJ.src = "./assets/anjing-lompat-1.png";
        clickCount = 0;
    }
}

const dogStressed = () => {
    const dogS = document.getElementById("dogWorkImage");

    dogS.src = "./assets/anjing-kerja-2.png"

    clickCount++;
    //check if clickCount 2, turn image back
    if (clickCount == 2) {
        dogS.src = "./assets/anjing-kerja-1.png";
        clickCount = 0;
    }
}

// const buttonPlayNow = document.getElementById("buttonPlayNow");
