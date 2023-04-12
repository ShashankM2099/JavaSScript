"use strict"; // GuessMyNumber
//Use document functions and need to know the html class Names
//Using textContent to get/set the content of an element

//Trying to randomize
const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; //score is 20
let highscore = 0; // highscore is 0

//simplified way of typing displayMessage : if document tags are repeated
//store in a function to reuse it.
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

//Event Listener on the Check Button
//Pass the type of event
//For the submit button
document.querySelector(".check").addEventListener("click", function () {
  // event listener
  const guess = Number(document.querySelector(".guess").value); // storing guess in a const variable
  // When user inputs no number = Guess variable
  if (!guess) {
    displayMessage("⛔ No Number");
    // Guess = random Math number
  } else if (guess === secretNumber) {
    displayMessage("🎉Correct Number");
    //need to show the number when user guesses the number right
    document.querySelector(".number").textContent = secretNumber;
    //implementing highscore
    if (score > highscore) {
      document.querySelector(".highscore").textContent = score;
    }
    // Manipulating CSS Style
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // Guess = Wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High..." : "📉 Too Low...");
      // if the score is too high decrease by 1
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You Lose!!!");
      document.querySelector(".score").textContent = 0;
    }
  }

  // Guess = too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📉 Too Low...";
  //       // if the score is too low decrease by 1
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "💥 You Lose!!!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

//For the Again button: need the class names mostly
document.querySelector(".btn").addEventListener("click", function () {
  //when clicked again setting the background to normal
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = null;

  //Setting the score to 20 when clicked and the message to start guessing
  document.querySelector(".score").textContent = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  //Setting it to ?
  document.querySelector(".number").textContent = "?";
});

// Code we can use later---
// if (
//     guess >= 1 &&
//     guess <= 20
//     //.guess = input type className
//   ) {
//     document.querySelector(".message").textContent = "Keep Guessing...";
//     console.log(guess);
//   }
//   if (guess == 20) {
//     // need to change color based on body background
//     document.querySelector(".message").textContent = "🎉 Correct Number";
//     // if theres no number just print no number
//   } else if (!guess) {
//     document.querySelector(".message").textContent = "⛔ No Number";
//   } else {
//     guess = null;
//     document.querySelector(".message").textContent = "Keep Guessing...";
//   }
