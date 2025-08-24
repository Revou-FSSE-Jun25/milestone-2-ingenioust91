
let main = document.getElementsByTagName("main")[0];
const mainWidth = main.clientWidth;
const mainHeight = main.clientHeight;

let imgMates = document.createElement("img");
imgMates.style.cursor = "pointer";
imgMates.style.position = "absolute";
imgMates.src = "./assets/anjing-kerja-1.png";

function randomPosition() {
    imgMates.style.width = "20%"
    const imgWidth = imgMates.clientWidth;
    const imgHeight = imgMates.clientHeight;

    const matesXPosition = Math.floor(Math.random() * (mainWidth - imgWidth));
    const matesYPosition = Math.floor(Math.random() * (mainHeight - imgHeight));

    imgMates.style.left = `${matesXPosition}px`;
    imgMates.style.top = `${matesYPosition}px`;
}
imgMates.onload = () => {
randomPosition();}

imgMates.addEventListener("click", randomPosition);

main.appendChild(imgMates);