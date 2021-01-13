const bg = document.querySelector("body");

const IMG_NUMBER = 5;

function printImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  bg.prepend(image);
}

function getRandom(){
    const Ran = Math.floor(Math.random() * IMG_NUMBER);
    return Ran;
}

function start(){
    const randomNumber = getRandom();
    printImage(randomNumber);
}

start();

