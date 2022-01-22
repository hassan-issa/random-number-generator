// Collect user number
const userGuess = prompt("Please provide a number");

// Convert string to number
let numberGuess = parseInt(userGuess);

// Generate a random number between 1 and the user's guess

let number = Math.floor(Math.random() * userGuess + 1);

// Output to user 

console.log(`${number} is a random number between 1 and ${userGuess}.`);
