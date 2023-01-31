import "./style.css";
import Icon from "./hero-img.png";
import { createNavBar } from "./navbar";
import { createMenu } from "./menu";
import { createHero } from "./home";
import { initiateDiv } from "./initiateDiv";
import { createContactPage } from "./contact";

createNavBar();
initiateDiv();
createHero();

let content = document.querySelector("#content");
let home = document.querySelector(".nav__item1");
let menu = document.querySelector(".nav__item2");
let contact = document.querySelector(".nav__item3");
let heroSection = document.querySelector(".hero__section");
let menuSection = document.querySelector(".menu");
let contactSection = document.querySelector(".contact");

home.addEventListener("click", () => {
  content.innerHTML = "";
  createHero();
});

menu.addEventListener("click", () => {
  content.innerHTML = "";
  createMenu();
});

contact.addEventListener("click", () => {
  content.innerHTML = "";
  createContactPage();
});
