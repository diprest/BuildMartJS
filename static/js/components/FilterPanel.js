export class FilterPanel {
  constructor(onChangeCallback) {
    this.onChange = onChangeCallback;
    this.priceMin = document.getElementById('price-min');
    this.priceMax = document.getElementById('price-max');
    this.priceMinLabel = document.getElementById('price-min-label');
    this.priceMaxLabel = document.getElementById('price-max-label');
    this.track = document.getElementById('price-track-fill');
    this.init();
  }

  init() {
    if (!this.priceMin || !this.priceMax) return;
    this.priceMin.addEventListener('input', () => this._onChange());
    this.priceMax.addEventListener('input', () => this._onChange());
    this._updateSlider();

    const clearBtn = document.getElementById('clear-filters-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => this.clearAll());
    }
  }

  _onChange() {
    this._updateSlider();
    if (this.onChange) this.onChange();
  }

  _updateSlider() {
    let min = parseInt(this.priceMin.value);
    let max = parseInt(this.priceMax.value);

    if (min > max) {
      [this.priceMin.value, this.priceMax.value] = [max, min];
      min = parseInt(this.priceMin.value);
      max = parseInt(this.priceMax.value);
    }

    const range = 400;
    const leftPercent = ((min - 0) / range) * 100;
    const rightPercent = ((400 - max) / range) * 100;

    if (this.track) {
      this.track.style.left = leftPercent + '%';
      this.track.style.right = rightPercent + '%';
    }
    if (this.priceMinLabel) this.priceMinLabel.textContent = '$' + min;
    if (this.priceMaxLabel) this.priceMaxLabel.textContent = '$' + max;
  }

  getPriceRange() {
    return [
      parseInt(this.priceMin.value),
      parseInt(this.priceMax.value)
    ];
  }

  getRatingFilter() {
    const checked = document.querySelectorAll('.filter-rating:checked');
    if (checked.length === 0) return 0;
    return Math.min(...Array.from(checked).map(cb => parseFloat(cb.value)));
  }

  clearAll() {
    document.querySelectorAll('.filter-rating').forEach(cb => cb.checked = false);
    if (this.priceMin) this.priceMin.value = 0;
    if (this.priceMax) this.priceMax.value = 400;
    this._updateSlider();
    if (this.onChange) this.onChange();
  }
}