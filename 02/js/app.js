const a = 2;
const b = -2;
const c = '2.4';

const x = a + b + +c;
console.log(parseFloat(c));
const y = a % 3;
console.log(y);

const square = a ** 2;
console.log(square);

let aa = 2;
console.log(aa++); // 2
console.log(aa); // 3
console.log(++aa); // 4

console.log(aa--); // 4
console.log(aa); // 3
console.log(--aa); // 2
let s = 2,
    d = 4,
    f = 6;
let z = s++ - --d * ++f;
console.log(z); // 20

z += 3; // z = z + 3;

z = (g = 4 + 4, 3 + g);
let g = 44;
console.log(z);
const age = '18';
const status = 'сын депутата';
if (age >= 18 && age < 21) {
    console.log('Можем продать сигареты и пиво!')
} else if (age < 18) {
    if (status === 'сын депутата') {
        console.log('Можем продать сигареты алкоголь!')
    } else {
        console.log('НЕ можем продать сигареты алкоголь!')
    }
} else if ( age >= 21) {
    console.log('Можем продать сигареты алкоголь!')
}
if (age >= 18 || status === 'сын депутата') {
    console.log('Можем продать сигареты алкоголь!')
}



