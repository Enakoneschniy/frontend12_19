'use strict';
const appContainer = document.getElementById('app')
const newsContainer = document.createElement('ul')
console.log(newsContainer)
appContainer.appendChild(newsContainer)
const arrColors = [
'red', 'green', 'blue', 'yellow', 'purple', 'orange'
];

/*const intervalId = setInterval(() => {
  const index = Math.round(Math.random() * arrColors.length)
  document.body.style.background = arrColors[index]
}, 200)

setTimeout(() => {
  clearInterval(intervalId)
  document.body.style.background = 'white'
}, 10000);*/
let timeoutId;
function main() {
  timeoutId = setTimeout(() => {
    alert('Купи Шубу!')
    clearTimeout(timeoutId)
    main();
  }, Math.round(Math.random() * 5000))
}
/*const str = prompt('Enter text')
eval(str)*/
// main()
document.querySelector('.add-btn')
.addEventListener('click', () => {
  document.querySelector('.container')
  .innerHTML +='\n<button class="btn">Button</button>'
})
const helloBtn = document.querySelector('.hello-btn')
helloBtn.addEventListener('click', (e) => {
  console.log(e)
  console.log(this)
})
const container = document.querySelector('.container')
const test = document.querySelector('.test')

container.addEventListener('click', (e) => {
  e.stopPropagation()
 if(e.target.classList.contains('btn')) {
   alert('click')
 }
})
test.addEventListener('click', (e) => {
 console.log('TEST')
})
const cart = []
const products = [
  {
    id: 1,
    name: 'Iphone X',
    price: 100
  },
  {
    id: 2,
    name: 'Iphone XS',
    price: 1000
  },
  {
    id: 3,
    name: 'Iphone XR',
    price: 1010
  }
]
function getProductsHtml (products) {
  return products.reduce((html, product) => html + `
    <li>
      <strong>${product.name}:</strong> ${product.price}USD
      <button class="buy-btn" data-productid="${product.id}">Buy</button>
    </li>
  ` ,'')
}
const productsContainer = document.getElementById('products')
productsContainer.innerHTML = getProductsHtml(products)


productsContainer.addEventListener('click', (e) => {
  const target = e.target;
  if(target.classList.contains('buy-btn')) {
    const productId = target.getAttribute('data-productid')
    const product = products.find(product => product.id === +productId)
   // console.log(product)
    cart.push(product);
    console.log(cart)
  }
})

const googleLink = document.getElementById('google-link')
googleLink.addEventListener('click', (e) => {
  e.preventDefault()
  location.href = 'https://bing.com'
})

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('SUBMIT')
})


// helloBtn.removeEventListener('click', main)
