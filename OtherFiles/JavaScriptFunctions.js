"use strict";

// create a function to reverse a number/string
var reverseStringNumber = function (n) {
  n += "";
  var splitString = n.split("").reverse().join("");
  var palindrome = n == splitString ? true : false; // ternary function
  console.log(palindrome);
  return n.split("").reverse().join("");
};
console.log(reverseStringNumber(12213));

//write a JS function to sort in Alpha order
var sortInOrder = (str) => {
  var sortedInOrder = str.split("").sort().join("");
  return sortedInOrder;
};
console.log(sortInOrder("webmaster"));
