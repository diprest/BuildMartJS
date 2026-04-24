import { ProductService } from '../services/StorageService.js';
import { ProductList } from '../components/ProductList.js';
import { updateHeaderBadge } from '../components/Header.js';

export class HomePage {
  constructor() {
    this.productList = new ProductList('#product-grid');
  }

  init() {
    const products = ProductService.getAll();
    this.productList.render(products);
    updateHeaderBadge();
  }
}