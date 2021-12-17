const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const refList = document.querySelector("#ingredients");
const refElements = ingredients.map((el) => {
  const refEl = document.createElement("li");
  refEl.textContent = el;
  refEl.classList.add("item");
  return refEl;
});

refList.append(...refElements);
