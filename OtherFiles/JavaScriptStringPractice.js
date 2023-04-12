//Practicing string in JS
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

//🔴 Delayed Departure from FAO to TXL (11h25)
// Arrival from BRU to FAO (11h45)
//🔴 Delayed Arrival from HEL to FAO (12h05)
//Departure from FAO to LIS (12h30)

//simplfied version of trim and upperCase
//First Class Functions
const getCode = (str) => {
  str.slice(0, 3).toUpperCase();
};

for (const flight of flights.split("+")) {
  //console.log(flight);
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} ${from.slice(0, 3).toUpperCase()} ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(":", " h")})`.padStart(36); // makes sure every string is 36 in length
  console.log(output);
}

//Functions returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

//calling the function
greet("Hello")("Venom");

//Trying in Arrow function
const greetArr = (greeting) => (name) => {
  console.log(`${greeting} ${name}`);
};

greetArr("Hi")("Eddie");

//Immidiately Invoked Function Expressions
(function () {
  console.log("IIFE Function");
})();

let movements = [200, 450, -400, 4000, 3000, -650, 130, 70, 1300];
console.log("For Each Loop");
movements.forEach((e) => {
  e > 0 ? console.log(` You deposited ${e}`) : console.log(`You withdrew ${e}`);
});

// Creating a new Map
console.log("For each using maps/sets");
const currencies = new Map([
  ["USD", "United States Dolllar"],
  ["EU", "European Dollar"],
  ["SD", "Singapore Dollar"],
  ["DR", "Dubai Real"],
]);

//For Each Loop using a Map
console.log("For Each loop for Map");
currencies.forEach((country, currency) => {
  console.log(`Country is ${country}, and currency is ${currency}`);
});

console.log("Set ForEach");
// Creating a new Set and using forEach
const newCurrencies = new Set([
  "USD",
  "DBR",
  "USD",
  "EU",
  "GBP",
  "GBP",
  "SDR",
  "SDR",
]);

//Looping in the forEach
newCurrencies.forEach((k, e) => {
  console.log(`Currency is ${k} : ${e}`);
});
