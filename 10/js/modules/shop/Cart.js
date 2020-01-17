import { CartProduct } from '../../models'

export class Cart {
  #products = [] // product = { price, quantity, ... }
  #events = {}

  constructor () {
    this.#products = loadCart()
  }
  on(eventName, listener) {
    if(!this.#events.hasOwnProperty(eventName)) {
      this.#events[eventName] = [listener]
    } else {
      this.#events[eventName].push(listener)
    }
  }
  addProduct(product) {
    const productIndex = this.#products.findIndex(p => p.id === product.id)
    if(productIndex === -1) {
      this.#products.push(product)
      if(this.#events.hasOwnProperty('add')) {
        this.#events.add.forEach(listener => listener(this.renderedSmallCart))
      }
    } else {
      this.#products[productIndex].quantity += 1
      if(this.#events.hasOwnProperty('remove')) {
        this.#events.remove.forEach(listener => listener(this.renderedSmallCart))
      }
    }
    saveCart(this.#products)
  }
  removeProduct(id) {
    const productIndex = this.#products.findIndex(p => p.id === id)
    this.#products.splice(productIndex, 1)
    if(this.#events.hasOwnProperty('remove')) {
      this.#events.remove.forEach(listener => listener(this.renderedSmallCart))
    }
    saveCart(this.#products)
  }
  proceedToCheckout() {

  }
  changeQuantity(productId, operation) {
    const productIndex = this.#products.findIndex(p => p.id === productId)
    if(operation === 'plus') {
      this.#products[productIndex].quantity += 1
    } else {
      if(this.#products[productIndex].quantity > 1) {
        this.#products[productIndex].quantity -= 1
      }
    }
    if(this.#events.hasOwnProperty('quantityChange')) {
      this.#events.quantityChange.forEach(listener => listener())
    }
    saveCart(this.#products)
  }
  get totalPrice() {
    return this.#products.reduce((s, p) => s + (p.price * p.quantity), 0)
  }
  get quantity() {
    return this.#products.reduce((s, p) => s + p.quantity, 0)
  }
  get products() {
    return this.#products
  }
  get events() {
    return this.#events
  }
  get renderedSmallCart() {
    return `<a href="/10/cart.html"><strong>Cart:</strong>(${this.quantity} products, amount: ${this.totalPrice}UAH)</a>`
  }
  get renderedCart() {
    return this.#products.reduce((html, p) => html + `
    <section class="cart-item">
      <div class="image">
        <img src="${p.image}" alt="">
      </div>
      <div class="cart-product-info">
        <h3 class="cart-product-title">${p.title}</h3>
        <div data-productid="${p.id}">
          <button class="minus-btn">-</button>
          <input type="number" value="${p.quantity}" readonly>
          <button class="plus-btn">+</button>
        </div>
        <strong>Price: ${p.fullPrice}UAH</strong>
        <div class="remove-btn-container">
          <button data-productid="${p.id}" class="remove-btn">x</button>
        </div>
      </div>
    </section>
    `, '')
  }
}
function saveCart(products) {
  window.localStorage.setItem('cart', JSON.stringify(products))
}
function loadCart() {
  const jsonProducts = window.localStorage.getItem('cart')
  if(!!jsonProducts) {
    const products = JSON.parse(jsonProducts)
    return products.map(product => new CartProduct(product))
  }
  return []
}
