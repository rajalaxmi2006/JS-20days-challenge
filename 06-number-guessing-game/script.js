const guessInput = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const restartBtn = document.getElementById("restartBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");
const previousGuessesText = document.getElementById("previousGuesses");
// Generate Random Number
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let previousGuesses = [];
// Check Guess
function checkGuess() {
  const userGuess = Number(guessInput.value);
  if (userGuess < 1 || userGuess > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  attempts++;
  previousGuesses.push(userGuess);
  attemptsText.textContent = `Attempts: ${attempts}`;
  previousGuessesText.textContent = `Previous Guesses: ${previousGuesses.join(", ")}`;
  if (userGuess === randomNumber) {
    let scoreMessage = "";
    if (attempts <= 3) {
      scoreMessage = "🏆 Excellent!";
    } else if (attempts <= 7) {
      scoreMessage = "👏 Good Job!";
    } else {
      scoreMessage = "👍 Keep Practicing!";
    }

    message.textContent = `🎉 Correct! The number was ${randomNumber}. ${scoreMessage}`;
  } else if (userGuess > randomNumber) {
    message.textContent = "📈 Too High! Try Again.";
  } else {
    message.textContent = "📉 Too Low! Try Again.";
  }
  guessInput.value = "";
}
// Restart Game
function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  previousGuesses = [];
  message.textContent = "Start guessing...";
  attemptsText.textContent = "Attempts: 0";
  previousGuessesText.textContent = "Previous Guesses: None";
  guessInput.value = "";
}
// Event Listeners
checkBtn.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", restartGame);