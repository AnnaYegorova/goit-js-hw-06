const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const refList = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i += 1) {
  const refEl = document.createElement("li");
  refEl.textContent = ingredients[i];
  refEl.classList.add("item");
  refList.append(refEl);
}
