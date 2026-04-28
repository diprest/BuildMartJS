import { PromoService } from '../services/StorageService.js';

export class PromoCodeForm {
  constructor(inputSelector, applyBtnSelector, statusSelector) {
    this.input = document.querySelector(inputSelector);
    this.applyBtn = document.querySelector(applyBtnSelector);
    this.status = document.querySelector(statusSelector);
    this.hint = document.querySelector('#promo-hint');
    this.onApply = null;
    this.onRemove = null;
    this.bindEvents();
    this.syncState();
  }

  bindEvents() {
    this.applyBtn?.addEventListener('click', () => this.apply());

    this.input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.apply();
      }
    });

    this.input?.addEventListener('input', () => this.onInputChange());
  }

  onInputChange() {
    const val = this.input.value.trim();
    this._updateHint(val);
  }

  _updateHint(val) {
    if (!this.hint) return;
    const applied = PromoService.getAppliedPromo();
    const isValid = val.length > 0 && PromoService.apply(0, val).applied;
    this.hint.hidden = !!applied || val.length === 0 || isValid;
  }

  apply() {
    const code = this.input?.value.trim() || '';
    if (!code) return;

    const result = PromoService.apply(0, code);
    if (!result.applied) return;

    PromoService.setAppliedPromo(code);

    if (this.status) {
      this.status.textContent = '✓ Promo code applied! You saved 10%';
      this.status.hidden = false;
    }
    if (this.hint) this.hint.hidden = true;

    if (this.onApply) this.onApply();
  }

  syncState() {
    const applied = PromoService.getAppliedPromo();
    const val = this.input?.value.trim() || '';

    if (applied) {
      if (this.input) this.input.value = applied;
      if (this.status) {
        this.status.textContent = '✓ Promo code applied! You saved 10%';
        this.status.hidden = false;
      }
      if (this.hint) this.hint.hidden = true;
    } else {
      if (this.status) this.status.hidden = true;
      this._updateHint(val);
    }
  }

  getDiscount(subtotal) {
    const applied = PromoService.getAppliedPromo();
    if (!applied) return 0;
    const result = PromoService.apply(subtotal, applied);
    return result.applied ? result.discount : 0;
  }
}
