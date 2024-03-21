// Function to generate a random number between 1 and 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Function to check the user's guess
function checkGuess() {
    const guess = parseInt(document.getElementById("guess").value);
    const randomNumber = generateRandomNumber();
    const message = document.getElementById("message");

    if (guess === randomNumber) {
        message.textContent = "Congratulations! You guessed the number!";
    } else if (guess > randomNumber) {
        message.textContent = "Too high! Try again with a lower number.";
    } else {
        message.textContent = "Too low! Try again with a higher number.";
    }
}
