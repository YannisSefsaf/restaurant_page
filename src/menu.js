import { createElem } from "./createElement";

function createCard(img, name, ings, px) {
  let newCard = createElem("div", "card__menuItem");
  let image = createElem("img", "", "", `${img}`);
  let title = createElem("h2", "title", `${name}`);
  let ingredients = createElem("p", "ingredients", `${ings}`);
  let price = createElem("h2", "price", `${px}`);

  newCard.appendChild(image);
  newCard.appendChild(title);
  newCard.appendChild(ingredients);
  newCard.appendChild(price);

  return newCard;
}

export function createMenu() {
  const content = document.querySelector("#content");
  const menu = createElem("div", "menu");
  const menuTitle = createElem("h1", "section__title", "Our Menu");
  const grid = createElem("div", "grid");
  const card = createElem("div", "card__menuItem");

  for (let i = 1; i <= 6; i++) {
    let product = createCard(
      `../src/menu-item-${i}.png`,
      "Magnum Boss",
      "Lorem, suko, kalo, kali",
      "$5.95"
    );
    grid.appendChild(product);
  }

  menu.appendChild(menuTitle);
  menu.appendChild(grid);
  content.appendChild(menu);

  let menuSection = document.querySelector(".menu");
}
