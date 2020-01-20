const cartContainer = document.querySelector('.cart-container')
const cartTotal = document.querySelector('.total-price')

cartContainer.innerHTML = window.cart.renderedCart
cartTotal.innerHTML = `${window.cart.totalPrice}UAH`
window.cart.on('quantityChange', () => {
  cartContainer.innerHTML = window.cart.renderedCart;
  cartTotal.innerHTML = `${window.cart.totalPrice}UAH`
})
window.cart.on('remove', () => {
  cartContainer.innerHTML = window.cart.renderedCart;
  cartTotal.innerHTML = `${window.cart.totalPrice}UAH`
})

cartContainer.addEventListener('click', (e) => {
  if (
  e.target.classList.contains('minus-btn') ||
  e.target.classList.contains('plus-btn')
  ) {
    const productId = e.target.parentElement.getAttribute('data-productid')
    window.cart.changeQuantity(
    productId,
    e.target.classList.contains('plus-btn') ? 'plus' : 'minus'
    )
  } else if(e.target.classList.contains('remove-btn')) {
    const productId = e.target.getAttribute('data-productid')
    window.cart.removeProduct(productId)
  }
})
