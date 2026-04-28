import { formatPrice, icon } from '../core/helpers.js';
import { CartService } from '../services/StorageService.js';
import { TAX_RATE } from '../core/constants.js';

export class CartSummary {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
  }

  render(subtotal, discount, promoApplied) {
    if (!this.container) return;

    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax - discount;

    const discountRow = discount > 0
      ? `<div class="flex justify-between text-green-700">
          <span>Discount</span><span>−${formatPrice(discount)}</span>
        </div>`
      : '';

    this.container.innerHTML = `
      <h2 class="font-bold text-xl mb-6">Order Summary</h2>
      <div class="space-y-3 mb-6 pb-6 border-b border-gray-200">
        <div class="flex justify-between text-gray-700">
          <span>Subtotal</span><span>${formatPrice(subtotal)}</span>
        </div>
        <div class="flex justify-between text-gray-700">
          <span>Tax (8%)</span><span>${formatPrice(tax)}</span>
        </div>
        ${discountRow}
      </div>
      <div class="flex justify-between items-center mb-6 text-xl font-bold">
        <span>Total</span><span>${formatPrice(total)}</span>
      </div>
      <button onclick="window.handleCheckout()" class="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition mb-4">
        Proceed to Checkout ${icon("arrow-right", "icon-5")}
      </button>
      <a class="block w-full py-3 text-center border border-gray-300 rounded-lg hover:bg-gray-50 transition" href="index.html">Continue Shopping</a>`;
  }
}