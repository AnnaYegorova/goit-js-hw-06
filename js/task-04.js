const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  counterValue: document.querySelector("#value"),
};
let value = 0;
const changeValue = (step) => {
  value = value + step;
  refs.counterValue.textContent = value;
};

refs.decrementBtn.addEventListener("click", () => changeValue(-1));
refs.incrementBtn.addEventListener("click", () => changeValue(1));
