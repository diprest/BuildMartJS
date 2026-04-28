import { HomePage } from '../pages/HomePage.js';
import { ProductPage } from '../pages/ProductPage.js';
import { CartPage } from '../pages/CartPage.js';
import { ProductService, CartService } from '../services/StorageService.js';
import { updateHeaderBadge } from '../components/Header.js';
import { showToast } from '../core/helpers.js';

export class App {
  constructor() {
    this.page = this.detectPage();
  }

  init() {
    if (this.page === 'catalog') {
      const homePage = new HomePage();
      homePage.init();
    }

    if (this.page === 'product') {
      const productPage = new ProductPage();
      productPage.init();
    }

    if (this.page === 'cart') {
      const cartPage = new CartPage();
      cartPage.init();
    }

    this.wireGlobalFunctions();
    updateHeaderBadge();
  }

  wireGlobalFunctions() {
    window.addToCart = (productId) => {
      const product = ProductService.getById(productId);
      if (!product) return;
      CartService.addItem(product, 1);
      showToast(`${product.name} added to cart!`);
      updateHeaderBadge();
    };

    window.handleQuantity = (productId, delta) => {
      const cart = CartService.getItems();
      const item = cart.find(i => i.id === productId);
      if (!item) return;
      const newQty = item.quantity + delta;
      if (newQty <= 0) {
        CartService.removeItem(productId);
      } else {
        CartService.updateQuantity(productId, newQty);
      }
      if (this.page === 'cart') {
        window.renderCartPageFn && window.renderCartPageFn();
      }
      updateHeaderBadge();
    };

    window.handleRemove = (productId) => {
      CartService.removeItem(productId);
      if (this.page === 'cart') {
        window.renderCartPageFn && window.renderCartPageFn();
      }
      updateHeaderBadge();
    };

    window.toggleMobileMenu = () => {
      const menu = document.getElementById("mobile-menu");
      if (menu) menu.classList.toggle("active");
      const mobileSearch = document.getElementById("mobile-search-panel");
      if (mobileSearch) mobileSearch.classList.remove("active");
    };

    window.toggleMobileSearch = () => {
      const panel = document.getElementById("mobile-search-panel");
      if (panel) panel.classList.toggle("active");
      const menu = document.getElementById("mobile-menu");
      if (menu) menu.classList.remove("active");
    };

    window.toggleFilters = () => {
      const panel = document.getElementById("filter-panel");
      const btn = document.getElementById("filter-toggle-btn");
      if (panel) {
        panel.classList.toggle("active");
        if (btn) {
          const isActive = panel.classList.contains("active");
          const iconPath = "../../static/icons/sliders.svg";
          btn.innerHTML = `<img src="${iconPath}" alt="" class="icon icon-4"> ${isActive ? "Hide Filters" : "Show Filters"}`;
        }
      }
    };

    window.renderCartPageFn = () => {
      if (this.page === 'cart') {
        const cartPage = new CartPage();
        cartPage.init();
      }
    };
  }

  detectPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';

    if (filename === 'product.html') return 'product';
    if (filename === 'cart.html') return 'cart';
    if (filename === 'index.html' || filename === '') return 'catalog';
    return 'unknown';
  }
}