import { ProductService, CartService } from '../services/StorageService.js';
import { buildProductDetailHTML } from '../components/ProductDetails.js';
import { renderRelatedCard } from '../components/ProductCard.js';
import { ImageSlider } from '../components/ImageSlider.js';
import { Accordion } from '../components/Accordion.js';
import { getQueryParam } from '../core/helpers.js';
import { updateHeaderBadge } from '../components/Header.js';
import { showToast } from '../core/helpers.js';

export class ProductPage {
  constructor() {
    this.product = null;
  }

  init() {
    const root = document.getElementById('product-page-root');
    if (!root) return;

    const id = parseInt(getQueryParam('id'), 10);
    this.product = ProductService.getById(id);

    if (!this.product) {
      root.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 class="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <p class="text-gray-600 mb-8">This product does not exist or was removed.</p>
          <a href="index.html" class="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition">Back to Products</a>
        </div>`;
      document.title = 'Product not found - BuildMart';
      return;
    }

    document.title = `${this.product.name} - BuildMart`;

    root.innerHTML = buildProductDetailHTML(this.product);

    const galleryContainer = root.querySelector('.product-gallery-container');
    if (galleryContainer) {
      new ImageSlider(galleryContainer, this.product.images);
    }

    const accordionContainer = root.querySelector('.accordion-container');
    if (accordionContainer) {
      new Accordion(accordionContainer);
    }

    this.wireQuantity();
    this.wireAddToCart();
    this.wireBuyNow();
    this.renderRelated(root);

    updateHeaderBadge();
  }

  renderRelated(root) {
    const ids = this.product.relatedProductIds;
    if (!ids || ids.length === 0) return;
    const section = root.querySelector('.product-related-section');
    if (!section) return;
    const related = ids.map(id => ProductService.getById(id)).filter(Boolean);
    if (related.length === 0) return;
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-2 md:grid-cols-4 gap-4 mt-4';
    grid.innerHTML = related.map(p => renderRelatedCard(p)).join('');
    section.appendChild(grid);
  }

  wireQuantity() {
    const root = document.getElementById('product-page-root');
    const qtyInput = root.querySelector('#product-qty-input');

    root.querySelector('.product-qty-minus')?.addEventListener('click', () => {
      const v = Math.max(1, (parseInt(qtyInput.value, 10) || 1) - 1);
      qtyInput.value = String(v);
    });

    root.querySelector('.product-qty-plus')?.addEventListener('click', () => {
      qtyInput.value = String((parseInt(qtyInput.value, 10) || 1) + 1);
    });
  }

  wireAddToCart() {
    const root = document.getElementById('product-page-root');
    const qtyInput = root.querySelector('#product-qty-input');
    const addBtn = root.querySelector('.product-add-cart');

    addBtn?.addEventListener('click', () => {
      const qty = Math.max(1, parseInt(qtyInput?.value, 10) || 1);
      CartService.addItem(this.product, qty);
      showToast(`Added ${this.product.name} to cart`);
      updateHeaderBadge();
    });
  }

  wireBuyNow() {
    const root = document.getElementById('product-page-root');
    const qtyInput = root.querySelector('#product-qty-input');
    const buyBtn = root.querySelector('.product-buy-now');

    buyBtn?.addEventListener('click', () => {
      const qty = Math.max(1, parseInt(qtyInput?.value, 10) || 1);
      CartService.addItem(this.product, qty);
      updateHeaderBadge();
      window.location.href = 'cart.html';
    });
  }
}
