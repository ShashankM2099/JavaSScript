"use strict";
console.log("9" - "5");
// JS does automatic type conversion
console.log("19" - "13" + "17");
console.log("123" < 57);

// Part two functions
//. Write a function called 'describeCountry' which takes three parameters:
//'country', 'population' and 'capitalCity'. Based on this input, the
//function returns a string with this format: 'Finland has 6 million people and its
//capital city is Helsinki'
var describeCountry = (country, population, capitalCity) => {
  // arrow function higher order function
  //using literal format to enter the strings
  return `${country} has ${population} and its capital city is ${capitalCity}`;
};
console.log(describeCountry("Helsinki", 123132, "Finland"));

function percentageOfWorld(population) {
  // making a function
  return (population / 7900) * 100;
}
//Functions calling other functions
const describePopulation = (country, population) => {
  const percentage = percentageOfWorld(population);
  const description = `${country} has ${population} million ppl which is about ${percentage}% about the world.`;
  console.log(description);
};

//calling the function
describePopulation("Portugal", 1441);

// Intro to Arrays : can store any values of fixed size
var populations = [12312, 13229, 767555, 78675123];
populations.forEach((each) => {
  console.log(`percentage of world is ${percentageOfWorld(each)}`); // literal format
});

console.log(populations.length === 4);

//Basic Array operations
let neighors = ["Europe", "Vinland", "Norway", "Londen"];
neighors.push("Utopia"); // push adds to the end of the array
neighors.pop(neighors[3]);
console.log(neighors); // can use a forEach to loop and it looks cool too
if (!neighors.includes("Germany")) {
  console.log("Probably not a central country");
}

//object creation
let myCountry = {
  country: "Norse",
  capital: "Norway",
  Language: "Danish",
  population: 150_000_000,
  neighbors: "Lunden",
  describe: function () {
    console.log(``);
  },
};

//objects are not iterable...only can be iterable using for...in loop
//using Object.methods
let countryArr = Object.entries(myCountry);
console.log(countryArr);

//Looping thru Arrays
//var populations = [12312, 13229, 767555, 78675123]; copied statement
let percentageArr2 = [];
for (var i = 0; i < populations.length; i++) {
  const changes = percentageOfWorld(populations[i]);
  percentageArr2.push(changes);
}
console.log("New Arrays:", percentageArr2);

//Can we use the forEach loop?
let newArr3 = [];
populations.forEach((e) => {
  newArr3.push(percentageOfWorld[e]);
});
console.log("New Array 2:", newArr3);

//Try using the while-loop
let newArr4 = [];
let k = 0;
while (k < populations.length) {
  const newChanges = percentageOfWorld(populations[k]);
  newArr4.push(newChanges);
  k++;
}
console.log("New Array 4", newArr4);
