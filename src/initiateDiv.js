import { createElem } from "./createElement";

export function initiateDiv() {
  const content = createElem("div");
  content.setAttribute("id", "content");
  document.body.appendChild(content);
}
