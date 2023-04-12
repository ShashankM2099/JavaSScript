//Using sets
const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

orderSet.add(55);
orderSet.add(66);
console.log(orderSet); // set doesnt allow any duplicates
orderSet.forEach((e) => {
  console.log(e);
});

// //Using the for of Loop
for (const orders of orderSet) {
  console.log(orders);
}
//to convert to an array we use the spread operator
const toArray = [...new Set(orderSet)];
toArray.forEach((e) => {
  console.log(e);
});
console.log(toArray);

//Using Maps
// To map values to keys
/**
 * Map uses .set() command to add with a key:value pair to add new elements
 */
const newMap = new Map();
newMap.set("name", "Ezio").set(1, "Firenze Italy").set(2, "Santa Barbara");
newMap.forEach((e) => {
  console.log(e);
});

//Coding Challenge #3
//Use and sets and maps
// 90 min game
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

//1. Print out the array with no duplicates
const events = new Set(gameEvents.values());
events.forEach((e) => {
  console.log(e);
});

//2. Delete out the Yellow card
gameEvents.delete(64);
console.log(gameEvents);

//. Print out the average
console.log(`A game event happened every ${90 / gameEvents.size} minutes`);
