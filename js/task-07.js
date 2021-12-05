const textSizeControler = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

textSizeControler.addEventListener(
  "input",
  (event) => (text.style.fontSize = event.currentTarget.value + "px")
);
