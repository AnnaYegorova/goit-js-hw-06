function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const color = document.querySelector(".color");

changeColorBtn.addEventListener("click", onChangeColor);
function onChangeColor() {
  const colorSpan = getRandomHexColor();
  console.log(getRandomHexColor());
  document.body.style.backgroundColor = colorSpan;
  color.textContent = colorSpan;
}
