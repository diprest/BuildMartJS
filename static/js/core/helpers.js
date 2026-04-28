import { ICONS_PATH } from './constants.js';

export function formatPrice(value) {
  return "$" + value.toFixed(2);
}

export function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

export function safeJsonParse(value, fallback) {
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

export function normalizeText(value) {
  return value.toLowerCase().trim();
}

export function calculateDiscount(total, percent) {
  return total * (percent / 100);
}

export function icon(name, sizeClass) {
  return `<img src="${ICONS_PATH}${name}.svg" alt="" class="icon ${sizeClass || "icon-5"}">`;
}

export function showToast(message, variant) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.toggle("toast--error", variant === "error");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

export function renderStars(rating, sizeClass = "icon-4") {
  let html = '<div class="star-rating">';
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    html += icon("star-full", sizeClass);
  }
  if (hasHalf) {
    html += icon("star-half", sizeClass);
  }
  for (let i = 0; i < emptyStars; i++) {
    html += icon("star-empty", sizeClass);
  }
  html += `<span class="ml-2 text-sm text-gray-600">(${rating.toFixed(1)})</span></div>`;
  return html;
}
