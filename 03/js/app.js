const dayNum = 3;
switch (dayNum) {
    case 1:
        console.log('Понедельник');
        break;
    case 2:
        console.log('Вторник');
        break;
    default:
        console.log('Дргугой день');
}

// так писать плохо!!!!!
switch (true) {
    case (dayNum === 1):
        console.log('Понедельник');
        break;
    case (dayNum === 2):
        console.log('Вторник');
        break;
    default:
        console.log('Дргугой день');
}
console.log('----------------------');

let num = 1;
console.log('--------- while ---------');
while (num <= 10) {
    console.log(num++);
}
console.log('--------- do while ---------');
num = 1;
do {
    console.log(num++);
} while (num <= 10);
console.log('--------- while(true) ---------');
while (true) {
    const n = Math.random();
    console.log(n);
    if (n > .5) {
        break;
    }
}

console.log('--------- while continue ---------');
num = 1;
while (num <= 10) {
    if (num % 2 === 0) {
        num++;
        continue;
    }
    console.log(num++);
}

console.log('--------- for ---------');

for (let num = 1, n = 2; num <= 12; num++, n += 2) {
    console.log(num, n);
}

for (let num = 2; num <= 9; num++) {
    for (let n = 2; n <= 9; n++) {
        console.log(num * n);
    }
}


/*let x, y;

do {
    x = parseFloat(prompt('Enter X:', ''));
    if (isNaN(x)) {
        alert('Input error!')
    }
} while (isNaN(x));

console.log(`X = ${x}`);
do {
    y = parseFloat(prompt('Enter Y:', ''));
    if (isNaN(y)) {
        alert('Input error!')
    }
} while (isNaN(y));

console.log(`Y = ${y}`);*/


console.log('--------------------------');


const arrNums = [1, 2, 3, 4, 5];
console.log(arrNums);

console.log('Length', arrNums.length);
console.log('elem index 2', arrNums[2]);
arrNums[2] = 44;
console.log('elem index 2', arrNums[2]);
arrNums.length = 0;
console.log(arrNums);
arrNums[arrNums.length] = 44;
arrNums[arrNums.length] = 45;
console.log(arrNums);
arrNums.push(67);
console.log(arrNums);
arrNums.unshift(77);
console.log(arrNums);
const lastElement = arrNums.pop();
console.log(arrNums, lastElement);

console.log('--------------------');

const firstElement = arrNums.shift();
console.log(arrNums, firstElement);
arrNums.push(2, 3, 4, 5);

const nArray = arrNums.slice(1, 4);
console.log(arrNums, nArray);

console.log('---------------');

const nnArray = arrNums.splice(1, 2, 3333);
console.log(arrNums, nnArray);

let arrNums1 = [1, 2, 3, 4];
arrNums1 = arrNums1.concat([11, 22, 33], 555);
console.log(arrNums1);

const days = [
  'Понедельник',
  'Вторник',
  'Среда'
];
console.log('---------- for ----------');
for (let index = 0; index < days.length; index++) {
    console.log(days[index])
}

console.log('---------- for of ----------');
for (const day of days) {
    console.log(day)
}

console.log('---------- for in ----------');
for (const index in days) {
    console.log(days[index])
}

console.log('---------- for in change array ----------');
for (const index in days) {
    days[index] += ` index(${index})`
}
console.log(days);

const matrix = [
    [1, 2, 3],
    [11, 22, 33],
    [111, 222, 333]
];
console.log(matrix);
console.log(matrix[2][1]);

console.log('-----------------');

for(const row of matrix) {
    console.log(row);
    for(const cell of row) {
        console.log(cell);
    }
}
const isAuth = false;
if (!isAuth) {
    // some code
} else {
    // some code
}




