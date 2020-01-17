import { Product } from '../../models'

export class Catalog {
  #products = []

  constructor () {
    this.loadProducts()
  }

  loadProducts() {
    const catalogJson = window.localStorage.getItem('catalog')
    if(!!catalogJson) {
      this.#products = JSON.parse(catalogJson)
      .map(p => new Product(p.title, p.price, p.image, p.id))
    } else {
      for(let i = 0; i < 20; i++) {
        const price = Math.round(Math.random() * 5000)
        this.#products.push(
        new Product(`Product ${i + 1}`, price, 'https://via.placeholder.com/200'),
        )
      }
      window.localStorage.setItem('catalog', JSON.stringify(this.#products))
    }

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
