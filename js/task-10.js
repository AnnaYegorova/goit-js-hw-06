function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

input.addEventListener("input", onInputClick);
createBtn.addEventListener("click", onCreateBoxes);
destroyBtn.addEventListener("click", ondestroyBoxes);

function onInputClick(event) {
  inputValue = event.currentTarget.value;
  console.log(inputValue);
}

let inputValue = 0;
let width = 30;
let height = 30;
function onCreateBoxes() {
  for (let i = 1; i <= inputValue; i += 1) {
    boxes.insertAdjacentHTML(
      "beforeend",
      `<div style="width: ${width}px; height: ${height}px; 
      background-color: ${getRandomHexColor()};"></div>`
    );
    width += 10;
    height += 10;
  }
}
function ondestroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
  width = 30;
  height = 30;
}
