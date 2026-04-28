import { formatPrice, icon } from '../core/helpers.js';

export function renderCartItemHTML(item) {
  return `
    <div class="p-4 md:p-6" data-cart-item="${item.id}">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <div class="md:col-span-6 flex gap-4">
          <a class="flex-shrink-0" href="product.html?id=${item.id}">
            <img src="${item.image}" alt="${item.name}" class="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg">
          </a>
          <div class="flex-1">
            <a class="font-semibold text-gray-900 hover:text-orange-600 transition" href="product.html?id=${item.id}">${item.name}</a>
            <p class="text-sm text-gray-600 mt-1">${item.subtitle}</p>
            <button onclick="window.handleRemove(${item.id})" class="md:hidden flex items-center gap-1 text-sm text-red-600 hover:text-red-700 mt-2">
              ${icon("trash", "icon-4")} Remove
            </button>
          </div>
        </div>
        <div class="md:col-span-2 md:text-center">
          <span class="md:hidden text-sm text-gray-600">Price: </span>
          <span class="font-semibold">${formatPrice(item.price)}</span>
        </div>
        <div class="md:col-span-2 flex justify-start md:justify-center">
          <div class="flex items-center gap-2 border border-gray-300 rounded-lg">
            <button class="qty-btn" onclick="window.handleQuantity(${item.id}, -1)">${icon("minus", "icon-4")}</button>
            <span class="w-12 text-center font-semibold">${item.quantity}</span>
            <button class="qty-btn" onclick="window.handleQuantity(${item.id}, 1)">${icon("plus", "icon-4")}</button>
          </div>
        </div>
        <div class="md:col-span-2 flex justify-between md:justify-end items-center">
          <span class="md:hidden text-sm text-gray-600">Total: </span>
          <span class="font-bold text-lg">${formatPrice(item.price * item.quantity)}</span>
          <button onclick="window.handleRemove(${item.id})" class="hidden md:block ml-4 text-red-600 hover:text-red-700 transition">
            ${icon("trash", "icon-5")}
          </button>
        </div>
      </div>
    </div>`;
}