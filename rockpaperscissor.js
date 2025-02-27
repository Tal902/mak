// 1. Create an array that contains the variables Rock, Paper, and Scissors.
// 2. Set up a variable that generates a random number 0-2 for the player and then
// do the same for the computer's selection. The number represents the index
// values in the array of the 3 items.
// 3. Create a variable to hold a response message to the user. This can show the
// random results for the player and then also the result for the computer of the
// matching item from the array.
// 4. Create a condition to handle the player and computer selections. If both are
// the same, this results in a tie.
// 5. Use conditions to apply the game logic and return the correct results.
// There are several ways to do this with the condition statements, but you
// could check  which player's index value is bigger and assign the victory
// accordingly, with the exception of Rock beating Scissors.
// 6. Add a new output message that shows the player selection versus the
// computer selection and the result of the game.
//let player = "rock";
//let computer = "scissor";
let arr = ["rock", "paper", "scissor"];
let randomP = Math.random() * 2;
let randomC = Math.random() * 2;
console.log(randomP);
console.log(randomC);
let player = prompt("what do you want rock,paper or scissor?(player)");
let computer = prompt("what do you want rock,paper or scissor?(computer)");
if (
  (player === "rock" && computer === "scissor") ||
  (player === "scissor" && computer === "rock")
) {
  if (player === "rock") {
    console.log("you win");
  } else if (computer === "rock") {
    console.log("i win! sorry");
  }
  //console.log("you win! bravo");
} else if (
  (player === "paper" && computer === "rock") ||
  (player === "rock" && computer === "paper")
) {
  if (player === "paper") {
    console.log("you win! ");
  } else if (computer === "paper") {
    console.log("i win! sorry");
  }
}
//kl
else if (
  (player === "paper" && computer === "scissor") ||
  (player === "scissor" && computer === "paper")
) {
  if (player === "paper") {
    console.log("i win! sorry");
  } else {
    console.log(" you win!bravo");
  }
}
//kk
else if (computer === player) {
  console.log("tie!what a great game");
  //kk
} else {
  console.log(
    "you didn't enter rock,paper or scissor!please enter them!good bye"
  );
}
