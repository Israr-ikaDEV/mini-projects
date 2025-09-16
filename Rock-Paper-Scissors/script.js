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
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You Win! 🎉";
  } else {
    result = "You Lose! 😢";
  }

  document.getElementById("result").innerHTML = `
    <p>You chose: <b>${playerChoice}</b></p>
    <p>Computer chose: <b>${computerChoice}</b></p>
    <h2>${result}</h2>
  `;
}
