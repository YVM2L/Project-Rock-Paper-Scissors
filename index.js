function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// console.log(getComputerChoice()); //

function getHumanChoice() {
  const userInput = prompt("Choose: rock, paper or scissors");
  return userInput.toLowerCase();
}

// console.log(getHumanChoice()); //

function playGame() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  console.log("You chose:", humanChoice);
  console.log("Computer chose:", computerChoice);
}

