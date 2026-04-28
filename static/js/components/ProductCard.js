import { formatPrice, icon, renderStars } from '../core/helpers.js';

export function renderRelatedCard(product) {
  return `
    <div class="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
      <a href="product.html?id=${product.id}">
        <div class="aspect-square overflow-hidden bg-gray-100">
          <img src="${product.images[0]}" alt="${product.name}"
               class="w-full h-full object-cover">
        </div>
      </a>
      <div class="p-4">
        <a href="product.html?id=${product.id}" class="block no-underline text-gray-900 visited:text-gray-900">
          <h3 class="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition">${product.name}</h3>
        </a>
        ${renderStars(product.rating)}
        <p class="mt-3 text-2xl font-bold text-gray-900">${formatPrice(product.price)}</p>
      </div>
    </div>`;
}

export function renderProductCard(product) {
  return `
    <div class="product-card group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
      <a href="product.html?id=${product.id}">
        <div class="aspect-square overflow-hidden bg-gray-100">
          <img src="${product.images[0]}" alt="${product.name}"
               class="product-image w-full h-full object-cover">
        </div>
      </a>
      <div class="p-4">
        <a href="product.html?id=${product.id}" class="block no-underline text-gray-900 visited:text-gray-900">
          <h3 class="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition">${product.name}</h3>
        </a>
        ${renderStars(product.rating)}
        <p class="mt-3 text-2xl font-bold text-gray-900">${formatPrice(product.price)}</p>
        <p class="text-sm text-gray-500 mt-1">${product.category}</p>
        <button onclick="window.addToCart(${product.id})"
                class="mt-4 w-full py-2 text-sm text-white bg-orange-600 hover:bg-orange-700 font-medium rounded-lg flex items-center justify-center gap-2 transition">
          ${icon("cart-white", "icon-4")} Add to Cart
        </button>
      </div>
    </div>`;
}
