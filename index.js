function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// console.log(getComputerChoice()); 

function getHumanChoice() {
  const userInput = prompt("Choose: rock, paper or scissors");
  return userInput.toLowerCase();
}

// console.log(getHumanChoice()); 

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
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    if (result === "You win!") {
      playerScore++;
    } else if (result === "You lose!") {
      computerScore++;
    }

    document.getElementById(
      "current-score"
    ).textContent = `Final Score - Player: ${playerScore}, Computer : ${computerScore}`;

    console.log("You chose:", humanChoice);
    console.log("Computer chose:", computerChoice);
    console.log(`Round ${i}: ${result}`);
    // console.log(result); 
  }

  console.log(
    `Final Score - Player: ${playerScore}, Computer : ${computerScore}`
  );

  if (playerScore > computerScore) {
    console.log("You won the game!");
  } else if (playerScore < computerScore) {
    console.log("Computer won the game!");
  } else {
    console.log("It's an overall tie!");
  }
}
