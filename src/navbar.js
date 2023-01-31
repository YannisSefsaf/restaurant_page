import { createHero } from "./home";
import { createMenu } from "./menu";
import { createElem } from "./createElement";

export function createNavBar() {
  const header = createElem("header");
  const headContainer = createElem("div", "head__container");
  const navContainer = createElem("div", "nav__container");
  const logo = createElem("img", "logo", "", "logo_toks.png");
  const navBar = createElem("nav", "nav__bar");
  const navCta = createElem("nav", "nav__cta", "Sign in");
  const navLinks = createElem("ul", "nav__links");
  const nav_item1 = createElem("li", "nav__item", "Home");
  nav_item1.classList.add("nav__item1");
  const nav_item2 = createElem("li", "nav__item", "Menu");
  nav_item2.classList.add("nav__item2");
  const nav_item3 = createElem("li", "nav__item", "Contact");
  nav_item3.classList.add("nav__item3");

  navLinks.appendChild(nav_item1);
  navLinks.appendChild(nav_item2);
  navLinks.appendChild(nav_item3);
  navBar.appendChild(navLinks);
  navContainer.appendChild(logo);
  navContainer.appendChild(navBar);
  navContainer.appendChild(navCta);
  headContainer.appendChild(navContainer);
  header.appendChild(headContainer);
  document.body.appendChild(header);
}
