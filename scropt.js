function sayHello(name) {
    return 'Привет, ${name}!';
}

sayHello('Alex');



































// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log(' Ready!');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola === 1 && fries)

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && '12312');

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Ready!');
// } else {
//     console.log('Idzemy!');
// }

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Ready!');
} else {
    console.log('Idzemy!');
}

let johnReport, alexReport, samReport, mariaReport ='done';
console.log (johnReport || alexReport || samReport || mariaReport);