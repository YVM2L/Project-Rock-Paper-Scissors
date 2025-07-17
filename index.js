let playerScore = 0;
let computerScore = 0;
let round = 1; //текущий раунд

//начинаю подключать html по id
const resultMessage = document.getElementById("result");
const winnerMessage = document.getElementById("winner-message");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

console.log("Round:", round);
console.log("playerScore DOM", playerScoreDisplay);
playerScoreDisplay.textContent = "99" //смена текста