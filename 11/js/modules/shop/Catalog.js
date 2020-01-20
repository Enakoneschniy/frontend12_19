import { Product } from '../../models'

export class Catalog {
  #products = []

  async loadProducts() {
    this.#products = (await (await fetch('http://localhost:8080/products'))
    .json())
    .map(p => new Product(p.title, p.price, p.image, p.id))
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
