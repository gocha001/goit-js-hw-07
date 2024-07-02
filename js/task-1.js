const items = document.querySelectorAll(".item");
console.log(`Number of categories : ${items.length}`);

const titles = document.querySelectorAll("h2");

const animals = document.querySelectorAll(".animals>li");
const products = document.querySelectorAll(".products>li");
const technologies = document.querySelectorAll(".technologies>li");
const value = [animals.length, products.length, technologies.length];

titles.forEach((title, index) => {
  console.log(`Category : ${title.textContent}`);
  console.log(`Elements : ${value[index]}`);
});
