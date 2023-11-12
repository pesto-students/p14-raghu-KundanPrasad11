function playGuessingGame(numToGuess, totalGuesses = 10) {
  let numberOfGuesses = 0;
  while (numberOfGuesses < totalGuesses) {
      let userGuess = prompt("Enter a number between 1 and 100.");
      numberOfGuesses++;
      // User pressed Cancel
      if (userGuess === null) {
        console.log("Better luck next time")
        return 0; 
      }
      userGuess = parseInt(userGuess);
      // Decrement the guess count if the input is not a valid number
      if (isNaN(userGuess)) {
          alert("Please enter a number.");
          numberOfGuesses--; 
          continue;
      }
      // Correct guess, return the number of guesses
      if (userGuess === numToGuess) {
          console.log("Number of guesses", numberOfGuesses)
          return numberOfGuesses;
      } else if (userGuess < numToGuess) {
          alert(`${userGuess} is too small. Guess a larger number.`);
      } else {
          alert(`${userGuess} is too large. Guess a smaller number.`);
      }
  }
  // If the user exceeds the total number of guesses
  console.log("Better luck next time")
  return 0; 
}
