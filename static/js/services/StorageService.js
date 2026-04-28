import { STORAGE_CART, STORAGE_PROMO } from '../core/constants.js';
import { PRODUCTS } from '../data/products.js';

export class StorageService {
  static get(key, fallbackValue) {
    try {
      const v = localStorage.getItem(key);
      return v !== null ? JSON.parse(v) : fallbackValue;
    } catch {
      return fallbackValue;
    }
  }

  static set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static remove(key) {
    localStorage.removeItem(key);
  }

  static clear() {
    localStorage.clear();
  }
}

export class ProductService {
  static getAll() {
    return [...PRODUCTS];
  }

  static getById(id) {
    return PRODUCTS.find(p => p.id === id);
  }

  static getByCategory(category) {
    return PRODUCTS.filter(p => p.category === category);
  }

  static getCategories() {
    return [...new Set(PRODUCTS.map(p => p.category))];
  }

  static getMaxPrice() {
    return Math.max(...PRODUCTS.map(p => p.price));
  }

  static search(query) {
    if (!query) return this.getAll();
    const term = query.toLowerCase();
    return PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term)
    );
  }

  static filter(products, filters) {
    let result = [...products];

    if (filters.minPrice !== undefined) {
      result = result.filter(p => p.price >= filters.minPrice);
    }

    if (filters.maxPrice !== undefined) {
      result = result.filter(p => p.price <= filters.maxPrice);
    }

    if (filters.minRating !== undefined && filters.minRating > 0) {
      result = result.filter(p => p.rating >= filters.minRating);
    }

    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }

    return result;
  }

  static sort(products, sortType) {
    const sorted = [...products];
    switch (sortType) {
      case 'alpha-asc':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'alpha-desc':
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
    }
    return sorted;
  }
}

export class CartService {
  static getItems() {
    return StorageService.get(STORAGE_CART, []);
  }

  static addItem(product, quantity = 1) {
    const cart = this.getItems();
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        subtitle: product.category,
        image: product.images[0],
        quantity: quantity,
      });
    }

    StorageService.set(STORAGE_CART, cart);
    return cart;
  }

  static removeItem(productId) {
    const cart = this.getItems().filter(item => item.id !== productId);
    StorageService.set(STORAGE_CART, cart);
    return cart;
  }

  static updateQuantity(productId, quantity) {
    const cart = this.getItems();
    const item = cart.find(i => i.id === productId);

    if (!item) return cart;

    if (quantity <= 0) {
      return this.removeItem(productId);
    }

    item.quantity = quantity;
    StorageService.set(STORAGE_CART, cart);
    return cart;
  }

  static clear() {
    StorageService.remove(STORAGE_CART);
  }

  static hasItem(productId) {
    return this.getItems().some(item => item.id === productId);
  }

  static getItemSubtotal(item) {
    return item.price * item.quantity;
  }

  static getSubtotal() {
    return this.getItems().reduce((sum, item) => sum + this.getItemSubtotal(item), 0);
  }

  static getItemsCount() {
    return this.getItems().reduce((sum, item) => sum + item.quantity, 0);
  }
}

export class PromoService {
  static validate(code) {
    if (!code || code.trim() === '') {
      return { valid: false, message: '' };
    }
    return { valid: true, code: code.trim().toUpperCase() };
  }

  static apply(total, code) {
    const validation = this.validate(code);

    if (!validation.valid) {
      return { applied: false, discount: 0, total: total, message: '' };
    }

    if (validation.code !== 'BUILD10') {
      return { applied: false, discount: 0, total: total, message: 'Invalid promo code' };
    }

    const discount = total * 0.1;
    return {
      applied: true,
      discount: discount,
      total: total - discount,
      message: ''
    };
  }

  static getAppliedPromo() {
    return StorageService.get(STORAGE_PROMO, null);
  }

  static setAppliedPromo(code) {
    if (code) {
      StorageService.set(STORAGE_PROMO, code);
    } else {
      StorageService.remove(STORAGE_PROMO);
    }
  }
}
