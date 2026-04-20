export function qs(selector, root = document) {
  return root.querySelector(selector);
}

export function qsa(selector, root = document) {
  return root.querySelectorAll(selector);
}

export function on(element, event, handler) {
  element.addEventListener(event, handler);
}

export function createElement(tag, className) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  return el;
}