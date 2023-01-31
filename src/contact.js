import { createElem } from "./createElement";

function createCard(imgUrl, title, details, i) {
  let newCard = createElem("div", "contactCard");
  let intraGrid = createElem("div", "intra__grid");
  let icon = createElem("img", "icon");
  icon.src = imgUrl;
  let innerText = createElem("div", "inner__text");
  let cardTitle = createElem("h2", "contactCard__title");
  cardTitle.classList.add(`title${i}`);
  let cardDetails = createElem("p", "contactCard__title");
  cardDetails.classList.add(`details${i}`);

  if (title) {
    cardTitle.textContent = `${title}`;
  }
  if (details) {
    cardDetails.textContent = `${details}`;
  }

  innerText.appendChild(cardTitle);
  innerText.appendChild(cardDetails);
  intraGrid.appendChild(icon);
  intraGrid.appendChild(innerText);
  newCard.appendChild(intraGrid);

  return newCard;
}

function createForm() {
  let newFormDiv = createElem("div", "contact__form");
  let newForm = createElem("form");
  let formGrid = createElem("div", "form__grid");
  let grid1 = createElem("div", "grid_name");
  let grid2 = createElem("div", "grid_email");
  let grid3 = createElem("div", "grid_subject");
  let grid4 = createElem("div", "grid_textarea");
  let input1 = createElem("input");
  input1.placeholder = "Your Name";
  let input2 = createElem("input");
  input2.placeholder = "Your Email";
  let input3 = createElem("input");
  input3.placeholder = "Subject";
  let input4 = createElem("textarea");
  input4.placeholder = "Message";
  let button = createElem("button", "contactBtn", "Send Message");

  grid1.appendChild(input1);
  grid2.appendChild(input2);
  grid3.appendChild(input3);
  grid4.appendChild(input4);

  formGrid.appendChild(grid1);
  formGrid.appendChild(grid2);
  formGrid.appendChild(grid3);
  formGrid.appendChild(grid4);

  newForm.appendChild(formGrid);
  newForm.appendChild(button);

  newFormDiv.appendChild(newForm);

  return newFormDiv;
}

export function createContactPage() {
  const content = document.querySelector("#content");

  const contact = createElem("div", "contact");
  const sectionTitle = createElem("h1", "section__title", "Contact Us");
  const contactGrid = createElem("div", "contact__grid");

  for (let i = 1; i <= 4; i++) {
    let newCard = createCard(`../src/${i}.png`, "", "", `${i}`);
    contactGrid.append(newCard);
  }

  contact.appendChild(sectionTitle);
  contact.appendChild(contactGrid);
  contact.appendChild(createForm());
  content.append(contact);

  let title1 = document.querySelector(".title1");
  let title2 = document.querySelector(".title2");
  let title3 = document.querySelector(".title3");
  let title4 = document.querySelector(".title4");

  title1.textContent = "Our Address";
  title2.textContent = "Email Us";
  title3.textContent = "Call Us";
  title4.textContent = "Opening Hours";

  let details1 = document.querySelector(".details1");
  let details2 = document.querySelector(".details2");
  let details3 = document.querySelector(".details3");
  let details4 = document.querySelector(".details4");

  details1.textContent = "A108 Adam Street, New York, NY 535022";
  details2.textContent = "contact@example.com";
  details3.textContent = "+1 5589 55488 55";
  details4.innerHTML = `<strong style="font-weight:bold">Mon-Sat:</strong> 11AM - 23PM</strong>;<br><strong style="font-weight:bold">Sunday:</strong> Closed`;
}
