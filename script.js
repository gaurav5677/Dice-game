// Selecting elements
const score0L = document.querySelector("#score--0"); //Score0L element
const score1 = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

///////////////////////////////////////////starting Condition/////////////////////////////
score0L.textContent = 0;
score1.textContent = 0;
diceEl.classList.add("hidden");

//////////////////////////////////////////////Rolling dice Functionality ///////////////////////////

btnRoll.addEventListener("click", function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6 + 1);

  // 2. display dice
  diceEl.classList.remove("hidden");
  // 3. check for rolle 1: if turn, switch to  next player
});
