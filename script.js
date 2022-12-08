// Selecting elements
const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");
const score0EL = document.querySelector("#score--0"); //Score0EL element
const score1El = document.getElementById("score--1");
const current0EL = document.getElementById("current--0");
const current1EL = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

///////////////////////////////////////////starting Condition/////////////////////////////

const init = function () {
  const scores = [0, 0];
  let currentScore = 0;
  let activePlayer = 0;
  let playing = true;

  score0EL.textContent = 0;
  score1El.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;

  diceEl.classList.add("hidden");
  player0EL.classList.remove("player--winner");
  player1EL.classList.remove("player--winner");
  player0EL.classList.add("player--active");
  player1EL.classList.remove("player--active");
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle("player--active");
  player1EL.classList.toggle("player--active");
};

//////////////////////////////////////////////Rolling dice Functionality ///////////////////////////

btnRoll.addEventListener("click", function () {
  // 1. Generating a random dice roll
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);

    // 2. display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    // 3. check for rolle 1: if turn, switch to  next player
    if (dice != 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      //  current0EL.textContent = currentScore;
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    console.log("hold button");
    // 1. add current score to the score of the active player
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score  os >=100

    if (scores[activePlayer] >= 20) {
      //finish game
      playing = false;

      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
    } else {
      // 3  switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", function () {});
