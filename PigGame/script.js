"use strict";
//Making a random pig game to add score/hold score and segue b/w players

//Starting condition to set numbers to 0
const score0Element = document.querySelector("#score--0"); // player 1 score
const current0Element = document.getElementById("current--0"); // curent score for player 1
const player0Element = document.querySelector(".player--0"); // player 1
//same as querySelector w/out the #
const score1Element = document.getElementById("score--1"); // player 2 score
const current1Element = document.getElementById("current--1"); // current score for player 2
const player1Element = document.querySelector(".player--1"); // player 2
//selecting the buttons
const btnNew = document.querySelector(".btn--new"); // for new game
const btnRoll = document.querySelector(".btn--roll"); // to roll a dice
const btnHold = document.querySelector(".btn--hold"); // to hold the current score for the current player

//adding classList to hide the dice
const displayDice = document.querySelector(".dice"); // diceElement

//switching players function
const switchPlayers = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle("player--active");
  player1Element.classList.toggle("player--active");
};

//define some variables
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0]; // for both players 0,1
  //current Score
  currentScore = 0;
  activePlayer = 0;

  //Still playing?
  playing = true;
  //add reset changes
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  //adding the hidden class to hide the dice
  displayDice.classList.add("hidden");
  current0Element.textContent = 0;
  current1Element.textContent = 0;

  //2.Display dice
  displayDice.classList.add("hidden");

  //remvoe winner screen
  player0Element.classList.remove("player--winner");
  player1Element.classList.remove("player--winner");
  player0Element.classList.add("player--active");
  player1Element.classList.remove("player--active");
};

init();
//Goo Dice Rolllll!! Dice Roll Button
btnRoll.addEventListener("click", function () {
  if (playing) {
    // event listener
    //1. Generating a dice roll
    const diceRoll = Math.trunc(Math.random() * 6 + 1); // roll the dice
    //2.Display dice
    displayDice.classList.remove("hidden");
    //to insert an image based on diceROll
    displayDice.src = `dice-${diceRoll}.png`; // based on roll changes the dice pic

    //Check if dice rolled a 1
    if (diceRoll !== 1) {
      currentScore += diceRoll; // currentScore= + currentScore + dice
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switching player function callback
      switchPlayers();
    }
  }
});

// Hold the current player score when clicked button
btnHold.addEventListener("click", function () {
  if (playing) {
    // Add scores to active players
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //Check if either player scores >=100
    if (scores[activePlayer] >= 100) {
      alert(`Player ${activePlayer} wins the game`);
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // Switch players
      switchPlayers();
    }
  }
});

//passing the init function
//start from scratch by init function
btnNew.addEventListener("click", init);
