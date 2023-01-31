import { createElem } from "./createElement";

export function createHero() {
  const content = document.querySelector("#content");

  const heroSection = createElem("div", "hero__section");
  const heroContainer = createElem("div", "hero__container");
  const heroTextContainer = createElem("div", "hero__textContainer");
  const heroText = createElem("div", "hero__text");
  const h1 = createElem("h1", "", "Enjoy Your Healthy Delicious Food");
  const buttonCta = createElem("button", "contactBtn", "Book A Table");
  const buttonCta2 = createElem("button", "menuBtn", "View Menu");
  const heroImageContainer = createElem("div", "hero__imgContainer");
  const img = createElem("div", "img");
  const para = createElem("p", "hero__para");
  para.innerHTML = `Sed autem laudantium dolores. Voluptatem itaque ea consequatur
    eveniet.<br />Eum quas beatae cumque eum quaerat.`;

  heroText.appendChild(h1);
  heroText.appendChild(para);
  heroText.appendChild(buttonCta);
  heroText.appendChild(buttonCta2);
  heroTextContainer.appendChild(heroText);
  heroImageContainer.appendChild(img);
  heroContainer.appendChild(heroTextContainer);
  heroContainer.appendChild(heroImageContainer);
  heroSection.appendChild(heroContainer);
  content.appendChild(heroSection);
  console.log("hallo?");
}
