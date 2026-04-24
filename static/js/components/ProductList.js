import { renderProductCard } from './ProductCard.js';

export class ProductList {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
  }

  render(products) {
    if (!this.container) return;
    this.container.innerHTML = products.map(renderProductCard).join('');
  }
}