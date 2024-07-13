// storage/cart.js
import Cookies from 'js-cookie';

const CART_COOKIE_NAME = 'rainyItems';

/**
 * Adds a product to the cart and stores it in localStorage and cookies.
 * @param {Object} product - The product object to add to the cart.
 * @param {string} size - The selected size of the product.
 */
export function addToCart(product, size) {
  const cartItem = { ...product, size };
  const cart = getCart();
  cart.push(cartItem);
  localStorage.setItem(CART_COOKIE_NAME, JSON.stringify(cart));
  Cookies.set(CART_COOKIE_NAME, JSON.stringify(cart));
}

/**
 * Removes a product from the cart based on its index.
 * @param {number} index - The index of the item to remove from the cart.
 */
export function removeFromCart(index) {
  const cart = getCart();
  if (index >= 0 && index < cart.length) {
    cart.splice(index, 1); // Remove 1 item at index
    localStorage.setItem(CART_COOKIE_NAME, JSON.stringify(cart));
    Cookies.set(CART_COOKIE_NAME, JSON.stringify(cart));
  }
}

/**
 * Gets the current cart items from localStorage.
 * @returns {Array} The current cart items.
 */
export function getCart() {
  const cart = localStorage.getItem(CART_COOKIE_NAME);
  return cart ? JSON.parse(cart) : [];
}

/**
 * Checks if the cart contains items.
 * @returns {boolean} True if the cart contains items, otherwise false.
 */
export function hasCartItems() {
  const cart = getCart();
  return cart.length > 0;
}
