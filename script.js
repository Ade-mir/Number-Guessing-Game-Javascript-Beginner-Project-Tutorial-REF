// Declare variables
let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Get HTML elements
const userGuess = document.getElementById("userGuess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsDiv = document.getElementById("attempts");

// Event Listener for button click
submit.addEventListener("click", checkGuess);

// Function to check the guess
function checkGuess() {
  const userValue = Number(userGuess.value);
  attempts++;

  // Using Conditionals
  if (userValue === randomNum) {
    hint.textContent = "Congratulations, you guessed it!";
  } else if (userValue < randomNum) {
    hint.textContent = "Too low! Try again.";
  } else {
    hint.textContent = "Too high! Try again.";
  }

  // Display the number of attempts
  attemptsDiv.textContent = "Attempts: " + attempts;
}
