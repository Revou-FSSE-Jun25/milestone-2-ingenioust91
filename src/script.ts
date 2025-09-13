const hamburgerIcon = document.getElementById("hamburgerIcon") as HTMLImageElement;

hamburgerIcon.addEventListener("click", function():void  {
    const checkBurger : HTMLElement = document.getElementById("navMobile")!;

    if (checkBurger.style.display == "none") {
        checkBurger.style.display = "block";
    } else {
        checkBurger.style.display = "none";
    }
    
})

let clickCount:number = 0;
const dogJ = document.getElementById("dogJumpImage") as HTMLImageElement;
dogJ.addEventListener("click", function():void {
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
})

const dogS = document.getElementById("dogWorkImage") as HTMLImageElement;
dogS.addEventListener("dblclick", function():void {
   

    dogS.src = "./assets/anjing-kerja-2.png"

    clickCount++;
    //check if clickCount 2, turn image back
    if (clickCount == 2) {
        dogS.src = "./assets/anjing-kerja-1.png";
        clickCount = 0;
    }
})

// const buttonPlayNow = document.getElementById("buttonPlayNow");
