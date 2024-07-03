function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxArea = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  const inputValue = inputNumber.value;
  if (inputValue < 1 || inputValue > 100) {
    alert(`Enter a value between 1 and 100`);
  } else {
    let boxed = "";
    let boxSize = 30;
    for (let i = 0; i < inputValue; i += 1) {
      const randomColor = getRandomHexColor();
      boxed += `<div style="width: ${boxSize}px; height: ${boxSize}px; 
    background-color:${randomColor};"></div>`;
      boxSize += 10;
    }
    boxArea.innerHTML = boxed;
    inputNumber.value = "";
  }
}

function destroyBoxes() {
  boxArea.innerHTML = "";
}
