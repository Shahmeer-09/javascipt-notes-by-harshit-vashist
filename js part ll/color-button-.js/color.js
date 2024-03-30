const mainButton = document.querySelector("button");
const currentColor = document.querySelector(".current-color");
const body = document.body;
function randomColorGenerator() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const changecolor = `rgb(${red}, ${green}, ${blue})`;
  return changecolor;
}

mainButton.addEventListener("click", () => {
  const random = randomColorGenerator();
  currentColor.textContent = random;
  body.style.background = random;
});
