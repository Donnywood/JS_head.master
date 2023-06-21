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


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  let str = '';
  arr.length === 0 ? (str = 'Нет доступных валют') : (str = 'Доступные валюты:\n');

  arr.forEach(function (curr, i) {
    if (curr !== missingCurr) {
      str += `${curr}\n`;
    }
  });

  return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));