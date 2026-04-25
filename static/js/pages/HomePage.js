import { ProductService } from '../services/StorageService.js';
import { ProductList } from '../components/ProductList.js';
import { FilterPanel } from '../components/FilterPanel.js';
import { updateHeaderBadge } from '../components/Header.js';

export class HomePage {
  constructor() {
    this.productList = new ProductList('#product-grid');
    this.sortBy = 'alpha-asc';
    this.searchTerm = '';
    this.filterPanel = null;
  }

  init() {
    this.filterPanel = new FilterPanel(() => this.refresh());

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', () => {
        this.sortBy = sortSelect.value;
        this.refresh();
      });
    }

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        this.searchTerm = searchInput.value;
        this.refresh();
      });
    }

    const mobileSearchInput = document.getElementById('mobile-search-input');
    if (mobileSearchInput) {
      mobileSearchInput.addEventListener('input', () => {
        this.searchTerm = mobileSearchInput.value;
        this.refresh();
      });
    }

    document.querySelectorAll('.filter-rating').forEach(cb => {
      cb.addEventListener('change', () => this.refresh());
    });

    this.refresh();
    updateHeaderBadge();
  }

  refresh() {
    let products = ProductService.search(this.searchTerm);

    const [priceMin, priceMax] = this.filterPanel ? this.filterPanel.getPriceRange() : [0, 400];
    const minRating = this.filterPanel ? this.filterPanel.getRatingFilter() : 0;

    products = ProductService.filter(products, {
      minPrice: priceMin,
      maxPrice: priceMax,
      minRating: minRating
    });

    products = ProductService.sort(products, this.sortBy);

    this.productList.render(products);

    const countEl = document.getElementById('product-count');
    if (countEl) {
      countEl.textContent = `Showing ${products.length} product${products.length !== 1 ? 's' : ''}`;
    }
  }
}