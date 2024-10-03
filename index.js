// Given an array of names of people but mixing lower case and upper case letters, you will have to:
// - Create a function that contains the logic to refactor those names so it converts a name like `anTHoNY` to `Anthony`.
// - A function that accepts two parameters: an array and a callback function that is in charge of refactoring all items inside that array
// - Return the original array but with all names properly typed

// Séparer chaque lettre du tableau
//condition si autres que [0] === uppercase alors lowercase et si [0] est lower alors upper

let people = [
  "JoHn",
  "ChrISTiana",
  "anThoNY",
  "MARia",
  "jaMeS",
  "MIChaEl",
  "jeNNIFeR",
];

function correctName(people, callback) {
  for (let i = 0; i < people.length; i++) {
    let peopleUpper = people[i].toUppercase;
    let peopleLower;
    peopleLower = people[i].toUppercase;
    let correctPeople = callback(peopleUpper, peopleLower);
    people[i] = correctPeople;
  }
  return people;
}

function fixName(peopleUpper, peopleLower) {
  return peopleUpper.charAt[0] + peopleLower.slice[1];
}

correctName(people, fixName);
