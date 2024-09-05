// input argument
let args = process.argv.slice(2);
// variables for localStorage in the future
let win = 0; //not in use yet
let lose = 0; //not in use yet
// colors not working yet
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
// empty variable used
computer = "";
// Translating to computer choice
function computerChose() {
  switch (random()) {
    case 0:
      computer = "ROCK";
      break;
    case 1:
      computer = "PAPER";
      break;
    case 2:
      computer = "SCISSORS";
      break;
    default:
      computer = 'the computer cheated!'
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
    (args === "PAPER" && computer === "SCISSORS") ||
    (args === "SCISSOR" && computer === "ROCK")
  ) {
    const red = '\x1b[31m';
    console.log(`${red}You lost this round`)
    // printOutput('/t' + red + 'You lost this round' + reset);
  } else {
    // if win
    console.log(`${green}Congratulation, you won this round!`);
  }
}
// calling the function
game(args, computer);
