export function createElem(type, cls, text, source) {
  const elem = document.createElement(type);
  if (cls) {
    elem.classList.add(cls);
  }
  if (text) {
    elem.textContent = text;
  }
  if (source) {
    elem.src = `../src/${source}`;
  }
  return elem;
}
