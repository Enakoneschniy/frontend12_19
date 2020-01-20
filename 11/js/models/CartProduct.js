export class CartProduct {
  constructor (product) {
    this.id = product.id
    this.title = product.title
    this.price = product.price
    this.image = product.image
    if(product.hasOwnProperty('quantity')) {
      this.quantity = product.quantity
    } else {
      this.quantity = 1
    }
  }
  get fullPrice() {
    return this.price * this.quantity
  }
}
