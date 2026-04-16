export class App {
  constructor() {
    this.page = this.detectPage();
  }

  init() {
    console.debug('[App] Initialized on page:', this.page);
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