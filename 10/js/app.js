'use strict'
import { Cart } from './modules/shop'
import { CartProduct } from './models'
// Containers
window.smallCartContainer = document.querySelector('.small-cart');
// Containers

// Main
window.cart = new Cart()
// catalog.loadProducts()
smallCartContainer.innerHTML = cart.renderedSmallCart

// Main

// Events
cart.on('add', (html) => {
  smallCartContainer.innerHTML = html;
})
cart.on('remove', (html) => {
  smallCartContainer.innerHTML = html;
})
cart.on('quantityChange', () => {
  smallCartContainer.innerHTML = cart.renderedSmallCart;
})
// Events
