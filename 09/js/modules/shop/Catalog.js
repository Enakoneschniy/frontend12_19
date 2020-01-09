import { Product } from '../../models'

export class Catalog {
  #products = []
  loadProducts() {
    for(let i = 0; i < 20; i++) {
      const price = Math.round(Math.random() * 5000)
      this.#products.push(
        new Product(`Product ${i + 1}`, price, 'https://via.placeholder.com/200'),
      )
    }
    console.log(this.#products)
  }
  getProductById(id) {
    return this.#products.find(p => p.id === id)
  }
  get products() {
    return this.#products
  }
  get renderedProducts() {
    return this.#products.reduce((html, p) => html + p.render, '')
  }
}
