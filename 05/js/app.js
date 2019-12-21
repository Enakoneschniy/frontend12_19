'use strict';
/*const m = (function (message) {
  return message
})('Test message')
console.log(m)*/

function counter () {
  let number = 1;
  const x = 5 + 8;

  return function () {
    return number++;
  }
}
const cnt = counter()
console.log(cnt())
console.log(cnt())
console.log(cnt())


function factorial (n) {
  if (n === 1) {
    return 1;
  }
  return  n * factorial(n - 1);
}

console.log(factorial(5))


/*function a () {
  // b()
}
function b () {
  // a()
}

a()*/



function testCtx (a, b) {
  console.log(this, a, b)
}
testCtx()
const array = [1, 2, 3, 4];
const user = {
  name: 'Vasya',
  email: 'vasya@gmail.com',
  'test key': 'blabla',
  age: 27,
  friends: [
    {
      name: 'ss'
    }
  ],
  showName() {
    array.forEach((item) => {
      console.log(item * this.age)
    })
    console.log(`My name is ${this.name}`)
  }
};
console.log(user)
console.log(user.name)
// user.name = 'dsdd'
console.log(user.name)
console.log(user['test key'])
user.showName()

testCtx.call("hello", 2, 3)
testCtx.apply("hello", [2, 3])

const newTestCtx = testCtx.bind("hello")
newTestCtx(2, 3)

const { email, name, ...otherUserFields } = user;
console.log(otherUserFields)

function sumMult ({ a, b }) {
  return {
    sum: a + b,
    mult: a * b
  }
}

const { sum: s, mult } = sumMult({ a: 3, b: 4 })
console.log(s, mult)

const news = [
  {
    id: 1,
    title: 'some title 1',
    text: 'some text 1'
  },
  {
    id: 2,
    title: 'some title 2',
    text: 'some text 2'
  }
]

console.log(news.find(item => item.id === 2))
const index = news.findIndex(item => item.id === 2)
news.splice(index, 1, {
  id: 2,
  title: 'some title 3',
  text: 'some text 4'
})
console.log(news)

console.log(Object.keys(user))
console.log(Object.values(user))
/*const newUser = Object.assign({}, user,  {
  id: 2,
  title: 'some title 3',
  text: 'some text 4'
})*/
const newUser = {...user,  ...news[1]}

console.log(newUser)
console.log(user)

let fruit = "apple"

let bag = {
  [fruit]: 5, // имя свойства будет взято из переменной fruit
};
/*let bag = {
 apple: 5,
};*/
bag.orange = 6;
console.log( bag ); // 5, если fruit="apple"

function makeUser(name, age) {
  return {
    name,
    age,
    toString() {
      return `
        <p><strong>name:</strong> ${this.name}</p>
        <p><strong>age:</strong> ${this.age}</p>
      `;
    }
  };
}
const u = makeUser('Petya', 44);
console.log(u)
Object.defineProperty(u, 'email', {
  value: 'petya@gmail.com',
  writable: false,
  configurable: false,
  enumerable: false,
})
console.log(u)
console.log(Object.keys(u))

//u.email = 'dddd'
console.log(u)
const fUser = Object.freeze(u)
console.log(fUser)
// fUser.name = 'ddd'
// delete u.email

for (const key of ["test", "name"])  {
   if (u.hasOwnProperty(key)) {
    console.log(u[key])
   }
}
// alert(u)

const userTag = document.getElementById('user')
const newsTag = document.getElementById('news')

userTag.innerHTML += u
newsTag.innerHTML = getNewsHtml(news);
console.log(getNewsHtml(news))

function getNewsHtml (news) {
  return news.reduce((html, newsItem) => html + `
    <li>
        <h3>${newsItem.title}</h3>
        <p>${newsItem.text}</p>
    </li>
  `, '')
}




