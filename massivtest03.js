const someString = 'This is some strange string';

const reversedString = reverse(someString);
function reverse(str) {
    if (typeof str !== 'string') {
        return "Ошибка";
    }
    return str.split('').reverse().join('');
}

reverse(someString);
console.log(reversedString);


