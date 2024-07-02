function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const box = document.querySelector("body");
const color = document.querySelector(".color");

btn.addEventListener("click", handleClickColor);

function handleClickColor() {
  const randomColor = getRandomHexColor();
  console.log(randomColor);
  box.style.backgroundColor = randomColor;
  color.textContent = `${randomColor}`;
}
