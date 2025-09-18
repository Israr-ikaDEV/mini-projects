let playerScore = 0;
let computerScore = 0;
let draws = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function play(playerChoice) {
  const computerChoice = getComputerChoice();
  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a Draw! 🤝";
    draws++;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You Win! 🎉";
    playerScore++;
  } else {
    result = "You Lose! 😢";
    computerScore++;
  }

  // Update result message
  document.getElementById("result").innerHTML = `
    <p>You chose: <b>${playerChoice}</b></p>
    <p>Computer chose: <b>${computerChoice}</b></p>
    <h2>${result}</h2>
  `;

  updateScoreboard();
}

function updateScoreboard() {
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
  document.getElementById("draws").textContent = draws;

  const leaderMsg = document.getElementById("leaderMsg");
  if (playerScore > computerScore) {
    leaderMsg.textContent = "You are leading! 🏆";
    leaderMsg.style.color = "#16a34a"; // green
  } else if (computerScore > playerScore) {
    leaderMsg.textContent = "Computer is leading! 🤖";
    leaderMsg.style.color = "#dc2626"; // red
  } else {
    leaderMsg.textContent = "Game is tied ⚖️";
    leaderMsg.style.color = "#2563eb"; // blue
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  draws = 0;
  document.getElementById("result").innerHTML = `<p>Game reset! Make your move!</p>`;
  updateScoreboard();
}
