import { Catalog } from './modules/shop'
import { CartProduct } from './models'
const productsContainer = document.querySelector('.product-container');
const catalog = new Catalog()
productsContainer.innerHTML = catalog.renderedProducts
productsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('buy-btn')) {
    const productId = e.target.getAttribute('data-productid')
    const product = catalog.getProductById(productId)
    window.cart.addProduct(new CartProduct(product))
  }
})
