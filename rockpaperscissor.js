// input argument
let args = process.argv.slice(2);
// variables for localStorage in the future
let win = 0;
let lose = 0;
// colors
const red = '\x1b[31m';
const green = '\x1b[32m';
const reset = '\x1b[0m';
// Uppercase everything / remove edgecases
args = args[0].toUpperCase();
// what you chose
console.log(`You chose: ${args}`);
// create random nummer
function random() {
  return Math.floor(Math.random() * 3);
}
// empty variable
computer = "";
// Translating to computer choice
function computerChose() {
  switch (random()) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSOR";
      break;
    default:
      break;
  }
}
// execute function
computerChose();
// what the computer choose
console.log(`Computer chose: ${computer}`);
// gamerules
function game(args, computer) {
  if (args === computer) {
    // if same
    console.log("Its a draw!");
  } else if (
    // if lose
    (args === "ROCK" && computer === "PAPER") ||
    (args === "PAPER" && computer === "SCISSOR") ||
    (args === "SCISSOR" && computer === "ROCK")
  ) {
    const red = '\x1b[31m';
    console.log("You lost this round")
    // printOutput('/t' + red + 'You lost this round' + reset);
  } else {
    // if win
    console.log("Congratulation, you won this round!");
  }
}
// calling the function
game(args, computer);
