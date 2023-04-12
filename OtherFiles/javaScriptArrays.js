"use strict";

/**
 * Return the first element of an array
 * by passing a param n with the elements in the array
 */

var firstElement = (array, n) => {
  if (array == null) {
    return void 0;
  } else if (n == null) {
    return array[0];
  } else if (n < 0) {
    return [];
  }
  return array.slice(0, n);
};

console.log(firstElement([7, 9, 0, 2, 2]));

// another way of declaring arrow functions and adding multiple params
var lastElement = (array) => (n) => {
  if (array == null) {
    return void 0;
  } else if (n == null) {
    return array[array.length - 1];
  }
  return array.slice(Math.max(array.length - n, 0));
};

//printing the result
console.log(lastElement([11, 22, 33, 12321, -1231, -90]));

/**
 * Takes in an array and returns the most common element in the array
 * @param {*} array
 */
var mostCommon = (array = []) => {
  var mf = 1;
  var m = 0;
  var item;
  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (array[i] == array[j]) {
        m += 1;
      } else if (mf < m) {
        mf = m;
        item = array[i];
      }
    }
    m = 0;
  }
};
var test_array = [1, 2, 22, 22, 2, 2, 2, 3, 4, 5, 6]; // need to work on displaying the results
console.log(mostCommon(test_array));

var sortArrat = (array = []) => {
  return array.sort(function (a, b) {
    return a - b; // another way to sort out the array
  }); // why isnt this working?
};

console.log("Sorted Array: " + sortArrat(test_array));
// join elements into an array
test_array.push(55);
console.log(test_array);

console.log("new Array");
test_array.forEach((e) => {
  // forEach loop to loop thru easily
  console.log((e * 2).toString);
});

//pushing elements
test_array.push(666);
/**
 * Push adds at the end
 * Pop removes at the end of the array
 * Mapping as well creates new without altering the old
 */
test_array.pop();

//Mapping
const newArrMapped = test_array.map((e) => {
  console.log(e * 2);
});
console.log(test_array.toString);

/**
 * Sorting the JSON objects using .sort()
 */

const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];
const sorted = cars.sort(function (a, b) {
  cars.sort(function (a, b) {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });

  return a.year - b.year;
});
//sorted the function
console.log(sorted);

//trying the filter function
let newArr = [11, 22, 33, 444, 55, 66, 77, 88, 99];
const newFilterArr = newArr.filter(function (value, index, array) {
  return value > 10;
});
console.log(newFilterArr);

//trying the reduce function
let sum = newArr.reduce(function (total, value) {
  return total + value;
});
console.log(`Sum is ${sum}`);
