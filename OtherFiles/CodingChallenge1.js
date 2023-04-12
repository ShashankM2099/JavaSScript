/*
Given an array of temperatures the thermostat displays a string with the temperatures
Create a function named printForecase() which takes in an array parameter and logs a string line 
with the temperatures with the following days.

TEST DATA: [17,23,31]

*/

function printForecast(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    console.log(arr[i] + "*C in " + i + " days");
  }
}

let arrData = [17, 23, 31];
printForecast(arrData);

// Using an arrow Function

const printForeCast = (arr) => {
  let str = "";
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    str += `${arr[i]}C in ${i} days `;
  }
  console.log(str);
};

var arrData2 = [12, 5, -5, 0, 4];
printForeCast(arrData2);
