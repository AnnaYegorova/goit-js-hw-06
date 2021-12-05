const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  if (input.value.trim() === "") {
    return (output.textContent = "Anonymous");
  } else {
    return (output.textContent = event.currentTarget.value.trim());
  }
});
