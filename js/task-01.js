const refList = document.querySelectorAll(".item");
console.log("Number of categories: ", refList.length);

const refTitle = document.querySelectorAll(".item h2").forEach((el) => {
  console.log("Categoty:", el.textContent);
  console.log("Elements:", el.nextElementSibling.children.length);
});
