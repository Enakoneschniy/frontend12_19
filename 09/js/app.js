'use strict'
import { Cart, Catalog } from './modules/shop'
const productsContainer = document.querySelector('.product-container');

const catalog = new Catalog()
catalog.loadProducts()
productsContainer.innerHTML = catalog.renderedProducts
