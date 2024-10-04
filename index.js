// Given an array of names of people but mixing lower case and upper case letters, you will have to:
// - Create a function that contains the logic to refactor those names so it converts a name like `anTHoNY` to `Anthony`.
// - A function that accepts two parameters: an array and a callback function that is in charge of refactoring all items inside that array
// - Return the original array but with all names properly typed

// Séparer chaque lettre du tableau
//condition si autres que [0] === uppercase alors lowercase et si [0] est lower alors upper

const people = [
  "JoHn",
  "ChrISTiana",
  "anThoNY",
  "MARia",
  "jaMeS",
  "MIChaEl",
  "jeNNIFeR",
];

function prenom(array) {
  return array.charAt(0).toUpperCase() + array.slice(1).toLowerCase();
}

function fixPrenom(arrayPrenom, callback) {
  for (let i = 0; i < arrayPrenom.length; i++) {
    arrayPrenom[i] = callback(arrayPrenom[i]);
  }
  return arrayPrenom;
}

console.log(fixPrenom(people, prenom));
