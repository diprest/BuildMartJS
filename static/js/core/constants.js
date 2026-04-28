import { PRODUCTS } from "../data/products.js";

export const ICONS_PATH = "../static/icons/";
export const TAX_RATE = 0.08;
export const PRICE_MIN = 0;
export const PRICE_MAX = Math.ceil(Math.max(...PRODUCTS.map((p) => p.price)));
export const PROMO_SAVE10 = "SAVE10";
export const PROMO_DISCOUNT_RATE = 0.1;
export const STORAGE_CART = "buildmart_cart";
export const STORAGE_PROMO = "buildmart_promo";

export const PAGE_CATALOG = "catalog";
export const PAGE_PRODUCT = "product";
export const PAGE_CART = "cart";

export const SORT_ALPHA_ASC = "alpha-asc";
export const SORT_ALPHA_DESC = "alpha-desc";
export const SORT_PRICE_ASC = "price-asc";
export const SORT_PRICE_DESC = "price-desc";
