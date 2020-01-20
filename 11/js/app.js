'use strict'
import { Cart } from './modules/shop'
import { CartProduct } from './models'
// Containers
window.smallCartContainer = document.querySelector('.small-cart');
// Containers

// Main
window.cart = new Cart()
// catalog.loadProducts()
smallCartContainer.innerHTML = cart.renderedSmallCart

// Main

// Events
cart.on('add', (html) => {
  smallCartContainer.innerHTML = html;
})
cart.on('remove', (html) => {
  smallCartContainer.innerHTML = html;
})
cart.on('quantityChange', () => {
  smallCartContainer.innerHTML = cart.renderedSmallCart;
})
// Events



function installWin (diskNum, cbFn) {
  const time = Math.round(Math.random() * 5000)
  console.log(`Installing windows from disk ${diskNum}`)
  setTimeout(() => {
    console.log(`Installing complete!`)
    cbFn(diskNum + 1)
  }, time)
}

function getDisk (diskNum, cbFn) {
  const time = Math.round(Math.random() * 5000)
  console.log(`Please insert disk ${diskNum}`)
  setTimeout(() => {
    cbFn(diskNum)
  }, time)
}
function main () {
  getDisk(1, function (diskNum) {
    installWin(diskNum, function (nextDiskNum) {
      getDisk(nextDiskNum, function (diskNum) {
        installWin(diskNum, function (nextDiskNum) {
          getDisk(nextDiskNum, function (diskNum) {
            installWin(diskNum, function (nextDiskNum) {
              getDisk(nextDiskNum, function (diskNum) {
                installWin(diskNum, function (nextDiskNum) {
                  console.log('Install complete')
                })
              })
            })
          })
        })
      })
    })
  })
}
// main()
function installWinPromise (diskNum) {
  return new Promise(resolve => {
    const time = Math.round(Math.random() * 5000)
    console.log(`Installing windows from disk ${diskNum}`)
    setTimeout(() => {
      console.log(`Installing complete!`)
      resolve(diskNum + 1)
    }, time)
  })
}

function getDiskPromise (diskNum) {
  return new Promise(resolve => {
    const time = Math.round(Math.random() * 5000)
    console.log(`Please insert disk ${diskNum}`)
    setTimeout(() => {
      resolve(diskNum)
    }, time)
  })
}
async function testAsync () {
  return 24
}
function testPromise () {
  return new Promise(resolve => {
    resolve(24)
  })
}
async function mainPromise () {
  let diskNum = await getDiskPromise(1)
  diskNum = await installWinPromise(diskNum)
  diskNum = await getDiskPromise(diskNum)
  diskNum = await installWinPromise(diskNum)
  diskNum = await getDiskPromise(diskNum)
  diskNum = await installWinPromise(diskNum)
  diskNum = await getDiskPromise(diskNum)
  await installWinPromise(diskNum)
  console.log('Install complete')



  /*.then(function (diskNum) {
    return installWinPromise(diskNum)
  })
  .then(nextDiskNum => getDiskPromise(nextDiskNum))
  .then(diskNum => installWinPromise(diskNum))
  .then(nextDiskNum => getDiskPromise(nextDiskNum))
  .then(diskNum => installWinPromise(diskNum))
  .then(nextDiskNum => getDiskPromise(nextDiskNum))
  .then(diskNum => installWinPromise(diskNum))
  .then(() => console.log('Install complete'))
  .catch(error => console.error(error))*/
}

mainPromise()

function request({url, method}, data = {}) {
  // Значения по умолчанию обозначены знаком *
  return fetch(url, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
  })
  .then(response => response.json()); // парсит JSON ответ в Javascript объект
}
(async () => {
  try {
    /*const product = await request({
      url: 'http://localhost:8080/products/2',
      method: 'PUT'
    }, {
        title: 'asjhfdgjfkhfsj fsdgfhkn',
    })*/
  } catch (e) {
    console.log(e)
  }
})()



/*fetch('https://jsonplaceholder.typicode.com/todos')
 .then(response => response.json())
 .then(json => console.log(json))*/



