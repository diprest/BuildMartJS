import { CartService } from '../services/StorageService.js';

export class Header {
  constructor() {
    this.badges = document.querySelectorAll(".cart-badge");
  }

  updateCartBadge(count) {
    this.badges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? "flex" : "none";
    });
  }
}

window.HeaderInstance = null;

export function getHeader() {
  if (!window.HeaderInstance) {
    window.HeaderInstance = new Header();
  }
  return window.HeaderInstance;
}

export function updateHeaderBadge() {
  const count = CartService.getItemsCount();
  getHeader().updateCartBadge(count);
}