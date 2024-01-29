// JavaScript for the Craps game

/**
 * This is a function to play the Craps game. It will Generate two random numbers between 1 and 6, display the rolled numbers, calculate the sum, and determine the outcome.
 */
function playCraps() {
    // Display loading message
    document.getElementById("loadingMessage").innerHTML = "Rolling the dice...";

    // Generate random numbers between 1 and 6
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;

    // Display the rolled numbers
    document.getElementById("loadingMessage").innerHTML = `You rolled: ${die1} and ${die2}`;

    // Calculation for the sum of the dice
    let sum = die1 + die2;

    // This would determine the outcome based on the rules of Craps
    if (sum === 7 || sum === 11) {
        document.getElementById("resultMessage").innerHTML = "CRAPS - You lose!";
    } else if (die1 === die2 && die1 % 2 === 0) {
        document.getElementById("resultMessage").innerHTML = "You won!";
    } else {
        document.getElementById("resultMessage").innerHTML = "You pushed!";
    }
}
