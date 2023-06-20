const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
   if (family.length === 0) {
    return 'Семья пуста';
   } else {
    return 'Семья состоит из: ' + family.join(' ');
   }
    
}
console.log(family);

const favoriteCities = ['LiSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let lowercaseStrings = [];
    
    arr.forEach(function(string)
}