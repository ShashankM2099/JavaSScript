"use strict";

// to create a object
let person = {};
// prop: value

person = {
  name: "John",
  age: 32,
  partTime: "Teacher",
  worksStatus: true,
};
console.log(person);

// Higher order functions
let fn = function function1() {
  console.log("This function works!!");
};

fn();
console.log(showMessage("Jackson"));
function showMessage(thisMessage) {
  console.log(thisMessage);
}

showMessage();
function getValue(value) {
  let code = 42;
  return code * value;
}

console.log(getValue(55));

let add = function addNumbers(num1, num2) {
  return num1 + num2;
};

console.log(add(1231, 1321));

// trying the .call() function
// semi-colons are completely optional
function sayHello() {
  return "Hello " + this.name;
}
var obj = { name: "Shashank" };
console.log(sayHello.call(obj));

//trying the .apply() function
let saySomething = function something(msg) {
  return this.name + msg;
};
var person4 = { name: "Light Yagami" };
console.log(saySomething.apply(person4, [" is Kira"]));

//function and a arrow function
function subNumbers(num1, num2) {
  return num1 - num2;
}

//arrow function: you dont need the {}'s
let subract = (num1, num2) => {
  return num1 - num2;
};
console.log(subNumbers(2131231, 2131));
console.log(subract(22, 2));

//trying a promise with no parameters
let shoesInStock = new Promise((resolve, reject) => {
  let inStock = true;
  if (inStock) {
    resolve("Shoes are in stock");
  } else {
    reject("Shoes are out of stock");
  }
});
//result goes in result, and err => err
shoesInStock
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

/**
 * Promise are made to handle asynchronous operations that take too long to handle
 * @param  {...any} elements
 * @returns resolved/rejected state
 */
let newPromisee = function sumOfThreeElements(...elements) {
  return new Promise((resolve, reject) => {
    if (elements.length > 3) {
      reject("Only 3 elements or less");
    } else {
      let sum = 0;
      for (var i = 0; i < elements.length; i++) {
        sum += elements[i];
      }
      resolve("Sum is : " + sum);
    }
  });
};
//Trying out the promise with then() and catch()
//trying the resolve()
newPromisee(100, 200, 300)
  .then((result) => {
    console.log(result);
  }) // if it resolves
  .catch((err) => {
    console.log(err);
  }); // if it doesnt resolve

// trying out the reject()
newPromisee(1231, 22, 233, 44)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// ECMA Script: ES6
a = 1;
console.log(a + "1");
var a;
//Hoisting

//destructuring an array
//assiging array parameters to values of an array
let arr = [1, 2, 3];
let [id1, id2, id3] = arr;
console.log(id1, id2, id3);

//REST Parameters ...args
// modern feature in JS a function to store multiple arguments to a single array
let rest_functio = (...ids) => {
  ids.forEach((id) => console.log(id));
};

rest_functio(100, 111, 2222);

//Spread parameter : allows us to take an array to spread the elements
//so they can be assigned to params
let spread_function = (car1, car2, car3) => {
  console.log(car1, car2, car3);
};
let spread_arr = [100, 200, 300];
spread_function(...spread_arr);
// REST: collects up elements parameters and stores in a single array
// SPREAD: takes the array and spreads them into multiple params
