const ingredientsList = document.querySelector("#ingredients");
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsItem = document.createElement("li");

const listContent = ingredients
  .map((ingredient) => `<li>${ingredient}</li>`)
  .join("");
console.log(listContent);
ingredientsItem.insertAdjacentHTML("beforeend", listContent);

ingredientsList.append(ingredientsItem);
