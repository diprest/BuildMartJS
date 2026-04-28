import { PromoService } from '../services/StorageService.js';
import { showToast } from '../core/helpers.js';

export class PromoCodeForm {
  constructor(inputSelector, applyBtnSelector, statusSelector, removeBtnSelector) {
    this.input = document.querySelector(inputSelector);
    this.applyBtn = document.querySelector(applyBtnSelector);
    this.status = document.querySelector(statusSelector);
    this.removeBtn = document.querySelector(removeBtnSelector);
    this.onApply = null;
    this.onRemove = null;
    this.bindEvents();
    this.syncState();
  }

  bindEvents() {
    this.applyBtn?.addEventListener('click', () => this.apply());
    this.removeBtn?.addEventListener('click', () => this.remove());

    this.input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.apply();
      }
    });
  }

  apply() {
    const code = this.input?.value.trim() || '';

    if (!code) {
      return;
    }

    const result = PromoService.apply(0, code);

    if (!result.applied && result.message === 'Invalid promo code') {
      showToast('Invalid promo code', 'error');
      return;
    }

    PromoService.setAppliedPromo(code);
    showToast('Promo code applied — 10% off!');

    if (this.onApply) this.onApply();
    this.syncState();
  }

  remove() {
    PromoService.setAppliedPromo(null);
    if (this.input) this.input.value = '';
    showToast('Promo code removed');
    if (this.onRemove) this.onRemove();
    this.syncState();
  }

  syncState() {
    const applied = PromoService.getAppliedPromo();

    if (applied) {
      if (this.input) this.input.value = applied;
      if (this.status) {
        this.status.textContent = '10% discount applied';
        this.status.className = 'text-sm text-green-600 mt-2';
        this.status.hidden = false;
      }
      if (this.removeBtn) this.removeBtn.hidden = false;
    } else {
      if (this.input) this.input.value = '';
      if (this.status) this.status.hidden = true;
      if (this.removeBtn) this.removeBtn.hidden = true;
    }
  }

  getDiscount(subtotal) {
    const applied = PromoService.getAppliedPromo();
    if (!applied) return 0;
    const result = PromoService.apply(subtotal, applied);
    return result.applied ? result.discount : 0;
  }
}