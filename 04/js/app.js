import { isEven, randomArray } from '../../helperFunctions'

const inputArray = [1, 2, 3, 4, 5, 6];
const outputArray = [];

for(let i = inputArray.length - 1; i >= 0; i -= 2) {
    outputArray.push(inputArray[i - 1], inputArray[i]);
}
const matrix = [];
const n = 10;
for(let i = 0; i < n; i++) {
    matrix[i] = [];
    for(let j = 0; j < n; j++) {
        if(i === j) {
            matrix[i][j] = 1;
        } else if(i === (n - 1) - j) {
            matrix[i][j] = 2;
        } else if(j > i && i < (n - 1) - j) {
            matrix[i][j] = 3;
        } else if(j < i && i < (n - 1) - j) {
            matrix[i][j] = 6;
        } else if(j > i && i > (n - 1) - j) {
            matrix[i][j] = 4;
        } else if(j < i && i > (n - 1) - j) {
            matrix[i][j] = 5;
        }
    }
}
// console.log(matrix);

const arr = [1, 2, 3, 4];

let [a, b, ...c] = arr;
console.log(a, b, c);
const array = [1, 2, ...c, ...arr];
console.log(array);
[a, b] = [b, a];
// randomArray();

const rndArr = randomArray();
console.log('Random array 1: ', rndArr);
console.log('Random array 2: ', randomArray(3));
console.log('Random array 3: ', randomArray(4));

function sum2(a, b = 2) {
    return a + b;
}
function sum_mult(a, b = 2) {
    return [a + b, a * b];
}
const [s, m] = sum_mult(3);
console.log(s, m);


function sumAll(...args) {
    let sum = 0;
    for(const arg of args) {
        sum += arg;
    }
    return sum;
}

console.log(sumAll(1, 2, 3, 4));

const sum3 = function (a, b, c) {
    return a + b + c;
};
console.log(sum3(1, 2, 3));

function testCb(a, b, cbFn) {
    cbFn(a + b);
}
function cbFunction (res) {
    console.log('CB:', res);
}
testCb(1, 2, cbFunction);
testCb(1, 2, function (res) {
    console.log('CB2:', res * 2);
});
console.log(rndArr);

rndArr.forEach(function (item) {
    console.log(`${item}`)
});

/*const newRndArray = rndArr.map(function(item) {
    return item ** 2;
});
console.log(newRndArray);*/
const newRndArray = rndArr.map(item => item ** 2);
console.log(newRndArray);

const newRndArray1 = newRndArray.filter(item => item % 2 === 0);
console.log(newRndArray1);

const sumArray = rndArr
    .map(item => item ** 2)
    .filter(isEven)
    .reduce((sum, item) => sum + item, 0);

console.log('sumArray', sumArray);
function sumAllR(...args) {
    return args.reduce((sum, item) => sum + item, 0);
}


console.log(sumAllR(1, 2, 3, 4, 5));


const testArrowFunc = (a, b) => a + b;
const increment = a => a + 1;

const res = [[1, 2, 3], [4, 5], [6]]
    .reduce((resArr, itemArr) => resArr.concat(itemArr), [])
    .reduce((sum, item) => sum + item, 0);

console.log(res);
