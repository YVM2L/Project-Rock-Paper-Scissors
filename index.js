let playerScore = 0;
let computerScore = 0;
let round = 1; //текущий раунд

//начинаю подключать html по id
const resultMessage = document.getElementById("result");
const winnerMessage = document.getElementById("winner-message");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

//console.log("Round:", round);
//console.log("playerScore DOM", playerScoreDisplay);
//playerScoreDisplay.textContent = "99" //смена текста

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex]; // число от 0 до 1, умножили, округлили и сопоставили
}
//console.log(getComputerChoice()); //проверяем что выбирает бот

function determineWinner(player, computer) {
  if (player === computer) return "Tie";

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "Win";
  }
  return "Lose";
}

//console.log(determineWinner("rock", "scissors")); //проверка

function playRound(playerChoice) {
  if (round > 5) return; //играем не больше 5
  //твою мать гребаная буква С, БУДЬ ВНИМАТЕЛЬНЕЕ СЛЕДИ ЗА РАСКЛАДКОЙ!!!!!!!
  const computerChoice = getComputerChoice(); //ход бота
  const outcome = determineWinner(playerChoice, computerChoice); //победитель

  //обновление резульатта
  if (outcome === "Win") playerScore++;
  else if (outcome === "Lose") computerScore++;

  //отображение раунда, мой выбор, выбор бота, и результат //твою мать гребаная буква С, БУДЬ ВНИМАТЕЛЬНЕЕ СЛЕДИ ЗА РАСКЛАДКОЙ!!!!!!!
  resultMessage.textContent = `Round ${round}: You chose ${playerChoice}, computer chose ${computerChoice}. Result: ${outcome}`;

  //обновляю dom счёт
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;

  //проверка на финал
  if (round === 5) {
    if (playerScore > computerScore) {
      winnerMessage.textContent = "You win!";
    } else if (computerScore > playerScore) {
      winnerMessage.textContent = "You lose!";
    } else {
      winnerMessage.textContent = "It's a Tie!";
    }
  }

  round++; //следующий раунд
}

//подключаем кнопки для срабатывания
document.querySelectorAll(".choice-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const choice = button.getAttribute("data-choice");
    playRound(choice);
  });
});
