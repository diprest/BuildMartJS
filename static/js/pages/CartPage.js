import { CartService } from '../services/StorageService.js';
import { renderCartItemHTML } from '../components/CartItem.js';
import { CartSummary } from '../components/CartSummary.js';
import { PromoCodeForm } from '../components/PromoCodeForm.js';
import { updateHeaderBadge } from '../components/Header.js';
import { showToast } from '../core/helpers.js';

export class CartPage {
  constructor() {
    this.cartSummary = new CartSummary('#cart-summary');
    this.promoForm = null;
  }

  init() {
    this.promoForm = new PromoCodeForm('#promo-input', '.promo-apply-btn', '#promo-status');

    this.promoForm.onApply = () => this.render();
    this.promoForm.onRemove = () => this.render();

    this.render();
    updateHeaderBadge();
  }

  render() {
    const cart = CartService.getItems();
    const cartItemsEl = document.getElementById('cart-items');
    const cartMainFilled = document.getElementById('cart-main-filled');
    const cartMainEmpty = document.getElementById('cart-main-empty');

    if (cart.length === 0) {
      if (cartItemsEl) cartItemsEl.innerHTML = '';
      if (cartMainFilled) cartMainFilled.classList.add('hidden');
      if (cartMainEmpty) cartMainEmpty.classList.remove('hidden');
      this.promoForm?.syncState();
      return;
    }

    if (cartMainFilled) cartMainFilled.classList.remove('hidden');
    if (cartMainEmpty) cartMainEmpty.classList.add('hidden');

    if (cartItemsEl) {
      cartItemsEl.innerHTML = cart.map(renderCartItemHTML).join('');
    }

    const subtotal = CartService.getSubtotal();
    const discount = this.promoForm?.getDiscount(subtotal) || 0;
    this.cartSummary.render(subtotal, discount);
  }
}

window.handleCheckout = () => {
  showToast('Checkout is not implemented in this prototype');
};