const body = document.querySelector("body");

const IMG_NUMBER = 4;

function paintImg(imgNumber) {
  const image = new Image();
  image.src = `image/1 (${imgNumber}).jpg`;
  body.appendChild(image);
  image.classList.add("bg");
}

function gendomNumber() {
  const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
  return number;
}

function init() {
  const randomNumber = gendomNumber();
  paintImg(randomNumber);
}

init();
