const items = document.querySelectorAll(".item");
console.log(`Number of categories : ${items.length}`);

items.forEach((item) => {
  const category = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("ul li").length;
  console.log(`Category : ${category}`);
  console.log(`Elements : ${elements}`);
});
