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

function playRound(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "You win!";
  }

  return "You lose!";
}


function playGame() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  const result = playRound(humanChoice, computerChoice);

  console.log("You chose:", humanChoice);
  console.log("Computer chose:", computerChoice);
  console.log(result);
}

