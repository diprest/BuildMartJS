import { formatPrice, icon, renderStars } from '../core/helpers.js';
import { ICONS_PATH } from '../core/constants.js';

export function buildProductDetailHTML(product) {
  const thumbs = product.images.map((img, i) => `
    <button type="button" class="product-gallery-thumb aspect-square rounded-lg overflow-hidden border-2 transition ${i === 0 ? 'border-orange-600' : 'border-gray-200 hover:border-gray-300'}" data-index="${i}">
      <img src="${img}" alt="" class="w-full h-full object-cover">
    </button>
  `).join('');

  const specs = (product.specifications || []).map(({ label, value }) => `
    <div class="flex flex-col space-y-1 pb-4 border-b border-gray-200 last:border-b-0">
      <dt class="text-sm text-gray-500 uppercase tracking-wide">${label}</dt>
      <dd class="text-base font-semibold text-gray-900">${value}</dd>
    </div>
  `).join('');
  const buttonText = 'Add to Cart';
  const buttonClass = 'bg-orange-600 hover:bg-orange-700';

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav class="flex items-center gap-2 text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
        <a class="hover:text-orange-600" href="index.html">Products</a>
        <span>/</span>
        <span class="text-gray-900">${product.name}</span>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div class="product-gallery-container">
          <div class="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img class="product-main-img w-full h-full object-cover" src="${product.images[0]}" alt="${product.name}">
            <button type="button" class="product-gallery-prev absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg">
              <img src="${ICONS_PATH}chevron-left.svg" alt="" class="icon icon-5">
            </button>
            <button type="button" class="product-gallery-next absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg">
              <img src="${ICONS_PATH}chevron-right.svg" alt="" class="icon icon-5">
            </button>
          </div>
          <div class="grid grid-cols-3 gap-3">
            ${thumbs}
          </div>
        </div>

        <div>
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">${product.name}</h1>
          <div class="mb-4">${renderStars(product.rating, "icon-6")}</div>
          <div class="flex items-baseline gap-3 mb-6">
            <span class="text-4xl font-bold text-gray-900">${formatPrice(product.price)}</span>
            <span class="text-gray-500">/unit</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
            <div class="flex items-start gap-3">
              <img src="${ICONS_PATH}package.svg" alt="" class="icon icon-5 flex-shrink-0 mt-0.5">
              <div>
                <p class="font-semibold text-sm">Quality Assured</p>
                <p class="text-xs text-gray-600">Premium grade material</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <img src="${ICONS_PATH}truck.svg" alt="" class="icon icon-5 flex-shrink-0 mt-0.5">
              <div>
                <p class="font-semibold text-sm">Fast Delivery</p>
                <p class="text-xs text-gray-600">2-5 business days</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <img src="${ICONS_PATH}shield.svg" alt="" class="icon icon-5 flex-shrink-0 mt-0.5">
              <div>
                <p class="font-semibold text-sm">Warranty</p>
                <p class="text-xs text-gray-600">30-day guarantee</p>
              </div>
            </div>
          </div>

          <div class="mb-6">
            <label class="block text-sm font-semibold mb-2" for="product-qty-input">Quantity</label>
            <div class="flex items-center gap-3">
              <button type="button" class="product-qty-minus w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 transition">−</button>
              <input id="product-qty-input" type="number" min="1" value="1" class="w-20 h-10 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
              <button type="button" class="product-qty-plus w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 transition">+</button>
            </div>
          </div>

          <button type="button" class="product-add-cart w-full py-4 ${buttonClass} text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition mb-4">
            ${icon("cart-white", "icon-5")} ${buttonText}
          </button>

          <button type="button" class="product-buy-now w-full py-4 border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-semibold rounded-lg transition mb-8">
            Buy Now
          </button>

          <div>
            <h2 class="font-bold text-xl mb-3">Description</h2>
            <p class="text-gray-700 leading-relaxed">${product.description}</p>
          </div>

          <div class="mt-8">
            <div class="accordion-container w-full border border-gray-200 rounded-lg px-6">
              <button type="button" class="accordion-toggle flex w-full flex-1 items-center justify-between gap-4 rounded-md text-left font-bold text-xl py-4 outline-none" aria-expanded="false">
                Technical Specifications
                <img src="${ICONS_PATH}chevron-down.svg" alt="" class="icon icon-4 accordion-chevron flex-shrink-0 transition-transform duration-200">
              </button>
              <div class="accordion-content hidden pb-4 text-sm">
                <div class="bg-gray-50 rounded-lg p-6 mt-2 mb-4">
                  <dl class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    ${specs}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="product-related-section mt-12 mb-8">
        <h2 class="font-bold text-2xl">Related Products</h2>
      </section>
    </div>
  `;
}
