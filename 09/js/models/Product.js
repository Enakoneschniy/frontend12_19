import uuid from 'uuid/v4'

export class Product {
  constructor (title, price, image) {
    this.id = uuid()
    this.title = title
    this.price = price
    this.image = image
  }
  get render() {
    return `
    <section class="product-item">
        <img src="${this.image}" alt="${this.title}">
        <h1 class="product-title">${this.title}</h1>
        <div class="product-info">
            <span>
                <strong>${this.price} UAH</strong>
            </span>
                <span>
                <button class="buy-btn" data-productid="${this.id}">Buy</button>
            </span>
        </div>
    </section>
    `
  }
}
